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
// 1. LOGIK PEMASA GLOBAL BATTLE (5 MINIT)
// ==========================================
let globalBattleInterval = null;
let globalBattleTimeLeft = 300; // 300 saat = 5 minit

function startGlobalBattleTimer() {
    if (globalBattleInterval) clearInterval(globalBattleInterval);
    
    globalBattleTimeLeft = 300; 
    updateGlobalTimerUI();

    globalBattleInterval = setInterval(() => {
        globalBattleTimeLeft--;
        updateGlobalTimerUI();

        if (globalBattleTimeLeft <= 0) {
            clearInterval(globalBattleInterval);
            handleBossBattleTimeout();
        }
    }, 1000);
}

function stopGlobalBattleTimer() {
    if (globalBattleInterval) {
        clearInterval(globalBattleInterval);
        globalBattleInterval = null;
    }
}

function updateGlobalTimerUI() {
    const timerElement = document.getElementById('global-battle-timer');
    if (!timerElement) return;

    const minutes = Math.floor(globalBattleTimeLeft / 60);
    const seconds = globalBattleTimeLeft % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function handleBossBattleTimeout() {
    stopGlobalBattleTimer();
    
    Swal.fire({
        title: '⚔️ MASA TAMAT!',
        text: 'Masa 5 minit telah tamat! Boss berjaya mempertahankan kubunya!',
        icon: 'error',
        confirmButtonText: 'Kembali ke Menu'
    }).then(() => {
        leaveBossFight(); 
    });
}

// ==========================================
// 🚪 FUNGSI UNTUK KELUAR / KEMBALI DARI BOSS BATTLE
// ==========================================
function leaveBossFight() {
    stopGlobalBattleTimer();

    // 🔥 FIX KUOTA: Matikan live ranking bila pemain keluar arena
    if (bossRtdbRef) {
        bossRtdbRef.child('attackers').off(); 
    }

    if (typeof showScreen === 'function') {
        showScreen('menu-screen');
    } else {
        const bossArena = document.getElementById('boss-arena');
        const mainScreen = document.getElementById('menu-screen');

        if (bossArena) bossArena.classList.add('hidden');
        if (mainScreen) mainScreen.classList.remove('hidden');
    }

    console.log("🚪 Pemain telah keluar dari Boss Arena. CCTV leaderboard dihentikan.");
} 

// ==========================================
// 📡 1. CCTV BOSS (RTDB LISTENER)
// ==========================================
function initBossRadar() {
    // 🔥 FIX KUOTA: Cegah pendua pengintip (duplicate listeners)
    bossRtdbRef.off(); 

    bossRtdbRef.on('value', (snapshot) => {
        if (snapshot.exists()) {
            currentBossData = snapshot.val();
            updateBossRadarUI();
            
            if (currentBossData.currentHp <= 0 && currentBossData.status === "ACTIVE") {
                handleBossDefeated(currentBossData.final_blow_player);
            }
        } else {
            currentBossData = null;
            document.getElementById('boss-challenge-btn').classList.add('hidden');
        }
    });
    // Tiada lagi listenToLiveAttackers() di sini untuk jimat data latar belakang.
}
document.addEventListener('DOMContentLoaded', initBossRadar);

function updateBossRadarUI() {
    if (!currentBossData) return;

    let hpPercent = Math.max(0, (currentBossData.currentHp / currentBossData.maxHp) * 100);
    let hpString = `HP: ${Math.max(0, currentBossData.currentHp)} / ${currentBossData.maxHp}`;

    const bossBtn = document.getElementById('boss-challenge-btn');
    const radarBar = document.getElementById('radar-boss-hp-bar');
    const radarText = document.getElementById('radar-boss-hp-text');

    const today = new Date();
    const dayOfWeek = today.getDay(); 
    const currentMonth = today.getMonth(); 

    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    const isRestMonth = (currentMonth === 5 || currentMonth === 11);

    if (currentBossData.status === "ACTIVE" && currentBossData.currentHp > 0 && isWeekend && !isRestMonth) {
        if (bossBtn) bossBtn.classList.remove('hidden');
        if (radarBar) radarBar.style.width = hpPercent + "%";
        if (radarText) radarText.innerText = hpString;
    } else {
        if (bossBtn) bossBtn.classList.add('hidden');
    }

    const arenaBar = document.getElementById('arena-boss-hp-bar');
    const arenaText = document.getElementById('arena-boss-hp-text');

    if (arenaBar) arenaBar.style.width = hpPercent + "%";
    if (arenaText) arenaText.innerText = `${Math.max(0, currentBossData.currentHp)} / ${currentBossData.maxHp}`;
}

// ==========================================
// 🛡️ 2. PINTU MASUK & POTONGAN KUOTA (ANTI-CHEAT)
// ==========================================
async function attemptJoinBoss() {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    const currentMonth = today.getMonth(); 
    
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    const isRestMonth = (currentMonth === 5 || currentMonth === 11);

    if (isRestMonth) {
        return Swal.fire('Bulan Rehat', 'Tiada peperangan Boss pada bulan Jun dan Disember. Selamat bercuti wira!', 'info');
    }

    if (!isWeekend) {
        return Swal.fire('Belum Masanya', 'Boss hanya muncul pada hari Sabtu dan Ahad sahaja!', 'warning');
    }

    if (!currentBossData || currentBossData.currentHp <= 0) {
        return Swal.fire('Tamat', 'Boss telah ditewaskan atau arena ditutup!', 'info');
    }

    const todayDateStr = today.toISOString().split('T')[0]; 
    
    if ((localPlayerData.level || 1) < 20) {
        return Swal.fire('Akses Ditolak', 'Anda perlu mencapai Level 20 untuk menyertai Boss Battle!', 'error');
    }

    localPlayerData.last_boss_attempt = todayDateStr;
    localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));
    
    await db.collection("players").where("name", "==", localPlayerData.name).get()
        .then(snapshot => {
            if(!snapshot.empty) db.collection("players").doc(snapshot.docs[0].id).update({ last_boss_attempt: todayDateStr });
        });

    startBossFight();
    startGlobalBattleTimer(); 
    updateActiveBoostersUI(); 
}

