// ==========================================
// 🐉 LELARAN BAHARU: BOSS BATTLE (RTDB + STREAK SYSTEM)
// ==========================================

// --- PEMBOLEHUBAH SISTEM & FIREBASE ---
let currentBossData = null; 
let bossRtdbRef = firebase.database().ref('active_boss/current_boss'); // Guna RTDB!
let liveBossListener = null;

// --- PEMBOLEHUBAH PERLAWANAN ---
let bossPlayerHP = 100;
let currentBossStreak = 0; // DIKEMAS KINI: Elak konflik dengan 3v3
let hasUsedTimeFreeze = false;
let passiveAttackInterval;

// --- PEMBOLEHUBAH BUFF (STREAK) ---
let isX2Damage = false;
let isX3Damage = false;
let isTimeFrozen = false;
let isInvisible = false;
let lifestealActive = false;

// Timers
let x2Timer, x3Timer, freezeTimer, invisibleTimer;

// --- SISTEM AUDIO ---
const audioBGM = new Audio('assets/audio/boss-bgm.mp3'); audioBGM.loop = true;
const audioSlash = new Audio('assets/audio/slash.mp3');
const audioOof = new Audio('assets/audio/hit.mp3');
const audioWin = new Audio('assets/audio/win.mp3');
const audioBuff = new Audio('assets/audio/powerup.mp3'); 

// ==========================================
// 📡 1. CCTV BOSS (RTDB LISTENER)
// ==========================================
function initBossRadar() {
    bossRtdbRef.on('value', (snapshot) => {
        if (snapshot.exists()) {
            currentBossData = snapshot.val();
            updateBossRadarUI();
            
            // Periksa jika Boss disahkan mati (Final Blow)
            if (currentBossData.currentHp <= 0 && currentBossData.status === "ACTIVE") {
                handleBossDefeated(currentBossData.final_blow_player);
            }
        } else {
            // Tiada Boss bulan ini (Jun/Disember)
            currentBossData = null;
            document.getElementById('boss-challenge-btn').classList.add('hidden');
        }
    });
	listenToLiveAttackers();
}
document.addEventListener('DOMContentLoaded', initBossRadar);

function updateBossRadarUI() {
    if (!currentBossData) return;

    // Kira peratusan dan teks HP siap-siap
    let hpPercent = Math.max(0, (currentBossData.currentHp / currentBossData.maxHp) * 100);
    let hpString = `HP: ${Math.max(0, currentBossData.currentHp)} / ${currentBossData.maxHp}`;

    // ------------------------------------------
    // 1. KEMAS KINI UI DI BUTANG RADAR (LUAR)
    // ------------------------------------------
    const bossBtn = document.getElementById('boss-challenge-btn');
    const radarBar = document.getElementById('radar-boss-hp-bar');
    const radarText = document.getElementById('radar-boss-hp-text');

    const isWeekend = true; // BYPASS SEMENTARA

    if (currentBossData.status === "ACTIVE" && currentBossData.currentHp > 0 && isWeekend) {
        if (bossBtn) bossBtn.classList.remove('hidden');
        if (radarBar) radarBar.style.width = hpPercent + "%";
        if (radarText) radarText.innerText = hpString;
    } else {
        if (bossBtn) bossBtn.classList.add('hidden');
    }

    // ------------------------------------------
    // 2. KEMAS KINI UI DI DALAM ARENA (DALAM)
    // ------------------------------------------
    const arenaBar = document.getElementById('arena-boss-hp-bar');
    const arenaText = document.getElementById('arena-boss-hp-text');

    if (arenaBar) arenaBar.style.width = hpPercent + "%";
    if (arenaText) arenaText.innerText = `${Math.max(0, currentBossData.currentHp)} / ${currentBossData.maxHp}`;
}

