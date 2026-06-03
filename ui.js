// ==========================================
// KAWALAN ANTARAMUKA PENGGUNA (UI)
// ==========================================

// PENGIRAAN LEVEL PEMAIN (TOTAL SCORE - SISTEM PROGRESIF BAHARU)
function getPlayerLevelInfo(totalScore) {
    let score = parseInt(totalScore) || 0;
    
    let calculatedLevel = 1;
    let requiredXpForNextLevel = 100;
    let tempScore = score;

    // Loop Pengiraan Progresif
    while (tempScore >= requiredXpForNextLevel) {
        tempScore -= requiredXpForNextLevel;
        calculatedLevel++;
        requiredXpForNextLevel += 50; // Naik 50 XP setiap level
    }

    if (calculatedLevel > 150) calculatedLevel = 150; 

    // Cari senarai pangkat dengan selamat
    const ranksArray = (typeof LEVEL_RANKS !== 'undefined') ? LEVEL_RANKS : 
                       (typeof levelRanks !== 'undefined') ? levelRanks : 
                       (typeof levelData !== 'undefined') ? levelData : [];

    let currentRank = ranksArray.find(r => calculatedLevel >= r.minLevel && calculatedLevel <= r.maxLevel);
    if (!currentRank) {
        currentRank = ranksArray.length > 0 ? ranksArray[ranksArray.length - 1] : {title: "Novice", icon: "🔰", colorClass: "text-gray-500"};
    }

    let xpInCurrentLevel = tempScore;
    let xpNeededForNextLevel = requiredXpForNextLevel;
    
    let percentage = 100;
    if (calculatedLevel < 150) { 
        percentage = Math.max(0, Math.min(100, (xpInCurrentLevel / xpNeededForNextLevel) * 100));
    }

    return {
        level: calculatedLevel,
        title: currentRank.title,
        icon: currentRank.icon,
        colorClass: currentRank.colorClass || "text-green-500", 
        xpText: `${xpInCurrentLevel} / ${xpNeededForNextLevel}`, 
        percentage: percentage 
    };
}
	
// KEMASKINI PAPARAN LEVEL DI DASHBOARD
function updatePlayerLevelUI() {
    if (!localPlayerData) return;
    
    let safeTotalScore = parseInt(localPlayerData.totalScore) || parseInt(localPlayerData.Total) || parseInt(localPlayerData.coins) || 0; 
    let playerStats = getPlayerLevelInfo(safeTotalScore);
    
    // Ini ID dari index.html cikgu
    let xpTextElement = document.getElementById('xp-text');
    let progressBar = document.getElementById('xp-bar-fill');
    let nextLevelText = document.getElementById('next-level-text');

    if (xpTextElement) xpTextElement.innerText = `XP: ${playerStats.xpText}`; 
    if (progressBar) progressBar.style.width = `${playerStats.percentage}%`; 
    if (nextLevelText) nextLevelText.innerText = playerStats.title; // Ganti tulisan "Explorer"

    // ===== TAMBAH KOD PELUKIS AVATAR DI SINI =====
    if (localPlayerData.activeAvatar && typeof renderAvatarToScreen === 'function') {
        renderAvatarToScreen('dashboard-avatar-container', localPlayerData.activeAvatar);
    }
}

// ==========================================
// KAWALAN PAPARAN (SCREEN NAVIGATION)
// ==========================================
function hideScreenSafe(id) {
    let screen = document.getElementById(id);
    if (screen) screen.classList.add('hidden');
}

function backToMenu() {
    if (typeof currentTimer !== 'undefined') clearInterval(currentTimer);
    hideScreenSafe('game-arena');
    hideScreenSafe('leaderboard-screen');
    hideScreenSafe('achievements-screen');
    hideScreenSafe('shop-screen');
    hideScreenSafe('avatar-screen'); 
    hideScreenSafe('profile-screen');
    
    let menuScreen = document.getElementById('menu-screen');
    if (menuScreen) menuScreen.classList.remove('hidden');
    
    if (typeof checkLevelAccess === 'function') checkLevelAccess();
}

