// ============================================================================
// 🐉 LELARAN MUKTAMAD: BOSS BATTLE (AUTOMASI + RTDB + STREAK SYSTEM)
// ============================================================================

// --- TETAPAN 12 BOSS BULANAN (AUTOMATIK) ---
const monthlyBossesConfig = [
    { month: 0, name: "Titan Kalkulus", category: "MT", avatar: "mtboss.webp" },        
    { month: 1, name: "Raja Naga Tatabahasa", category: "BM", avatar: "bmboss.webp" },  
    { month: 2, name: "Specter Sains", category: "SN", avatar: "snboss.webp" },         
    { month: 3, name: "Phantom Sejarah", category: "SEJ", avatar: "sjboss.webp" },      
    { month: 4, name: "Sultan Sirah", category: "PAI", avatar: "paiboss.webp" },         
    { month: 5, name: "Mummy Mufrodat", category: "BA", avatar: "baboss.webp" },        
    { month: 6, name: "Gargoyle Grammar", category: "BI", avatar: "biboss.webp" },      
    { month: 7, name: "Golem Muzik", category: "MZ", avatar: "mzboss.webp" },           
    { month: 8, name: "Troll RBT", category: "RBT", avatar: "rbtboss.webp" },            
    { month: 9, name: "Ogre PJK", category: "PJK", avatar: "pjboss.webp" },            
    { month: 10, name: "Djinn Moral", category: "PM", avatar: "pmboss.webp" },         
    { month: 11, name: "Colossus PSV", category: "PSV", avatar: "psvboss.webp" }        
];

// --- PEMBOLEHUBAH SISTEM & FIREBASE ---
let currentBossData = null; 
let bossRtdbRef = firebase.database().ref('active_boss/current_boss'); 
let liveBossListener = null;

// --- PEMBOLEHUBAH PERLAWANAN ---
let bossPlayerHP = 100;
let currentBossStreak = 0; 
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
let globalBattleTimeLeft = 300; 

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

function leaveBossFight() {
    stopGlobalBattleTimer();
    clearInterval(passiveAttackInterval);
    audioBGM.pause();

    if (bossRtdbRef) bossRtdbRef.child('attackers').off(); 

    if (typeof showScreen === 'function') {
        showScreen('menu-screen');
    } else {
        const bossArena = document.getElementById('boss-arena');
        const mainScreen = document.getElementById('menu-screen');
        if (bossArena) bossArena.classList.add('hidden');
        if (mainScreen) mainScreen.classList.remove('hidden');
    }
    console.log("🚪 Pemain telah keluar dari Boss Arena.");
} 

// ==========================================
// 📡 2. CCTV BOSS & AUTOMASI BULANAN
// ==========================================
function initBossRadar() {
    bossRtdbRef.off(); 

    const today = new Date();
    const currentMonth = today.getMonth(); 
    const currentYear = today.getFullYear();
    const expectedBossId = `BOSS_${currentYear}_${currentMonth}`;

    bossRtdbRef.on('value', async (snapshot) => {
        const data = snapshot.val();

        // JIKA TIADA DATA ATAU BULAN TELAH BERTUKAR
        if (!data || data.bossId !== expectedBossId) {
            
            // 🔥 SISTEM ARKIB: Simpan data Boss bulan lepas sebelum padam 🔥
            if (data && data.bossId) {
                await firebase.database().ref(`boss_archives/${data.bossId}`).set(data);
                console.log(`📁 Data Boss lama (${data.bossId}) telah diarkibkan!`);
            }

            const bossTemplate = monthlyBossesConfig.find(b => b.month === currentMonth);
            if (bossTemplate) {
                const newBossData = {
                    bossId: expectedBossId,
                    name: bossTemplate.name,
                    category: bossTemplate.category,
                    avatar: bossTemplate.avatar,
                    maxHp: 20000,
                    currentHp: 20000,
                    status: "ACTIVE",
                    defeatedBy: "",
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                };
                await bossRtdbRef.set(newBossData);
                return; 
            }
        }

        if (data) {
            currentBossData = data;
            updateBossRadarUI();
            
            if (currentBossData.currentHp <= 0 && currentBossData.status === "ACTIVE") {
                handleBossDefeated(currentBossData.final_blow_player);
            }
        } else {
            currentBossData = null;
            if(document.getElementById('boss-challenge-btn-radar')) document.getElementById('boss-challenge-btn-radar').classList.add('hidden');
            if(document.getElementById('boss-challenge-btn-floating')) document.getElementById('boss-challenge-btn-floating').classList.add('hidden');
        }
    });
}
document.addEventListener('DOMContentLoaded', initBossRadar);