// ==========================================
// 🛡️ 2. PINTU MASUK & POTONGAN KUOTA (ANTI-CHEAT)
// ==========================================
async function attemptJoinBoss() {
    if (!currentBossData || currentBossData.currentHp <= 0) {
        return Swal.fire('Tamat', 'Boss telah ditewaskan atau arena ditutup!', 'info');
    }

    const todayDateStr = new Date().toISOString().split('T')[0]; 
    
    if ((localPlayerData.level || 1) < 20) {
        return Swal.fire('Akses Ditolak', 'Anda perlu mencapai Level 20 untuk menyertai Boss Battle!', 'error');
    }

    // if (localPlayerData.last_boss_attempt === todayDateStr) {
       // return Swal.fire('Kuota Habis', 'Anda telah menggunakan tiket perlawanan hari ini. Sila cuba esok!', 'warning');
    // }

    // TERUS POTONG KUOTA
    localPlayerData.last_boss_attempt = todayDateStr;
    localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));
    
    await db.collection("players").where("name", "==", localPlayerData.name).get()
        .then(snapshot => {
            if(!snapshot.empty) db.collection("players").doc(snapshot.docs[0].id).update({ last_boss_attempt: todayDateStr });
        });

    startBossFight();
}

function startBossFight() {
document.getElementById('boss-arena').classList.remove('hidden');
    // Reset Data Pemain & Buff
    bossPlayerHP = 100;
    currentBossStreak = 0; 
    hasUsedTimeFreeze = false;
    clearAllBuffs();
    updatePlayerHPUI();

    // 🛡️ Pasang Gambar Avatar Boss
    const bossAvatarElement = document.getElementById('battle-boss-avatar');
    if (bossAvatarElement) {
        bossAvatarElement.src = `assets/boss/${currentBossData.avatar}`; 
    }

    // 🛡️ Pasang Nama Boss
    const bossNameElement = document.getElementById('boss-name-ui'); 
    if (bossNameElement) {
        bossNameElement.innerText = currentBossData.name;
    }
    
    // 🔥 PAKSA KEMAS KINI HP ARENA SERTA-MERTA SEBAIK MASUK
    updateBossRadarUI();
    
    // Mainkan BGM dengan perlindungan ralat browser
    audioBGM.currentTime = 0; 
    audioBGM.play().catch(e => console.warn("Autoplay muzik disekat oleh pelayar web:", e));
    
    startPassiveAttack();
    generateBossQuestion();
}

function startPassiveAttack() {
    clearInterval(passiveAttackInterval);
    passiveAttackInterval = setInterval(() => {
        if (isTimeFrozen || isInvisible) return; 
        
        bossPlayerHP -= 2;
        updatePlayerHPUI();
        
        if (typeof showDamageIndicator === 'function') {
            showDamageIndicator("-2", "text-red-500", "boss-avatar"); 
        }
        
        // Elakkan game crash jika audio hit.mp3 gagal dimuatkan
        audioOof.play().catch(e => console.warn("Bunyi hit disekat/gagal:", e));

        checkPlayerAlive();
    }, 10000); 
}