function updateDashboardAvatars() {
    const container = document.getElementById('dashboard-avatars');
    if (!container) return; 
    container.innerHTML = ''; 

    if (localPlayerData && localPlayerData.activeAvatar) {
        let active = localPlayerData.activeAvatar;
        const avatarKey = active.key || active.id || active.avatarKey; 
        let visualContent = "";
        let isLegendaryImage = false; 

        const rawData = (typeof avatars !== 'undefined') ? avatars : (typeof avatarsData !== 'undefined' ? avatarsData : null);

        if (rawData && rawData[avatarKey]) {
            const levelInfo = rawData[avatarKey].levels.find(l => l.level === active.level);
            if (levelInfo) {
                if (levelInfo.img) {
                    visualContent = `<img src="${levelInfo.img}" class="w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(255,140,0,0.8)] mx-auto legendary-avatar" alt="${active.name}">`;
                    isLegendaryImage = true;
                } else {
                    visualContent = `<i class="${levelInfo.icon || active.icon} text-3xl text-green-600"></i>`;
                }
            } else {
                visualContent = `<i class="${active.icon} text-3xl text-green-600"></i>`;
            }
        } else {
            visualContent = `<i class="${active.icon} text-3xl text-green-600"></i>`;
        }

        if (isLegendaryImage) {
            container.innerHTML = `
                <div class="flex items-center justify-center hover:scale-110 transition cursor-pointer" 
                     title="${active.name} (Level ${active.level})" onclick="openInventoryModal()">
                    ${visualContent}
                </div>`;
        } else {
            container.innerHTML = `
                <div class="bg-indigo-100 w-12 h-12 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)] border-2 border-green-400 flex items-center justify-center hover:scale-110 transition cursor-pointer" 
                     title="${active.name} (Level ${active.level})" onclick="openInventoryModal()">
                    ${visualContent}
                </div>`;
        }
    } else {
        container.innerHTML = `
            <div class="bg-gray-100 w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition" 
                 title="No Guardian Equipped" onclick="openInventoryModal()">
                <i class="fas fa-question text-gray-400 text-xl"></i>
            </div>`;
    }
}

// ==========================================
// FUNGSI PROFIL (TELEPORTASI + CONSOLE.LOG)
// ==========================================