function startBossFight() {
    document.getElementById('boss-arena').classList.remove('hidden');
    
    bossPlayerHP = 100;
    currentBossStreak = 0; 
    hasUsedTimeFreeze = false;
    clearAllBuffs();
    updatePlayerHPUI();

    const bossAvatarElement = document.getElementById('battle-boss-avatar');
    if (bossAvatarElement) {
        bossAvatarElement.src = `assets/boss/${currentBossData.avatar}`; 
    }

    const bossNameElement = document.getElementById('boss-name-ui'); 
    if (bossNameElement) {
        bossNameElement.innerText = currentBossData.name;
    }
    
    updateBossRadarUI();
    
    audioBGM.currentTime = 0; 
    audioBGM.play().catch(e => console.warn("Autoplay muzik disekat oleh pelayar web:", e));
    
    startPassiveAttack();
    generateBossQuestion();

    // 🔥 FIX KUOTA: Hanya baca live attacker bila masuk arena sahaja!
    listenToLiveAttackers();
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
        
        audioOof.play().catch(e => console.warn("Bunyi hit disekat/gagal:", e));

        checkPlayerAlive();
    }, 10000); 
}

function generateBossQuestion() {
    const zone = document.getElementById('boss-answer-zone');
    const questionText = document.getElementById('boss-question-text');
    
    let bossSubject = currentBossData.category || "BI"; 
    
    let sourceData = null;
    let difficultyMap = null;

    switch(bossSubject.toUpperCase()) {
        case "BI": case "ENGLISH":
            sourceData = typeof gameData !== 'undefined' ? gameData : null; 
            difficultyMap = englishCategoryDifficulty; 
            break;
        case "MT": case "MATH":
            sourceData = typeof mathData !== 'undefined' ? mathData : null; 
            difficultyMap = mathCategoryDifficulty; 
            break;
        case "SN": case "SCIENCE":
            sourceData = typeof scienceData !== 'undefined' ? scienceData : null; 
            difficultyMap = scienceCategoryDifficulty; 
            break;
        case "BM": 
            sourceData = typeof malayLanguageData !== 'undefined' ? malayLanguageData : null; 
            difficultyMap = bmCategoryDifficulty; 
            break;
        case "MZ": case "MUZIK":
            sourceData = typeof pendidikanMuzikData !== 'undefined' ? pendidikanMuzikData : null; 
            difficultyMap = muzikCategoryDifficulty; 
            break;
        case "PJK": case "KESIHATAN":
            sourceData = typeof pjkData !== 'undefined' ? pjkData : null; 
            difficultyMap = kesihatanCategoryDifficulty; 
            break;
        case "PM": case "MORAL":
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
        case "SEJ": case "SEJARAH":
            sourceData = typeof sejarahData !== 'undefined' ? sejarahData : null; 
            difficultyMap = sejarahCategoryDifficulty; 
            break;
        default:
            sourceData = typeof gameData !== 'undefined' ? gameData : null;
            difficultyMap = englishCategoryDifficulty;
    }

    if (!sourceData || !difficultyMap) {
        console.error(`Ralat: Data untuk subjek ${bossSubject} tidak dijumpai! Pastikan fail JS soalan dimuat di index.html.`);
        if (questionText) questionText.innerText = "RALAT: Bank soalan tidak dijumpai.";
        return;
    }

    const difficulties = ['easy', 'medium', 'hard'];
    const selectedDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];

    const availableSubtopics = difficultyMap[selectedDifficulty];
    const selectedSubtopic = availableSubtopics[Math.floor(Math.random() * availableSubtopics.length)];

    let questions = sourceData[selectedSubtopic];

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

    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    let baseDamage = selectedDifficulty === "hard" ? 10 : (selectedDifficulty === "easy" ? 5 : 7);
    
    if (questionText) {
        questionText.innerText = randomQ.q || randomQ.soalan || "Soalan tiada teks?";
    }
    
    if (zone) {
        zone.innerHTML = ''; 
        zone.className = "flex flex-col gap-3 w-full items-center"; 

        const inputField = document.createElement('input');
        inputField.type = "text";
        inputField.id = "boss-answer-input";
        inputField.placeholder = "Taip jawapan anda di sini...";
        inputField.className = "w-full max-w-md px-4 py-3 border-2 border-blue-400 rounded-xl text-center text-black font-bold text-lg focus:outline-none focus:border-blue-600 shadow-md";
        
        const submitBtn = document.createElement('button');
        submitBtn.className = "w-full max-w-md bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transform active:scale-95 transition-all text-lg";
        submitBtn.innerText = "SERANG BOSS! ⚔️";

        const correctAns = randomQ.a || randomQ.jawapan;

        submitBtn.onclick = () => {
            const userAns = inputField.value.trim();
            if (userAns === "") return Swal.fire('Kosong', 'Sila taip jawapan sebelum menyerang!', 'warning');
            
            checkBossAnswer(userAns, correctAns, baseDamage);
        };

        inputField.onkeyup = (e) => {
            if (e.key === 'Enter') {
                submitBtn.click();
            }
        };

        zone.appendChild(inputField);
        zone.appendChild(submitBtn);

        setTimeout(() => inputField.focus(), 100);
    }
}

