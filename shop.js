// =========================================================================
// 🛒 ENGINE EKOSISTEM EKONOMI: EDU, GIFT, AVATAR & BADGES SHOP (VERSI LENGKAP)
// =========================================================================

// --- PEMBOLEHUBAH GLOBAL AM ---
let adminInventoryData = [];
let adminAllClaimsData = []; 
let cachedUserClaims = null; // Cache global untuk elak baca Firebase berulang kali

// ==========================================
// 🛠️ HELPER: JANA KOD PENEBUSAN UNIK RAWAK
// ==========================================
function generateRedemptionCode(prefix = "TXT") {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Elak karakter mengelirukan
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${prefix}-${Math.floor(100 + Math.random() * 900)}-${code}`;
}

// ==========================================
// 🧭 1. FUNGSI NAVIGASI TAB KEDAI MURID
// ==========================================
function switchShopTab(tabName) {
    if (window.Trackers) Trackers.rekodBukaKedai();

    // 1. Sembunyikan semua konten shop
    document.querySelectorAll('.shop-section').forEach(el => {
        el.classList.add('hidden');
    });
    
    // 2. Reset warna semua butang tab
    document.querySelectorAll('.shop-tab-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
        btn.classList.add('bg-gray-200', 'text-gray-500');
    });

    // 3. Tunjukkan konten tab yang aktif
    const activeSection = document.getElementById(`shop-content-${tabName}`);
    if (activeSection) activeSection.classList.remove('hidden');

    // 4. Warnakan butang tab yang aktif
    const activeBtn = document.getElementById(`tab-btn-${tabName}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-gray-200', 'text-gray-500');
        activeBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
    }

    // 5. Muatkan data berdasarkan tab yang diklik
    if (tabName === 'edu') {
        loadShopInventory('edu'); 
    } 
    else if (tabName === 'gift') {
        loadShopInventory('gift'); 
    } 
    else if (tabName === 'avatar') {
        if (typeof loadAvatarShop === 'function') loadAvatarShop(); 
    } 
    else if (tabName === 'badge') {
        if (typeof loadMedalShop === 'function') loadMedalShop(); 
    }
    
    localStorage.setItem('lastShopTab', tabName);
}

// ==========================================
// 🛍️ 2. PAPARAN KEDAI (EDU SHOP & GIFT SHOP)
// ==========================================
async function loadShopInventory(kategoriPilihan = 'edu') {
    // Tentukan kontena mana yang mahu dilukis
    const containerId = (kategoriPilihan === 'gift') ? 'gift-shop-items' : 'edu-shop-items';
    const container = document.getElementById(containerId); 
    
    if (!container) return;

    container.innerHTML = `
        <div class="text-center col-span-full py-10 text-gray-500">
            <i class="fas fa-spinner fa-spin text-3xl mb-2 text-indigo-600"></i>
            <p>Menyemak stok kedai dari Firebase...</p>
        </div>`;

    try {
        // Tarik barang berdasarkan label kategori ("edu" atau "gift")
        const snapshot = await db.collection("eduItems").where("category", "==", kategoriPilihan).get();
        
        if (snapshot.empty) {
            container.innerHTML = `
                <div class="text-center col-span-full py-10 text-gray-400">
                    <i class="fas fa-box-open text-5xl mb-3 text-gray-300"></i>
                    <h3 class="font-bold text-lg">Kedai Masih Kosong</h3>
                </div>`;
            return;
        }

        let html = "";
        snapshot.forEach(doc => {
            const item = doc.data();
            const isOutOfStock = item.stock <= 0;
            
            // Tentukan fungsi butang (Edu beli untuk sendiri, Gift automatik popup pilih nama kawan)
            const actionClick = kategoriPilihan === 'gift' 
                ? `processShopPurchase('${item.id}', '${item.name}', ${item.price}, 'gift')`
                : `processShopPurchase('${item.id}', '${item.name}', ${item.price}, 'self')`;

            html += `
            <div class="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden hover:shadow-md transition-shadow">
                ${isOutOfStock ? `<div class="absolute top-3 right-[-25px] bg-red-500 text-white text-[10px] font-black px-8 py-1.5 rotate-45">HABIS</div>` : ''}
                
                <div class="w-14 h-14 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center text-2xl mb-2">
                    <i class="${item.icon || 'fas fa-gift'}"></i>
                </div>
                <h4 class="font-bold text-gray-800 text-xs mb-1">${item.name}</h4>
                <p class="text-[9px] text-gray-400 mb-3 h-8 overflow-hidden">${item.desc || ''}</p>
                
                <div class="w-full flex justify-between items-center mt-auto pt-2 border-t">
                    <div class="font-black text-yellow-600 flex items-center gap-1 text-xs">
                        <i class="fas fa-coins"></i> ${item.price}
                    </div>
                    <span class="text-[9px] font-bold px-2 py-0.5 rounded ${isOutOfStock ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'}">
                        Stok: ${item.stock}
                    </span>
                </div>

                <button 
                    onclick="${actionClick}" 
                    class="mt-3 w-full py-2 rounded-xl font-bold text-xs transition-all ${isOutOfStock ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'}"
                    ${isOutOfStock ? 'disabled' : ''}>
                    ${isOutOfStock ? 'STOK KOSONG' : (kategoriPilihan === 'gift' ? '🎁 HADIAHKAN RAKAN' : '🛍️ BELI SEKARANG')}
                </button>
            </div>`;
        });
        
        container.innerHTML = html;
    } catch (e) {
        console.error("Ralat load kedai:", e);
        container.innerHTML = `<p class="text-center col-span-full py-10 text-red-500">Gagal memuatkan kedai.</p>`;
    }
}