function openProfile() {
    console.log("=== 🚀 MEMULAKAN FUNGSI openProfile ===");
    
    try {
        console.log("1. Mencari elemen skrin (HTML)...");
        const profileScreen = document.getElementById('profile-screen');
        
        console.log("   -> profileScreen wujud?", !!profileScreen);
        
        if (profileScreen) {
            console.log("2. ⚡ Melaksanakan Jurus Teleportasi ke Body Utama...");
            // 🔥 JURUS TELEPORTASI: Cabut profil dari mana-mana sarang tersembunyi 
            // dan letak terus di bahagian paling luar (bodi utama laman web)
            document.body.appendChild(profileScreen); 
            
            // Buang kelas hidden dan paksa ia muncul
            profileScreen.classList.remove('hidden');
            profileScreen.style.display = 'flex';
            profileScreen.style.zIndex = '99999'; // Paksa duduk paling depan
            
            console.log("   -> ✅ Skrin berjaya dipaksa muncul.");
        } else {
            console.log("   -> ❌ RALAT: profile-screen tidak dijumpai di index.html!");
        }

        console.log("3. Membaca data pemain...");
        console.log("   -> Data studentInfo:", typeof studentInfo !== 'undefined' ? studentInfo : "TIDAK WUJUD");
        console.log("   -> Data localPlayerData:", typeof localPlayerData !== 'undefined' ? localPlayerData : "TIDAK WUJUD");

        const nameEl = document.getElementById('profile-name');
        let studentName = "Student";
        if (typeof studentInfo !== 'undefined' && studentInfo.name) {
            studentName = studentInfo.name;
        } else if (typeof localPlayerData !== 'undefined' && localPlayerData.name) {
            studentName = localPlayerData.name;
        }
        
        if (nameEl) nameEl.innerText = studentName;
        console.log("4. ✅ Nama dipaparkan:", studentName);
        
        let activeTitle = "Novice";
        if (typeof localPlayerData !== 'undefined' && localPlayerData.activeTitle) {
            activeTitle = localPlayerData.activeTitle;
        }
        const titleEl = document.getElementById('profile-active-title');
        if (titleEl) titleEl.innerText = activeTitle;
        console.log("5. ✅ Title dipaparkan:", activeTitle);

        console.log("6. Menyemak Avatar...");
        if (typeof localPlayerData !== 'undefined' && localPlayerData.activeAvatar) {
            console.log("   -> Avatar yang nak dilukis:", localPlayerData.activeAvatar);
            if (typeof renderAvatarToScreen === 'function') {
                renderAvatarToScreen('profile-avatar-container', localPlayerData.activeAvatar);
                console.log("   -> ✅ Avatar dilukis.");
            } else {
                console.log("   -> ❌ AMARAN: Fungsi renderAvatarToScreen tidak wujud!");
            }
        } else {
            console.log("   -> Tiada avatar aktif disimpan, guna yang asal.");
        }

        console.log("7. Memanggil fungsi Dropdown Title...");
        if (typeof loadTitleOptions === 'function') {
            loadTitleOptions();
            console.log("   -> ✅ loadTitleOptions berjaya.");
        } else {
            console.log("   -> ❌ AMARAN: Fungsi loadTitleOptions tidak wujud!");
        }
        
        console.log("8. Memanggil fungsi Lencana...");
        if (typeof paparkanLencanaDiProfil === 'function') {
            paparkanLencanaDiProfil();
            console.log("   -> ✅ paparkanLencanaDiProfil berjaya.");
        } else {
            console.log("   -> ❌ AMARAN: Fungsi paparkanLencanaDiProfil tidak wujud!");
        }

        console.log("=== 🎉 FUNGSI openProfile SELESAI TANPA RALAT ===");

    } catch (error) {
        console.error("=== 💥 RALAT KRITIKAL DIJUMPAI ===");
        console.error("Mesej Ralat:", error.message);
        console.error("Baris Ralat:", error.stack);
    }
}

// ==========================================
// 🔥 FUNGSI LUKIS LENCANA (HANYA DARI KEDAI)
// ==========================================
function paparkanLencanaDiProfil() {
    const badgeContainer = document.getElementById('profile-badges-container');
    if (!badgeContainer) return; 
    
    badgeContainer.innerHTML = ''; 

    // 🔥 HANYA BACA DARI INVENTORY SAHAJA
    const playerInventory = Array.isArray(localPlayerData?.inventory) ? localPlayerData.inventory : [];
    const masterAchievements = (typeof achievementsData !== 'undefined') ? achievementsData : [];
    
    // Cari lencana yang sepadan dengan ID dalam inventory
    const myBadges = masterAchievements.filter(ach => playerInventory.includes(ach.id));

    // Jika murid belum beli apa-apa
    if (myBadges.length === 0) {
        badgeContainer.innerHTML = `<p class="text-[11px] text-slate-400 italic">Belum ada lencana yang dibeli.</p>`;
        return;
    }

    // Lukis setiap lencana yang dibeli
    myBadges.forEach(badgeInfo => {
        let badgeVisual = '';
        
        if (badgeInfo.image) {
            badgeVisual = `<img src="${badgeInfo.image}" alt="${badgeInfo.name}" class="w-full h-full object-contain p-1 bg-white rounded-full">`;
        } else {
            badgeVisual = `<span class="text-2xl">${badgeInfo.icon || '🏅'}</span>`;
        }

        const badgeHTML = `
            <div class="relative group inline-block m-1">
                <div class="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200 shadow-sm transform transition hover:scale-110 cursor-pointer overflow-hidden">
                    ${badgeVisual}
                </div>
                <div class="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50 transition-opacity">
                    ${badgeInfo.name}
                </div>
            </div>
        `;
        badgeContainer.insertAdjacentHTML('beforeend', badgeHTML);
    });
}

// 2. Tutup Pop-up Profil
function closeProfile() {
    const profileScreen = document.getElementById('profile-screen');
    if (profileScreen) {
        profileScreen.classList.add('hidden');
        profileScreen.style.display = 'none'; // Paksa sembunyi semula bila ditutup
    }
}

