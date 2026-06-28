// ==========================================
// 1. FIREBASE CONFIGURATION
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyDX6PNKeGLMEpyBtnxtvpmyGFyjFq09N5Y", // Kunci V2
    authDomain: "lexiquestv2.firebaseapp.com",
    projectId: "lexiquestv2",
    storageBucket: "lexiquestv2.firebasestorage.app",
    messagingSenderId: "262850068996",
    appId: "1:262850068996:web:64e28cf9757f2739ef6b51",
    measurementId: "G-G4T1JCPH88",
    databaseURL: "https://lexiquestv2-default-rtdb.asia-southeast1.firebasedatabase.app"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const rtdb = firebase.database(); 

// ==========================================
// 3. INITIALIZATION & AUTO-LOGIN
// ==========================================
window.onload = async () => {
    await loadSchoolsDropdown();
    const savedName = sessionStorage.getItem('playerName');
    const savedClass = sessionStorage.getItem('playerClass');
    const savedSchool = sessionStorage.getItem('playerSchool');

    if (savedName && savedClass && savedSchool) {
        studentInfo = { 
            name: savedName.toUpperCase(), 
            class: savedClass.toUpperCase(), 
            school: savedSchool.toUpperCase()
        };
        
        await fetchPlayerData(); // <-- Sistem tarik data dari Firestore di sini
        
        // 🔥 TAMBAH: Salin level dan avatar masuk ke studentInfo 🔥
        if (typeof localPlayerData !== 'undefined' && localPlayerData) {
            studentInfo.level = localPlayerData.level || 0;
            // KEMASKINI BARU: Masukkan avatar!
            studentInfo.activeAvatar = localPlayerData.activeAvatar || ''; 
        }
        
        document.getElementById('auth-screen')?.classList.add('hidden');
        document.getElementById('login-screen')?.classList.add('hidden');
        document.getElementById('menu-screen')?.classList.remove('hidden');
        
        updateUI();
        showDashboardBasedOnRole();
        if (typeof playBgMusic === 'function') playBgMusic(); 
        triggerGameHooks();

        // (Tukar ke 15 nanti)
        if (localPlayerData && localPlayerData.level >= 0) { 
            if (typeof startChallengeListener === 'function') {
                startChallengeListener(studentInfo.name);
            }
        } 
    } else {
        document.getElementById('auth-screen')?.classList.remove('hidden');
    }
};

function triggerGameHooks() {
    if (studentInfo.name === "SUPER ADMIN" || studentInfo.class === "ADMIN") return; 

    // ==========================================
    // 🎥 CCTV TRACKER: REKOD LOG MASUK (LOGIN)
    // ==========================================
    if (window.Trackers) {
        Trackers.rekodLogin();
    }

    // ==========================================
    // 🔥 TAMBAHAN BARU: LANCARKAN ACARA TERHAD (LTE)
    // ==========================================
    if (typeof initLTE === 'function') {
        initLTE();
    }

    if (typeof applyTitleStyle === "function") applyTitleStyle(localPlayerData.activeTitle);
    if (typeof updatePlayerLevelUI === 'function') updatePlayerLevelUI();
    if (typeof updateCategoryProgress === "function") updateCategoryProgress();
    if (typeof checkLevelAccess === 'function') checkLevelAccess();
    if (typeof updateDashboardAvatars === "function") updateDashboardAvatars();
    if (typeof checkAchievements === "function") checkAchievements();
    if (typeof listenToActiveBoss === "function") listenToActiveBoss();

    setMyOnlineStatus(true);
    listenToActivePlayers();
    listenForNotifications();

    // ==========================================
    // ---> 🟢 KOD STATUS MASA LOG MASUK (DIBETULKAN ID) <---
    // ==========================================
    if (typeof studentInfo !== 'undefined' && studentInfo.name) {
        const docId = `${studentInfo.school}_${studentInfo.class}_${studentInfo.name}`.replace(/\s+/g, '_');
        db.collection("players").doc(docId).set({
            currentStatus: "idle"
        }, { merge: true }).catch(e => console.log("Ralat kemaskini status online:", e));
    }
    // ==========================================

    setInterval(() => {
        setMyOnlineStatus(true);
    }, 300000);
    
    if (typeof getCurrentEvent === "function") {
        const currentEvent = getCurrentEvent();
        const eventBanner = document.getElementById('event-banner');
        if (currentEvent && eventBanner) {
            eventBanner.classList.remove('hidden');
            document.getElementById('event-text').innerText = "ACTIVE EVENT: " + currentEvent.name;
        } else if (eventBanner) {
            eventBanner.classList.add('hidden');
        }
    }
    
    checkLevelRewardsOnLogin();
    if (typeof playBgMusic === 'function') playBgMusic();

    // 👇 TAMBAH DI SINI: Panggil fungsi semak hadiah
    if (typeof checkPendingNotifications === 'function') {
        checkPendingNotifications();
    }
}