function updateBossRadarUI() {
    if (!currentBossData) return;

    let hpPercent = Math.max(0, (currentBossData.currentHp / currentBossData.maxHp) * 100);
    let hpString = `HP: ${Math.max(0, currentBossData.currentHp)} / ${currentBossData.maxHp}`;

    const btnRadar = document.getElementById('boss-challenge-btn-radar');
    const btnFloating = document.getElementById('boss-challenge-btn-floating');
    const floatingName = document.getElementById('floating-boss-name');
    
    const radarBar = document.getElementById('radar-boss-hp-bar');
    const radarText = document.getElementById('radar-boss-hp-text');

    // KEMASKINI: Buang terus logik isWeekend di sini. Buka setiap hari!
    if (currentBossData.status === "ACTIVE" && currentBossData.currentHp > 0) {
        if (btnRadar) btnRadar.classList.remove('hidden');
        if (btnFloating) btnFloating.classList.remove('hidden'); 
        if (floatingName) floatingName.innerText = `${currentBossData.name} sedang menyerang! Klik untuk menyertai pertempuran!`;
        if (radarBar) radarBar.style.width = hpPercent + "%";
        if (radarText) radarText.innerText = hpString;
    } else {
        if (btnRadar) btnRadar.classList.add('hidden');
        if (btnFloating) btnFloating.classList.add('hidden');
    }

    const arenaBar = document.getElementById('arena-boss-hp-bar');
    const arenaText = document.getElementById('arena-boss-hp-text');

    if (arenaBar) arenaBar.style.width = hpPercent + "%";
    if (arenaText) arenaText.innerText = `${Math.max(0, currentBossData.currentHp)} / ${currentBossData.maxHp}`;
}