function generateBossQuestion() {
    const zone = document.getElementById('boss-answer-zone');
    const questionText = document.getElementById('boss-question-text');
    
    // 1. Dapatkan kategori mata pelajaran Boss dari Firebase (default ke "BI" jika kosong)
    let bossSubject = currentBossData.category || "BI"; 
    
    let sourceData = null;
    let difficultyMap = null;

    // 2. Hubungkan Subjek Boss dengan File Data dan Peta Kesulitan (Difficulty Map)
    switch(bossSubject.toUpperCase()) {
        case "BI": 
        case "ENGLISH":
            sourceData = typeof gameData !== 'undefined' ? gameData : null; 
            difficultyMap = englishCategoryDifficulty; 
            break;
        case "MT": 
        case "MATH":
            sourceData = typeof mathData !== 'undefined' ? mathData : null; 
            difficultyMap = mathCategoryDifficulty; 
            break;
        case "SN": 
        case "SCIENCE":
            sourceData = typeof scienceData !== 'undefined' ? scienceData : null; 
            difficultyMap = scienceCategoryDifficulty; 
            break;
        case "BM": 
            sourceData = typeof malayLanguageData !== 'undefined' ? malayLanguageData : null; 
            difficultyMap = bmCategoryDifficulty; 
            break;
        case "MZ": 
        case "MUZIK":
            sourceData = typeof pendidikanMuzikData !== 'undefined' ? pendidikanMuzikData : null; 
            difficultyMap = muzikCategoryDifficulty; 
            break;
        case "PJK": 
        case "KESIHATAN":
            sourceData = typeof pjkData !== 'undefined' ? pjkData : null; 
            difficultyMap = kesihatanCategoryDifficulty; 
            break;
        case "PM": 
        case "MORAL":
            sourceData = typeof moralData !== 'undefined' ? moralData : null; 
            difficultyMap = moralCategoryDifficulty; 
            break;
        case "PSV": 
            sourceData = typeof psvData !== 'undefined' ? psvData : null; 
            difficultyMap = psvCategoryDifficulty; 
            break;
        case "RBT": 
            sourceData = typeof rbtData !== 'undefined' ? rbtData : null; 
            difficultyMap = rbtCategoryDifficulty; 
            break;
        case "SEJ": 
        case "SEJARAH":
            sourceData = typeof sejarahData !== 'undefined' ? sejarahData : null; 
            difficultyMap = sejarahCategoryDifficulty; 
            break;
        default:
            sourceData = typeof gameData !== 'undefined' ? gameData : null;
            difficultyMap = englishCategoryDifficulty;
    }

    // 🛡️ Pengecekan Keamanan: Pastikan file data untuk subjek tersebut sudah dimuat
    if (!sourceData || !difficultyMap) {
        console.error(`Ralat: Data untuk subjek ${bossSubject} tidak dijumpai! Pastikan fail JS soalan dimuat di index.html.`);
        if (questionText) questionText.innerText = "RALAT: Bank soalan tidak dijumpai.";
        return;
    }

    // 3. Pilih tingkat kesulitan secara acak (Easy, Medium, atau Hard)
    const difficulties = ['easy', 'medium', 'hard'];
    const selectedDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];

    // 4. Pilih sub-kategori (subtopik) berdasarkan tingkat kesulitan
    const availableSubtopics = difficultyMap[selectedDifficulty];
    const selectedSubtopic = availableSubtopics[Math.floor(Math.random() * availableSubtopics.length)];

    // 5. Ambil daftar soal dari sub-kategori tersebut
    let questions = sourceData[selectedSubtopic];

    // 🛡️ Pengecekan Keamanan Tambahan
    if (!questions || questions.length === 0) {
        console.warn(`Amaran: Tiada soalan dalam kategori '${selectedSubtopic}'. Cuba fallback...`);
        const fallbackKeys = Object.keys(sourceData);
        if (fallbackKeys.length > 0) {
            questions = sourceData[fallbackKeys[0]];
        } else {
            if (questionText) questionText.innerText = "RALAT: Tiada soalan tersedia.";
            return;
        }
    }

    // 6. Pilih 1 soal secara acak dari array tersebut
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    
    // Tentukan Damage untuk Boss berdasarkan kesulitan soal
    let baseDamage = selectedDifficulty === "hard" ? 10 : (selectedDifficulty === "easy" ? 5 : 7);
    
    // 7. Paparkan Soalan ke UI
    if (questionText) {
        // Paparkan soalan (Menyokong format .q atau .soalan)
        questionText.innerText = randomQ.q || randomQ.soalan || "Soalan tiada teks?";
    }
    
    // 8. CIPTA KOTAK JAWAPAN (INPUT TEXT) DI DALAM BATTLE ZONE
    if (zone) {
        zone.innerHTML = ''; // Bersihkan zon lama
        zone.className = "flex flex-col gap-3 w-full items-center"; // Set susunan layout

        // Cipta elemen Input
        const inputField = document.createElement('input');
        inputField.type = "text";
        inputField.id = "boss-answer-input";
        inputField.placeholder = "Taip jawapan anda di sini...";
        inputField.className = "w-full max-w-md px-4 py-3 border-2 border-blue-400 rounded-xl text-center text-black font-bold text-lg focus:outline-none focus:border-blue-600 shadow-md";
        
        // Cipta elemen Buthan Hantar (Submit)
        const submitBtn = document.createElement('button');
        submitBtn.className = "w-full max-w-md bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transform active:scale-95 transition-all text-lg";
        submitBtn.innerText = "SERANG BOSS! ⚔️";

        // Ambil jawapan yang betul (Menyokong format .a atau .jawapan)
        const correctAns = randomQ.a || randomQ.jawapan;

        // Fungsi hantar jawapan apabila klik butang
        submitBtn.onclick = () => {
            const userAns = inputField.value.trim();
            if (userAns === "") return Swal.fire('Kosong', 'Sila taip jawapan sebelum menyerang!', 'warning');
            
            // Panggil fungsi semakan jawapan bawaan boss.js
            checkBossAnswer(userAns, correctAns, baseDamage);
        };

        // Fungsi hantar jawapan apabila tekan butang "Enter" pada papan kekunci
        inputField.onkeyup = (e) => {
            if (e.key === 'Enter') {
                submitBtn.click();
            }
        };

        // Masukkan kotak input dan butang ke dalam UI
        zone.appendChild(inputField);
        zone.appendChild(submitBtn);

        // Auto-focus pada kotak teks supaya murid boleh terus menaip tanpa perlu klik kotak
        setTimeout(() => inputField.focus(), 100);
    }
}