// ==========================================
// 4. STRICT LOGIN
// ==========================================
async function loginStudent() {
    const nameInput = document.getElementById('login-name').value.trim().toUpperCase();
    const classInput = document.getElementById('login-class').value.trim().toUpperCase();
    const schoolInput = document.getElementById('login-school').value;
    const pinInput = document.getElementById('login-pin').value.trim();

    if (!nameInput || !classInput || !schoolInput) {
        Swal.fire("Tidak Lengkap", "Sila isi Nama, Kelas, dan pilih Sekolah anda.", "warning");
        return;
    }

    if (schoolInput === "ADMIN" && nameInput === "SUPER ADMIN") {
        studentInfo = { name: "SUPER ADMIN", class: "ADMIN", school: "ADMIN" };
        
        // Wujudkan data profil asas supaya sistem tidak ralat
        localPlayerData = { 
            name: "SUPER ADMIN",
            activeTitle: "System Admin", 
            level: "-", 
            coins: 0,
            totalScore: 0,
            activeAvatar: "👤" 
        }; 
        
        finalizeLogin();
        return;
    }

    const docId = `${schoolInput}_${classInput}_${nameInput}`.replace(/\s+/g, '_');

    try {
        const btn = event.target;
        btn.innerText = "Loading data...";
        btn.disabled = true;

        const docRef = db.collection("players").doc(docId);
        const docSnap = await docRef.get();

        if (docSnap.exists) {
            const data = docSnap.data();
            
            if (data.passcode && data.passcode !== pinInput) {
                Swal.fire("Akses Ditolak", "PIN yang anda masukkan salah.", "error");
                btn.innerText = "START ADVENTURE";
                btn.disabled = false;
                return;
            }
            
            localPlayerData = {
                ...data,
                totalScore: data.totalScore || data.Total || data.total || data.TOTAL || 0,
                claimedLevels: Array.isArray(data.claimedLevels) ? data.claimedLevels : [],
                games: typeof data.games === 'string' ? JSON.parse(data.games || "{}") : (data.games || {}),
                lastPlayed: Array.isArray(data.lastPlayed) ? data.lastPlayed : []
            }; 
            
            // KEMASKINI BARU: Masukkan avatar di sini!
            studentInfo = { 
                name: nameInput, 
                class: classInput, 
                school: schoolInput,
                activeAvatar: data.activeAvatar || '' 
            };
            
            Swal.fire({
                icon: 'success',
                title: 'Login Berjaya!',
                text: 'Selamat kembali, ' + nameInput,
                timer: 1500,
                showConfirmButton: false
            });

            finalizeLogin();
            if (typeof playBgMusic === 'function') playBgMusic();
            
            // ==========================================
            // ---> TAMBAH KOD INI DI SINI <---
            // Mulakan pendengar cabaran HANYA jika pemain Level 15+
            // ==========================================
            if (localPlayerData.level >= 15) {
                startChallengeListener(studentInfo.name);
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Akaun Tidak Ditemui',
                text: 'Nama anda tiada dalam rekod. Sila hubungi Admin Sekolah anda untuk pendaftaran.'
            });
        }
        
        btn.innerText = "START ADVENTURE";
        btn.disabled = false;

    } catch (error) {
        console.error("Login Error:", error);
        Swal.fire("Ralat Sistem", "Gagal berhubung ke awan. Sila semak internet anda.", "error");
    }
}

function finalizeLogin() {
    sessionStorage.setItem('playerName', studentInfo.name);
    sessionStorage.setItem('playerClass', studentInfo.class);
    sessionStorage.setItem('playerSchool', studentInfo.school);
    
    document.getElementById('auth-screen')?.classList.add('hidden');
    document.getElementById('login-screen')?.classList.add('hidden');
    document.getElementById('menu-screen')?.classList.remove('hidden');
    
    updateUI();
    showDashboardBasedOnRole();
    triggerGameHooks();
}

// ==========================================
// 5. ROLE-BASED DASHBOARD LOGIC
// ==========================================
function showDashboardBasedOnRole() {
    document.getElementById('dashboard-super-admin')?.classList.add('hidden');
    document.getElementById('dashboard-school-admin')?.classList.add('hidden');
    document.getElementById('dashboard-student')?.classList.add('hidden');

    const displayClassEl = document.getElementById('menu-player-class'); 
    const playerNameEl = document.getElementById('menu-player-name');
    
    // 👇 1. TAMBAH CARI KOTAK LEVEL & TITLE
    const levelEl = document.getElementById('menu-player-level');
    const displayTitleEl = document.getElementById('display-title');

    // Kemaskini Nama
    if (playerNameEl && studentInfo.name) {
        playerNameEl.innerText = studentInfo.name;
    }

    // 👇 2. TAMBAH ARAHAN PAPAR LEVEL & TITLE 
if (typeof localPlayerData !== 'undefined') {
    // Kira level sebenar berdasarkan markah terkini!
    let realLevel = 1;
    if (typeof calculateLevel === "function") {
        realLevel = calculateLevel(Number(localPlayerData.totalScore) || 0);
    }
    
    if (levelEl) levelEl.innerText = "LVL " + realLevel;
    if (displayTitleEl) displayTitleEl.innerText = localPlayerData.activeTitle || "NOVICE";
}

    // Kemaskini Papan Pemuka & Kelas berdasarkan Peranan
    if (studentInfo.name === "SUPER ADMIN") {
        document.getElementById('dashboard-super-admin')?.classList.remove('hidden');
        if (displayClassEl) displayClassEl.innerText = "SYSTEM OWNER"; 
    } 
    else if (studentInfo.class === "ADMIN" || (typeof localPlayerData !== 'undefined' && localPlayerData.activeTitle === "School Admin")) {
        document.getElementById('dashboard-school-admin')?.classList.remove('hidden');
        if (displayClassEl) displayClassEl.innerText = "SCHOOL ADMIN"; 
    } 
    else {
        document.getElementById('dashboard-student')?.classList.remove('hidden');
        if (displayClassEl) displayClassEl.innerText = studentInfo.class; 
    }
}

// ==========================================
// 6. CLOUD SYNCING
// ==========================================
async function fetchPlayerData() {
    if (studentInfo.name === "SUPER ADMIN") return; 

    const docId = `${studentInfo.school}_${studentInfo.class}_${studentInfo.name}`.replace(/\s+/g, '_');
    try {
        const docSnap = await db.collection("players").doc(docId).get();
        if (docSnap.exists) {
            const data = docSnap.data();
            localPlayerData = {
                ...data,
                totalScore: data.totalScore || data.Total || data.total || data.TOTAL || 0,
            };
        }
    } catch (e) {
        console.error("Fetch Error:", e);
    }
}