// ==========================================
// 🛡️ 3. PINTU MASUK & POTONGAN KUOTA 
// ==========================================
async function attemptJoinBoss() {
    console.log("🔎 [1] Butang ditekan. Semakan bermula...");
    const today = new Date();
    const todayDateStr = today.toISOString().split('T')[0]; 

    if (!currentBossData || currentBossData.currentHp <= 0) return Swal.fire('Tamat', 'Boss telah ditewaskan atau arena ditutup!', 'info');
    if (!localPlayerData) return Swal.fire('Ralat', 'Data pemain tidak dijumpai. Sila muat semula halaman.', 'error');
    
    // 🔥 SYARAT LEVEL 20 DI SINI 🔥
    if ((localPlayerData.level || 1) < 20) {
        return Swal.fire('Akses Ditolak', 'Anda perlu mencapai Level 20 untuk menyertai Boss Battle!', 'error');
    }
    
    // --- SEMAKAN KUOTA 10 KALI ---
    // Pastikan rekod hari ini sepadan. Jika hari bertukar, reset kuota.
    if (localPlayerData.last_boss_attempt_date !== todayDateStr) {
        localPlayerData.last_boss_attempt_date = todayDateStr;
        localPlayerData.boss_attempts_today = 0; 
    }

    // HALANG JIKA SUDAH 10 KALI
    if (localPlayerData.boss_attempts_today >= 10) {
        return Swal.fire('Tamat Sesi', 'Anda telah mencapai had maksimum 10 percubaan hari ini! Berehat dan kembali lagi esok.', 'warning');
    }

    // Jika lulus, tambah kuota
    localPlayerData.boss_attempts_today = parseInt(localPlayerData.boss_attempts_today || 0) + 1;
    
    // 🔥 1. SIMPAN KE LOCAL STORAGE (Untuk kegunaan semasa)
    localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));

    // 🔥 2. SIMPAN KE FIRESTORE (Supaya kekal, wujud dalam DB & elak murid tipu clear cache)
    try {
        const snapshot = await db.collection("players").where("name", "==", localPlayerData.name).get();
        if (!snapshot.empty) {
            await db.collection("players").doc(snapshot.docs[0].id).update({
                last_boss_attempt_date: todayDateStr,
                boss_attempts_today: localPlayerData.boss_attempts_today
            });
        }
    } catch (err) {
        console.error("Gagal menyimpan rekod percubaan ke profil pemain", err);
    }

    console.log(`✅ [2] Syarat Lulus! Percubaan ke-${localPlayerData.boss_attempts_today}. Memaksa arena dibuka...`);
    

    // ====================================================
    // 🔥 TEKNIK PAKSAAN BUKA SKRIN (FORCE OPEN)
    // ====================================================
    const bossArena = document.getElementById('boss-arena');
    const mainScreen = document.getElementById('menu-screen'); // Pastikan ID ini sama dengan ID menu utama Cikgu
    
    if (bossArena) {
        // 1. Sembunyikan menu utama
        if (mainScreen) mainScreen.classList.add('hidden');
        
        // 2. Buang kelas hidden dari boss-arena
        bossArena.classList.remove('hidden');
        
        // 3. Paksa display style sekiranya diganggu oleh CSS Tailwind lain
        bossArena.style.display = "flex";
        bossArena.style.zIndex = "1000"; // Bawa ke lapisan paling atas
        
        console.log("✅ [3] Skrin Boss Arena berjaya dipaksa buka!");
    } else {
        console.error("❌ RALAT: ID 'boss-arena' langsung tidak wujud dalam fail HTML!");
        alert("Ralat HTML: Sistem tidak menjumpai <div id='boss-arena'>.");
    }
    // ====================================================
    
    startBossFight();
    startGlobalBattleTimer(); 

    // Simpan ke Firebase di latar belakang
    try {
        localPlayerData.last_boss_attempt = todayDateStr;
        localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));
        if (typeof db !== 'undefined') {
            await db.collection("players").where("name", "==", localPlayerData.name).get()
                .then(snapshot => {
                    if(!snapshot.empty) db.collection("players").doc(snapshot.docs[0].id).update({ last_boss_attempt: todayDateStr });
                });
        }
    } catch (err) { console.warn("Firebase lambat/gagal:", err); }
}

function startBossFight() {
    const bossArena = document.getElementById('boss-arena');
    if (bossArena) bossArena.classList.remove('hidden');
    
    bossPlayerHP = 100;
    currentBossStreak = 0; 
    hasUsedTimeFreeze = false;
    clearAllBuffs();
    updatePlayerHPUI();

    const bossAvatarElement = document.getElementById('battle-boss-avatar');
    if (bossAvatarElement && currentBossData) bossAvatarElement.src = `assets/boss/${currentBossData.avatar}`; 

    const bossNameElement = document.getElementById('boss-name-ui'); 
    if (bossNameElement && currentBossData) bossNameElement.innerText = currentBossData.name;
    
    updateBossRadarUI();
    
    audioBGM.currentTime = 0; 
    audioBGM.play().catch(e => console.warn("Autoplay muzik disekat oleh pelayar web:", e));
    
    startPassiveAttack();
    generateBossQuestion();
    listenToLiveAttackers();
}