// ==========================================
// ⚔️ 4. LOGIK TEMBAKAN & STREAK (BOOSTER)
// ==========================================
async function checkBossAnswer(chosen, correct, baseDamage) {
    if (String(chosen).toLowerCase() === String(correct).toLowerCase()) {
        // ✅ JAWAPAN BETUL
        if (typeof audioSlash !== 'undefined') audioSlash.currentTime = 0; 
        if (typeof audioSlash !== 'undefined') audioSlash.play().catch(e => console.warn("Audio ditiadakan:", e));
        
        currentBossStreak++; 
        console.log(`🔥 JAWAPAN BETUL! Streak Semasa: ${currentBossStreak}`);
        
        checkStreakBuffs(); 

        if (lifestealActive && bossPlayerHP < 100) {
            bossPlayerHP = Math.min(100, bossPlayerHP + 1);
            updatePlayerHPUI();
            console.log("💚 Lifesteal diaktifkan! HP Pemain bertambah +1");
        }

        let finalDamage = baseDamage;
        if (isX3Damage) finalDamage *= 3;
        else if (isX2Damage) finalDamage *= 2;
        
        console.log(`⚔️ Kerosakan (Damage): Asas ${baseDamage} -> Akhir ${finalDamage}`);
        showDamageIndicator(finalDamage, "text-red-500", "battle-boss-avatar");

        dealDamageToBossRTDB(finalDamage);
        
        // Pastikan fungsi ini wujud di tempat lain, jika tiada ia akan error
        if (typeof syncRewardsToMainProfile === 'function') {
            syncRewardsToMainProfile(finalDamage);
        }

        setTimeout(generateBossQuestion, 500);

    } else {
        // ❌ JAWAPAN SALAH
        if (typeof audioOof !== 'undefined') audioOof.currentTime = 0; 
        if (typeof audioOof !== 'undefined') audioOof.play().catch(e => console.warn("Audio ditiadakan:", e));
        
        console.log("❌ JAWAPAN SALAH! Streak terbatal (kembali ke 0).");
        currentBossStreak = 0; 
        
        if (!isInvisible) {
            bossPlayerHP -= 5;
            showDamageIndicator("-5 HP", "text-red-500", "player-avatar");
        } else {
            console.log("🛡️ Pemain KEBAL! Tiada kerosakan diterima.");
            showDamageIndicator("KEBAL!", "text-blue-400", "player-avatar");
        }
        
        updatePlayerHPUI();
        if(checkPlayerAlive()) setTimeout(generateBossQuestion, 500);
    }
}

// --- LOGIK PENGURUSAN BUFF ---
function checkStreakBuffs() {
    console.log(`🔍 Menyemak Buff untuk Streak ke-${currentBossStreak}...`);
    
    if (currentBossStreak === 5) { 
        console.log("🚀 MENGAKTIFKAN BUFF: X2 DAMAGE + LIFESTEAL");
        activateBuff("X2 DAMAGE + LIFESTEAL", "text-yellow-400");
        isX2Damage = true; lifestealActive = true;
        clearTimeout(x2Timer);
        x2Timer = setTimeout(() => { isX2Damage = false; lifestealActive = false; console.log("⏳ Buff X2 Tamat!"); }, 15000);
    }
    else if (currentBossStreak === 8 && !hasUsedTimeFreeze) { 
        console.log("🚀 MENGAKTIFKAN BUFF: TIME FREEZE (10s)");
        activateBuff("TIME FREEZE (10s)", "text-blue-300");
        hasUsedTimeFreeze = true; isTimeFrozen = true;
        clearTimeout(freezeTimer);
        freezeTimer = setTimeout(() => { isTimeFrozen = false; console.log("⏳ Time Freeze Tamat!"); }, 10000);
    }
    else if (currentBossStreak === 10) { 
        console.log("🚀 MENGAKTIFKAN BUFF: X3 DAMAGE!");
        activateBuff("X3 DAMAGE!", "text-red-400");
        isX3Damage = true; isX2Damage = false; 
        clearTimeout(x3Timer);
        x3Timer = setTimeout(() => { isX3Damage = false; console.log("⏳ Buff X3 Tamat!"); }, 20000);
    }
    else if (currentBossStreak === 15) { 
        console.log("🚀 MENGAKTIFKAN BUFF: INVISIBLE (30s)");
        activateBuff("INVISIBLE (KEBAL 30s)!", "text-purple-400");
        isInvisible = true;
        clearTimeout(invisibleTimer);
        invisibleTimer = setTimeout(() => { isInvisible = false; console.log("⏳ Kebal Tamat!"); }, 30000);
    }
}