// ==========================================
// 3. MASUKKAN SENARAI TITLE (HANYA DARI KEDAI)
// ==========================================
function loadTitleOptions() {
    const selector = document.getElementById('title-selector');
    if (!selector) return;
    selector.innerHTML = '<option value="">-- Select a Title --</option>';

    let hasOptions = false;

    // 🔥 HANYA BACA DARI INVENTORY SAHAJA (Barang yang dibeli)
    const playerInventory = Array.isArray(localPlayerData?.inventory) ? localPlayerData.inventory : [];
    const masterAchievements = (typeof achievementsData !== 'undefined') ? achievementsData : [];

    if (playerInventory.length > 0 && masterAchievements.length > 0) {
        masterAchievements.forEach(ach => {
            // Semak jika ID lencana ada dalam inventory murid
            if (playerInventory.includes(ach.id)) {
                const option = document.createElement('option');
                // Guna ach.titleReward jika ada, jika tiada guna ach.name
                const titleText = ach.titleReward || ach.name;
                option.value = titleText;
                option.text = `🏆 ${titleText}`;
                selector.add(option);
                hasOptions = true;
            }
        });
    }

    // Jika belum beli apa-apa di kedai
    if (!hasOptions) {
        const option = document.createElement('option');
        option.text = "Belum ada Title (Sila Beli di Kedai)";
        option.disabled = true;
        selector.add(option);
    }
}

function saveEquippedTitle() {
    const selector = document.getElementById('title-selector');
    const selectedTitleName = selector.value;

    if (!selectedTitleName) {
        alert("Please select a title first!");
        return;
    }

    // 1. Simpan ke dalam memori
    localPlayerData.activeTitle = selectedTitleName;
    
    // 2. Tukar warna, ikon DAN tulis ke skrin serentak
    if (typeof applyTitleStyle === 'function') {
        applyTitleStyle(selectedTitleName);
    }
    
    // (LANGKAH 3 YANG LAMA TELAH DIPADAM SUPAYA TAK BERGADUH DENGAN LANGKAH 2)

    // 3. Beritahu murid & Simpan ke Cloud
    alert(`Title Updated: ${selectedTitleName}`);
    if (typeof saveCloudPlayerData === 'function') saveCloudPlayerData(); 
}

function applyTitleStyle(titleName) {
    const displayHeader = document.getElementById('header-active-title');
    const displayProfile = document.getElementById('profile-active-title');
    
    if (!displayHeader && !displayProfile) return;

    // Cari dari Achievements
    const ach = (typeof achievementsData !== 'undefined') ? achievementsData.find(a => a.name === titleName) : null;
    
    // Cari dari Ranks
    const ranksArray = (typeof LEVEL_RANKS !== 'undefined') ? LEVEL_RANKS : [];
    const rank = ranksArray.find(r => r.title === titleName);

    const updateElement = (el) => {
        if (!el) return;
        el.className = ""; 
        el.style = "";     
        
        if (ach) {
            if (ach.id === 'ach_16') {
                el.classList.add('title-king');
                el.innerHTML = `👑 ${titleName}`;
            } else if (ach.id === 'ach_15') {
                el.classList.add('title-legendary-beast');
                el.innerHTML = `👾 ${titleName}`;
            } else if (ach.id === 'ach_08') {
                el.classList.add('title-master');
                el.innerHTML = `🔥 ${titleName}`;
            } else if (ach.tier === 'legendary') {
                el.classList.add('title-legendary'); 
                el.innerHTML = `🏆 ${titleName}`;
            } else if (ach.tier === 'epic') {
                el.classList.add('title-epic');
                el.innerHTML = `✨ ${titleName}`;
            } else if (ach.tier === 'rare') {
                el.classList.add('title-rare');
                el.innerHTML = `⭐ ${titleName}`;
            } else {
                el.classList.add('text-gray-500', 'text-[10px]');
                el.innerHTML = `📜 ${titleName}`;
            }
        } 
        else if (rank) {
            el.classList.add(rank.colorClass || 'text-green-500', 'text-[10px]', 'font-bold');
            el.innerHTML = `${rank.icon || '🔰'} ${titleName}`;
        } 
        else {
            el.classList.add('text-gray-500', 'text-[10px]');
            el.innerHTML = `📜 ${titleName}`;
        }
    };

    updateElement(displayHeader);
    updateElement(displayProfile);
}