function startPassiveAttack() {
    clearInterval(passiveAttackInterval);
    passiveAttackInterval = setInterval(() => {
        if (isTimeFrozen || isInvisible) return; // Diselamatkan oleh buff
        
        bossPlayerHP -= 2;
        updatePlayerHPUI();
        showDamageIndicator("-2 HP", "text-purple-500", "battle-boss-avatar"); 
        
        audioOof.play().catch(e => {});
        checkPlayerAlive();
    }, 10000); 
}

// ==========================================
// 🧠 4. JANA SOALAN (OBJEKTIF & MENAIP)
// ==========================================
function generateBossQuestion() {
    const zone = document.getElementById('boss-answer-zone');
    const questionText = document.getElementById('boss-question-text');
    if (!currentBossData) return;
    
    let bossSubject = currentBossData.category || "BI"; 
    let sourceData = null, difficultyMap = null, isObjective = false; 

    switch(bossSubject.toUpperCase()) {
        case "BI": sourceData = typeof gameData !== 'undefined' ? gameData : null; difficultyMap = typeof englishCategoryDifficulty !== 'undefined' ? englishCategoryDifficulty : null; break;
        case "MT": sourceData = typeof mathData !== 'undefined' ? mathData : null; difficultyMap = typeof mathCategoryDifficulty !== 'undefined' ? mathCategoryDifficulty : null; break;
        case "SN": sourceData = typeof scienceData !== 'undefined' ? scienceData : null; difficultyMap = typeof scienceCategoryDifficulty !== 'undefined' ? scienceCategoryDifficulty : null; break;
        case "BM": sourceData = typeof malayLanguageData !== 'undefined' ? malayLanguageData : null; difficultyMap = typeof bmCategoryDifficulty !== 'undefined' ? bmCategoryDifficulty : null; break;
        case "MZ": sourceData = typeof pendidikanMuzikData !== 'undefined' ? pendidikanMuzikData : null; difficultyMap = typeof muzikCategoryDifficulty !== 'undefined' ? muzikCategoryDifficulty : null; break;
        case "PJK": sourceData = typeof pjkData !== 'undefined' ? pjkData : null; difficultyMap = typeof kesihatanCategoryDifficulty !== 'undefined' ? kesihatanCategoryDifficulty : null; break;
        case "PM": sourceData = typeof moralData !== 'undefined' ? moralData : null; difficultyMap = typeof moralCategoryDifficulty !== 'undefined' ? moralCategoryDifficulty : null; break;
        case "PSV": sourceData = typeof psvData !== 'undefined' ? psvData : null; difficultyMap = typeof psvCategoryDifficulty !== 'undefined' ? psvCategoryDifficulty : null; break;
        case "RBT": sourceData = typeof rbtData !== 'undefined' ? rbtData : null; difficultyMap = typeof rbtCategoryDifficulty !== 'undefined' ? rbtCategoryDifficulty : null; break;
        case "SEJ": sourceData = typeof sejarahData !== 'undefined' ? sejarahData : null; difficultyMap = typeof sejarahCategoryDifficulty !== 'undefined' ? sejarahCategoryDifficulty : null; break;
        case "PAI": sourceData = typeof paiQuestions !== 'undefined' ? paiQuestions : null; difficultyMap = typeof paiCategoryDifficulty !== 'undefined' ? paiCategoryDifficulty : null; isObjective = true; break;
        case "BA": sourceData = typeof baQuestions !== 'undefined' ? baQuestions : null; difficultyMap = typeof baCategoryDifficulty !== 'undefined' ? baCategoryDifficulty : null; isObjective = true; break;
    }

    if (!sourceData || !difficultyMap) {
        if (questionText) questionText.innerText = "RALAT: Bank soalan tidak dijumpai.";
        return;
    }

    const difficulties = ['easy', 'medium', 'hard'];
    const selectedDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];

    let availableSubtopics = difficultyMap[selectedDifficulty] || Object.keys(sourceData);
    if (!availableSubtopics || availableSubtopics.length === 0) availableSubtopics = Object.keys(sourceData);
    
    const selectedSubtopic = availableSubtopics[Math.floor(Math.random() * availableSubtopics.length)];
    let questions = sourceData[selectedSubtopic];

    if (!questions || questions.length === 0) {
        const fallbackKeys = Object.keys(sourceData);
        if (fallbackKeys.length > 0) questions = sourceData[fallbackKeys[0]];
        else { if (questionText) questionText.innerText = "RALAT: Tiada soalan tersedia."; return; }
    }

    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    let baseDamage = selectedDifficulty === "hard" ? 10 : (selectedDifficulty === "easy" ? 5 : 7);
    
    if (questionText) {
        questionText.innerHTML = `<span class="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-2">ARAS: ${selectedDifficulty} (+${baseDamage} DMG)</span>` + (randomQ.q || randomQ.question || randomQ.soalan || "Soalan?");
    }
    
    if (zone) {
        zone.innerHTML = ''; 
        zone.className = "flex flex-col gap-3 w-full items-center"; 

        if (isObjective && randomQ.options) {
            const gridContainer = document.createElement('div');
            gridContainer.className = "grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg";
            
            randomQ.options.forEach((optText, index) => {
                const btn = document.createElement('button');
                btn.className = "p-4 bg-slate-800 hover:bg-slate-700 border-2 border-slate-600 rounded-xl text-white font-bold text-center transition-colors shadow-md";
                btn.innerText = optText;
                
                btn.onclick = () => {
                    Array.from(gridContainer.children).forEach(b => b.disabled = true);
                    if (index === parseInt(randomQ.answer)) {
                        btn.classList.add('bg-emerald-500');
                        checkBossAnswer(true, true, baseDamage); 
                    } else {
                        btn.classList.add('bg-red-500', 'animate-shake');
                        checkBossAnswer(false, true, baseDamage); 
                    }
                };
                gridContainer.appendChild(btn);
            });
            zone.appendChild(gridContainer);
        } else {
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

            inputField.onkeyup = (e) => { if (e.key === 'Enter') submitBtn.click(); };

            zone.appendChild(inputField);
            zone.appendChild(submitBtn);
            setTimeout(() => inputField.focus(), 100);
        }
    }
}

