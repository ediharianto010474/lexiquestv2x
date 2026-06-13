// ==========================================
// LEXIQUEST V2 - CONFIGURATION (FIREBASE READY)
// ==========================================

// Tetapan Subjek & Status Semasa
let currentSubject = "math"; // 'english' atau 'math'
let currentTimer;
let timeLeft;
let studentInfo = { 
    name: '', 
    class: '', 
    xp: 0, 
    level: 1,
    // Senarai 10 subjek selari dengan Firestore
    score_bm: 0,
    score_english: 0,
    score_matematik: 0,
    score_sains: 0,
    score_sejarah: 0,
    score_moral: 0,
    score_muzik: 0,
    score_pjk: 0,
    score_psv: 0,
    score_rbt: 0,
    score_pai: 0,
    score_ba: 0
};
let currentGameType = ''; 
let studentDatabase = [];
let localPlayerData = { coins: 0, inventory: [], avatars: {}, activeAvatar: null };

// Pemboleh ubah Memori Cabaran (PVP/3v3)
let isChallengeMode = false;
let activeChallengeCode = null;
let targetScoreToBeat = 0;
let activeChallengerName = "";
let isArenaMode = false;
let currentArenaRoomId = null;
let currentArenaRole = "";

// =============================================================================
// HAD MASA MENJAWAB DINAMIK GLOBAL (DALAM UNIT SAAT)
// =============================================================================
const HAD_MASA_GAME = {
    // -------------------------------------------------------------------------
    // MATEMATIK (Mengikut Ketetapan Asal)
    // -------------------------------------------------------------------------
    "number_recognition": 300,
    "addition_basic": 300,
    "subtraction_basic": 300,
    "multiplication_table": 300,
    "division_basic": 300,
    "shapes_and_space": 300,
    
    "fractions_intro": 420,
    "decimal_basics": 420,
    "percentage_fun": 420,
    "money_matters": 420,
    "time_and_clock": 420,
    "length_and_mass": 420,

    "volume_of_liquid": 560,    
    "area_and_perimeter": 560,
    "data_handling": 560,
    "math_logic": 560,

    // -------------------------------------------------------------------------
    // SAINS (Mengikut Ketetapan Asal: 5 Minit Semuanya)
    // -------------------------------------------------------------------------
    "scientific_skills": 300,
    "human_life_processes": 300,
    "animal_classification": 300,
    "plant_processes": 300,
    "energy_forms": 300,
    "light_properties": 300,
    "electricity_basics": 300,
    "heat_and_temperature": 300,
    "states_of_matter": 300,
    "food_chains": 300,
    "materials_properties": 300,
    "solar_system": 300,
    "machines_simple": 300,
    "microorganisms": 300,
    "food_preservation": 300,
    "preservation_conservation": 300,

    // -------------------------------------------------------------------------
    // BAHASA MELAYU 🇲🇾
    // -------------------------------------------------------------------------
    // Tahap Mudah (5 Minit)
    "kata_nama": 300,
    "kata_kerja": 300,
    "kata_adjektif": 300,
    "kata_tugas": 300,
    // Tahap Sederhana (6 Minit)
    "penjodoh_bilangan": 360,
    "sinonim_antonim": 360,
    "ayat_tunggal": 360,
    "ayat_majmuk": 360,
    // Tahap Sukar (7 Minit - Perlu lebih masa membaca & memikir struktur ayat)
    "kesalahan_tatabahasa": 420,
    "peribahasa": 420,
    "ayat_aktif_pasif": 420,
    "susunan_songsang": 420,

    // -------------------------------------------------------------------------
    // PENDIDIKAN MUZIK 🎵
    // -------------------------------------------------------------------------
    // Tahap Mudah (5 Minit)
    "notasi_dan_balar": 300,
    "klef_trebel": 300,
    "jenis_alat_muzik": 300,
    // Tahap Sederhana (6 Minit)
    "nilai_nota_ritma": 360,
    "solfa_dan_nyanyian": 360,
    "muzik_tradisional": 360,
    // Tahap Sukar (7 Minit)
    "apresiasi_muzik": 420,
    "etika_persembahan": 420,
    "kerjaya_muzik": 420,

    // -------------------------------------------------------------------------
    // PENDIDIKAN KESIHATAN 🩺
    // -------------------------------------------------------------------------
    // Tahap Mudah (5 Minit)
    "gimnastik_asas": 300,
    "pergerakan_berirama": 300,
    "permainan_asas": 300,
    // Tahap Sederhana (6 Minit)
    "kesihatan_diri": 360,
    "kebersihan_reproduktif": 360,
    "pemakanan_sihat": 360,
    // Tahap Sukar (7 Minit)
    "pertolongan_cemas": 420,
    "pengurusan_mental_emosi": 420,
    "penyakit_berjangkit": 420,

    // -------------------------------------------------------------------------
    // PENDIDIKAN MORAL 🤝
    // -------------------------------------------------------------------------
    // Tahap Mudah (5 Minit)
    "kepercayaan_kepada_tuhan": 300,
    "baik_hati": 300,
    "bertanggungjawab": 300,
    "berterima_kasih": 300,
    // Tahap Sederhana (6 Minit)
    "hemah_tinggi": 360,
    "hormat_menghormati": 360,
    "kasih_sayang": 360,
    "keadilan": 360,
    // Tahap Sukar (7 Minit)
    "keberanian": 420,
    "kejujuran": 420,
    "kerajinan": 420,
    "kerjasama": 420,
    "kesederhanaan": 420,
    "hak_asasi": 420,

    // -------------------------------------------------------------------------
    // SEJARAH ⏳
    // -------------------------------------------------------------------------
    // Tahap Mudah (5 Minit)
    "pengenalan_ilmu_sejarah": 300,
    "sejarah_diri_dan_keluarga": 300,
    "sejarah_sekolah": 300,
    // Tahap Sederhana (6 Minit)
    "zaman_air_batu": 360,
    "zaman_prasejarah": 360,
    "kerajaan_melayu_awal": 360,
    // Tahap Sukar (7 Minit)
    "tokoh_terbilang": 420,
    "warisan_negara": 420,
    "pembangunan_dan_ekonomi": 420,

    // -------------------------------------------------------------------------
    // SENI VISUAL 🎨
    // -------------------------------------------------------------------------
    // Tahap Mudah (5 Minit)
    "unsur_seni": 300,
    "prinsip_rekaan": 300,
    "media_dan_bahan": 300,
    // Tahap Sederhana (6 Minit)
    "lukisan_dan_catan": 360,
    "membuat_corak": 360,
    "membentuk_binaan": 360,
    // Tahap Sukar (7 Minit)
    "kraf_tradisional": 420,
    "apresiasi_seni": 420,
    "pameran_seni": 420,

    // -------------------------------------------------------------------------
    // REKA BENTUK DAN TEKNOLOGI ⚙️
    // -------------------------------------------------------------------------
    // Tahap Mudah (5 Minit)
    "keselamatan_bengkel": 300,
    "pengenalan_reka_bentuk": 300,
    "alatan_tangan": 300,
    // Tahap Sederhana (6 Minit)
    "asas_teknologi": 360,
    "reka_bentuk_pengaturcaraan": 360,
    "hidroponik": 360,
    // Tahap Sukar (7 Minit)
    "kos_dan_modal": 420,
    "pemasaran_digital": 420,
    "etika_keusahawanan": 420,

    // -------------------------------------------------------------------------
    // PENDIDIKAN AGAMA ISLAM (PAI) 🕌
    // -------------------------------------------------------------------------
    // Semua Kategori (7 Minit - Memberi ruang membaca jawi)
    "aqidah": 420,
    "ibadah": 420,
    "sirah": 420,
    "akhlak": 420,

    // -------------------------------------------------------------------------
    // BAHASA ARAB (BA) 🇸🇦
    // -------------------------------------------------------------------------
    // Semua Kategori (7 Minit - Memberi ruang membaca bahasa asing/jawi)
    "mufrodat": 420,
    "qawaid": 420,
    "hiwar": 420,
    "arqam": 420
};