async function saveCloudPlayerData() {
    // 1. Dapatkan data dari studentInfo ATAU localPlayerData (sebagai pelan sandaran/backup)
    const pName = (typeof studentInfo !== 'undefined' && studentInfo.name) ? studentInfo.name : localPlayerData.name;
    const pClass = (typeof studentInfo !== 'undefined' && studentInfo.class) ? studentInfo.class : localPlayerData.class;
    const pSchool = (typeof studentInfo !== 'undefined' && studentInfo.school) ? studentInfo.school : (localPlayerData.school || "SK_DEFAULT"); // Sila tukar DEFAULT jika perlu

    // 2. Pengawal keselamatan baharu
    if (!pName || pName === "SUPER ADMIN") {
        console.log("Hentikan simpanan: Data pemain tidak lengkap atau admin.");
        return;
    }
    
    console.log("Memulakan proses simpan ke Firestore untuk:", pName); // Untuk rujukan kita di Console
    
    // 3. Hasilkan ID Dokumen
    const docId = `${pSchool}_${pClass}_${pName}`.replace(/\s+/g, '_');
    
    // ==========================================
    // 🕵️‍♂️ ALAT PENGESAN (TRACKER) DITAMBAH DI SINI
    // ==========================================
    console.log("SAYA SEDANG MENYIMPAN DATA KE DOKUMEN:", docId);
    console.log("JUMLAH KOIN YANG DISIMPAN:", localPlayerData.coins);
    // ==========================================

    // 🔥 SUNTIKAN 10 MATA PELAJARAN (Memaksa Firebase membuat lajur) 🔥
    const lajurSkorSubjek = [
        'score_matematik', 'score_english', 'score_sains', 'score_bm', 
        'score_sejarah', 'score_pjk', 'score_muzik', 'score_moral', 
        'score_psv', 'score_rbt'
    ];

    // Pastikan setiap subjek memiliki setidaknya nilai 0 di memori sebelum dikirim
    lajurSkorSubjek.forEach(field => {
        localPlayerData[field] = parseInt(localPlayerData[field]) || 0;
    });
    // ==========================================
    
    try {
        await db.collection("players").doc(docId).set({
            ...localPlayerData, // Ini sudah merangkumi coins, inventory, 10 subjek, dll
            name: pName,
            class: pClass,
            school: pSchool,
            // Pastikan dua baris bawah ini betul!
            totalScore: parseInt(localPlayerData.totalScore) || 0,
            coins: parseInt(localPlayerData.coins) || 0, 
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        
        console.log("✅ Berjaya simpan ke Firestore!");
        
        if (typeof updateCategoryProgress === 'function') {
            updateCategoryProgress();
        }
    } catch (e) {
        console.error("❌ Sync Error (Gagal Simpan):", e);
    }
}

// ==========================================
// 7. UI UPDATES & UTILITIES
// ==========================================
function updateUI() {
    const elName = document.getElementById('display-name');
    const elClass = document.getElementById('display-class');
    const elCoins = document.getElementById('display-coins');
    const elTitle = document.getElementById('display-title');
    const elAvatar = document.getElementById('menu-avatar-container');

    if(elName) elName.innerText = studentInfo.name;
    if(elClass && studentInfo.class !== "ADMIN") elClass.innerText = "Class: " + studentInfo.class;
    if(elCoins) elCoins.innerText = localPlayerData.coins || 0;
    if(elTitle) elTitle.innerText = localPlayerData.activeTitle || "Novice";
    
    if (elAvatar) {
        if (localPlayerData.activeAvatar && localPlayerData.activeAvatar.icon) {
            elAvatar.innerText = localPlayerData.activeAvatar.icon;
        } else {
            elAvatar.innerText = "👤";
        }
    }
}

async function logout() {
    // 1. Tukar status jadi offline sebelum keluar
    await setMyOnlineStatus(false); 
    
    // 2. Kosongkan semua memori sesi sessionStorage
    sessionStorage.clear();
    
    // 3. Muat semula halaman untuk kembali ke skrin log masuk
    location.reload();
}

// ==========================================
// 8. LEVEL REWARDS (KEMASKINI: 100 Coins Per Level)
// ==========================================
function calculateLevel(xp) {
    if (!xp || xp < 100) return 1;
    // Formula kuadratik: Level = (-1 + sqrt(9 + 0.16 * xp)) / 2
    let lvl = (-1 + Math.sqrt(9 + 0.16 * xp)) / 2;
    return Math.floor(lvl) + 1;
}

function checkLevelRewardsOnLogin() {
    let currentTotalXP = Number(localPlayerData.totalScore) || 0;
    let currentLevel = calculateLevel(currentTotalXP);

    if (!localPlayerData.claimedLevels) localPlayerData.claimedLevels = [];
    let claimedArray = localPlayerData.claimedLevels.map(Number);
    let totalRewardToGive = 0;
    let newlyClaimed = [];

    // Semak level mana yang belum diberi hadiah
    for (let i = 2; i <= currentLevel; i++) {
        if (!claimedArray.includes(i)) {
            totalRewardToGive += 100; // Hadiah tetap 100 coins
            newlyClaimed.push(i);
            claimedArray.push(i);
        }
    }

    if (newlyClaimed.length > 0) {
        localPlayerData.claimedLevels = claimedArray;
        localPlayerData.coins = (Number(localPlayerData.coins) || 0) + totalRewardToGive;
        saveCloudPlayerData();
        
        setTimeout(() => {
            Swal.fire({
                title: '🎊 LEVEL UP!',
                html: `Tahniah! Anda mencapai <b>Level ${currentLevel}</b>.<br>Ganjaran: 💰 <b>${totalRewardToGive} Coins</b>`,
                icon: 'success'
            });
            updateUI();
            if (typeof updatePlayerLevelUI === 'function') updatePlayerLevelUI();
        }, 1500);
    }
}

// ==========================================
// 9. PENDAFTARAN PENGGUNA (ADMIN PANEL)
// ==========================================
function openAdminPanel() {
    showScreen('admin-screen');
    
    const superSection = document.getElementById('super-admin-section');
    const schoolSection = document.getElementById('school-admin-section');
    const schoolLabel = document.getElementById('admin-current-school');

    superSection.classList.add('hidden');
    schoolSection.classList.add('hidden');

    if (studentInfo.name === "SUPER ADMIN") {
        superSection.classList.remove('hidden');
    } 
    else if (studentInfo.class === "ADMIN" || localPlayerData.activeTitle === "School Admin") {
        schoolSection.classList.remove('hidden');
        schoolLabel.innerText = `Pangkalan Data: ${studentInfo.school}`;
    }
}

async function registerSchoolAdmin() {
    const schoolName = document.getElementById('reg-school-name').value.trim().toUpperCase();
    const adminName = document.getElementById('reg-admin-name').value.trim().toUpperCase();
    const pin = document.getElementById('reg-admin-pin').value.trim();

    if (!schoolName || !adminName || !pin) {
        Swal.fire("Tidak Lengkap", "Sila isi Nama Sekolah, Nama Admin, dan PIN.", "warning");
        return;
    }

    const docId = `${schoolName}_ADMIN_${adminName}`.replace(/\s+/g, '_');

    try {
        Swal.fire({ title: 'Mendaftarkan Sekolah...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
        
        await db.collection("players").doc(docId).set({
            name: adminName,
            class: "ADMIN",
            school: schoolName,
            passcode: pin,
            activeTitle: "School Admin",
            coins: 0,
            totalScore: 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        Swal.fire("Berjaya!", `Admin Sekolah ${schoolName} telah didaftarkan.`, "success");
        
        document.getElementById('reg-school-name').value = "";
        document.getElementById('reg-admin-name').value = "";
        document.getElementById('reg-admin-pin').value = "";
        
    } catch (e) {
        console.error(e);
        Swal.fire("Ralat", "Gagal mendaftar sekolah.", "error");
    }
}

async function registerStudent() {
    const stuName = document.getElementById('reg-student-name').value.trim().toUpperCase();
    const stuClass = document.getElementById('reg-student-class').value.trim().toUpperCase();
    const pin = document.getElementById('reg-student-pin').value.trim();
    const schoolName = studentInfo.school; 

    if (!stuName || !stuClass) {
        Swal.fire("Tidak Lengkap", "Sila isi Nama Murid dan Kelas.", "warning");
        return;
    }

    const docId = `${schoolName}_${stuClass}_${stuName}`.replace(/\s+/g, '_');

    try {
        Swal.fire({ title: 'Mendaftarkan Murid...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });

        const docSnap = await db.collection("players").doc(docId).get();
        if (docSnap.exists) {
            Swal.fire("Akaun Wujud", "Murid ini telah pun didaftarkan sebelum ini.", "info");
            return;
        }

        const initialData = {
            name: stuName,
            class: stuClass,
            school: schoolName,
            passcode: pin,
            coins: 0,
            inventory: [],
            avatars: {},
            activeAvatar: null,
            achievements: [],
            activeTitle: "Novice",
            totalScore: 0,
            claimedLevels: [],
            lastPlayed: [],
            games: {},
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        await db.collection("players").doc(docId).set(initialData);

        Swal.fire("Berjaya!", `${stuName} berjaya didaftarkan ke kelas ${stuClass}.`, "success");

        document.getElementById('reg-student-name').value = "";
        document.getElementById('reg-student-class').value = "";
        document.getElementById('reg-student-pin').value = "";

    } catch (e) {
        console.error(e);
        Swal.fire("Ralat", "Gagal mendaftar murid.", "error");
    }
}

// ==========================================
// 10. DINAMIK DROPDOWN (KEMASKINI V2)
// ==========================================
async function loadSchoolsDropdown() {
    const schoolSelect = document.getElementById('login-school'); // ID yang betul!
    if (!schoolSelect) return;

    try {
        // Tarik senarai sekolah dari pendaftaran Super Admin
        const snapshot = await db.collection("school_admins").get();
        let schoolsList = new Set();
        
        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.schoolName) {
                schoolsList.add(data.schoolName.toUpperCase());
            }
        });

        schoolSelect.innerHTML = `<option value="" disabled selected>-- Select School --</option>`;
        let sortedSchools = Array.from(schoolsList).sort();
        
        sortedSchools.forEach(school => {
            const opt = document.createElement('option');
            opt.value = school;
            opt.innerText = school;
            schoolSelect.appendChild(opt);
        });

        const adminOpt = document.createElement('option');
        adminOpt.value = "ADMIN";
        adminOpt.innerText = "ADMIN / GAME MASTER";
        schoolSelect.appendChild(adminOpt);

    } catch (error) {
        console.error("Ralat memuat turun senarai sekolah:", error);
    }
}

// ==========================================
// 11. DATA FETCHING & EDITING (ADMIN DASHBOARD)
// ==========================================

async function loadAdminSchools() {
    const list = document.getElementById('sa-schools-list');
    if(!list) return;
    list.innerHTML = '<tr><td colspan="4" class="text-center italic py-4">Memuat turun data...</td></tr>';
    
    try {
        const snapshot = await db.collection("players").where("activeTitle", "==", "School Admin").get();
        list.innerHTML = "";
        
        if(snapshot.empty) {
            list.innerHTML = '<tr><td colspan="4" class="text-center py-4">Tiada sekolah didaftarkan.</td></tr>';
            return;
        }
        
        snapshot.forEach(doc => {
            const d = doc.data();
            if(d.school !== "ADMIN") {
                const dateStr = d.createdAt ? d.createdAt.toDate().toLocaleDateString() : 'N/A';
                list.innerHTML += `
                    <tr class="hover:bg-gray-50">
                        <td class="font-bold text-purple-700 uppercase">${d.school}</td>
                        <td class="uppercase">${d.name}</td>
                        <td>${dateStr}</td>
                        <td class="flex gap-2">
                            <button onclick="editSchoolAdmin('${doc.id}', '${d.school}', '${d.name}', '${d.passcode || ''}')" class="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm shadow-sm hover:bg-blue-600 font-bold">Edit</button>
                            <button onclick="deleteAccount('${doc.id}')" class="bg-red-500 text-white px-3 py-1 rounded-lg text-sm shadow-sm hover:bg-red-600 font-bold">Padam</button>
                        </td>
                    </tr>
                `;
            }
        });
    } catch(e) {
        console.error(e);
        list.innerHTML = '<tr><td colspan="4" class="text-center text-red-500">Ralat memuat turun data.</td></tr>';
    }
}

async function loadGlobalStudents() {
    const list = document.getElementById('sa-students-list');
    const filterDropdown = document.getElementById('sa-filter-school');
    const filterVal = filterDropdown ? filterDropdown.value : "ALL";
    if(!list) return;

    list.innerHTML = '<tr><td colspan="5" class="text-center italic py-4">Memuat turun data...</td></tr>';
    try {
        const snapshot = await db.collection("players").get();
        list.innerHTML = "";
        
        let schoolsSet = new Set();
        let count = 0;
        
        snapshot.forEach(doc => {
            const d = doc.data();
            
            if (d.activeTitle === "School Admin" && d.school !== "ADMIN") {
                schoolsSet.add(d.school);
            }

            if(d.school === "ADMIN" || d.activeTitle === "School Admin" || d.class === "ADMIN") return;
            if (d.school) schoolsSet.add(d.school);

            if (filterVal === "ALL" || filterVal === d.school) {
                count++;
                list.innerHTML += `
                    <tr class="hover:bg-gray-50">
                        <td class="font-bold text-indigo-700 uppercase">${d.school}</td>
                        <td class="uppercase">${d.name}</td>
                        <td class="uppercase">${d.class}</td>
                        <td class="font-bold text-yellow-600">${d.coins || 0}</td>
                        <td class="flex gap-2">
                            <button onclick="editStudent('${doc.id}', '${d.school}', '${d.name}', '${d.class}', ${d.coins || 0}, '${d.passcode || ''}')" class="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm shadow-sm hover:bg-blue-600 font-bold">Edit</button>
                            <button onclick="deleteAccount('${doc.id}')" class="bg-red-500 text-white px-3 py-1 rounded-lg text-sm shadow-sm hover:bg-red-600 font-bold">Padam</button>
                        </td>
                    </tr>
                `;
            }
        });

        if(count === 0) list.innerHTML = `<tr><td colspan="5" class="text-center py-4 font-bold text-gray-500">Tiada murid dijumpai untuk carian ini.</td></tr>`;

        if (filterDropdown) {
            const currentSelection = filterDropdown.value; 
            filterDropdown.innerHTML = `<option value="ALL">Semua Sekolah</option>`;
            let sortedSchools = Array.from(schoolsSet).sort();
            
            sortedSchools.forEach(sch => {
                filterDropdown.innerHTML += `<option value="${sch}">${sch.toUpperCase()}</option>`;
            });
            
            if(sortedSchools.includes(currentSelection)) {
                filterDropdown.value = currentSelection;
            }
        }

    } catch(e) {
        console.error(e);
        list.innerHTML = '<tr><td colspan="5" class="text-center text-red-500">Ralat memuat turun data.</td></tr>';
    }
}

// ------------------------------------------
// FUNGSI EDIT ADMIN SEKOLAH (POPUP)
// ------------------------------------------
async function editSchoolAdmin(docId, school, currentName, currentPin) {
    const { value: formValues } = await Swal.fire({
        title: 'Edit Admin Sekolah',
        html:
            `<div class="text-left text-sm mb-4 font-bold text-purple-700">Sekolah: ${school}</div>` +
            `<label class="block text-left text-sm font-bold mt-2">Nama Admin</label>`+
            `<input id="swal-admin-name" class="swal2-input uppercase w-4/5" value="${currentName}">` +
            `<label class="block text-left text-sm font-bold mt-2">PIN Baru</label>`+
            `<input id="swal-admin-pin" class="swal2-input w-4/5" value="${currentPin}">`,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        preConfirm: () => {
            return {
                newName: document.getElementById('swal-admin-name').value.trim().toUpperCase(),
                passcode: document.getElementById('swal-admin-pin').value.trim()
            }
        }
    });

    if (formValues) {
        try {
            Swal.fire({ title: 'Menyimpan...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
            
            const newDocId = `${school}_ADMIN_${formValues.newName}`.replace(/\s+/g, '_');
            
            // Jika nama admin bertukar, kita perlu pindahkan ID Dokumen di Firebase
            if (newDocId !== docId) {
                const oldDoc = await db.collection("players").doc(docId).get();
                const data = oldDoc.data();
                data.name = formValues.newName;
                data.passcode = formValues.passcode;
                
                await db.collection("players").doc(newDocId).set(data);
                await db.collection("players").doc(docId).delete();
            } else {
                // Jika hanya tukar PIN, update dokumen lama
                await db.collection("players").doc(docId).update({
                    passcode: formValues.passcode
                });
            }
            Swal.fire("Berjaya", "Data admin telah dikemaskini.", "success");
            loadAdminSchools(); // Segar semula jadual
        } catch (e) {
            console.error(e);
            Swal.fire("Ralat", "Gagal mengemaskini data.", "error");
        }
    }
}

// ------------------------------------------
// FUNGSI EDIT MURID (POPUP)
// ------------------------------------------
async function editStudent(docId, school, currentName, currentClass, currentCoins, currentPin) {
    const { value: formValues } = await Swal.fire({
        title: 'Edit Data Murid',
        html:
            `<div class="text-left text-sm mb-4 font-bold text-indigo-700">Sekolah: ${school}</div>` +
            `<label class="block text-left text-sm font-bold mt-2">Nama Murid</label>`+
            `<input id="swal-stu-name" class="swal2-input uppercase w-4/5" value="${currentName}">` +
            `<label class="block text-left text-sm font-bold mt-2">Kelas</label>`+
            `<input id="swal-stu-class" class="swal2-input uppercase w-4/5" value="${currentClass}">` +
            `<label class="block text-left text-sm font-bold mt-2">Syiling (Coins)</label>`+
            `<input id="swal-stu-coins" type="number" class="swal2-input w-4/5" value="${currentCoins}">`+
            `<label class="block text-left text-sm font-bold mt-2">PIN / Passcode</label>`+
            `<input id="swal-stu-pin" class="swal2-input w-4/5" value="${currentPin}">`,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        preConfirm: () => {
            return {
                newName: document.getElementById('swal-stu-name').value.trim().toUpperCase(),
                newClass: document.getElementById('swal-stu-class').value.trim().toUpperCase(),
                coins: parseInt(document.getElementById('swal-stu-coins').value) || 0,
                passcode: document.getElementById('swal-stu-pin').value.trim()
            }
        }
    });

    if (formValues) {
        try {
            Swal.fire({ title: 'Menyimpan...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
            
            const newDocId = `${school}_${formValues.newClass}_${formValues.newName}`.replace(/\s+/g, '_');
            
            // Logik pemindahan rekod jika Nama atau Kelas berubah (untuk kekalkan Login murid)
            if (newDocId !== docId) {
                const oldDoc = await db.collection("players").doc(docId).get();
                const data = oldDoc.data();
                data.name = formValues.newName;
                data.class = formValues.newClass;
                data.coins = formValues.coins;
                data.passcode = formValues.passcode;
                
                await db.collection("players").doc(newDocId).set(data);
                await db.collection("players").doc(docId).delete();
            } else {
                await db.collection("players").doc(docId).update({
                    coins: formValues.coins,
                    passcode: formValues.passcode
                });
            }
            Swal.fire("Berjaya", "Profil murid telah dikemaskini.", "success");
            loadGlobalStudents(); // Segar semula jadual
        } catch (e) {
            console.error(e);
            Swal.fire("Ralat", "Gagal mengemaskini data.", "error");
        }
    }
}

// ------------------------------------------
// ANALISIS & LAIN-LAIN
// ------------------------------------------
async function loadSystemAnalysis() {
    const elSchools = document.getElementById('stat-total-schools');
    const elStudents = document.getElementById('stat-total-students');
    const elList = document.getElementById('stat-breakdown-list');
    if(!elSchools) return;

    try {
        const snapshot = await db.collection("players").get();
        let schoolAdmins = 0;
        let students = 0;
        let breakdown = {};

        snapshot.forEach(doc => {
            const d = doc.data();
            if (d.school === "ADMIN") return; 
            
            if (d.activeTitle === "School Admin" || d.class === "ADMIN") {
                schoolAdmins++;
            } else {
                students++;
                if (!breakdown[d.school]) breakdown[d.school] = 0;
                breakdown[d.school]++;
            }
        });

        elSchools.innerText = schoolAdmins;
        elStudents.innerText = students;
        elList.innerHTML = "";
        
        for (let sch in breakdown) {
            elList.innerHTML += `<li class="flex justify-between border-b border-gray-100 pb-2 pt-2"><span class="uppercase">${sch}</span> <span class="font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-lg">${breakdown[sch]} murid</span></li>`;
        }
        if(Object.keys(breakdown).length === 0) elList.innerHTML = "<li class='italic'>Belum ada murid didaftarkan.</li>";

    } catch(e) {
        console.error(e);
    }
}

async function deleteAccount(docId) {
    if(confirm("AWAS: Adakah anda pasti mahu memadam akaun ini? Data yang dipadam tidak boleh dikembalikan.")) {
        try {
            await db.collection("players").doc(docId).delete();
            Swal.fire("Berjaya", "Akaun telah dipadam secara kekal.", "success");
            
            if(!document.getElementById('sa-schools-screen').classList.contains('hidden')) loadAdminSchools();
            if(!document.getElementById('sa-students-screen').classList.contains('hidden')) loadGlobalStudents();
        } catch(e) {
            console.error(e);
            Swal.fire("Ralat", "Gagal memadam akaun.", "error");
        }
    }
}

// ==========================================
// 12. FUNGSI PEMAIN AKTIF (PENGASINGAN KOLEKSI - ANTI-READS LEAK)
// ==========================================
async function setMyOnlineStatus(status) {
    // 1. CARI DATA PEMAIN DENGAN SELAMAT (Elak ReferenceError)
    let player = null;
    if (typeof studentInfo !== 'undefined' && studentInfo && studentInfo.name) {
        player = studentInfo;
    } else if (typeof localPlayerData !== 'undefined' && localPlayerData && localPlayerData.name) {
        player = localPlayerData;
    }

    if (!player || typeof db === 'undefined') return;
    if (player.name === "SUPER ADMIN" || player.class === "ADMIN") return;

    try {
        const docId = `${player.school}_${player.class}_${player.name}`.replace(/\s+/g, '_');
        
        // 🔴 KEMASKINI 1: Kemaskini status utama di 'players' untuk PVP (Tanpa listener)
        const userRef = db.collection('players').doc(docId);
        let updateData = {
            isOnline: status,
            lastActive: firebase.firestore.FieldValue.serverTimestamp()
        };
        if (status === false) {
            updateData.currentStatus = "offline";
        } else {
            updateData.currentStatus = "idle";
        }
        userRef.set(updateData, { merge: true }).catch(e => console.error(e));

        // 🟢 KEMASKINI 2: Sediakan mini-dokumen untuk senarai 'Online' (Koleksi Baharu!)
        const onlineRef = db.collection('online_status').doc(docId);
        let currentLvl = typeof calculateLevel === "function" ? calculateLevel(Number(localPlayerData.totalScore) || 0) : (localPlayerData.level || 1);
        let currentAvatar = typeof localPlayerData !== 'undefined' ? (localPlayerData.activeAvatar || "👤") : "👤";
        
        if (status === true) {
            // Tulis dokumen ringan jika online
            await onlineRef.set({
                name: player.name,
                school: player.school,
                level: currentLvl,
                avatar: currentAvatar,
                isOnline: true,
                lastActive: firebase.firestore.FieldValue.serverTimestamp()
            });
        } else {
            // Padam dari memori Firebase jika offline (Jimat Ruang!)
            await onlineRef.delete();
        }

    } catch (error) {
        console.log("Ralat kemaskini status online:", error);
    }
}

let unreadChats = []; 

function listenForNotifications() {
    if (typeof studentInfo === 'undefined' || !studentInfo || !studentInfo.name) return;

    db.collection('chats')
      .where('unreadFor', '==', studentInfo.name)
      .onSnapshot((snapshot) => {
          unreadChats = [];
          
          snapshot.forEach(doc => {
              const data = doc.data();
              if (data.lastSender && data.lastSender !== studentInfo.name) {
                  unreadChats.push(data.lastSender);
              }
          });
          
          console.log("Mesej belum dibaca dari:", unreadChats);
          // 🛑 KEMASKINI: Tiada lagi panggilan setMyOnlineStatus(true) di sini!
          // Loop Reads dari notifikasi telah ditutup sepenuhnya.
      });
}

// ==========================================
// 🔥 TAMBAHAN: AUTO-DETECT BROWSER BUKA / TUTUP 🔥
// ==========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        if (typeof setMyOnlineStatus === 'function') {
            setMyOnlineStatus(true);
            console.log("📡 Isyarat dihantar: Pemain kini ONLINE!");
        }
    }, 2000);
});

window.addEventListener('beforeunload', () => {
    if (typeof setMyOnlineStatus === 'function') {
        setMyOnlineStatus(false);
    }
});

function listenToActivePlayers() {
    if (typeof db === 'undefined' || !studentInfo) return;

    // 🟢 KEMASKINI 3: Pantau koleksi 'online_status', BUKAN 'players'
    db.collection('online_status')
      .where('school', '==', studentInfo.school)
      .where('isOnline', '==', true)
      .onSnapshot((snapshot) => {
          const container = document.getElementById('dashboard-active-players-list');
          const countBadge = document.getElementById('active-players-count');
          
          if (!container || !countBadge) return;
          
          container.innerHTML = ''; 
          let activeCount = 0;
          const now = new Date(); 

          snapshot.forEach((doc) => {
              const player = doc.data();
              
              if (player.name === studentInfo.name) return; 

              if (player.lastActive) {
                  const lastActiveDate = player.lastActive.toDate(); 
                  const diffMinutes = (now - lastActiveDate) / (1000 * 60);
                  if (diffMinutes > 15) return; 
              }

              activeCount++;

              let miniAvatar = '';
              let avData = player.avatar;
              if (typeof avData === 'object' && avData !== null && avData.icon) {
                  miniAvatar = `<i class="${avData.icon} text-white"></i>`;
              } else if (typeof avData === 'string' && avData.startsWith('img|')) {
                  miniAvatar = `<img src="${avData.replace('img|', '')}" class="w-full h-full object-contain">`;
              } else if (typeof avData === 'string' && avData.startsWith('icon|')) {
                  miniAvatar = `<i class="${avData.replace('icon|', '')} text-white"></i>`;
              } else {
                  miniAvatar = `<span class="text-white">${avData || '👤'}</span>`;
              }

              const isUnread = typeof unreadChats !== 'undefined' && unreadChats.includes(player.name);

              // 🟢 KEMASKINI 4: Rekabentuk UI Transparent Kompak (Gaya Mobile Legends)
              const playerHtml = `
                  <div class="flex items-center gap-2 bg-transparent p-1 rounded hover:bg-black/20 transition-colors cursor-pointer relative" onclick="openChatWith('${player.name}')">
                      ${isUnread ? '<span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white animate-pulse z-10 shadow-sm"></span>' : ''}
                      
                      <div class="w-5 h-5 bg-black/60 text-[8px] rounded-full flex items-center justify-center flex-shrink-0 border ${isUnread ? 'border-red-400' : 'border-white/10'} shadow-inner">
                          ${miniAvatar}
                      </div>
                      
                      <div class="flex flex-col min-w-0 leading-tight">
                          <span class="text-[9px] font-bold ${isUnread ? 'text-red-400' : 'text-white'} truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-wide">${player.name || "Unknown"}</span>
                          <span class="text-[7px] text-green-400 font-extrabold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">LVL ${player.level || 1}</span>
                      </div>
                      ${isUnread ? '<span class="ml-auto text-[7px] font-black text-red-500 animate-bounce tracking-widest drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">NEW!</span>' : ''}
                  </div>
              `;
              container.insertAdjacentHTML('beforeend', playerHtml);
          });

          countBadge.innerText = activeCount;

          if (activeCount === 0) {
              container.innerHTML = `
                <div class="flex flex-col items-center justify-center py-4 opacity-50">
                    <i class="fas fa-ghost text-lg text-white mb-1 drop-shadow-md"></i>
                    <span class="text-[8px] font-bold text-white uppercase tracking-widest drop-shadow-md">Sunyi sepi...</span>
                </div>`;
          }
      });
}
              
// ==========================================
// KAWALAN UI & FIREBASE KOTAK SEMBANG (CHAT)
// ==========================================

let currentChatRecipient = ""; 
let currentChatSnapshot = null; // Untuk simpan status 'telinga' Firebase

// 1. Fungsi cipta ID Bilik Sembang yang unik (Gabungan 2 nama)
function getChatRoomId(player1, player2) {
    // Susun nama mengikut abjad supaya Ahmad-Siti dan Siti-Ahmad guna bilik yang sama
    const sortedNames = [player1, player2].sort();
    // Buang jarak untuk elak ralat pada nama dokumen Firestore
    return `room_${sortedNames[0]}_${sortedNames[1]}`.replace(/\s+/g, '_');
}

// 2. Buka kotak sembang & mula dengar mesej
async function openChatWith(playerName) {
    currentChatRecipient = playerName;
    
    // Buka UI kotak sembang
    const chatBox = document.getElementById('floating-chat-box');
    const recipientNameEl = document.getElementById('chat-recipient-name');
    const bodyContainer = document.getElementById('chat-body-container');
    const minimizeBtn = document.getElementById('btn-minimize-chat');
    
    // Keselamatan tambahan jika kotak gagal dimuatkan
    if (!chatBox) return; 

    recipientNameEl.innerText = playerName;
    bodyContainer.classList.remove('hidden');
    minimizeBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    
    chatBox.classList.remove('hidden');
    chatBox.classList.add('flex');
    
    // ==========================================
    // KEMASKINI BARU: Padam status 'unread' dengan Selamat
    // ==========================================
    const myName = studentInfo.name;
    const roomId = getChatRoomId(myName, playerName);
    
    try {
        await db.collection('chats').doc(roomId).set({
            unreadFor: "" 
        }, { merge: true });
    } catch (e) {
        // Log ini dikekalkan sedikit hanya untuk menangkap ralat database/Firebase
        console.error("Gagal mengemaskini status unread:", e);
    }

    // Mula dengar mesej masuk
    listenToChatMessages(playerName);

    // ==========================================
    // TAMBAHAN BARU: Auto-buka senarai Canned Chat
    // ==========================================
    toggleQuickChat(true);
}

// 3. Fungsi Dengar Mesej (Real-time dari Firestore)
function listenToChatMessages(recipientName) {
    const myName = studentInfo.name;
    const roomId = getChatRoomId(myName, recipientName);
    const messagesContainer = document.getElementById('chat-messages');

    // Jika sebelum ini ada dengar chat orang lain, matikan 'telinga' itu dulu
    if (currentChatSnapshot) {
        currentChatSnapshot(); 
    }

    messagesContainer.innerHTML = '<div class="text-center text-xs text-gray-400 mt-4"><i class="fas fa-spinner fa-spin"></i> Memuatkan mesej...</div>';

    // Dengar perubahan di bilik sembang khusus ini
    currentChatSnapshot = db.collection('chats').doc(roomId).collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
            messagesContainer.innerHTML = ''; // Kosongkan container

            if (snapshot.empty) {
                messagesContainer.innerHTML = '<div class="text-center text-xs text-gray-400 mt-4 italic">Belum ada mesej. Ucapkan Hai!</div>';
                return;
            }

            snapshot.forEach((doc) => {
                const data = doc.data();
                const isMe = (data.sender === myName); // Semak siapa hantar

                // Bina HTML berdasarkan siapa yang hantar
                // NOTA: Kelas 'whitespace-pre-wrap' ditambah pada kedua-dua gelembung!
                const msgHtml = isMe ? 
                    `<div class="flex justify-end mb-2">
                        <div class="whitespace-pre-wrap bg-indigo-500 text-white text-[11px] py-2 px-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%]">
                            ${data.message}
                        </div>
                    </div>` 
                    : 
                    `<div class="flex justify-start mb-2">
                        <div class="whitespace-pre-wrap bg-white border border-gray-100 text-gray-800 text-[11px] py-2 px-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
                            ${data.message}
                        </div>
                    </div>`;

                messagesContainer.insertAdjacentHTML('beforeend', msgHtml);
            });

            // Auto-scroll ke mesej paling bawah (mesej terkini)
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
}

// ==========================================
// 8. LOGIK QUICK CHAT (MESEJ PANTAS)
// ==========================================

let isQuickChatMenuOpen = false;

// Buka/Tutup menu pop-up bawah
function toggleQuickChat(forceState) {
    const menu = document.getElementById('quick-chat-menu');
    const chevron = document.getElementById('quick-chat-chevron');
    
    isQuickChatMenuOpen = forceState !== undefined ? forceState : !isQuickChatMenuOpen;

    if (isQuickChatMenuOpen) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        chevron.classList.add('rotate-180');
        showQuickChatCategories(); // Reset sentiasa tunjuk kategori mula-mula
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        chevron.classList.remove('rotate-180');
    }
}

// Papar senarai Kategori (Greetings, Social, dll)
function showQuickChatCategories() {
    const list = document.getElementById('quick-chat-list');
    const title = document.getElementById('quick-chat-title');
    const backBtn = document.getElementById('quick-chat-back');

    title.innerText = "KATEGORI MESEJ";
    backBtn.classList.add('hidden');
    list.innerHTML = '';

    // Gelung baca dari objek quickChatData
    for (let category in quickChatData) {
        const btn = document.createElement('button');
        btn.className = "text-left text-xs font-bold text-gray-700 bg-gray-50 hover:bg-indigo-50 p-2.5 rounded-lg border border-gray-100 hover:border-indigo-200 transition-colors shadow-sm active:scale-[0.98]";
        btn.innerText = category;
        btn.onclick = () => showQuickChatMessages(category);
        list.appendChild(btn);
    }
}

// Papar ayat sebenar di dalam kategori yang dipilih (Dikemas kini untuk 5 Bahasa)
function showQuickChatMessages(category) {
    const list = document.getElementById('quick-chat-list');
    const title = document.getElementById('quick-chat-title');
    const backBtn = document.getElementById('quick-chat-back');

    title.innerText = category.toUpperCase();
    backBtn.classList.remove('hidden');
    list.innerHTML = '';

    const messages = quickChatData[category];
    messages.forEach(msgObj => {
        const btn = document.createElement('button');
        // Kita guna flex-col supaya ayat tersusun ke bawah seperti senarai
        btn.className = "text-left flex flex-col gap-0.5 w-full bg-white hover:bg-green-50 p-2.5 rounded-lg border border-gray-100 hover:border-green-300 transition-colors shadow-sm active:scale-[0.98] mb-2";
        
        // Paparan 5 Bahasa di dalam menu pop-up butang
        btn.innerHTML = `
            <span class="text-[12px] font-bold text-gray-800">${msgObj.en}</span>
            <span class="text-[10px] font-medium text-gray-500 border-t border-gray-100 pt-1 mt-1">🇲🇾 ${msgObj.ms}</span>
            <span class="text-[10px] font-medium text-blue-600">🇨🇳 ${msgObj.zh}</span>
            <span class="text-[10px] font-medium text-red-500">🇯🇵 ${msgObj.ja}</span>
            <span class="text-[10px] font-medium text-emerald-600">🇸🇦 ${msgObj.ar}</span>
        `;

        // Gabungkan kesemua 5 bahasa menggunakan "line break (\n)" untuk dihantar ke Firebase
        const combinedMessage = `${msgObj.en}\n🇲🇾 ${msgObj.ms}\n🇨🇳 ${msgObj.zh}\n🇯🇵 ${msgObj.ja}\n🇸🇦 ${msgObj.ar}`;

        // Apabila mesej ditekan, ia menghantar kesemua 5 bahasa kepada rakan
        btn.onclick = () => sendQuickMessage(combinedMessage); 
        list.appendChild(btn);
    });
}

// Hantar Mesej ke Firebase (Ganti fungsi sendMessage lama)
async function sendQuickMessage(msgText) {
    if (!msgText || !currentChatRecipient) return; 
    
    const myName = studentInfo.name;
    const roomId = getChatRoomId(myName, currentChatRecipient);
    
    toggleQuickChat(false); // Tutup menu
    
    try {
        // 1. Masukkan mesej ke pangkalan data
        await db.collection('chats').doc(roomId).collection('messages').add({
            sender: myName,
            recipient: currentChatRecipient,
            message: msgText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        // 2. INI SUIS TITIK MERAH: Maklumkan kepada rakan bahawa ada mesej belum dibaca
        await db.collection('chats').doc(roomId).set({
            lastSender: myName,
            unreadFor: currentChatRecipient 
        }, { merge: true });

    } catch (error) {
        console.error("Gagal hantar mesej:", error);
    }
}

// 6. Tutup kotak & matikan 'telinga'
function closeChatBox(event) {
    if (event) event.stopPropagation(); 
    
    const chatBox = document.getElementById('floating-chat-box');
    chatBox.classList.add('hidden');
    chatBox.classList.remove('flex');
    currentChatRecipient = "";
    
    if (currentChatSnapshot) {
        currentChatSnapshot(); // Berhenti dengar mesej bila tutup chat (jimat kuota)
        currentChatSnapshot = null;
    }
}

// 7. Minimize kotak
function toggleChatMinimize() {
    const bodyContainer = document.getElementById('chat-body-container');
    const minimizeBtn = document.getElementById('btn-minimize-chat');
    
    if (bodyContainer.classList.contains('hidden')) {
        bodyContainer.classList.remove('hidden');
        minimizeBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    } else {
        bodyContainer.classList.add('hidden');
        minimizeBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    }
}

// ==========================================
// 13. PENGESAN TUTUP BROWSER & TUKAR TAB (AUTO-LOGOUT PVP)
// ==========================================

// 1. Pengesan apabila murid PANGKAH / TUTUP TAB browser
window.addEventListener('beforeunload', function () {
    // Hantar isyarat "Offline" secara terus sebelum browser terpadam
    setMyOnlineStatus(false);
});

// 2. Pengesan apabila murid MINIMIZE atau TUKAR TAB (Khas untuk Tablet/Telefon)
window.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        // Tab sedang disembunyikan / pemain buka app lain -> Set Offline & Hilangkan dari senarai PvP
        setMyOnlineStatus(false);
    } else if (document.visibilityState === 'visible') {
        // Pemain kembali semula ke tab game -> Set Online & Idle semula
        setMyOnlineStatus(true);
    }
});
