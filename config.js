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
    score_rbt: 0
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
    "etika_keusahawanan": 420
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
    { id: "ach_01", name: "First Steps", description: "Collect 100 Total Score.", titleReward: "The Alphabet Apprentice", coinReward: 20, price: 500, tier: "common", image: "assets/badges/alphabetApprentice.png", reqType: "total_score", reqValue: 100 },
    { id: "ach_02", name: "Brainiac", description: "Collect 1,000 Total Score.", titleReward: "The Grammar Scholar", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/grammarScholar.png", reqType: "total_score", reqValue: 1000 },
    { id: "ach_03", name: "Walking Dictionary", description: "Collect 5,000 Total Score.", titleReward: "The Vocabulary Virtuoso", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/vocabularyVirtuoso.png", reqType: "total_score", reqValue: 5000 },
    { id: "ach_04", name: "Einstein's Heir", description: "Collect 10,000 Total Score.", titleReward: "The Literary Mastermind", coinReward: 100, price: 10000, tier: "legendary", image: "assets/badges/literaryMastermind.png", reqType: "total_score", reqValue: 10000 },
    { id: "ach_05", name: "Flawless English", description: "Get a Perfect Score in any 5 games.", titleReward: "The Perfect Proofreader", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/flawlessEnglish.png", reqType: "perfect_scores", reqValue: 5 },

// --- Category 2: Mathematics (16 Kategori Khas) ---
    // Tahap Basic / Easy
    { id: "math_01", name: "Number Ninja", description: "Get a perfect score in Number Recognition.", titleReward: "The Number Ninja", coinReward: 20, price: 500, tier: "common", image: "assets/badges/math_number.png", reqType: "category_perfect", reqValue: "number_recognition" },
    { id: "math_02", name: "Addition Ace", description: "Get a perfect score in Basic Addition.", titleReward: "The Addition Ace", coinReward: 20, price: 500, tier: "common", image: "assets/badges/math_addition.png", reqType: "category_perfect", reqValue: "addition_basic" },
    { id: "math_03", name: "Subtraction Samurai", description: "Get a perfect score in Basic Subtraction.", titleReward: "The Subtraction Samurai", coinReward: 20, price: 500, tier: "common", image: "assets/badges/math_subtraction.png", reqType: "category_perfect", reqValue: "subtraction_basic" },
    { id: "math_04", name: "Multiplication Master", description: "Get a perfect score in Multiplication Table.", titleReward: "The Multiplication Master", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/math_multiply.png", reqType: "category_perfect", reqValue: "multiplication_table" },
    { id: "math_05", name: "Division Duke", description: "Get a perfect score in Basic Division.", titleReward: "The Division Duke", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/math_division.png", reqType: "category_perfect", reqValue: "division_basic" },
    { id: "math_06", name: "Geometry Genius", description: "Get a perfect score in Shapes and Space.", titleReward: "The Geometry Genius", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/math_geometry.png", reqType: "category_perfect", reqValue: "shapes_and_space" },

    // Tahap Intermediate / Medium
    { id: "math_07", name: "Fraction Fanatic", description: "Get a perfect score in Fractions.", titleReward: "The Fraction Fanatic", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/math_fraction.png", reqType: "category_perfect", reqValue: "fractions_intro" },
    { id: "math_08", name: "Decimal Detective", description: "Get a perfect score in Decimal Basics.", titleReward: "The Decimal Detective", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/math_decimal.png", reqType: "category_perfect", reqValue: "decimal_basics" },
    { id: "math_09", name: "Percentage Pro", description: "Get a perfect score in Percentage Fun.", titleReward: "The Percentage Pro", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/math_percentage.png", reqType: "category_perfect", reqValue: "percentage_fun" },
    { id: "math_10", name: "Financial Guru", description: "Get a perfect score in Money Matters.", titleReward: "The Financial Guru", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/math_money.png", reqType: "category_perfect", reqValue: "money_matters" },
    { id: "math_11", name: "Time Traveler", description: "Get a perfect score in Time & Clock.", titleReward: "The Time Traveler", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/math_time.png", reqType: "category_perfect", reqValue: "time_and_clock" },
    { id: "math_12", name: "Measurement Master", description: "Get a perfect score in Length & Mass.", titleReward: "The Measurement Master", coinReward: 60, price: 5000, tier: "epic", image: "assets/badges/math_measurement.png", reqType: "category_perfect", reqValue: "length_and_mass" },

    // Tahap Advanced / Hard
    { id: "math_13", name: "Potion Master", description: "Get a perfect score in Volume of Liquid.", titleReward: "The Potion Master", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/math_volume.png", reqType: "category_perfect", reqValue: "volume_of_liquid" },
    { id: "math_14", name: "Area Architect", description: "Get a perfect score in Area & Perimeter.", titleReward: "The Area Architect", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/math_area.png", reqType: "category_perfect", reqValue: "area_and_perimeter" },
    { id: "math_15", name: "Data Analyst", description: "Get a perfect score in Data Handling.", titleReward: "The Data Analyst", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/math_data.png", reqType: "category_perfect", reqValue: "data_handling" },
    { id: "math_16", name: "The Master Logician", description: "Get a perfect score in Math Logic.", titleReward: "The Master Logician", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/math_logic.png", reqType: "category_perfect", reqValue: "math_logic" },

    // --- Category 3: Challenge Mode ---
    { id: "ach_06", name: "Brave Speaker", description: "Send your first challenge to a friend.", titleReward: "The Debate Challenger", coinReward: 20, price: 500, tier: "common", image: "assets/badges/braveSpeaker.png", reqType: "send_challenge", reqValue: 1 },
    { id: "ach_07", name: "First Victory", description: "Win a friend's challenge for the first time.", titleReward: "The Fluent Victor", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/fluentVictor.png", reqType: "win_challenge", reqValue: 1 },
    { id: "ach_08", name: "Unbeatable", description: "Win 10 challenges overall.", titleReward: "The Spelling Champion", coinReward: 60, price: 10000, tier: "legendary", image: "assets/badges/spellingChampion.png", reqType: "win_challenge", reqValue: 10 },
    { id: "ach_09", name: "Worthy Opponent", description: "Tie a friend's score in challenge mode.", titleReward: "The Peer Reviewer", coinReward: 20, price: 5000, tier: "epic", image: "assets/badges/peerReviewer.png", reqType: "tie_challenge", reqValue: 1 },

    // --- Category 4: Economy & Wealth ---
    { id: "ach_10", name: "First Paycheck", description: "Collect 1,000 Coins.", titleReward: "The Knowledge Seeker", coinReward: 20, price: 500, tier: "common", image: "assets/badges/knowledgeSeeker.png", reqType: "total_coins", reqValue: 1000 },
    { id: "ach_11", name: "Big Spender", description: "Spend 5,000 Coins in the Shop.", titleReward: "The Resource Investor", coinReward: 40, price: 1000, tier: "rare", image: "assets/badges/resourceInvestor.png", reqType: "spend_coins", reqValue: 5000 },
    { id: "ach_12", name: "Rolling in Gold", description: "Collect 20,000 Coins overall.", titleReward: "The Wealthy Wordsmith", coinReward: 200, price: 5000, tier: "epic", image: "assets/badges/wealthyWordsmith.png", reqType: "total_coins_earned", reqValue: 20000 },

    // --- Category 5: Avatar Collection ---
    { id: "ach_13", name: "New Look", description: "Buy your first avatar.", titleReward: "The Style Articulator", coinReward: 200, price: 500, tier: "common", image: "assets/badges/styleArticulator.png", reqType: "unlock_avatar", reqValue: 1 },
    { id: "ach_14", name: "Wardrobe Full", description: "Collect 5 different avatars.", titleReward: "The Guardian Collector", coinReward: 1000, price: 1000, tier: "rare", image: "assets/badges/guardianCollector.png", reqType: "unlock_avatar", reqValue: 5 },
    { id: "ach_15", name: "Max Power", description: "Upgrade any standard avatar to Level 10.", titleReward: "The Syntax Sage", coinReward: 2000, price: 5000, tier: "epic", image: "assets/badges/syntaxSage.png", reqType: "avatar_level", reqValue: 10 },
    { id: "ach_16", name: "Guardian Master", description: "Buy all animal or fantasy-themed avatars.", titleReward: "The Lore Keeper", coinReward: 5000, price: 10000, tier: "legendary", image: "assets/badges/guardianMaster.png", reqType: "all_standard_avatars", reqValue: 1 },

    // --- Category 6: Dedication & Events ---
    { id: "ach_17", name: "Event Hunter", description: "Play during a Limited Time Event.", titleReward: "The Active Participant", coinReward: 200, price: 500, tier: "common", image: "assets/badges/activeParticipant.png", reqType: "special_event", reqValue: 1 },
    { id: "ach_18", name: "Night Owl", description: "Play a game after 10 PM.", titleReward: "The Midnight Reader", coinReward: 100, price: 500, tier: "common", image: "assets/badges/midnightReader.png", reqType: "play_time_late", reqValue: 22 },
    { id: "ach_19", name: "Early Bird", description: "Play a game before 7 AM.", titleReward: "The Morning Orator", coinReward: 100, price: 500, tier: "common", image: "assets/badges/morningOrator.png", reqType: "play_time_early", reqValue: 7 },

    // --- Category 7: Persistence & Streaks ---
    { id: "ach_20", name: "Weekend Warrior", description: "Play at least one game on a Saturday or Sunday.", titleReward: "The Weekend Writer", coinReward: 20, price: 500, tier: "common", image: "assets/badges/weekendWriter.png", reqType: "play_weekend", reqValue: 1 },
    { id: "ach_21", name: "3-Day Streak", description: "Play at least one game for 3 consecutive days.", titleReward: "The Consistent Student", coinReward: 200, price: 1000, tier: "rare", image: "assets/badges/consistentStudent.png", reqType: "login_streak", reqValue: 3 },
    { id: "ach_22", name: "1-Week Streak", description: "Play for 7 consecutive days without failing.", titleReward: "The Dedicated Linguist", coinReward: 500, price: 5000, tier: "epic", image: "assets/badges/dedicatedLinguist.png", reqType: "login_streak", reqValue: 7 },
    { id: "ach_23", name: "Marathoner", description: "Complete 5 different games in a single day.", titleReward: "The Language Marathoner", coinReward: 100, price: 5000, tier: "epic", image: "assets/badges/languageMarathoner.png", reqType: "daily_games", reqValue: 5 },

    // --- Category 8: Game Mastery ---
    { id: "ach_24", name: "The Explorer", description: "Play all 12 games at least once.", titleReward: "The Syllabus Explorer", coinReward: 2000, price: 5000, tier: "epic", image: "assets/badges/syllabusExplorer.png", reqType: "unique_games", reqValue: 12 },
    { id: "ach_25", name: "Jack of All Trades", description: "Score at least 50 points in each of the 12 games.", titleReward: "The Polymath", coinReward: 2000, price: 5000, tier: "epic", image: "assets/badges/polymath.png", reqType: "high_score_all", reqValue: 12 },
    { id: "ach_26", name: "Comeback Kid", description: "Get a Perfect Score in a game you previously scored low in.", titleReward: "The Resilient Reviser", coinReward: 200, price: 5000, tier: "epic", image: "assets/badges/resilientReviser.png", reqType: "comeback_win", reqValue: 1 },
    { id: "ach_27", name: "Triple Threat", description: "Get a Perfect Score in 3 different games.", titleReward: "The English Prodigy", coinReward: 200, price: 5000, tier: "epic", image: "assets/badges/englishProdigy.png", reqType: "perfect_scores", reqValue: 3 },

    // --- Category 9: Social & Advanced Challenges ---
    { id: "ach_28", name: "Friendly Rival", description: "Send 10 challenge codes to friends.", titleReward: "The Study Buddy", coinReward: 100, price: 500, tier: "common", image: "assets/badges/studyBuddy.png", reqType: "send_challenge", reqValue: 10 },
    { id: "ach_29", name: "Challenge Addict", description: "Complete 50 challenges overall.", titleReward: "The Forum Debater", coinReward: 200, price: 1000, tier: "rare", image: "assets/badges/forumDebater.png", reqType: "total_challenges", reqValue: 50 },
    { id: "ach_30", name: "Good Sport", description: "Lose 5 challenges. Don't give up!", titleReward: "The Gracious Learner", coinReward: 100, price: 500, tier: "common", image: "assets/badges/graciousLearner.png", reqType: "lose_challenge", reqValue: 5 },
    { id: "ach_31", name: "Close Call", description: "Win a challenge with a narrow margin of 1 to 5 points.", titleReward: "The Sharp Thinker", coinReward: 200, price: 5000, tier: "epic", image: "assets/badges/sharpThinker.png", reqType: "narrow_win", reqValue: 1 },
    { id: "ach_32", name: "Academic Comeback", description: "Defeat a friend who previously beat your record.", titleReward: "The Academic Redeemer", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/academicComeback.png", reqType: "revenge_win", reqValue: 1 },

    // --- Category 10: Advanced Inventory ---
    { id: "ach_33", name: "Window Shopper", description: "Open the Shop menu 20 times.", titleReward: "The Curious Browser", coinReward: 20, price: 500, tier: "common", image: "assets/badges/curiousBrowser.png", reqType: "visit_shop", reqValue: 20 },
    { id: "ach_34", name: "Avid Collector", description: "Collect 10 different avatars in your inventory.", titleReward: "The Archive Master", coinReward: 2000, price: 10000, tier: "legendary", image: "assets/badges/archiveMaster.png", reqType: "unlock_avatar", reqValue: 10 },
    { id: "ach_35", name: "Elite Squad", description: "Upgrade 3 different avatars to Level 10 (Max Level).", titleReward: "The Dean of Guardians", coinReward: 5000, price: 5000, tier: "epic", image: "assets/badges/deanOfGuardians.png", reqType: "multiple_avatar_level", reqValue: 3 },
    { id: "ach_36", name: "Loyal Companion", description: "Equip the same avatar for 7 consecutive days.", titleReward: "The Steadfast Scholar", coinReward: 200, price: 10000, tier: "legendary", image: "assets/badges/steadfastScholar.png", reqType: "avatar_streak", reqValue: 7 },

    // --- Category 11: Special Events & Hidden ---
    { id: "ach_37", name: "Merdeka Scholar", description: "Log in and play on August 31st.", titleReward: "The Patriotic Poet", coinReward: 1000, price: 10000, tier: "legendary", image: "assets/badges/patrioticPoet.png", reqType: "merdeka_day", reqValue: 1 },
    { id: "ach_38", name: "Holiday Gamer", description: "Log in and play during the December holidays.", titleReward: "The Festive Storyteller", coinReward: 1000, price: 5000, tier: "epic", image: "assets/badges/festiveStoryteller.png", reqType: "play_month", reqValue: 12 },
    { id: "ach_39", name: "First Arrival", description: "Log in to the Game Hub for the first time.", titleReward: "The Freshman", coinReward: 20, price: 500, tier: "common", image: "assets/badges/freshman.png", reqType: "first_login", reqValue: 1 },
    { id: "ach_40", name: "Secret Finder", description: "??? (Discover the hidden secret in the Game Hub)", titleReward: "The Context Detective", coinReward: 5000, price: 10000, tier: "legendary", image: "assets/badges/contextDetective.png", reqType: "hidden_secret", reqValue: 1 },
    
    // --- Category 12: Rank & Level (GABUNGAN) ---
    { id: "ach_41", name: "Top Honor Roll", description: "Reach Rank 3 in the Leaderboard.", titleReward: "Top Honor Roll", coinReward: 500, price: 1000, tier: "rare", image: "assets/badges/topHonorRoll.png", reqType: "rank", reqValue: 3 },
    { id: "ach_42", name: "Silver Laureate", description: "Reach Rank 2 in the Leaderboard.", titleReward: "Silver Laureate", coinReward: 1000, price: 5000, tier: "epic", image: "assets/badges/silverLaureate.png", reqType: "rank", reqValue: 2 },
    { id: "ach_43", name: "Supreme Valedictorian", description: "Reach Rank 1 in the Leaderboard.", titleReward: "Supreme Valedictorian", coinReward: 2000, price: 10000, tier: "legendary", image: "assets/badges/supremeValedictorian.png", reqType: "rank", reqValue: 1 },
    { id: "ach_44", name: "Grammar Guardian", description: "Reach level 10.", titleReward: "The Grammar Guardian", coinReward: 50, price: 1000, tier: "rare", image: "assets/badges/grammarGuardian.png", reqType: "level_reach", reqValue: 10 }
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