// ==========================================
// 5. KESAN VISUAL UI & AKTIF BOOSTER
// ==========================================
function triggerArenaFlash(type) {
    const overlay = document.getElementById('arena-flash-overlay');
    if (!overlay) return;

    overlay.className = "absolute inset-0 z-40 pointer-events-none opacity-0 transition-all duration-100";
    if (type === 'boss') overlay.classList.add('bg-red-600/30', 'opacity-100');
    else if (type === 'player') overlay.classList.add('bg-cyan-500/30', 'opacity-100');

    setTimeout(() => { overlay.classList.remove('opacity-100'); overlay.classList.add('opacity-0'); }, 200);
}

function showDamageIndicator(text, colorClass, elementId) {
    const parent = document.getElementById(elementId);
    if (!parent) return;

    const el = document.createElement('div');
    el.className = `absolute text-3xl font-black ${colorClass} drop-shadow-[0_0_10px_rgba(255,255,255,1)] animate-bounce pointer-events-none z-50`;
    el.style.left = `${40 + Math.random() * 20}%`;
    el.style.top = `${30 + Math.random() * 20}%`;
    el.innerText = text;

    parent.parentElement.appendChild(el); 
    setTimeout(() => el.remove(), 1000);
}

// ==========================================
// ⚔️ 6. LOGIK TEMBAKAN & SEMAKAN JAWAPAN
// ==========================================
async function checkBossAnswer(chosen, correct, baseDamage) {
    let isCorrect = false;

    if (typeof chosen === 'boolean') {
        isCorrect = (chosen === correct);
    } else {
        let userAns = String(chosen).toLowerCase();
        let correctAnsArray = String(correct).toLowerCase().split(" atau "); 
        isCorrect = correctAnsArray.includes(userAns);
    }

    if (isCorrect) {
        triggerArenaFlash('player');
        if (typeof audioSlash !== 'undefined') { audioSlash.currentTime = 0; audioSlash.play().catch(e => {}); }
        
        currentBossStreak++; 
        checkStreakBuffs(); 

        if (lifestealActive && bossPlayerHP < 100) {
            bossPlayerHP = Math.min(100, bossPlayerHP + 1);
            updatePlayerHPUI();
            showDamageIndicator("+1 HP", "text-green-500", "battle-boss-avatar");
        }

        let finalDamage = baseDamage;
        if (isX3Damage) finalDamage *= 3;
        else if (isX2Damage) finalDamage *= 2;
        
        showDamageIndicator(`-${finalDamage}`, "text-red-600", "battle-boss-avatar");
        dealDamageToBossRTDB(finalDamage);
        
        if (typeof syncRewardsToMainProfile === 'function') syncRewardsToMainProfile(finalDamage);

        setTimeout(generateBossQuestion, 500);
    } else {
        triggerArenaFlash('boss');
        if (typeof audioOof !== 'undefined') { audioOof.currentTime = 0; audioOof.play().catch(e => {}); }
        
        currentBossStreak = 0; 
        clearAllBuffs(); // Salah jawab, hilang semua buff
        
        if (!isInvisible) {
            bossPlayerHP -= 5;
            
            // 🔥 PENYELAMAT NYAWA NEGATIF 🔥
            if (bossPlayerHP <= 0) {
                bossPlayerHP = 0; // Kunci supaya tak turun lebih dari 0
            }

            showDamageIndicator("-5 HP", "text-red-500", "battle-boss-avatar");
        } else {
            showDamageIndicator("KEBAL!", "text-blue-400", "battle-boss-avatar");
        }
        
        updatePlayerHPUI(); // Nombor di skrin akan jadi 0, bukan -5

        // Panggil fungsi mati, jika mati ia pulangkan false, jika hidup ia generate soalan baru
        if(checkPlayerAlive()) {
             setTimeout(generateBossQuestion, 500);
        }
    }
} // <--- Tanda kurungan ini sangat penting untuk menutup fungsi utama!