// ==========================================
// 2. LOGIK KESAN KILATAN ARENA (FLASH EFFECT)
// ==========================================
function triggerArenaFlash(type) {
    const overlay = document.getElementById('arena-flash-overlay');
    if (!overlay) return;

    overlay.className = "absolute inset-0 z-40 pointer-events-none opacity-0 transition-all duration-100";

    if (type === 'boss') {
        overlay.classList.add('bg-red-600/30', 'opacity-100');
    } else if (type === 'player') {
        overlay.classList.add('bg-cyan-500/30', 'opacity-100');
    }

    setTimeout(() => {
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0');
    }, 200);
}

// ==========================================
// 3. LOGIK RAK STATUS BOOSTER AKTIF
// ==========================================
function updateActiveBoostersUI(activeBoosters = []) {
    const container = document.getElementById('active-boosters-container');
    if (!container) return;

    container.innerHTML = ''; 

    if (activeBoosters.length === 0) return; 

    activeBoosters.forEach(booster => {
        const badge = document.createElement('div');
        
        let colorClass = 'bg-yellow-500';
        let icon = '🚀';
        
        if (booster.type === 'double_damage' || booster.type === 'rage') {
            colorClass = 'bg-gradient-to-r from-orange-500 to-red-500';
            icon = '🔥 ATK x2';
        } else if (booster.type === 'shield' || booster.type === 'kebal') {
            colorClass = 'bg-gradient-to-r from-blue-500 to-indigo-600';
            icon = '🛡️ KEBAL';
        } else if (booster.type === 'heal_regen') {
            colorClass = 'bg-gradient-to-r from-green-500 to-emerald-600';
            icon = '🧪 REGEN';
        }

        badge.className = `${colorClass} text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm border border-white/20 animate-pulse`;
        badge.innerHTML = `<span>${icon}</span> <span>${booster.name || 'Booster'}</span>`;
        
        container.appendChild(badge);
    });
}