// ==========================================
// 📥 3. LOGIK PEMBELIAN & PENJANAAN KOD 
// ==========================================
async function processShopPurchase(itemID, itemName, price, purchaseType = 'self') {
    if (localPlayerData.coins < price) {
        return Swal.fire('🪙 Koin Tidak Cukup!', 'Main lebih banyak game untuk kumpul koin ya!', 'error');
    }

    try {
        // 1. Semak stok terkini terus dari Firestore (Anti-Cheat)
        const itemDoc = await db.collection("eduItems").doc(itemID).get();
        if (!itemDoc.exists || itemDoc.data().stock <= 0) {
            Swal.fire('📦 Habis Stok!', 'Alamak, barang ini baru sahaja habis dijual!', 'warning');
            loadShopInventory(purchaseType === 'gift' ? 'gift' : 'edu');
            return;
        }

        let targetStudentName = localPlayerData.name.trim().toUpperCase();
        let receiverDocId = `${localPlayerData.school || 'SK_DEFAULT'}_${localPlayerData.class || '-'}_${targetStudentName}`.replace(/\s+/g, '_');
        let notificationMsg = "";

        // 2. Logik Khas Jika Membeli Sebagai Hadiah (Social Gifting)
        if (purchaseType === 'gift') {
            const playersSnap = await db.collection("players")
                .where("school", "==", localPlayerData.school || "SK_DEFAULT")
                .where("class", "==", localPlayerData.class || "-")
                .get();

            if (playersSnap.empty) return Swal.fire('Ralat', 'Tiada murid lain ditemui dalam kelas anda.', 'error');

            let optionsHtml = {};
            playersSnap.forEach(pDoc => {
                const pData = pDoc.data();
                if (pData.name !== localPlayerData.name) { // Jangan senaraikan diri sendiri
                    optionsHtml[pDoc.id] = pData.name.toUpperCase();
                }
            });

            if (Object.keys(optionsHtml).length === 0) {
                return Swal.fire('Info', 'Anda adalah satu-satunya murid di dalam kelas ini buat masa sekarang!', 'info');
            }

            const { value: selectedPlayerDocId } = await Swal.fire({
                title: '🎁 PILIH PENERIMA HADIAH',
                input: 'select',
                inputOptions: optionsHtml,
                inputPlaceholder: 'Pilih nama rakan sekelas...',
                showCancelButton: true,
                confirmButtonColor: '#4f46e5'
            });

            if (!selectedPlayerDocId) return; // Batal pembelian jika tidak pilih rakan

            receiverDocId = selectedPlayerDocId;
            targetStudentName = optionsHtml[selectedPlayerDocId];
            notificationMsg = `Anda mendapat hadiah ${itemName} daripada ${localPlayerData.name.toUpperCase()}! 🎉`;
        } else {
            // Confirm popup untuk beli sendiri
            const confirmResult = await Swal.fire({
                title: 'Sahkan Pembelian',
                text: `Beli ${itemName} dengan harga ${price} koin?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Ya, Beli!',
                confirmButtonColor: '#4f46e5'
            });
            if (!confirmResult.isConfirmed) return;
        }

        // 3. TOLAK KOIN (LOKAL & CLOUD) DAN STOK (CLOUD)
        localPlayerData.coins -= price;
        if (window.Trackers) Trackers.rekodKoinBelanja(price);
        
        localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));
        if (typeof updateUI === 'function') updateUI();

        const uniqueClaimCode = generateRedemptionCode(purchaseType === 'gift' ? 'GIFT' : 'EDU');
        const myDocId = `${localPlayerData.school || 'SK_DEFAULT'}_${localPlayerData.class || '-'}_${localPlayerData.name.trim().toUpperCase()}`.replace(/\s+/g, '_');
        
        // Kemas kini pembeli
        await db.collection("players").doc(myDocId).update({
            coins: firebase.firestore.FieldValue.increment(-price),
            totalSpent: firebase.firestore.FieldValue.increment(price)
        });

        // Potong stok barang
        await db.collection("eduItems").doc(itemID).update({
            stock: firebase.firestore.FieldValue.increment(-1)
        });

        // 4. DAFTARKAN KOD PENEBUSAN KE KOLEKSI UTAMA 'claims'
        await db.collection("claims").add({
            claimCode: uniqueClaimCode,
            buyerName: localPlayerData.name.toUpperCase(),
            studentName: targetStudentName, 
            playerDocId: receiverDocId,     
            itemID: itemID,
            itemName: itemName,
            status: "Belum Dituntut",
            shopType: purchaseType === 'gift' ? "Gift Shop" : "Edu Shop",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        if (purchaseType === 'gift' && notificationMsg !== "") {
            await db.collection("players").doc(receiverDocId).update({
                pendingNotification: notificationMsg
            });
        }

        // 5. SELESAI & PAPARKAN KOD KEPADA MURID
        Swal.fire({
            title: purchaseType === 'gift' ? '🎁 HADIAH DIHANTAR!' : '🛍️ PEMBELIAN BERJAYA!',
            html: `
                <div class="bg-gray-100 p-4 rounded-2xl my-3 text-center border-2 border-dashed border-indigo-400">
                    <p class="text-xs text-gray-400 font-bold uppercase tracking-wider">Kod Tuntutan Anda</p>
                    <p class="text-2xl font-black text-indigo-900 tracking-widest my-1">${uniqueClaimCode}</p>
                    <p class="text-[10px] text-gray-500">Tunjukkan kod ini kepada Cikgu untuk menuntut barang.</p>
                </div>
                <p class="text-xs text-gray-500">${purchaseType === 'gift' ? `Koin anda ditolak ${price}. Hadiah telah dipindahkan ke profil ${targetStudentName}.` : `Koin telah ditolak. Sila semak tab 'Inventori' anda.`}</p>
            `,
            icon: 'success',
            confirmButtonColor: '#22c55e'
        });

        loadShopInventory(purchaseType === 'gift' ? 'gift' : 'edu');

    } catch (error) {
        console.error("Ralat Checkout Ekosistem Kedai:", error);
        Swal.fire('Ralat Sistem', 'Gagal memproses transaksi. Koin anda selamat.', 'error');
    }
}

// ==========================================
// 🔥 FUNGSI SEMAK SYARAT LENCANA
// ==========================================
function checkMedalRequirement(reqType, reqValue) {
    if (typeof localPlayerData === 'undefined' || !localPlayerData) return false;

    let conditionMet = false;
    const target = reqValue;
    const currentMonth = new Date().getMonth() + 1; // 1-12

    switch (reqType) {
        case "total_score":
            if ((Number(localPlayerData.totalScore) || 0) >= target) conditionMet = true;
            break;
        case "perfect_scores":
            if ((Number(localPlayerData.perfectScores) || 0) >= target) conditionMet = true;
            break;
        case "total_games":
            if ((Number(localPlayerData.totalGames) || 0) >= target) conditionMet = true;
            break;
        case "send_challenge":
            if ((Number(localPlayerData.challengesSent) || 0) >= target) conditionMet = true;
            break;
        case "win_challenge":
            if ((Number(localPlayerData.challengesWon) || 0) >= target) conditionMet = true;
            break;
        case "total_challenges":
            if ((Number(localPlayerData.totalChallenges) || 0) >= target) conditionMet = true;
            break;
        case "lose_challenge":
            if ((Number(localPlayerData.challengesLost) || 0) >= target) conditionMet = true;
            break;
        case "total_coins": 
            if ((Number(localPlayerData.coins) || 0) >= target) conditionMet = true;
            break;
        case "total_earned": 
        case "total_coins_earned":
            if ((Number(localPlayerData.totalCoinsEarned) || 0) >= target) conditionMet = true;
            break;
        case "total_spent":
        case "spend_coins":
            if ((Number(localPlayerData.totalSpent) || 0) >= target) conditionMet = true;
            break;
        case "avatar_count":
        case "unlock_avatar":
        case "all_avatars":
        case "all_standard_avatars":
            let avatarCount = 0;
            if (localPlayerData.avatars) {
                avatarCount = Object.keys(localPlayerData.avatars).length;
            }
            if (avatarCount >= target) conditionMet = true;
            break;
        case "avatar_level": 
            let maxLvl = 0;
            if (localPlayerData.avatars) {
                for (let key in localPlayerData.avatars) {
                    let lvl = localPlayerData.avatars[key].level || 0;
                    if (lvl > maxLvl) maxLvl = lvl;
                }
            }
            if (maxLvl >= target) conditionMet = true;
            break;
        case "avatars_at_level": 
        case "multiple_avatar_level":
            let avatarsAtMaxLevel = 0;
            if (localPlayerData.avatars) {
                for (let key in localPlayerData.avatars) {
                    let lvl = localPlayerData.avatars[key].level || 0;
                    if (lvl >= 10) avatarsAtMaxLevel++;
                }
            }
            if (avatarsAtMaxLevel >= target) conditionMet = true; 
            break;
        case "avatar_streak":
            if ((Number(localPlayerData.avatarStreak) || 0) >= target) conditionMet = true;
            break;
        case "login_streak":
            if ((Number(localPlayerData.loginStreak) || 0) >= target) conditionMet = true;
            break;
        case "daily_games":
            if ((Number(localPlayerData.dailyGamesCount) || 0) >= target) conditionMet = true;
            break;
        case "unique_games": 
            if (((localPlayerData.playedGamesList || []).length) >= target) conditionMet = true;
            break;
        case "score_threshold": 
        case "high_score_all":
            if ((Number(localPlayerData.gamesWithScore50Plus) || 0) >= target) conditionMet = true;
            break;
        case "play_time_late": 
            if (localPlayerData.hasPlayedLate) conditionMet = true;
            break;
        case "play_time_early": 
            if (localPlayerData.hasPlayedEarly) conditionMet = true;
            break;
        case "weekend_play":
        case "play_weekend":
            if (localPlayerData.hasPlayedWeekend) conditionMet = true;
            break;
        case "merdeka_day":
            if (localPlayerData.hasPlayedMerdeka) conditionMet = true;
            break;
        case "play_month":
            if (localPlayerData.hasPlayedDecember && target === 12) conditionMet = true;
            else if (currentMonth === target) conditionMet = true;
            break;
        case "shop_visits":
        case "visit_shop":
            if ((Number(localPlayerData.shopVisits) || 0) >= target) conditionMet = true;
            break;
        case "first_login":
            if ((Number(localPlayerData.loginCount) || 0) >= 1 || localPlayerData.name) {
                conditionMet = true;
            }
            break;
        case "event_play":
        case "special_event":
            if (localPlayerData.hasPlayedEvent) conditionMet = true;
            break;
        case "special_avatar":
            if (localPlayerData.hasSecretAvatar) conditionMet = true;
            break;
        case "rank":
        case "leaderboard_rank": 
            const cRank = Number(localPlayerData.currentRank) || 999;
            const bRank = Number(localPlayerData.bestRank) || 999;
            const actualRank = Math.min(cRank, bRank);
            if (actualRank > 0 && actualRank <= target) {
                conditionMet = true;
            }
            break;
        case "tie_challenge":
            if (localPlayerData.lastGameResult === 'tie') conditionMet = true;
            break;
        case "comeback_win":
            if (localPlayerData.hasDoneComeback) conditionMet = true;
            break;
        case "narrow_win":
            if (localPlayerData.hasDoneNarrowWin) conditionMet = true;
            break;
        case "revenge_win":
            if (localPlayerData.hasDoneRevenge) conditionMet = true;
            break;
        case "hidden_secret":
            if (localPlayerData.foundSecret) conditionMet = true;
            break;
        default:
            conditionMet = false;
    }
    return conditionMet;
}

// ==========================================
// 🏆 4. LOGIK KEDAI LENCANA (BADGES SHOP) - TERKEMASKINI 100% KALIS RALAT
// ==========================================
async function loadMedalShop(kategoriPilihan = 'all') {
    const container = document.getElementById('medal-shop-container');
    
    if (!container) return; 
    if (typeof achievementsData === 'undefined' || !localPlayerData) {
        container.innerHTML = '<p class="text-gray-500 text-center">Memuat turun profil & data...</p>';
        return;
    }

    const playerInventory = Array.isArray(localPlayerData.inventory) ? localPlayerData.inventory : [];

    // --- 🔍 LANGKAH 1: TARIK STATUS TUNTUTAN DARI FIREBASE (SISTEM CACHE) ---
    // Hanya tarik dari database SEKALI SAHAJA apabila murid buka kedai
    if (cachedUserClaims === null) {
        cachedUserClaims = {}; // Sediakan objek kosong untuk simpan data
        const myDocId = `${localPlayerData.school || 'SK_DEFAULT'}_${localPlayerData.class || '-'}_${localPlayerData.name.trim().toUpperCase()}`.replace(/\s+/g, '_');
        
        try {
            const claimsSnap = await db.collection("claims").where("playerDocId", "==", myDocId).get();
            claimsSnap.forEach(doc => {
                const data = doc.data();
                cachedUserClaims[data.itemID] = data.status; // Simpan status dalam memori sementara
            });
        } catch (error) {
            console.error("Gagal menyemak rekod tuntutan:", error);
        }
    }
    // -------------------------------------------------------------------------

    let filterWrapper = document.getElementById('medal-shop-filter-wrapper');
    if (!filterWrapper) {
        filterWrapper = document.createElement('div');
        filterWrapper.id = 'medal-shop-filter-wrapper';
        filterWrapper.className = 'w-full mb-5'; 
        container.parentNode.insertBefore(filterWrapper, container);
    }

    filterWrapper.innerHTML = `
        <div class="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-200 shadow-sm w-full">
            <label class="font-bold text-gray-700 text-sm mb-2 sm:mb-0"><i class="fas fa-filter mr-2 text-blue-500"></i>Pilih Kategori Lencana:</label>
            <select id="shop-category-filter" onchange="loadMedalShop(this.value)" class="w-full sm:w-auto p-2 border-2 border-blue-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 font-bold text-gray-700 bg-white cursor-pointer transition-all">
                <option value="all" ${kategoriPilihan === 'all' ? 'selected' : ''}>🌟 Tunjuk Semua</option>
                <option value="ach_" ${kategoriPilihan === 'ach_' ? 'selected' : ''}>🏆 Umum & Khas</option>
                <option value="math_" ${kategoriPilihan === 'math_' ? 'selected' : ''}>🔢 Matematik</option>
                <option value="sn_" ${kategoriPilihan === 'sn_' ? 'selected' : ''}>🧬 Sains</option>
                <option value="bm_" ${kategoriPilihan === 'bm_' ? 'selected' : ''}>🇲🇾 Bahasa Melayu</option>
                <option value="sej_" ${kategoriPilihan === 'sej_' ? 'selected' : ''}>⏳ Sejarah</option>
                <option value="mor_" ${kategoriPilihan === 'mor_' ? 'selected' : ''}>🤝 Pend. Moral</option>
                <option value="pk_" ${kategoriPilihan === 'pk_' ? 'selected' : ''}>🩺 Pend. Kesihatan</option>
                <option value="mz_" ${kategoriPilihan === 'mz_' ? 'selected' : ''}>🎵 Pend. Muzik</option>
                <option value="psv_" ${kategoriPilihan === 'psv_' ? 'selected' : ''}>🎨 Seni Visual</option>
                <option value="rbt_" ${kategoriPilihan === 'rbt_' ? 'selected' : ''}>⚙️ RBT</option>
            </select>
        </div>
    `;

    let filteredData = achievementsData;
    if (kategoriPilihan !== 'all') {
        filteredData = achievementsData.filter(item => item.id.startsWith(kategoriPilihan));
    }

    container.innerHTML = '';
    container.classList.add('max-h-[55vh]', 'overflow-y-auto', 'p-2', 'custom-scrollbar');

    if (filteredData.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-gray-500 font-bold w-full">Tiada lencana dijumpai untuk kategori ini.</div>`;
        return;
    }

    filteredData.forEach(item => {
        const isOwned = playerInventory.includes(item.id);
        const isUnlocked = checkMedalRequirement(item.reqType, item.reqValue);

        let buttonHTML = '';
        
        // --- ⚙️ LANGKAH 2: LOGIK BUTANG BERDASARKAN STATUS (KALIS RALAT) ---
        if (isOwned) {
            if (item.isPhysical) {
                // Kalis Ralat: Hanya semak ID jika cachedUserClaims sudah wujud (tidak null)
                const claimStatus = cachedUserClaims ? cachedUserClaims[item.id] : null;

                if (claimStatus === "Sudah Dituntut") {
                    buttonHTML = `<button class="w-full py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed font-bold text-sm shadow-inner" disabled>Telah Ditebus</button>`;
                } else {
                    buttonHTML = `<button onclick="requestPhysicalBadge('${item.id}', \`${item.name}\`)" class="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-bold text-sm shadow-md transition-all">Tuntut Pin</button>`;
                }
            } else {
                buttonHTML = `<button class="w-full py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed font-bold text-sm" disabled>Dimiliki</button>`;
            }
        } 
        else if (isUnlocked) {
            // Pastikan kita hantar flag isPhysical ke dalam fungsi buyMedal
            buttonHTML = `<button onclick="buyMedal('${item.id}', ${item.price}, \`${item.name}\`, ${item.isPhysical || false})" class="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-sm transition shadow-md active:scale-95">Beli: ${item.price} Koin</button>`;
        } 
        else {
            buttonHTML = `<button class="w-full py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed font-bold text-[11px]" disabled><i class="fas fa-lock mr-1"></i>Terkunci</button>`;
        }
        // -------------------------------------------------------------------

        const badgeImage = item.image ? item.image : "assets/badges/default.webp";

        const card = `
            <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border-2 ${isUnlocked ? 'border-blue-200' : 'border-gray-100'} text-center relative flex flex-col h-full justify-between">
                <div>
                    ${item.isPhysical ? `<div class="bg-orange-500 text-white text-[8px] font-black rounded px-2 py-0.5 absolute top-2 right-2 z-10 shadow-sm">PIN FIZIKAL</div>` : ''}
                    <div class="w-20 h-20 mx-auto mb-3 bg-gray-50 rounded-full flex items-center justify-center relative overflow-hidden shadow-inner">
                        <img src="${badgeImage}" alt="${item.name}" class="w-14 h-14 object-contain transition-all duration-500 ${isUnlocked ? 'drop-shadow-md hover:scale-110' : 'grayscale opacity-30'}">
                        ${!isUnlocked ? '<div class="absolute inset-0 flex items-center justify-center text-gray-600 text-3xl bg-white/40"><i class="fas fa-lock drop-shadow-md"></i></div>' : ''}
                    </div>
                    <h4 class="font-bold text-sm text-gray-800 mb-1 leading-tight">${item.name}</h4>
                    <p class="text-[10px] text-gray-500 mb-3 h-10 leading-tight flex items-center justify-center">${item.description}</p>
                </div>
                ${buttonHTML}
            </div>
        `;
        container.innerHTML += card;
    });
}

// ==========================================
// FUNGSI PEMBELIAN LENCANA 
// ==========================================
async function buyMedal(id, price, name, isPhysical = false) {
    if (localPlayerData.coins < price) {
        Swal.fire('Koin Tidak Cukup!', 'Teruskan bermain untuk kumpul koin.', 'error');
        return;
    }

    const confirmResult = await Swal.fire({
        title: 'Beli Lencana ini?',
        text: `Adakah anda ingin membeli ${name} dengan harga ${price} koin?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ya, Milikinya!'
    });

    if (!confirmResult.isConfirmed) return;

    try {
        localPlayerData.coins -= price;
        
        // Rekodkan koin yang dibelanjakan ke dalam Tracker
        if (window.Trackers) {
            Trackers.rekodKoinBelanja(price);
        }
        
        if (!localPlayerData.inventory) localPlayerData.inventory = [];
        localPlayerData.inventory.push(id);

        localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));
        if (typeof updateUI === 'function') updateUI();

        const myDocId = `${localPlayerData.school || 'SK_DEFAULT'}_${localPlayerData.class || '-'}_${localPlayerData.name.trim().toUpperCase()}`.replace(/\s+/g, '_');
        await db.collection("players").doc(myDocId).update({
            coins: firebase.firestore.FieldValue.increment(-price),
            inventory: firebase.firestore.FieldValue.arrayUnion(id)
        });

        // LOGIK UTAMA: Semak jenis lencana (Fizikal atau Digital)
        if (isPhysical) {
            const claimCode = generateRedemptionCode('BADGE');
            
            await db.collection("claims").add({
                claimCode: claimCode,
                buyerName: localPlayerData.name.toUpperCase(),
                studentName: localPlayerData.name.toUpperCase(),
                playerDocId: myDocId,
                itemID: id,
                itemName: `Lencana Fizikal: ${name}`,
                status: "Belum Dituntut",
                shopType: "Badges Shop",
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            // Kosongkan cache supaya sistem paksa baca semula status Tuntut terkini
            cachedUserClaims = null;

            Swal.fire({
                title: '🏆 LENCANA DIBELI!',
                html: `
                    <p class="text-sm text-green-600 font-bold">Pendaftaran lencana berjaya!</p>
                    <div class="bg-yellow-50 p-4 rounded-xl my-3 text-center border-2 border-dashed border-yellow-400">
                        <p class="text-xs text-yellow-700 font-bold uppercase">Kod Pin Fizikal Anda</p>
                        <p class="text-2xl font-black text-yellow-900 tracking-wider">${claimCode}</p>
                    </div>
                    <p class="text-[11px] text-gray-500">Bawa kod ini berjumpa Cikgu untuk mendapatkan lencana sebenar.</p>
                `,
                icon: 'success'
            });
        } else {
            Swal.fire('🎉 KINI DIAKTIFKAN!', `Lencana digital ${name} telah diaktifkan pada papan profil anda!`, 'success');
        }

        loadMedalShop();

    } catch (e) {
        console.error("Gagal membeli lencana:", e);
        Swal.fire('Ralat', 'Proses pembelian terganggu.', 'error');
    }
}

// ==========================================
// 🎟️ FUNGSI TUNTUT PIN UNTUK LENCANA LAMA YANG DAH DIBELI
// ==========================================
async function requestPhysicalBadge(id, name) {
    const myDocId = `${localPlayerData.school || 'SK_DEFAULT'}_${localPlayerData.class || '-'}_${localPlayerData.name.trim().toUpperCase()}`.replace(/\s+/g, '_');
    
    // Semak pangkalan data jika murid sudah jana kod untuk lencana ini sebelum ini
    Swal.fire({
        title: 'Menyemak Rekod...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
    });

    try {
        const claimsSnap = await db.collection("claims")
            .where("playerDocId", "==", myDocId)
            .where("itemID", "==", id)
            .get();

        if (!claimsSnap.empty) {
            // Jika sudah ada kod, paparkan semula (murid mungkin terlupa kod)
            const claimData = claimsSnap.docs[0].data();
            Swal.fire({
                title: 'KOD ANDA',
                html: `
                    <p class="text-sm text-gray-600 mb-2">Anda telah pun mendaftar untuk menuntut lencana ini.</p>
                    <div class="bg-yellow-50 p-4 rounded-xl text-center border-2 border-dashed border-yellow-400">
                        <p class="text-xs text-yellow-700 font-bold uppercase">Kod Pin Fizikal Anda</p>
                        <p class="text-2xl font-black text-yellow-900 tracking-wider">${claimData.claimCode}</p>
                    </div>
                    <p class="text-[11px] text-gray-500 mt-3">Status: <b class="${claimData.status === 'Sudah Dituntut' ? 'text-green-600' : 'text-red-500'}">${claimData.status}</b></p>
                `,
                icon: 'info'
            });
            
            // Jika cikgu dah sahkan (Sudah Dituntut) tapi cache belum update, paksa update dan reload UI
            if (claimData.status === 'Sudah Dituntut') {
                cachedUserClaims = null;
                loadMedalShop();
            }

        } else {
            // Jika belum ada kod (murid lama), jana kod baru tanpa tolak koin
            const claimCode = generateRedemptionCode('BADGE');
            await db.collection("claims").add({
                claimCode: claimCode,
                buyerName: localPlayerData.name.toUpperCase(),
                studentName: localPlayerData.name.toUpperCase(),
                playerDocId: myDocId,
                itemID: id,
                itemName: `Lencana Fizikal: ${name}`,
                status: "Belum Dituntut",
                shopType: "Badges Shop",
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            // Kosongkan cache supaya butang jadi "Tuntut Pin" semula (jika ditutup)
            cachedUserClaims = null;

            Swal.fire({
                title: '🏆 PIN FIZIKAL DIDAFTAR!',
                html: `
                    <div class="bg-yellow-50 p-4 rounded-xl my-3 text-center border-2 border-dashed border-yellow-400">
                        <p class="text-xs text-yellow-700 font-bold uppercase">Kod Pin Fizikal Anda</p>
                        <p class="text-2xl font-black text-yellow-900 tracking-wider">${claimCode}</p>
                    </div>
                    <p class="text-[11px] text-gray-500">Bawa kod ini berjumpa Cikgu untuk mendapatkan lencana sebenar.</p>
                `,
                icon: 'success'
            });
        }
    } catch (error) {
        console.error(error);
        Swal.fire('Ralat', 'Gagal menyemak rekod tuntutan.', 'error');
    }
}

// ==========================================
// 👤 5. PAPARAN KEDAI AVATAR DIGITAL
// ==========================================
function loadAvatarShop() {
    const container = document.getElementById('avatar-shop-items');
    if (!container) return;

    const playerLevel = localPlayerData.level || 1;
    const playerName = localPlayerData.name || "";
    
    if (!localPlayerData.avatars) localPlayerData.avatars = {};
    if (!localPlayerData.inventory) localPlayerData.inventory = [];

    let html = "";
    
    for (const key in avatars) {
        const category = avatars[key];
        
        category.levels.forEach(item => {
            if (item.isSecret && playerName.trim().toUpperCase() !== "GAME MASTER") return; 

            const isLocked = playerLevel < item.level;
            const itemKey = `${key}_lvl${item.level}`;
            const isOwned = localPlayerData.inventory.includes(itemKey);
            
            const safeImg = item.img ? item.img : '';
            const safeIcon = item.icon ? item.icon : '';

            const visual = item.img 
                ? `<img src="assets/avatars/${item.img}" class="w-20 h-20 object-contain mb-2 ${isLocked ? 'grayscale opacity-50' : ''}">`
                : `<div class="w-14 h-14 ${isLocked ? 'bg-gray-200 text-gray-400' : 'bg-blue-50 text-blue-600'} rounded-full flex items-center justify-center text-2xl mb-2 shadow-inner"><i class="${isLocked ? 'fas fa-lock' : item.icon}"></i></div>`;

            let buttonHtml = "";
            if (isLocked) {
                buttonHtml = `<button class="mt-3 w-full py-2 bg-gray-200 text-gray-400 rounded-xl font-bold text-[10px] cursor-not-allowed" disabled>LVL ${item.level} DIPERLUKAN</button>`;
            } else if (isOwned) {
                buttonHtml = `<button onclick="equipAvatar('${safeImg}', '${safeIcon}', '${item.name}')" class="mt-3 w-full py-2 bg-green-500 text-white rounded-xl font-bold text-[10px] hover:bg-green-600 shadow-md">GUNA AVATAR</button>`;
            } else {
                buttonHtml = `<button onclick="buyAvatar('${key}', ${item.level}, ${item.price}, '${item.name}')" class="mt-3 w-full py-2 bg-indigo-600 text-white rounded-xl font-bold text-[10px] hover:bg-indigo-700 shadow-md">BELI GUARDIAN</button>`;
            }

            html += `
            <div class="bg-white rounded-3xl p-4 shadow-sm border flex flex-col items-center text-center relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full text-center ${isLocked ? 'bg-gray-400' : 'bg-indigo-600'} text-white text-[8px] font-bold py-0.5 uppercase">
                    ${isLocked ? 'TERKUNCI' : category.theme}
                </div>
                <div class="mt-3"></div>
                ${visual}
                <h4 class="font-bold text-xs ${isLocked ? 'text-gray-400' : 'text-gray-800'} mb-1">${item.name}</h4>
                
                <div class="font-black ${isOwned ? 'text-green-500' : 'text-yellow-600'} text-xs mt-auto pt-2 border-t w-full text-center">
                    ${isOwned ? 'DIMILIKI' : `<i class="fas fa-coins"></i> ${item.price}`}
                </div>
                ${buttonHtml}
            </div>`;
        });
    }
    container.innerHTML = html;
}

function buyAvatar(category, level, price, name) {
    if (localPlayerData.coins < price) {
        Swal.fire('Koin Tidak Cukup!', 'Sila kumpul koin dahulu.', 'error');
        return;
    }

    Swal.fire({
        title: 'Beli Avatar?',
        text: `Beli ${name} dengan harga ${price} koin?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ya, Beli'
    }).then((result) => {
        if (result.isConfirmed) {
            localPlayerData.coins -= price;
            const itemKey = `${category}_lvl${level}`;
            if (!localPlayerData.inventory.includes(itemKey)) localPlayerData.inventory.push(itemKey);
            
            localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));
            if (typeof saveCloudPlayerData === 'function') saveCloudPlayerData();
            if (typeof updateUI === 'function') updateUI();
            
            loadAvatarShop();
            Swal.fire('Berjaya!', 'Avatar sedia digunakan.', 'success');
        }
    });
}

// =========================================================================
// 👑 6. PAPARAN PENGURUSAN ADMIN (GURU DASHBOARD CONTROL ENGINE)
// =========================================================================

async function loadAdminOrders(selectedStudent = 'all') {
    const container = document.getElementById('admin-content');
    if (!container) return; 

    // Jika dipanggil untuk refresh, atau jika data cache kosong, tarik dari Firebase
    if (selectedStudent === 'all_refresh' || adminAllClaimsData.length === 0) {
        container.innerHTML = `<div class="text-center py-10"><i class="fas fa-spinner fa-spin text-3xl text-indigo-600"></i><p class="mt-2 text-gray-500">Memuat turun data tuntutan aktif...</p></div>`;
        try {
            // 🔴 KEMASKINI DI SINI: Tambah tapisan sekolah
            const snapshot = await db.collection("claims")
                .where("school", "==", currentSchoolData.schoolName)
                .orderBy("timestamp", "desc")
                .get();
                
            adminAllClaimsData = [];
            snapshot.forEach(doc => {
                adminAllClaimsData.push({ id: doc.id, ...doc.data() });
            });
        } catch (e) {
            console.error("Gagal memuatkan data tuntutan admin:", e);
            container.innerHTML = "<p class='text-center text-red-500'>Gagal memuatkan data dari Firebase. Sila semak Console (F12) untuk ralat Index.</p>";
            return;
        }
    }

    if (adminAllClaimsData.length === 0) {
        container.innerHTML = "<p class='text-center py-10 text-gray-400'>Tiada rekod kod tuntutan ditemui setakat ini untuk sekolah ini.</p>";
        return;
    }

    // Ekstrak nama unik murid untuk dimasukkan ke dalam Dropdown
    const uniqueStudents = [...new Set(adminAllClaimsData.map(item => item.studentName))].sort();

    // 1. Bina Menu Filter (Dropdown)
    let filterHTML = `
        <div class="mb-5 bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-3">
            <label class="font-bold text-gray-700 text-sm w-full sm:w-auto"><i class="fas fa-filter text-indigo-500 mr-2"></i>Tapis Mengikut Murid:</label>
            <div class="flex gap-2 w-full sm:w-auto">
                <select id="admin-student-filter" onchange="filterAdminOrders(this.value)" class="w-full sm:w-auto p-2 border-2 border-indigo-200 rounded-lg text-sm font-bold text-indigo-900 outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer bg-indigo-50">
                    <option value="all">👥 Semua Murid (${adminAllClaimsData.length} Item)</option>
                    ${uniqueStudents.map(name => `<option value="${name}" ${selectedStudent === name ? 'selected' : ''}>👤 ${name}</option>`).join('')}
                </select>
                <button onclick="refreshAdminOrders()" class="bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 text-gray-500 px-3 py-2 rounded-lg transition-all border border-gray-200 shadow-sm" title="Muat Semula Data">
                    <i class="fas fa-sync-alt"></i>
                </button>
            </div>
        </div>
    `;

    // 2. Tapis senarai mengikut pilihan Dropdown
    let filteredClaims = adminAllClaimsData;
    if (selectedStudent !== 'all' && selectedStudent !== 'all_refresh') {
        filteredClaims = adminAllClaimsData.filter(claim => claim.studentName === selectedStudent);
    }

    // 3. Bina senarai Kad Tuntutan
    let listHTML = `<div class="grid gap-4">`;
    
    if (filteredClaims.length === 0) {
        listHTML += `<p class="text-center py-10 text-gray-500 col-span-full font-bold">Tiada tuntutan dijumpai untuk murid ini.</p>`;
    } else {
        filteredClaims.forEach(claim => {
            const docId = claim.id; 
            const isPending = claim.status === 'Belum Dituntut';
            const orderDate = claim.timestamp && claim.timestamp.toDate ? claim.timestamp.toDate().toLocaleString() : 'Baru sahaja';

            listHTML += `
                <div class="bg-white p-4 rounded-2xl border ${isPending ? 'border-indigo-200 bg-indigo-50/10' : 'border-gray-200'} shadow-sm flex flex-wrap justify-between items-center transition-all hover:shadow-md">
                    <div class="w-full sm:w-auto mb-3 sm:mb-0">
                        <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">${claim.shopType} • ${orderDate}</div>
                        <div class="font-black text-lg text-indigo-900 uppercase">${claim.studentName}</div>
                        ${claim.buyerName !== claim.studentName ? `<div class="text-xs text-pink-600 font-bold"><i class="fas fa-gift mr-1"></i>Dikirim oleh: ${claim.buyerName}</div>` : ''}
                        
                        <div class="text-sm font-semibold text-gray-700 mt-2">Item: <span class="text-indigo-600 font-bold">${claim.itemName}</span></div>
                        <div class="mt-2 inline-block bg-white border border-indigo-100 text-indigo-800 font-mono text-xs px-3 py-1.5 rounded-lg font-bold tracking-widest shadow-sm">KOD: ${claim.claimCode}</div>
                    </div>
                    <div class="flex items-center w-full sm:w-auto mt-2 sm:mt-0">
                        ${isPending ? 
                            `<button onclick="approveClaim('${docId}', '${claim.claimCode}')" class="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95"><i class="fas fa-check-circle mr-1"></i> SAHKAN & SERAH</button>` : 
                            `<span class="w-full sm:w-auto text-center bg-gray-100 text-gray-400 px-5 py-3 rounded-xl font-bold text-xs border border-gray-200"><i class="fas fa-check-double mr-1"></i> TELAH DISERAHKAN</span>`
                        }
                    </div>
                </div>`;
        });
    }
    listHTML += `</div>`;

    container.innerHTML = filterHTML + listHTML;
}

// Helper: Fungsi untuk menukar filter tanpa memanggil database
function filterAdminOrders(studentName) {
    loadAdminOrders(studentName);
}

// Helper: Fungsi untuk memaksa database tarik data terkini
function refreshAdminOrders() {
    adminAllClaimsData = []; 
    loadAdminOrders('all_refresh');
}

async function approveClaim(claimDocId, claimCode) {
    const confirmResult = await Swal.fire({
        title: 'Sahkan Penyerahan?',
        text: `Adakah kod ${claimCode} sepadan dengan kod pada peranti murid?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#22c55e',
        confirmButtonText: 'Ya, Sahkan Serahan!'
    });

    if (!confirmResult.isConfirmed) return;
    
    try {
        await db.collection("claims").doc(claimDocId).update({ 
            status: "Sudah Dituntut",
            claimedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        Swal.fire('Selesai!', 'Status kod telah dikemas kini. Sila serahkan barang fizikal kepada murid.', 'success');
        
        // Kemas kini cache tempatan supaya tidak perlu loading lambat
        const claimIndex = adminAllClaimsData.findIndex(c => c.id === claimDocId);
        if (claimIndex !== -1) {
            adminAllClaimsData[claimIndex].status = "Sudah Dituntut";
        }
        
        // Reload UI dan kekalkan nama murid yang sedang dipilih di Dropdown!
        const currentFilter = document.getElementById('admin-student-filter') ? document.getElementById('admin-student-filter').value : 'all';
        loadAdminOrders(currentFilter); 

    } catch (e) {
        console.error("Ralat Pengesahan Guru:", e);
        Swal.fire('Ralat Rangkaian', 'Gagal menukar status pangkalan data.', 'error');
    }
}

// ==========================================
// 🛠️ 7. PENGURUSAN STOK INVENTORI (ADMIN)
// ==========================================
async function loadAdminInventory() {
    const container = document.getElementById('admin-content');
    if (!container) return; 

    container.innerHTML = `<div class="text-center py-10"><i class="fas fa-spinner fa-spin text-3xl text-indigo-600"></i><p>Memuatkan stor Firestore...</p></div>`;

    try {
        // 🔴 KEMASKINI DI SINI: Tambah tapisan sekolah
        const snapshot = await db.collection("eduItems")
            .where("school", "==", currentSchoolData.schoolName)
            .get();
            
        adminInventoryData = [];
        snapshot.forEach(doc => adminInventoryData.push(doc.data()));

        let html = `
            <div class="mb-6 flex justify-between items-center bg-indigo-50 p-4 rounded-2xl">
                <h3 class="font-bold text-indigo-800">Senarai Stok Inventori Kedai</h3>
                <button onclick="openAddItemForm()" class="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-xs"><i class="fas fa-plus mr-1"></i> TAMBAH BARANG</button>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left bg-white rounded-xl overflow-hidden shadow-sm">
                    <thead class="bg-gray-100 text-[10px] uppercase text-gray-500">
                        <tr>
                            <th class="p-3">Item</th><th class="p-3">Kategori</th><th class="p-3">Harga</th><th class="p-3">Stok</th><th class="p-3">Tindakan</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">`;

        if(adminInventoryData.length === 0){
             html += `<tr><td colspan="5" class="p-4 text-center text-gray-500">Tiada barang dijumpai untuk sekolah ini.</td></tr>`;
        } else {
            adminInventoryData.forEach(item => {
                const badgeColor = item.category === 'gift' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600';
                html += `
                    <tr class="border-b hover:bg-gray-50 transition-colors">
                        <td class="p-3">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center"><i class="${item.icon || 'fas fa-box'}"></i></div>
                                <div>
                                    <div class="font-bold text-xs">${item.name}</div>
                                    <div class="text-[9px] text-gray-400">${item.id}</div>
                                </div>
                            </div>
                        </td>
                        <td class="p-3">
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase ${badgeColor}">${item.category || 'edu'}</span>
                        </td>
                        <td class="p-3 font-bold text-yellow-600 text-xs">${item.price}</td>
                        <td class="p-3 font-bold text-xs ${item.stock <= 5 ? 'text-red-500' : 'text-green-600'}">${item.stock}</td>
                        <td class="p-3">
                             <button onclick="editItem('${item.id}')" class="text-indigo-500 hover:text-indigo-700 font-bold text-xs bg-indigo-50 px-3 py-1 rounded">Edit</button>
                        </td>
                    </tr>`;
            });
        }
        container.innerHTML = html + "</tbody></table></div>";
    } catch (e) {
        container.innerHTML = "<p class='text-center text-red-500'>Gagal memuatkan inventori.</p>";
        console.error("Ralat inventori:", e);
    }
}

function openAddItemForm() {
    const modal = document.getElementById('admin-item-modal');
    if(modal) modal.classList.remove('hidden');
    document.getElementById('admin-item-action').value = 'add';
    document.getElementById('admin-item-id').value = '';
    document.getElementById('admin-item-name').value = '';
    document.getElementById('admin-item-price').value = '';
    document.getElementById('admin-item-stock').value = '';
    document.getElementById('admin-item-category').value = 'edu'; // default
    document.getElementById('admin-item-icon').value = 'fas fa-box';
    document.getElementById('admin-item-desc').value = '';
}

function closeItemForm() {
    const modal = document.getElementById('admin-item-modal');
    if(modal) modal.classList.add('hidden');
}

function editItem(id) {
    const item = adminInventoryData.find(i => i.id === id);
    if (!item) return;
    const modal = document.getElementById('admin-item-modal');
    if(modal) modal.classList.remove('hidden');
    document.getElementById('admin-item-action').value = 'edit';
    document.getElementById('admin-item-id').value = item.id;
    document.getElementById('admin-item-name').value = item.name;
    document.getElementById('admin-item-price').value = item.price;
    document.getElementById('admin-item-stock').value = item.stock;
    document.getElementById('admin-item-category').value = item.category || 'edu';
    document.getElementById('admin-item-icon').value = item.icon || 'fas fa-box';
    document.getElementById('admin-item-desc').value = item.desc || '';
}

async function submitItemForm() {
    const btn = document.getElementById('admin-save-item-btn');
    const itemId = document.getElementById('admin-item-id').value.trim().toUpperCase();
    
    const itemData = {
        id: itemId,
        name: document.getElementById('admin-item-name').value.trim(),
        price: parseInt(document.getElementById('admin-item-price').value) || 0,
        stock: parseInt(document.getElementById('admin-item-stock').value) || 0,
        category: document.getElementById('admin-item-category').value, // edu / gift
        icon: document.getElementById('admin-item-icon').value.trim(),
        desc: document.getElementById('admin-item-desc').value.trim()
    };

    if (!itemId || !itemData.name) {
        alert("Sila lengkapkan ID dan Nama Barang!");
        return;
    }

    const originalBtnHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Menyimpan...';

    try {
        await db.collection("eduItems").doc(itemId).set(itemData, { merge: true });
        alert(`Berjaya! Item ${itemId} dikemas kini.`);
        closeItemForm();
        loadAdminInventory(); 
    } catch (e) {
        console.error("Save Item Error:", e);
        alert("Gagal menyimpan data barang.");
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalBtnHTML;
    }
}

// ==========================================
// 🔔 SISTEM NOTIFIKASI HADIAH (POP-UP KEJUTAN)
// ==========================================
async function checkPendingNotifications() {
    // Pastikan data pemain wujud dan mempunyai notifikasi
    if (typeof localPlayerData !== 'undefined' && localPlayerData && localPlayerData.pendingNotification) {
        
        // 1. Tayangkan pop-up kejutan kepada murid
        Swal.fire({
            title: '🎁 HADIAH DITERIMA!',
            text: localPlayerData.pendingNotification,
            icon: 'info',
            confirmButtonColor: '#f472b6', // Warna pink muda yang ceria
            confirmButtonText: 'Terima Kasih!'
        });

        // 2. Padam notifikasi dari memori peranti supaya tidak berulang
        delete localPlayerData.pendingNotification;
        localStorage.setItem('currentPlayer', JSON.stringify(localPlayerData));

        // 3. Padam notifikasi dari Firebase 
        const myDocId = `${localPlayerData.school || 'SK_DEFAULT'}_${localPlayerData.class || '-'}_${localPlayerData.name.trim().toUpperCase()}`.replace(/\s+/g, '_');
        
        try {
            await db.collection("players").doc(myDocId).update({
                pendingNotification: firebase.firestore.FieldValue.delete()
            });
        } catch (e) {
            console.error("Gagal memadam notifikasi dari Firebase:", e);
        }
    }
}