// --- LOGIK PENGURUSAN BUFF ---
function checkStreakBuffs() {    
    if (currentBossStreak === 5) { 
        activateBuff("X2 DAMAGE + LIFESTEAL", "text-yellow-400");
        isX2Damage = true; lifestealActive = true;
        clearTimeout(x2Timer);
        x2Timer = setTimeout(() => { isX2Damage = false; lifestealActive = false; }, 15000);
    }
    else if (currentBossStreak === 8 && !hasUsedTimeFreeze) { 
        activateBuff("TIME FREEZE (10s)", "text-blue-300");
        hasUsedTimeFreeze = true; isTimeFrozen = true;
        clearTimeout(freezeTimer);
        freezeTimer = setTimeout(() => { isTimeFrozen = false; }, 10000);
    }
    else if (currentBossStreak === 10) { 
        activateBuff("X3 DAMAGE!", "text-red-400");
        isX3Damage = true; isX2Damage = false; 
        clearTimeout(x3Timer);
        x3Timer = setTimeout(() => { isX3Damage = false; }, 20000);
    }
    else if (currentBossStreak === 15) { 
        activateBuff("INVISIBLE (KEBAL 30s)!", "text-purple-400");
        isInvisible = true;
        clearTimeout(invisibleTimer);
        invisibleTimer = setTimeout(() => { isInvisible = false; }, 30000);
    }
}

function activateBuff(name, colorClass) {
    if (typeof audioBuff !== 'undefined') { audioBuff.currentTime = 0; audioBuff.play().catch(e => {}); }
    
    const streakUi = document.getElementById('streak-indicator'); 
    if (streakUi) {
        streakUi.innerHTML = `<span class="font-black text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,1)] ${colorClass} animate-bounce block text-center">${name}</span>`;
        setTimeout(() => { streakUi.innerHTML = ""; }, 3000);
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
}

// ==========================================
// 📡 7. PENGHANTARAN DATA (RTDB & FIRESTORE)
// ==========================================
function dealDamageToBossRTDB(amt) {
    if (typeof localPlayerData === 'undefined' || !localPlayerData || !localPlayerData.name) return;
    
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
    });
}