function activateBuff(name, colorClass) {
    if (typeof audioBuff !== 'undefined') {
        audioBuff.currentTime = 0; 
        audioBuff.play().catch(e => console.warn("Audio Buff disekat:", e));
    }
    
    const streakUi = document.getElementById('streak-indicator'); 
    if (streakUi) {
        streakUi.innerHTML = `<span class="font-black text-2xl drop-shadow-md ${colorClass} animate-bounce block text-center">${name}</span>`;
        setTimeout(() => { streakUi.innerHTML = ""; }, 3000);
    } else {
        console.error("❌ RALAT HTML: 'streak-indicator' tidak dijumpai di skrin!");
    }
}

function clearAllBuffs() {
    isX2Damage = false; isX3Damage = false; isTimeFrozen = false; isInvisible = false; lifestealActive = false;
    if (typeof x2Timer !== 'undefined') clearTimeout(x2Timer); 
    if (typeof x3Timer !== 'undefined') clearTimeout(x3Timer); 
    if (typeof freezeTimer !== 'undefined') clearTimeout(freezeTimer); 
    if (typeof invisibleTimer !== 'undefined') clearTimeout(invisibleTimer);
    
    const streakUi = document.getElementById('streak-indicator'); 
    if (streakUi) streakUi.innerHTML = "";
    
    console.log("🧹 Semua Buff telah dibersihkan.");
}

// ==========================================
// 📡 5. PENGHANTARAN DATA (RTDB & FIRESTORE)
// ==========================================
function dealDamageToBossRTDB(amt) {
    console.log("💥 Mula menyerang Boss! Kerosakan:", amt);
    
    // 🕵️‍♂️ Pengintip 1: Semak adakah data pemain wujud?
    if (typeof localPlayerData === 'undefined' || !localPlayerData || !localPlayerData.name) {
        console.error("❌ ERROR: localPlayerData.name tidak dijumpai! Serangan dibatalkan.");
        return;
    }
    
    const uid = localPlayerData.name; 
    console.log("👤 Nama Penyerang (UID):", uid);
    
    let updates = {};
    updates['currentHp'] = firebase.database.ServerValue.increment(-amt);
    updates[`attackers/${uid}/name`] = localPlayerData.name;
    updates[`attackers/${uid}/damage`] = firebase.database.ServerValue.increment(amt);

    console.log("📤 Menghantar kemas kini ke Firebase RTDB...");
    bossRtdbRef.update(updates).then(() => {
        console.log("✅ Firebase RTDB Berjaya Dikemas kini!");
        bossRtdbRef.once('value').then(snap => {
            if (snap.val().currentHp <= 0 && snap.val().status === "ACTIVE") {
                bossRtdbRef.update({ status: "DEFEATED", final_blow_player: localPlayerData.name });
            }
        });
    }).catch((error) => {
        console.error("❌ Firebase MENOLAK kemas kini:", error);
    });
}