// ==========================================
// DYNAMIC LIMITED TIME EVENT CALENDAR
// ==========================================
const EVENT_CALENDAR = [
    { name: "LexiQuest V2 Grand Launch! (2x Coins)", startDate: "2026-01-10T00:00:00", endDate: "2026-01-31T23:59:59", multiplier: 2 },
    { name: "Pi Day Math Special (3x Coins)", startDate: "2026-03-14T00:00:00", endDate: "2026-03-14T23:59:59", multiplier: 3 },
    { name: "Merdeka Celebration (2x Coins)", startDate: "2026-08-30T00:00:00", endDate: "2026-08-31T23:59:59", multiplier: 2 }
];

function getCurrentEvent() {
    const now = new Date(); 
    return EVENT_CALENDAR.find(event => {
        const start = new Date(event.startDate);
        const end = new Date(event.endDate);
        return now >= start && now <= end; 
    });
}

// ==========================================
// BUKU REKOD PENCAPAIAN (ACHIEVEMENTS) & MEDAL SHOP
// ==========================================
const achievementsData = [
    // --- Category 1: Leaderboard & Academics (ENGLISH) ---
    { id: "ach_01", name: "First Steps", description: "Collect 100 Total Score.", titleReward: "The Alphabet Apprentice", coinReward: 20, price: 500, tier: "common", image: "assets/badges/alphabetApprentice.webp", reqType: "total_score", reqValue: 100, isPhysical: true },
    { id: "ach_02", name: "Brainiac", description: "Collect 1,000 Total Score.", titleReward: "The Grammar Scholar", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/grammarScholar.webp", reqType: "total_score", reqValue: 1000, isPhysical: true },
    { id: "ach_03", name: "Walking Dictionary", description: "Collect 5,000 Total Score.", titleReward: "The Vocabulary Virtuoso", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/vocabularyVirtuoso.webp", reqType: "total_score", reqValue: 5000, isPhysical: true },
    { id: "ach_04", name: "Einstein's Heir", description: "Collect 10,000 Total Score.", titleReward: "The Literary Mastermind", coinReward: 100, price: 10000, tier: "legendary", image: "assets/badges/literaryMastermind.webp", reqType: "total_score", reqValue: 10000, isPhysical: true },
    { id: "ach_05", name: "Flawless English", description: "Get a Perfect Score in any 5 games.", titleReward: "The Perfect Proofreader", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/flawlessEnglish.webp", reqType: "perfect_scores", reqValue: 5, isPhysical: true },

// --- Category 2: Mathematics (16 Kategori Khas) ---
    // Tahap Basic / Easy
    { id: "math_01", name: "Number Ninja", description: "Get a perfect score in Number Recognition.", titleReward: "The Number Ninja", coinReward: 20, price: 500, tier: "common", image: "assets/badges/math_number.webp", reqType: "category_perfect", reqValue: "number_recognition", isPhysical: true },
    { id: "math_02", name: "Addition Ace", description: "Get a perfect score in Basic Addition.", titleReward: "The Addition Ace", coinReward: 20, price: 500, tier: "common", image: "assets/badges/math_addition.webp", reqType: "category_perfect", reqValue: "addition_basic", isPhysical: true },
    { id: "math_03", name: "Subtraction Samurai", description: "Get a perfect score in Basic Subtraction.", titleReward: "The Subtraction Samurai", coinReward: 20, price: 500, tier: "common", image: "assets/badges/math_subtraction.webp", reqType: "category_perfect", reqValue: "subtraction_basic", isPhysical: true },
    { id: "math_04", name: "Multiplication Master", description: "Get a perfect score in Multiplication Table.", titleReward: "The Multiplication Master", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/math_multiply.webp", reqType: "category_perfect", reqValue: "multiplication_table", isPhysical: true },
    { id: "math_05", name: "Division Duke", description: "Get a perfect score in Basic Division.", titleReward: "The Division Duke", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/math_division.webp", reqType: "category_perfect", reqValue: "division_basic", isPhysical: true },
    { id: "math_06", name: "Geometry Genius", description: "Get a perfect score in Shapes and Space.", titleReward: "The Geometry Genius", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/math_geometry.webp", reqType: "category_perfect", reqValue: "shapes_and_space", isPhysical: true },

    // Tahap Intermediate / Medium
    { id: "math_07", name: "Fraction Fanatic", description: "Get a perfect score in Fractions.", titleReward: "The Fraction Fanatic", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/math_fraction.webp", reqType: "category_perfect", reqValue: "fractions_intro", isPhysical: true },
    { id: "math_08", name: "Decimal Detective", description: "Get a perfect score in Decimal Basics.", titleReward: "The Decimal Detective", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/math_decimal.webp", reqType: "category_perfect", reqValue: "decimal_basics", isPhysical: true },
    { id: "math_09", name: "Percentage Pro", description: "Get a perfect score in Percentage Fun.", titleReward: "The Percentage Pro", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/math_percentage.webp", reqType: "category_perfect", reqValue: "percentage_fun", isPhysical: true },
    { id: "math_10", name: "Financial Guru", description: "Get a perfect score in Money Matters.", titleReward: "The Financial Guru", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/math_money.webp", reqType: "category_perfect", reqValue: "money_matters", isPhysical: true },
    { id: "math_11", name: "Time Traveler", description: "Get a perfect score in Time & Clock.", titleReward: "The Time Traveler", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/math_time.webp", reqType: "category_perfect", reqValue: "time_and_clock", isPhysical: true },
    { id: "math_12", name: "Measurement Master", description: "Get a perfect score in Length & Mass.", titleReward: "The Measurement Master", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/math_measurement.webp", reqType: "category_perfect", reqValue: "length_and_mass", isPhysical: true },

    // Tahap Advanced / Hard
    { id: "math_13", name: "Potion Master", description: "Get a perfect score in Volume of Liquid.", titleReward: "The Potion Master", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/math_volume.webp", reqType: "category_perfect", reqValue: "volume_of_liquid", isPhysical: true },
    { id: "math_14", name: "Area Architect", description: "Get a perfect score in Area & Perimeter.", titleReward: "The Area Architect", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/math_area.webp", reqType: "category_perfect", reqValue: "area_and_perimeter", isPhysical: true },
    { id: "math_15", name: "Data Analyst", description: "Get a perfect score in Data Handling.", titleReward: "The Data Analyst", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/math_data.webp", reqType: "category_perfect", reqValue: "data_handling", isPhysical: true },
    { id: "math_16", name: "The Master Logician", description: "Get a perfect score in Math Logic.", titleReward: "The Master Logician", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/math_logic.webp", reqType: "category_perfect", reqValue: "math_logic", isPhysical: true },

// --- Category: Sains (16 Kategori) ---
    { id: "sn_01", name: "Saintis Muda", description: "Dapat markah penuh Kemahiran Saintifik.", titleReward: "Pakar Saintifik", coinReward: 20, price: 500, tier: "common", image: "assets/badges/sn_01.webp", reqType: "category_perfect", reqValue: "scientific_skills", isPhysical: true },
    { id: "sn_02", name: "Pakar Biologi", description: "Dapat markah penuh Proses Hidup Manusia.", titleReward: "Pakar Anatomi", coinReward: 20, price: 500, tier: "common", image: "assets/badges/sn_02.webp", reqType: "category_perfect", reqValue: "human_life_processes", isPhysical: true },
    { id: "sn_03", name: "Ahli Zoologi", description: "Dapat markah penuh Pengelasan Haiwan.", titleReward: "Pencinta Haiwan", coinReward: 20, price: 500, tier: "common", image: "assets/badges/sn_03.webp", reqType: "category_perfect", reqValue: "animal_classification", isPhysical: true },
    { id: "sn_04", name: "Ahli Botani", description: "Dapat markah penuh Proses Tumbesaran Tumbuhan.", titleReward: "Pakar Botani", coinReward: 20, price: 500, tier: "common", image: "assets/badges/sn_04.webp", reqType: "category_perfect", reqValue: "plant_processes", isPhysical: true },
    { id: "sn_05", name: "Penjana Kuasa", description: "Dapat markah penuh Bentuk Tenaga.", titleReward: "Master Tenaga", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/sn_05.webp", reqType: "category_perfect", reqValue: "energy_forms", isPhysical: true },
    { id: "sn_06", name: "Pengendali Cahaya", description: "Dapat markah penuh Sifat Cahaya.", titleReward: "Pencipta Cahaya", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/sn_06.webp", reqType: "category_perfect", reqValue: "light_properties", isPhysical: true },
    { id: "sn_07", name: "Jurutera Elektrik", description: "Dapat markah penuh Asas Elektrik.", titleReward: "Jurutera Elektrik", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/sn_07.webp", reqType: "category_perfect", reqValue: "electricity_basics", isPhysical: true },
    { id: "sn_08", name: "Pengukur Suhu", description: "Dapat markah penuh Haba & Suhu.", titleReward: "Pakar Haba", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/sn_08.webp", reqType: "category_perfect", reqValue: "heat_and_temperature", isPhysical: true },
    { id: "sn_09", name: "Ahli Kimia", description: "Dapat markah penuh Keadaan Jirim.", titleReward: "Ahli Kimia", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/sn_09.webp", reqType: "category_perfect", reqValue: "states_of_matter", isPhysical: true },
    { id: "sn_10", name: "Ekologi Makanan", description: "Dapat markah penuh Rantai Makanan.", titleReward: "Pakar Ekologi", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/sn_10.webp", reqType: "category_perfect", reqValue: "food_chains", isPhysical: true },
    { id: "sn_11", name: "Pengkaji Bahan", description: "Dapat markah penuh Sifat Bahan.", titleReward: "Pakar Bahan", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/sn_11.webp", reqType: "category_perfect", reqValue: "materials_properties", isPhysical: true },
    { id: "sn_12", name: "Angkasawan", description: "Dapat markah penuh Sistem Suria.", titleReward: "Angkasawan", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/sn_12.webp", reqType: "category_perfect", reqValue: "solar_system", isPhysical: true },
    { id: "sn_13", name: "Pakar Mesin", description: "Dapat markah penuh Mesin Ringkas.", titleReward: "Mekanik Bijak", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/sn_13.webp", reqType: "category_perfect", reqValue: "machines_simple", isPhysical: true },
    { id: "sn_14", name: "Ahli Mikrobiologi", description: "Dapat markah penuh Mikroorganisma.", titleReward: "Pakar Mikrob", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/sn_14.webp", reqType: "category_perfect", reqValue: "microorganisms", isPhysical: true },
    { id: "sn_15", name: "Pakar Pengawetan", description: "Dapat markah penuh Pengawetan Makanan.", titleReward: "Master Makanan", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/sn_15.webp", reqType: "category_perfect", reqValue: "food_preservation", isPhysical: true },
    { id: "sn_16", name: "Wira Bumi", description: "Dapat markah penuh Pemeliharaan & Pemuliharaan.", titleReward: "Penyelamat Bumi", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/sn_16.webp", reqType: "category_perfect", reqValue: "preservation_conservation", isPhysical: true },

// --- Category: Bahasa Melayu (12 Kategori) ---
    { id: "bm_01", name: "Pakar Kata Nama", description: "Dapat markah penuh Kata Nama.", titleReward: "Pakar Kata Nama", coinReward: 20, price: 500, tier: "common", image: "assets/badges/bm_01.webp", reqType: "category_perfect", reqValue: "kata_nama", isPhysical: true },
    { id: "bm_02", name: "Pakar Kata Kerja", description: "Dapat markah penuh Kata Kerja.", titleReward: "Pakar Kata Kerja", coinReward: 20, price: 500, tier: "common", image: "assets/badges/bm_02.webp", reqType: "category_perfect", reqValue: "kata_kerja", isPhysical: true },
    { id: "bm_03", name: "Pakar Kata Adjektif", description: "Dapat markah penuh Kata Adjektif.", titleReward: "Pakar Kata Adjektif", coinReward: 20, price: 500, tier: "common", image: "assets/badges/bm_03.webp", reqType: "category_perfect", reqValue: "kata_adjektif", isPhysical: true },
    { id: "bm_04", name: "Pakar Kata Tugas", description: "Dapat markah penuh Kata Tugas.", titleReward: "Pakar Kata Tugas", coinReward: 20, price: 500, tier: "common", image: "assets/badges/bm_04.webp", reqType: "category_perfect", reqValue: "kata_tugas", isPhysical: true },
    { id: "bm_05", name: "Pakar Penjodoh", description: "Dapat markah penuh Penjodoh Bilangan.", titleReward: "Master Bilangan", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/bm_05.webp", reqType: "category_perfect", reqValue: "penjodoh_bilangan", isPhysical: true },
    { id: "bm_06", name: "Kamus Berjalan", description: "Dapat markah penuh Sinonim & Antonim.", titleReward: "Kamus Hidup", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/bm_06.webp", reqType: "category_perfect", reqValue: "sinonim_antonim", isPhysical: true },
    { id: "bm_07", name: "Pembuat Ayat", description: "Dapat markah penuh Ayat Tunggal.", titleReward: "Arkitek Ayat", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/bm_07.webp", reqType: "category_perfect", reqValue: "ayat_tunggal", isPhysical: true },
    { id: "bm_08", name: "Jurutera Ayat", description: "Dapat markah penuh Ayat Majmuk.", titleReward: "Master Ayat", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/bm_08.webp", reqType: "category_perfect", reqValue: "ayat_majmuk", isPhysical: true },
    { id: "bm_09", name: "Polis Bahasa", description: "Dapat markah penuh Kesalahan Tatabahasa.", titleReward: "Polis Bahasa", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/bm_09.webp", reqType: "category_perfect", reqValue: "kesalahan_tatabahasa", isPhysical: true },
    { id: "bm_10", name: "Pendeta Sastera", description: "Dapat markah penuh Peribahasa.", titleReward: "Pendeta Muda", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/bm_10.webp", reqType: "category_perfect", reqValue: "peribahasa", isPhysical: true },
    { id: "bm_11", name: "Pakar Transisi", description: "Dapat markah penuh Ayat Aktif & Pasif.", titleReward: "Pakar Transisi", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/bm_11.webp", reqType: "category_perfect", reqValue: "ayat_aktif_pasif", isPhysical: true },
    { id: "bm_12", name: "Ahli Retorik", description: "Dapat markah penuh Susunan Songsang.", titleReward: "Ahli Retorik", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/bm_12.webp", reqType: "category_perfect", reqValue: "susunan_songsang", isPhysical: true },

// --- Category: Pendidikan Muzik (9 Kategori) ---
    { id: "mz_01", name: "Pembaca Not", description: "Dapat markah penuh Notasi & Baluk.", titleReward: "Pembaca Not", coinReward: 20, price: 500, tier: "common", image: "assets/badges/mz_01.webp", reqType: "category_perfect", reqValue: "notasi_dan_balar", isPhysical: true },
    { id: "mz_02", name: "Pakar Klef", description: "Dapat markah penuh Klef Trebel.", titleReward: "Pakar Klef", coinReward: 20, price: 500, tier: "common", image: "assets/badges/mz_02.webp", reqType: "category_perfect", reqValue: "klef_trebel", isPhysical: true },
    { id: "mz_03", name: "Pakar Instrumen", description: "Dapat markah penuh Jenis Alat Muzik.", titleReward: "Pakar Instrumen", coinReward: 20, price: 500, tier: "common", image: "assets/badges/mz_03.webp", reqType: "category_perfect", reqValue: "jenis_alat_muzik", isPhysical: true },
    { id: "mz_04", name: "Raja Ritma", description: "Dapat markah penuh Nilai Nota & Ritma.", titleReward: "Raja Ritma", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/mz_04.webp", reqType: "category_perfect", reqValue: "nilai_nota_ritma", isPhysical: true },
    { id: "mz_05", name: "Vokalis Utama", description: "Dapat markah penuh Solfa & Nyanyian.", titleReward: "Vokalis Emas", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/mz_05.webp", reqType: "category_perfect", reqValue: "solfa_dan_nyanyian", isPhysical: true },
    { id: "mz_06", name: "Pewaris Irama", description: "Dapat markah penuh Muzik Tradisional.", titleReward: "Pewaris Irama", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/mz_06.webp", reqType: "category_perfect", reqValue: "muzik_tradisional", isPhysical: true },
    { id: "mz_07", name: "Maestro Muzik", description: "Dapat markah penuh Apresiasi Muzik.", titleReward: "Kritik Muzik", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/mz_07.webp", reqType: "category_perfect", reqValue: "apresiasi_muzik", isPhysical: true },
    { id: "mz_08", name: "Bintang Pentas", description: "Dapat markah penuh Etika Persembahan.", titleReward: "Bintang Pentas", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/mz_08.webp", reqType: "category_perfect", reqValue: "etika_persembahan", isPhysical: true },
    { id: "mz_09", name: "Ikon Industri", description: "Dapat markah penuh Kerjaya Muzik.", titleReward: "Ikon Muzik", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/mz_09.webp", reqType: "category_perfect", reqValue: "kerjaya_muzik", isPhysical: true },

// --- Category: Pendidikan Kesihatan (9 Kategori) ---
    { id: "pk_01", name: "Ahli Gimnas", description: "Dapat markah penuh Gimnastik Asas.", titleReward: "Ahli Gimnas", coinReward: 20, price: 500, tier: "common", image: "assets/badges/pk_01.webp", reqType: "category_perfect", reqValue: "gimnastik_asas", isPhysical: true },
    { id: "pk_02", name: "Penari Hebat", description: "Dapat markah penuh Pergerakan Berirama.", titleReward: "Penari Hebat", coinReward: 20, price: 500, tier: "common", image: "assets/badges/pk_02.webp", reqType: "category_perfect", reqValue: "pergerakan_berirama", isPhysical: true },
    { id: "pk_03", name: "Pemain Cekap", description: "Dapat markah penuh Permainan Asas.", titleReward: "Pemain Cekap", coinReward: 20, price: 500, tier: "common", image: "assets/badges/pk_03.webp", reqType: "category_perfect", reqValue: "permainan_asas", isPhysical: true },
    { id: "pk_04", name: "Insan Sihat", description: "Dapat markah penuh Kesihatan Diri.", titleReward: "Ikon Kesihatan", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/pk_04.webp", reqType: "category_perfect", reqValue: "kesihatan_diri", isPhysical: true },
    { id: "pk_05", name: "Remaja Cakna", description: "Dapat markah penuh Kebersihan Reproduktif.", titleReward: "Remaja Sihat", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/pk_05.webp", reqType: "category_perfect", reqValue: "kebersihan_reproduktif", isPhysical: true },
    { id: "pk_06", name: "Pakar Diet", description: "Dapat markah penuh Pemakanan Sihat.", titleReward: "Pakar Diet", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/pk_06.webp", reqType: "category_perfect", reqValue: "pemakanan_sihat", isPhysical: true },
    { id: "pk_07", name: "Wira Penyelamat", description: "Dapat markah penuh Pertolongan Cemas.", titleReward: "Paramedik", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/pk_07.webp", reqType: "category_perfect", reqValue: "pertolongan_cemas", isPhysical: true },
    { id: "pk_08", name: "Minda Tenang", description: "Dapat markah penuh Pengurusan Mental & Emosi.", titleReward: "Pakar Terapi", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/pk_08.webp", reqType: "category_perfect", reqValue: "pengurusan_mental_emosi", isPhysical: true },
    { id: "pk_09", name: "Pakar Virologi", description: "Dapat markah penuh Penyakit Berjangkit.", titleReward: "Doktor Pakar", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/pk_09.webp", reqType: "category_perfect", reqValue: "penyakit_berjangkit", isPhysical: true },

// --- Category: Pendidikan Moral (14 Kategori) ---
    { id: "mor_01", name: "Insan Beriman", description: "Dapat markah penuh Kepercayaan Kepada Tuhan.", titleReward: "Insan Beriman", coinReward: 20, price: 500, tier: "common", image: "assets/badges/mor_01.webp", reqType: "category_perfect", reqValue: "kepercayaan_kepada_tuhan", isPhysical: true },
    { id: "mor_02", name: "Hati Emas", description: "Dapat markah penuh Baik Hati.", titleReward: "Hati Emas", coinReward: 20, price: 500, tier: "common", image: "assets/badges/mor_02.webp", reqType: "category_perfect", reqValue: "baik_hati", isPhysical: true },
    { id: "mor_03", name: "Amanah", description: "Dapat markah penuh Bertanggungjawab.", titleReward: "Pekerja Amanah", coinReward: 20, price: 500, tier: "common", image: "assets/badges/mor_03.webp", reqType: "category_perfect", reqValue: "bertanggungjawab", isPhysical: true },
    { id: "mor_04", name: "Insan Syukur", description: "Dapat markah penuh Berterima Kasih.", titleReward: "Insan Syukur", coinReward: 20, price: 500, tier: "common", image: "assets/badges/mor_04.webp", reqType: "category_perfect", reqValue: "berterima_kasih", isPhysical: true },
    { id: "mor_05", name: "Sopan Santun", description: "Dapat markah penuh Hemah Tinggi.", titleReward: "Budi Bahasa", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/mor_05.webp", reqType: "category_perfect", reqValue: "hemah_tinggi", isPhysical: true },
    { id: "mor_06", name: "Saling Menghormati", description: "Dapat markah penuh Hormat-menghormati.", titleReward: "Rakan Setia", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/mor_06.webp", reqType: "category_perfect", reqValue: "hormat_menghormati", isPhysical: true },
    { id: "mor_07", name: "Penyayang", description: "Dapat markah penuh Kasih Sayang.", titleReward: "Duta Kasih", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/mor_07.webp", reqType: "category_perfect", reqValue: "kasih_sayang", isPhysical: true },
    { id: "mor_08", name: "Hakim Adil", description: "Dapat markah penuh Keadilan.", titleReward: "Hakim Adil", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/mor_08.webp", reqType: "category_perfect", reqValue: "keadilan", isPhysical: true },
    { id: "mor_09", name: "Pahlawan Berani", description: "Dapat markah penuh Keberanian.", titleReward: "Pahlawan Berani", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/mor_09.webp", reqType: "category_perfect", reqValue: "keberanian", isPhysical: true },
    { id: "mor_10", name: "Sahabat Jujur", description: "Dapat markah penuh Kejujuran.", titleReward: "Sahabat Jujur", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/mor_10.webp", reqType: "category_perfect", reqValue: "kejujuran", isPhysical: true },
    { id: "mor_11", name: "Pekerja Tekun", description: "Dapat markah penuh Kerajinan.", titleReward: "Pekerja Tekun", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/mor_11.webp", reqType: "category_perfect", reqValue: "kerajinan", isPhysical: true },
    { id: "mor_12", name: "Pasukan Hebat", description: "Dapat markah penuh Kerjasama.", titleReward: "Ketua Pasukan", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/mor_12.webp", reqType: "category_perfect", reqValue: "kerjasama", isPhysical: true },
    { id: "mor_13", name: "Minda Sederhana", description: "Dapat markah penuh Kesederhanaan.", titleReward: "Minda Sederhana", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/mor_13.webp", reqType: "category_perfect", reqValue: "kesederhanaan", isPhysical: true },
    { id: "mor_14", name: "Pejuang Hak", description: "Dapat markah penuh Hak Asasi.", titleReward: "Pejuang Keadilan", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/mor_14.webp", reqType: "category_perfect", reqValue: "hak_asasi", isPhysical: true },

// --- Category: Sejarah (9 Kategori) ---
    { id: "sej_01", name: "Pengkaji Muda", description: "Dapat markah penuh Pengenalan Ilmu Sejarah.", titleReward: "Pengkaji Muda", coinReward: 20, price: 500, tier: "common", image: "assets/badges/sej_01.webp", reqType: "category_perfect", reqValue: "pengenalan_ilmu_sejarah", isPhysical: true },
    { id: "sej_02", name: "Pakar Salasilah", description: "Dapat markah penuh Sejarah Diri & Keluarga.", titleReward: "Pakar Salasilah", coinReward: 20, price: 500, tier: "common", image: "assets/badges/sej_02.webp", reqType: "category_perfect", reqValue: "sejarah_diri_dan_keluarga", isPhysical: true },
    { id: "sej_03", name: "Sejarawan Sekolah", description: "Dapat markah penuh Sejarah Sekolah.", titleReward: "Sejarawan Sekolah", coinReward: 20, price: 500, tier: "common", image: "assets/badges/sej_03.webp", reqType: "category_perfect", reqValue: "sejarah_sekolah", isPhysical: true },
    { id: "sej_04", name: "Penjelajah Ais", description: "Dapat markah penuh Zaman Air Batu.", titleReward: "Penjelajah Ais", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/sej_04.webp", reqType: "category_perfect", reqValue: "zaman_air_batu", isPhysical: true },
    { id: "sej_05", name: "Ahli Arkeologi", description: "Dapat markah penuh Zaman Prasejarah.", titleReward: "Ahli Arkeologi", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/sej_05.webp", reqType: "category_perfect", reqValue: "zaman_prasejarah", isPhysical: true },
    { id: "sej_06", name: "Pakar Tamadun", description: "Dapat markah penuh Kerajaan Melayu Awal.", titleReward: "Pakar Tamadun", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/sej_06.webp", reqType: "category_perfect", reqValue: "kerajaan_melayu_awal", isPhysical: true },
    { id: "sej_07", name: "Tokoh Bersejarah", description: "Dapat markah penuh Tokoh Terbilang.", titleReward: "Tokoh Sejarah", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/sej_07.webp", reqType: "category_perfect", reqValue: "tokoh_terbilang", isPhysical: true },
    { id: "sej_08", name: "Waris Negara", description: "Dapat markah penuh Warisan Negara.", titleReward: "Pelindung Warisan", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/sej_08.webp", reqType: "category_perfect", reqValue: "warisan_negara", isPhysical: true },
    { id: "sej_09", name: "Pakar Ekonomi", description: "Dapat markah penuh Pembangunan & Ekonomi.", titleReward: "Pakar Sejarah", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/sej_09.webp", reqType: "category_perfect", reqValue: "pembangunan_dan_ekonomi", isPhysical: true },

// --- Category: Seni Visual (9 Kategori) ---
    { id: "psv_01", name: "Pelukis Asas", description: "Dapat markah penuh Unsur Seni.", titleReward: "Pakar Unsur Seni", coinReward: 20, price: 500, tier: "common", image: "assets/badges/psv_01.webp", reqType: "category_perfect", reqValue: "unsur_seni", isPhysical: true },
    { id: "psv_02", name: "Pakar Rekaan", description: "Dapat markah penuh Prinsip Rekaan.", titleReward: "Pakar Rekaan", coinReward: 20, price: 500, tier: "common", image: "assets/badges/psv_02.webp", reqType: "category_perfect", reqValue: "prinsip_rekaan", isPhysical: true },
    { id: "psv_03", name: "Pengkaji Media", description: "Dapat markah penuh Media & Bahan.", titleReward: "Pengkaji Media", coinReward: 20, price: 500, tier: "common", image: "assets/badges/psv_03.webp", reqType: "category_perfect", reqValue: "media_dan_bahan", isPhysical: true },
    { id: "psv_04", name: "Pelukis Hebat", description: "Dapat markah penuh Lukisan & Catan.", titleReward: "Pelukis Hebat", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/psv_04.webp", reqType: "category_perfect", reqValue: "lukisan_dan_catan", isPhysical: true },
    { id: "psv_05", name: "Pakar Corak", description: "Dapat markah penuh Membuat Corak.", titleReward: "Pakar Corak", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/psv_05.webp", reqType: "category_perfect", reqValue: "membuat_corak", isPhysical: true },
    { id: "psv_06", name: "Pemahat Patung", description: "Dapat markah penuh Membentuk Binaan.", titleReward: "Pemahat Patung", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/psv_06.webp", reqType: "category_perfect", reqValue: "membentuk_binaan", isPhysical: true },
    { id: "psv_07", name: "Tokoh Kraf", description: "Dapat markah penuh Kraf Tradisional.", titleReward: "Adiguru Kraf", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/psv_07.webp", reqType: "category_perfect", reqValue: "kraf_tradisional", isPhysical: true },
    { id: "psv_08", name: "Kritik Seni", description: "Dapat markah penuh Apresiasi Seni.", titleReward: "Kurator Seni", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/psv_08.webp", reqType: "category_perfect", reqValue: "apresiasi_seni", isPhysical: true },
    { id: "psv_09", name: "Kurator Galeri", description: "Dapat markah penuh Pameran Seni.", titleReward: "Kurator Galeri", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/psv_09.webp", reqType: "category_perfect", reqValue: "pameran_seni", isPhysical: true },

// --- Category: RBT (9 Kategori) ---
    { id: "rbt_01", name: "Mandur Keselamatan", description: "Dapat markah penuh Keselamatan Bengkel.", titleReward: "Pengurus Bengkel", coinReward: 20, price: 500, tier: "common", image: "assets/badges/rbt_01.webp", reqType: "category_perfect", reqValue: "keselamatan_bengkel", isPhysical: true },
    { id: "rbt_02", name: "Pereka Bentuk", description: "Dapat markah penuh Pengenalan Reka Bentuk.", titleReward: "Pereka Bentuk", coinReward: 20, price: 500, tier: "common", image: "assets/badges/rbt_02.webp", reqType: "category_perfect", reqValue: "pengenalan_reka_bentuk", isPhysical: true },
    { id: "rbt_03", name: "Pakar Alatan", description: "Dapat markah penuh Alatan Tangan.", titleReward: "Pakar Alatan", coinReward: 20, price: 500, tier: "common", image: "assets/badges/rbt_03.webp", reqType: "category_perfect", reqValue: "alatan_tangan", isPhysical: true },
    { id: "rbt_04", name: "Jurutera Teknologi", description: "Dapat markah penuh Asas Teknologi.", titleReward: "Jurutera Teknologi", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/rbt_04.webp", reqType: "category_perfect", reqValue: "asas_teknologi", isPhysical: true },
    { id: "rbt_05", name: "Pengaturcara Cilik", description: "Dapat markah penuh Reka Bentuk Pengaturcaraan.", titleReward: "Pengaturcara Bijak", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/rbt_05.webp", reqType: "category_perfect", reqValue: "reka_bentuk_pengaturcaraan", isPhysical: true },
    { id: "rbt_06", name: "Petani Moden", description: "Dapat markah penuh Hidroponik.", titleReward: "Petani Moden", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/rbt_06.webp", reqType: "category_perfect", reqValue: "hidroponik", isPhysical: true },
    { id: "rbt_07", name: "Akauntan Projek", description: "Dapat markah penuh Kos & Modal.", titleReward: "Akauntan Projek", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/rbt_07.webp", reqType: "category_perfect", reqValue: "kos_dan_modal", isPhysical: true },
    { id: "rbt_08", name: "Pakar Pemasaran", description: "Dapat markah penuh Pemasaran Digital.", titleReward: "Pakar Pemasaran", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/rbt_08.webp", reqType: "category_perfect", reqValue: "pemasaran_digital", isPhysical: true },
    { id: "rbt_09", name: "Usahawan Beretika", description: "Dapat markah penuh Etika Keusahawanan.", titleReward: "Tokoh Usahawan", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/rbt_09.webp", reqType: "category_perfect", reqValue: "etika_keusahawanan", isPhysical: true },

    // --- Category 3: Challenge Mode ---
    { id: "ach_06", name: "Brave Speaker", description: "Send your first challenge to a friend.", titleReward: "The Debate Challenger", coinReward: 20, price: 500, tier: "common", image: "assets/badges/braveSpeaker.webp", reqType: "send_challenge", reqValue: 1 },
    { id: "ach_07", name: "First Victory", description: "Win a friend's challenge for the first time.", titleReward: "The Fluent Victor", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/fluentVictor.webp", reqType: "win_challenge", reqValue: 1 },
    { id: "ach_08", name: "Unbeatable", description: "Win 10 challenges overall.", titleReward: "The Spelling Champion", coinReward: 60, price: 10000, tier: "legendary", image: "assets/badges/spellingChampion.webp", reqType: "win_challenge", reqValue: 10 },
    { id: "ach_09", name: "Worthy Opponent", description: "Tie a friend's score in challenge mode.", titleReward: "The Peer Reviewer", coinReward: 20, price: 5000, tier: "epic", image: "assets/badges/peerReviewer.webp", reqType: "tie_challenge", reqValue: 1 },

    // --- Category 4: Economy & Wealth ---
    { id: "ach_10", name: "First Paycheck", description: "Collect 1,000 Coins.", titleReward: "The Knowledge Seeker", coinReward: 20, price: 500, tier: "common", image: "assets/badges/knowledgeSeeker.webp", reqType: "total_coins", reqValue: 1000 },
    { id: "ach_11", name: "Big Spender", description: "Spend 5,000 Coins in the Shop.", titleReward: "The Resource Investor", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/resourceInvestor.webp", reqType: "spend_coins", reqValue: 5000 },
    { id: "ach_12", name: "Rolling in Gold", description: "Collect 20,000 Coins overall.", titleReward: "The Wealthy Wordsmith", coinReward: 200, price: 5000, tier: "epic", image: "assets/badges/wealthyWordsmith.webp", reqType: "total_coins_earned", reqValue: 20000 },

    // --- Category 5: Avatar Collection ---
    { id: "ach_13", name: "New Look", description: "Buy your first avatar.", titleReward: "The Style Articulator", coinReward: 200, price: 500, tier: "common", image: "assets/badges/styleArticulator.webp", reqType: "unlock_avatar", reqValue: 1 },
    { id: "ach_14", name: "Wardrobe Full", description: "Collect 5 different avatars.", titleReward: "The Guardian Collector", coinReward: 1000, price: 1000, tier: "rare", image: "assets/badges/guardianCollector.webp", reqType: "unlock_avatar", reqValue: 5 },
    { id: "ach_15", name: "Max Power", description: "Upgrade any standard avatar to Level 10.", titleReward: "The Syntax Sage", coinReward: 2000, price: 5000, tier: "epic", image: "assets/badges/syntaxSage.webp", reqType: "avatar_level", reqValue: 10 },
    { id: "ach_16", name: "Guardian Master", description: "Buy all animal or fantasy-themed avatars.", titleReward: "The Lore Keeper", coinReward: 5000, price: 10000, tier: "legendary", image: "assets/badges/guardianMaster.webp", reqType: "all_standard_avatars", reqValue: 1 },

    // --- Category 6: Dedication & Events ---
    { id: "ach_17", name: "Event Hunter", description: "Play during a Limited Time Event.", titleReward: "The Active Participant", coinReward: 200, price: 500, tier: "common", image: "assets/badges/activeParticipant.webp", reqType: "special_event", reqValue: 1 },
    { id: "ach_18", name: "Night Owl", description: "Play a game after 10 PM.", titleReward: "The Midnight Reader", coinReward: 100, price: 500, tier: "common", image: "assets/badges/midnightReader.webp", reqType: "play_time_late", reqValue: 22 },
    { id: "ach_19", name: "Early Bird", description: "Play a game before 7 AM.", titleReward: "The Morning Orator", coinReward: 100, price: 500, tier: "common", image: "assets/badges/morningOrator.webp", reqType: "play_time_early", reqValue: 7 },

    // --- Category 7: Persistence & Streaks ---
    { id: "ach_20", name: "Weekend Warrior", description: "Play at least one game on a Saturday or Sunday.", titleReward: "The Weekend Writer", coinReward: 20, price: 500, tier: "common", image: "assets/badges/weekendWriter.webp", reqType: "play_weekend", reqValue: 1 },
    { id: "ach_21", name: "3-Day Streak", description: "Play at least one game for 3 consecutive days.", titleReward: "The Consistent Student", coinReward: 200, price: 1000, tier: "rare", image: "assets/badges/consistentStudent.webp", reqType: "login_streak", reqValue: 3 },
    { id: "ach_22", name: "1-Week Streak", description: "Play for 7 consecutive days without failing.", titleReward: "The Dedicated Linguist", coinReward: 500, price: 5000, tier: "epic", image: "assets/badges/dedicatedLinguist.webp", reqType: "login_streak", reqValue: 7 },
    { id: "ach_23", name: "Marathoner", description: "Complete 5 different games in a single day.", titleReward: "The Language Marathoner", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/languageMarathoner.webp", reqType: "daily_games", reqValue: 5 },

    // --- Category 8: Game Mastery ---
    { id: "ach_24", name: "The Explorer", description: "Play all 12 games at least once.", titleReward: "The Syllabus Explorer", coinReward: 2000, price: 5000, tier: "epic", image: "assets/badges/syllabusExplorer.webp", reqType: "unique_games", reqValue: 12 },
    { id: "ach_25", name: "Jack of All Trades", description: "Score at least 50 points in each of the 12 games.", titleReward: "The Polymath", coinReward: 2000, price: 5000, tier: "epic", image: "assets/badges/polymath.webp", reqType: "high_score_all", reqValue: 12 },
    { id: "ach_26", name: "Comeback Kid", description: "Get a Perfect Score in a game you previously scored low in.", titleReward: "The Resilient Reviser", coinReward: 200, price: 5000, tier: "epic", image: "assets/badges/resilientReviser.webp", reqType: "comeback_win", reqValue: 1 },
    { id: "ach_27", name: "Triple Threat", description: "Get a Perfect Score in 3 different games.", titleReward: "The English Prodigy", coinReward: 200, price: 5000, tier: "epic", image: "assets/badges/englishProdigy.webp", reqType: "perfect_scores", reqValue: 3 },

    // --- Category 9: Social & Advanced Challenges ---
    { id: "ach_28", name: "Friendly Rival", description: "Send 10 challenge codes to friends.", titleReward: "The Study Buddy", coinReward: 100, price: 500, tier: "common", image: "assets/badges/studyBuddy.webp", reqType: "send_challenge", reqValue: 10 },
    { id: "ach_29", name: "Challenge Addict", description: "Complete 50 challenges overall.", titleReward: "The Forum Debater", coinReward: 200, price: 1000, tier: "rare", image: "assets/badges/forumDebater.webp", reqType: "total_challenges", reqValue: 50 },
    { id: "ach_30", name: "Good Sport", description: "Lose 5 challenges. Don't give up!", titleReward: "The Gracious Learner", coinReward: 100, price: 500, tier: "common", image: "assets/badges/graciousLearner.webp", reqType: "lose_challenge", reqValue: 5 },
    { id: "ach_31", name: "Close Call", description: "Win a challenge with a narrow margin of 1 to 5 points.", titleReward: "The Sharp Thinker", coinReward: 200, price: 5000, tier: "epic", image: "assets/badges/sharpThinker.webp", reqType: "narrow_win", reqValue: 1 },
    { id: "ach_32", name: "Academic Comeback", description: "Defeat a friend who previously beat your record.", titleReward: "The Academic Redeemer", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/academicComeback.webp", reqType: "revenge_win", reqValue: 1 },

    // --- Category 10: Advanced Inventory ---
    { id: "ach_33", name: "Window Shopper", description: "Open the Shop menu 20 times.", titleReward: "The Curious Browser", coinReward: 20, price: 500, tier: "common", image: "assets/badges/curiousBrowser.webp", reqType: "visit_shop", reqValue: 20 },
    { id: "ach_34", name: "Avid Collector", description: "Collect 10 different avatars in your inventory.", titleReward: "The Archive Master", coinReward: 2000, price: 10000, tier: "legendary", image: "assets/badges/archiveMaster.webp", reqType: "unlock_avatar", reqValue: 10 },
    { id: "ach_35", name: "Elite Squad", description: "Upgrade 3 different avatars to Level 10 (Max Level).", titleReward: "The Dean of Guardians", coinReward: 5000, price: 5000, tier: "epic", image: "assets/badges/deanOfGuardians.webp", reqType: "multiple_avatar_level", reqValue: 3 },
    { id: "ach_36", name: "Loyal Companion", description: "Equip the same avatar for 7 consecutive days.", titleReward: "The Steadfast Scholar", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/steadfastScholar.webp", reqType: "avatar_streak", reqValue: 7 },

    // --- Category 11: Special Events & Hidden ---
    { id: "ach_37", name: "Merdeka Scholar", description: "Log in and play on August 31st.", titleReward: "The Patriotic Poet", coinReward: 1000, price: 10000, tier: "legendary", image: "assets/badges/patrioticPoet.webp", reqType: "merdeka_day", reqValue: 1 },
    { id: "ach_38", name: "Holiday Gamer", description: "Log in and play during the December holidays.", titleReward: "The Festive Storyteller", coinReward: 1000, price: 5000, tier: "epic", image: "assets/badges/festiveStoryteller.webp", reqType: "play_month", reqValue: 12 },
    { id: "ach_39", name: "First Arrival", description: "Log in to the Game Hub for the first time.", titleReward: "The Freshman", coinReward: 20, price: 500, tier: "common", image: "assets/badges/freshman.webp", reqType: "first_login", reqValue: 1 },
    { id: "ach_40", name: "Secret Finder", description: "??? (Discover the hidden secret in the Game Hub)", titleReward: "The Context Detective", coinReward: 5000, price: 10000, tier: "legendary", image: "assets/badges/contextDetective.webp", reqType: "hidden_secret", reqValue: 1 },
    
    // --- Category 12: Rank & Level (GABUNGAN) ---
    { id: "ach_41", name: "Top Honor Roll", description: "Reach Rank 3 in the Leaderboard.", titleReward: "Top Honor Roll", coinReward: 500, price: 1000, tier: "rare", image: "assets/badges/topHonorRoll.webp", reqType: "rank", reqValue: 3 },
    { id: "ach_42", name: "Silver Laureate", description: "Reach Rank 2 in the Leaderboard.", titleReward: "Silver Laureate", coinReward: 1000, price: 5000, tier: "epic", image: "assets/badges/silverLaureate.webp", reqType: "rank", reqValue: 2 },
    { id: "ach_43", name: "Supreme Valedictorian", description: "Reach Rank 1 in the Leaderboard.", titleReward: "Supreme Valedictorian", coinReward: 2000, price: 10000, tier: "legendary", image: "assets/badges/supremeValedictorian.webp", reqType: "rank", reqValue: 1 },
    { id: "ach_44", name: "Grammar Guardian", description: "Reach level 10.", titleReward: "The Grammar Guardian", coinReward: 50, price: 1000, tier: "rare", image: "assets/badges/grammarGuardian.webp", reqType: "level_reach", reqValue: 10 }
];

// ==========================================
// TAHAP PEMAIN (TIERS)
// ==========================================
const PLAYER_TIERS = [
    { minLevel: 1, name: "Newbie", icon: "🌱", colorClass: "text-slate-400" },
    { minLevel: 11, name: "Apprentice", icon: "📖", colorClass: "text-emerald-500" },
    { minLevel: 21, name: "Scholar", icon: "🎓", colorClass: "text-blue-500" },
    { minLevel: 31, name: "Expert", icon: "🧠", colorClass: "text-indigo-500" },
    { minLevel: 41, name: "Master", icon: "💎", colorClass: "text-cyan-500" },
    { minLevel: 51, name: "Grandmaster", icon: "👑", colorClass: "text-yellow-400" },
    { minLevel: 81, name: "Legend", icon: "🌟", colorClass: "text-amber-400 animate-pulse" }
];