// ==========================================
// 🏆 8. FUNGSI LIVE LEADERBOARD 
// ==========================================
function listenToLiveAttackers() {
    if (!bossRtdbRef) return;
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
        for (let uid in data) attackersArray.push(data[uid]);
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
// 🎁 9. AGIHAN GANJARAN AKHIR BOSS
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

    let bonusXp = 0, bonusCoins = 0;

    if (myRankIndex === 0) { bonusXp += 3000; bonusCoins += 5000; } 
    else if (myRankIndex === 1) { bonusXp += 2000; bonusCoins += 4000; } 
    else if (myRankIndex === 2) { bonusXp += 1000; bonusCoins += 3000; } 
    else { bonusXp += 500; bonusCoins += 1000; }

    let isFinalBlow = (myName === finalBlowPlayerName);
    if (isFinalBlow) { bonusXp += 1000; bonusCoins += 2500; }

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
    } catch (err) {}

    return { xp: bonusXp, coins: bonusCoins, rank: myRankIndex + 1, isFinalBlow };
}

// ==========================================
// 🎁 9B. AGIHAN SAGUHATI (JIKA BOSS GAGAL DITEWASKAN PADA AKHIR BULAN)
// ==========================================
async function claimMonthlyConsolationRewards(playerDamage) {
    let bonusXp = 0;
    let bonusCoins = 0;

    // Logik Pengiraan Saguhati Berdasarkan Kerosakan (Damage)
    if (playerDamage <= 50) {
        bonusCoins = 0; 
        bonusXp = 0;
    } else if (playerDamage >= 51 && playerDamage <= 100) {
        bonusCoins = playerDamage; // Coins sama dengan nilai damage
        bonusXp = playerDamage;    // XP sama dengan nilai damage
    } else if (playerDamage >= 101 && playerDamage <= 200) {
        bonusCoins = 100; 
        bonusXp = 150;
    } else if (playerDamage >= 201 && playerDamage <= 300) {
        bonusCoins = 200; 
        bonusXp = 250;
    } else if (playerDamage >= 301 && playerDamage <= 400) {
        bonusCoins = 300; 
        bonusXp = 350;
    } else if (playerDamage >= 401) {
        bonusCoins = 400; 
        bonusXp = 450;
    }

    // Jika layak mendapat saguhati
    if (bonusCoins > 0 || bonusXp > 0) {
        // 1. Kemas kini data lokal (Local Storage)
        localPlayerData.coins = parseInt(localPlayerData.coins || 0) + bonusCoins;
        localPlayerData.total_xp = parseInt(localPlayerData.total_xp || 0) + bonusXp;
        localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));

        // 2. Kemas kini data di pelayan utama (Firestore)
        try {
            const snapshot = await db.collection("players").where("name", "==", localPlayerData.name).get();
            if (!snapshot.empty) {
                await db.collection("players").doc(snapshot.docs[0].id).update({
                    coins: firebase.firestore.FieldValue.increment(bonusCoins),
                    total_xp: firebase.firestore.FieldValue.increment(bonusXp)
                });
            }
        } catch (err) { 
            console.error("Gagal menyegerakkan saguhati bulanan", err); 
        }
        
        return { xp: bonusXp, coins: bonusCoins };
    }
    
    // Pulangkan null jika damage <= 50 (tiada hadiah)
    return null; 
}