// ==========================================
// ⚔️ 4. LOGIK TEMBAKAN & STREAK (BOOSTER)
// ==========================================
async function checkBossAnswer(chosen, correct, baseDamage) {
    if (String(chosen).toLowerCase() === String(correct).toLowerCase()) {
        
        if (typeof triggerArenaFlash === 'function') triggerArenaFlash('player');
        
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
        
        if (typeof syncRewardsToMainProfile === 'function') {
            syncRewardsToMainProfile(finalDamage);
        }

        setTimeout(generateBossQuestion, 500);

    } else {
        
        if (typeof triggerArenaFlash === 'function') triggerArenaFlash('boss');
        
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
    if (typeof localPlayerData === 'undefined' || !localPlayerData || !localPlayerData.name) {
        console.error("❌ ERROR: localPlayerData.name tidak dijumpai! Serangan dibatalkan.");
        return;
    }
    
    const uid = localPlayerData.name; 
    let updates = {};
    updates['currentHp'] = firebase.database.ServerValue.increment(-amt);
    updates[`attackers/${uid}/name`] = localPlayerData.name;
    updates[`attackers/${uid}/damage`] = firebase.database.ServerValue.increment(amt);

    bossRtdbRef.update(updates).then(() => {
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
    if (!bossRtdbRef) return;

    // 🔥 FIX KUOTA: Matikan pengintip lama sebelum hidupkan yang baru
    bossRtdbRef.child('attackers').off();

    bossRtdbRef.child('attackers').on('value', (snapshot) => {
        const data = snapshot.val();
        const listContainer = document.getElementById('live-ranking-list');
        
        if (!listContainer) return; 
        
        listContainer.innerHTML = ''; 
        
        if (!data) {
            listContainer.innerHTML = '<div class="text-center text-sm text-gray-500 mt-10">Belum ada serangan. Jadilah yang pertama!</div>';
            return;
        }
        
        const attackersArray = [];
        for (let uid in data) {
            attackersArray.push(data[uid]);
        }
        
        attackersArray.sort((a, b) => b.damage - a.damage);
        
        attackersArray.slice(0, 10).forEach((player, index) => {
            let medal = '';
            if (index === 0) medal = '🥇';
            else if (index === 1) medal = '🥈';
            else if (index === 2) medal = '🥉';
            else medal = `<span class="text-gray-500 text-xs mr-2">#${index + 1}</span>`;

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
// 🎁 6. FUNGSI AGIHAN GANJARAN AKHIR BOSS
// ==========================================
async function claimEndBossRewards(finalBlowPlayerName) {
    if (!currentBossData || !currentBossData.attackers) return null;

    const attackersArray = [];
    for (let uid in currentBossData.attackers) {
        attackersArray.push(currentBossData.attackers[uid]);
    }
    attackersArray.sort((a, b) => b.damage - a.damage);

    const myName = localPlayerData.name;
    const myRankIndex = attackersArray.findIndex(p => p.name === myName);

    if (myRankIndex === -1) return null; 

    let bonusXp = 0;
    let bonusCoins = 0;

    if (myRankIndex === 0) { 
        bonusXp += 3000; bonusCoins += 5000;
    } else if (myRankIndex === 1) { 
        bonusXp += 2000; bonusCoins += 4000;
    } else if (myRankIndex === 2) { 
        bonusXp += 1000; bonusCoins += 3000;
    } else { 
        bonusXp += 500; bonusCoins += 1000;
    }

    let isFinalBlow = (myName === finalBlowPlayerName);
    if (isFinalBlow) {
        bonusXp += 1000;
        bonusCoins += 2500;
    }

    localPlayerData.coins = parseInt(localPlayerData.coins || 0) + bonusCoins;
    localPlayerData.total_xp = parseInt(localPlayerData.total_xp || 0) + bonusXp;
    localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));

    try {
        const snapshot = await db.collection("players").where("name", "==", myName).get();
        if (!snapshot.empty) {
            await db.collection("players").doc(snapshot.docs[0].id).update({
                coins: firebase.firestore.FieldValue.increment(bonusCoins),
                total_xp: firebase.firestore.FieldValue.increment(bonusXp)
            });
        }
    } catch (err) { console.error("Gagal sync ganjaran akhir Boss:", err); }

    return { xp: bonusXp, coins: bonusCoins, rank: myRankIndex + 1, isFinalBlow };
}

// ==========================================
// 💀 7. KEMATIAN & PENAMAT GAME
// ==========================================
function updatePlayerHPUI() {
    const hpText = document.getElementById('player-hp-text');
    if(hpText) hpText.innerText = bossPlayerHP; 
    
    const bossPlayerHpText = document.getElementById('boss-player-hp-text');
    if (bossPlayerHpText) {
        bossPlayerHpText.innerText = `HP Anda: ${bossPlayerHP}/100`;
    }
}

function checkPlayerAlive() {
    if (bossPlayerHP <= 0) {
        clearInterval(passiveAttackInterval);
        audioBGM.pause();
        
        // 🔥 FIX KUOTA: Tutup live ranking jika mati
        if (bossRtdbRef) bossRtdbRef.child('attackers').off();

        Swal.fire('💀 Tewas', 'HP anda telah habis. Kumpul kekuatan dan cuba lagi minggu hadapan!', 'error')
        .then(() => {
            if (typeof showScreen === 'function') showScreen('menu-screen');
        });
        return false;
    }
    return true;
}

async function handleBossDefeated(slayerName) {
    clearInterval(passiveAttackInterval);
    audioBGM.pause(); 
    if (typeof audioWin !== 'undefined') {
        audioWin.currentTime = 0;
        audioWin.play().catch(e => console.warn("Audio Win disekat:", e));
    }
    
    // 🔥 FIX KUOTA: Putuskan sambungan leaderboard supaya data tidak membanjir masuk lagi
    if (bossRtdbRef) bossRtdbRef.child('attackers').off();

    let isMe = (slayerName === localPlayerData.name);
    let msg = isMe ? "ANDA TELAH MEMBERIKAN TETAKAN TERAKHIR (FINAL BLOW)!" : `Wira ${slayerName} telah memberikan Final Blow!`;

    // 🎁 Panggil sistem ganjaran
    let rewardInfo = await claimEndBossRewards(slayerName);
    
    let rewardText = `<p class="mt-2 text-sm text-gray-500">Tiada ganjaran tambahan kerana anda tidak sempat menyerang Boss ini.</p>`;
    
    if (rewardInfo) {
        rewardText = `
            <div class="mt-4 p-3 bg-yellow-100 rounded-xl border border-yellow-300 text-left shadow-inner">
                <p class="font-black text-gray-800 text-center mb-2">🏆 GANJARAN ARENA ANDA</p>
                <p class="text-sm font-bold text-gray-700">Kedudukan: <span class="text-blue-600">#${rewardInfo.rank}</span></p>
                <p class="text-sm font-bold text-gray-700">Syiling: <span class="text-yellow-600">+${rewardInfo.coins} 💰</span></p>
                <p class="text-sm font-bold text-gray-700">XP: <span class="text-green-600">+${rewardInfo.xp} ⭐</span></p>
                ${rewardInfo.isFinalBlow ? `<p class="mt-2 text-xs text-red-600 font-black text-center animate-pulse">(TERMASUK BONUS FINAL BLOW!)</p>` : ''}
            </div>
        `;
    }

    Swal.fire({
        title: '🔥 BOSS TEWAS! 🔥',
        html: `<p class="text-lg text-red-600 font-bold">${msg}</p>${rewardText}`,
        imageUrl: currentBossData ? `assets/boss/${currentBossData.avatar}` : null,
        imageWidth: 150,
        confirmButtonText: 'Tuntut & Keluar Arena',
        allowOutsideClick: false
    }).then(() => {
        if (typeof showScreen === 'function') showScreen('menu-screen');
    });
}

// Visual Terapung
function showDamageIndicator(text, colorClass, elementId) {
    // Pastikan cikgu ada sediakan div khusus di sebelah avatar boss/murid
}