// ==========================================
// 🏆 FUNGSI LIVE LEADERBOARD (TOP 10 ATTACKERS)
// ==========================================
function listenToLiveAttackers() {
    // Pastikan rujukan Firebase wujud
    if (!bossRtdbRef) return;

    bossRtdbRef.child('attackers').on('value', (snapshot) => {
        const data = snapshot.val();
        const listContainer = document.getElementById('live-ranking-list');
        
        if (!listContainer) return; // Jika HTML tak wujud, abaikan
        
        // Bersihkan senarai lama dan buang teks "Memuatkan radar..."
        listContainer.innerHTML = ''; 
        
        if (!data) {
            listContainer.innerHTML = '<div class="text-center text-sm text-gray-500 mt-10">Belum ada serangan. Jadilah yang pertama!</div>';
            return;
        }
        
        // Tukar objek data dari Firebase kepada Array supaya boleh disusun
        const attackersArray = [];
        for (let uid in data) {
            attackersArray.push(data[uid]);
        }
        
        // Susun Array dari damage paling tinggi ke paling rendah (Descending)
        attackersArray.sort((a, b) => b.damage - a.damage);
        
        // Cipta dan masukkan elemen Top 10 ke dalam senarai HTML
        attackersArray.slice(0, 10).forEach((player, index) => {
            // Tentukan pingat jika Top 3
            let medal = '';
            if (index === 0) medal = '🥇';
            else if (index === 1) medal = '🥈';
            else if (index === 2) medal = '🥉';
            else medal = `<span class="text-gray-500 text-xs mr-2">#${index + 1}</span>`;

            // Bina kotak nama pemain
            const div = document.createElement('div');
            div.className = "flex justify-between items-center bg-white/60 p-3 rounded-xl mb-2 shadow-sm border border-orange-100 animate-fade-in";
            div.innerHTML = `
                <div class="flex items-center">
                    <span class="mr-2">${medal}</span>
                    <span class="font-bold text-gray-800 text-sm truncate max-w-[120px]">${player.name || 'Wira Misteri'}</span>
                </div>
                <span class="font-black text-red-600 text-sm">${player.damage || 0} ⚔️</span>
            `;
            listContainer.appendChild(div);
        });
    });
}

async function syncRewardsToMainProfile(amt) {
    localPlayerData.coins = parseInt(localPlayerData.coins || 0) + amt;
    localPlayerData.total_xp = parseInt(localPlayerData.total_xp || 0) + amt; 
    localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));
    
    try {
        const snapshot = await db.collection("players").where("name", "==", localPlayerData.name).get();
        if (!snapshot.empty) {
            await db.collection("players").doc(snapshot.docs[0].id).update({
                coins: firebase.firestore.FieldValue.increment(amt),
                total_xp: firebase.firestore.FieldValue.increment(amt)
            });
        }
    } catch(err) { console.error("Gagal sync XP", err); }
}

// ==========================================
// 💀 6. KEMATIAN & PENAMAT GAME
// ==========================================
function updatePlayerHPUI() {
    // Kemas kini komponen teks HP pemain utama
    const hpText = document.getElementById('player-hp-text');
    if(hpText) hpText.innerText = bossPlayerHP; 
    
    // 💥 TAMBAHAN BARU: Paksa padam tulisan "memuatkan HP..." di skrin Boss
    const bossPlayerHpText = document.getElementById('boss-player-hp-text');
    if (bossPlayerHpText) {
        bossPlayerHpText.innerText = `HP Anda: ${bossPlayerHP}/100`;
    }
}

function checkPlayerAlive() {
    if (bossPlayerHP <= 0) {
        clearInterval(passiveAttackInterval);
        audioBGM.pause();
        Swal.fire('💀 Tewas', 'HP anda telah habis. Kumpul kekuatan dan cuba lagi minggu hadapan!', 'error')
        .then(() => {
            if (typeof showScreen === 'function') showScreen('menu-screen');
        });
        return false;
    }
    return true;
}

function handleBossDefeated(slayerName) {
    clearInterval(passiveAttackInterval);
    audioBGM.pause(); 
    audioWin.play();
    
    let isMe = (slayerName === localPlayerData.name);
    let msg = isMe ? "ANDA TELAH MEMBERIKAN TETAKAN TERAKHIR (FINAL BLOW)!" : `Wira ${slayerName} telah memberikan Final Blow!`;

    Swal.fire({
        title: '🔥 BOSS TEWAS! 🔥',
        html: `<p class="text-lg text-red-600 font-bold">${msg}</p><p class="mt-2 text-sm text-gray-500">Ganjaran akhir akan dikira pada hujung bulan. Arena kini ditutup.</p>`,
        imageUrl: `assets/boss/${currentBossData.avatar}`,
        imageWidth: 150,
        confirmButtonText: 'Keluar Arena',
        allowOutsideClick: false
    }).then(() => {
        if (typeof showScreen === 'function') showScreen('menu-screen');
    });
}

// Visual Terapung
function showDamageIndicator(text, colorClass, elementId) {
    // Pastikan cikgu ada sediakan div khusus di sebelah avatar boss/murid
}