// ==========================================
// FUNGSI PAKAI AVATAR (MENYOKONG IKON & GAMBAR)
// ==========================================
function equipAvatar(img, icon, avatarName) {
    let avatarFormat = "";

    // 1. Tentukan format: "img|url" atau "icon|class"
    if (img && img !== 'undefined' && img !== '') {
        // Semak jika path gambar sudah lengkap atau belum
        let finalImgUrl = img.includes('assets/avatars/') ? img : `assets/avatars/${img}`;
        avatarFormat = `img|${finalImgUrl}`;
    } else if (icon && icon !== 'undefined' && icon !== '') {
        avatarFormat = `icon|${icon}`;
    }

    // Jika tiada format yang sah dikesan, batalkan arahan
    if (avatarFormat === "") return; 

    // 2. Simpan ke dalam memori
    localPlayerData.activeAvatar = avatarFormat;

    // 3. Lukis terus ke Dashboard & Profil guna fungsi pelukis kita
    if (typeof renderAvatarToScreen === 'function') {
        renderAvatarToScreen('dashboard-avatar-container', avatarFormat);
        renderAvatarToScreen('profile-avatar-container', avatarFormat); // Jika ada pop-up profil
    }

    // 4. Beritahu murid
    Swal.fire({
        icon: 'success',
        title: 'Avatar Ditukar! 👤',
        text: `Anda kini menggunakan Guardian ${avatarName || ''}`,
        timer: 2000,
        showConfirmButton: false
    });

    // 5. Simpan ke Cloud supaya kekal
    if (typeof saveCloudPlayerData === 'function') {
        saveCloudPlayerData();
    }
}

// ==========================================
// SISTEM AUTO-LOAD AVATAR BILA LAMAN DIBUKA
// ==========================================
window.addEventListener('DOMContentLoaded', (event) => {
    // Tunggu sekejap (0.5 saat) untuk pastikan data pemain selesai dimuat turun
    setTimeout(() => {
        if (typeof localPlayerData !== 'undefined' && localPlayerData.activeAvatar) {
            // Semak jika fungsi melukis avatar wujud, barulah panggil
            if (typeof renderAvatarToScreen === 'function') {
                renderAvatarToScreen('dashboard-avatar-container', localPlayerData.activeAvatar);
                renderAvatarToScreen('profile-avatar-container', localPlayerData.activeAvatar);
            }
        }
    }, 500); 
});

// ==========================================
// FUNGSI BANTUAN UNTUK MELUKIS AVATAR KE SKRIN (VERSI TERAPUNG)
// ==========================================
function renderAvatarToScreen(containerId, avatarFormat) {
    const container = document.getElementById(containerId);
    if (!container || !avatarFormat) return;

    // Bersihkan kontena daripada border/background lama jika ada
    container.style.background = "transparent";
    container.style.border = "none";
    container.style.boxShadow = "none";

    if (avatarFormat.startsWith('img|')) {
        // --- JIKA IA GAMBAR (PNG/JPG/GIF) ---
        const url = avatarFormat.replace('img|', '');
        
        // TUKAR: object-cover -> object-contain (Supaya tak terpotong)
        // TAMBAH: drop-shadow (Supaya nampak terapung/3D)
        container.innerHTML = `
            <img src="${url}" 
                 class="w-[90%] h-[90%] object-contain drop-shadow-xl hover:scale-110 transition-transform">
        `;
    } else if (avatarFormat.startsWith('icon|')) {
        // --- JIKA IA IKON FONTAWESOME ---
        const iconClass = avatarFormat.replace('icon|', '');
        
        // Tambahkan drop-shadow juga pada ikon supaya nampak timbul
        container.innerHTML = `
            <i class="${iconClass} text-3xl text-gray-700 drop-shadow-md hover:scale-110 transition-transform"></i>
        `;
    }
}