// ==========================================
// 🎁 9C. SEMAKAN ARKIB & TUNTUTAN SAGUHATI
// ==========================================
async function checkUnclaimedBossRewards() {
    // Pastikan data pemain telah dimuatkan
    if (!localPlayerData || !localPlayerData.name) return;

    const today = new Date();
    // Dapatkan ID Boss untuk bulan LEPAS
    let lastMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    let lastMonth = lastMonthDate.getMonth();
    let lastYear = lastMonthDate.getFullYear();
    let lastBossId = `BOSS_${lastYear}_${lastMonth}`;

    // Rujuk fail arkib
    const archiveRef = firebase.database().ref(`boss_archives/${lastBossId}`);
    const snap = await archiveRef.once('value');
    const oldBossData = snap.val();

    // Jika ada data Boss bulan lepas, dan pemain ini ada serang Boss tersebut
    if (oldBossData && oldBossData.attackers && oldBossData.attackers[localPlayerData.name]) {
        const myRecord = oldBossData.attackers[localPlayerData.name];
        
        // 1. Semak jika pemain sudah menuntut hadiah ini. Jika sudah, hentikan fungsi.
        if (myRecord.claimedSaguhati) return;

        // 2. Semak jika Boss GAGAL ditewaskan pada bulan tersebut
        if (oldBossData.status !== "DEFEATED") {
            let damage = myRecord.damage || 0;
            
            // Panggil fungsi pengiraan saguhati yang kita bina sebelum ini
            let rewardInfo = await claimMonthlyConsolationRewards(damage);

            // Tanda sebagai SUDAH DITUNTUT supaya Pop-up tak keluar setiap kali refresh
            await archiveRef.child(`attackers/${localPlayerData.name}/claimedSaguhati`).set(true);

            // Jika layak dapat hadiah (damage > 50)
            if (rewardInfo) {
                Swal.fire({
                    title: '🎁 MESEJ DARI MASA LALU!',
                    html: `Misi menewaskan <b>${oldBossData.name}</b> bulan lepas gagal, tetapi keberanian anda dihargai!<br><br>Total Kerosakan: <b>${damage}</b><br><br>Syiling: <span class="text-yellow-600 font-bold">+${rewardInfo.coins} 💰</span><br>XP: <span class="text-green-600 font-bold">+${rewardInfo.xp} ⭐</span>`,
                    icon: 'info',
                    confirmButtonText: 'Tuntut Ganjaran',
                    allowOutsideClick: false
                });
            }
        } else {
             // Jika Boss bulan lepas MATI ditewaskan, pemain dah pun dapat hadiah masa Boss mati.
             // Kita tanda sebagai sudah dituntut untuk elak semakan berulang.
             await archiveRef.child(`attackers/${localPlayerData.name}/claimedSaguhati`).set(true);
        }
    }
}

// ==========================================
// 💀 10. KEMATIAN & PENAMAT GAME
// ==========================================
function updatePlayerHPUI() {
    const hpText = document.getElementById('player-hp-text');
    if(hpText) hpText.innerText = bossPlayerHP; 
    
    const bossPlayerHpText = document.getElementById('boss-player-hp-text');
    if (bossPlayerHpText) bossPlayerHpText.innerText = `HP Anda: ${bossPlayerHP}/100`;
}

function checkPlayerAlive() {
    if (bossPlayerHP <= 0) {
        clearInterval(passiveAttackInterval);
        audioBGM.pause();
        
        if (bossRtdbRef) bossRtdbRef.child('attackers').off();

        // Teks baharu yang memaparkan galakan untuk menggunakan baki percubaan
        Swal.fire(
            '💀 Tewas', 
            'HP anda telah habis! Kumpul kekuatan dan gunakan baki percubaan anda untuk membalas dendam.', 
            'error'
        ).then(() => { 
            leaveBossFight(); 
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
        audioWin.play().catch(e => {});
    }
    
    if (bossRtdbRef) bossRtdbRef.child('attackers').off();

    let isMe = (slayerName === localPlayerData.name);
    let msg = isMe ? "ANDA TELAH MEMBERIKAN TETAKAN TERAKHIR (FINAL BLOW)!" : `Wira ${slayerName} telah memberikan Final Blow!`;

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
        leaveBossFight();
    });
}
