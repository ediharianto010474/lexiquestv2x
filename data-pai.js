// data-pai.js - Pangkalan Data Pendidikan Agama Islam LexiQuest V2
const paiQuestions = {
"aqidah": [
        {
            id: "AQ01",
            question: "Rukun Iman mengandungi berapa perkara?",
            options: ["ليم ڤرکارا", "امڤت ڤرکارا", "انم ڤرکارا", "توجوه ڤرکارا"],
            answer: 2
        },
        {
            id: "AQ02",
            question: "Apakah rukun Iman yang pertama?",
            options: ["إيمان کڤد کتاب", "إيمان کڤد الله", "إيمان کڤد رسول", "إيمان کڤد هاري قيامة"],
            answer: 1
        },
        {
            id: "AQ03",
            question: "Erti Islam dari segi bahasa ialah patuh dan ___ .",
            options: ["ملاون", "طاعة", "لاري", "ماراه"],
            answer: 1
        },
        {
            id: "AQ04",
            question: "Berapakah bilangan sifat wajib bagi Allah SWT?",
            options: ["٢٥ صيفت", "١٠ صيفت", "٤ صيفت", "٢٠ صيفت"],
            answer: 3
        },
        {
            id: "AQ05",
            question: "Sifat wajib 'Wujud' bagi Allah bererti ___ .",
            options: ["اد", "تيدق اد", "سديا", "بينسا"],
            answer: 0
        },
        {
            id: "AQ06",
            question: "Lawan bagi sifat Wujud ialah 'Adam' yang bererti ___ .",
            options: ["ککل", "ماتي", "تياد", "لمه"],
            answer: 2
        },
        {
            id: "AQ07",
            question: "Sifat 'Qidam' bagi Allah bermaksud ___ .",
            options: ["سديا اد", "بهارو", "بربيذا", "بهاڬيا"],
            answer: 0
        },
        {
            id: "AQ08",
            question: "Berapakah sifat mustahil yang wajib diketahui bagi Allah?",
            options: ["٢٠ صيفت", "٥٠ صيفت", "٣ صيفت", "١٣ صيفت"],
            answer: 0
        },
        {
            id: "AQ09",
            question: "Berapakah sifat harus bagi Allah SWT?",
            options: ["دوءا صيفت", "ساتو صيفت", "تيدق اد", "باڽق"],
            answer: 1
        },
        {
            id: "AQ10",
            question: "Nama Allah 'Al-Khaliq' bererti Maha ___ .",
            options: ["مڠتاهوءي", "مليهت", "منچيڤتا", "مندڠر"],
            answer: 2
        },
        {
            id: "AQ11",
            question: "Malaikat diciptakan oleh Allah daripada ___ .",
            options: ["تانه", "اڤي", "أڠين", "نور اتاو چهاي"],
            answer: 3
        },
        {
            id: "AQ12",
            question: "Berapakah bilangan malaikat yang wajib diketahui?",
            options: ["٢٥ ملائکة", "١٠ ملائکة", "٥ ملائکة", "٥٠ ملائکة"],
            answer: 1
        },
        {
            id: "AQ13",
            question: "Malaikat yang bertugas membawa wahyu ialah ___ .",
            options: ["ميکائيل", "إسرافيل", "جبريل", "عزرائيل"],
            answer: 2
        },
        {
            id: "AQ14",
            question: "Malaikat Mikail bertugas untuk ___ .",
            options: ["منورونکن هوجن دان رزقي", "منچابوت ڽاوا", "منجاڬ شرڬ", "تيوڤ سڠکاکالا"],
            answer: 0
        },
        {
            id: "AQ15",
            question: "Malaikat yang bertugas mencatat amalan baik ialah ___ .",
            options: ["عتيد", "رقيب", "منکر", "نکير"],
            answer: 1
        },
        {
            id: "AQ16",
            question: "Malaikat yang bertugas mencatat amalan buruk ialah ___ .",
            options: ["رقيب", "رضوان", "مالك", "عتيد"],
            answer: 3
        },
        {
            id: "AQ17",
            question: "Malaikat Israfil bertugas untuk ___ .",
            options: ["منچابوت ڽاوا", "منجاڬ نراک", "منييوڤ سڠکاکالا", "منونجوقکن جالن"],
            answer: 2
        },
        {
            id: "AQ18",
            question: "Malaikat Izrail bertugas untuk ___ .",
            options: ["منچابوت ڽاوا", "ممباوا وحي", "منجاڬ شرڬ", "منورونکن هوجن"],
            answer: 0
        },
        {
            id: "AQ19",
            question: "Malaikat yang bertugas menjaga syurga ialah ___ .",
            options: ["مالك", "رضوان", "منکر", "نکير"],
            answer: 1
        },
        {
            id: "AQ20",
            question: "Malaikat yang bertugas menjaga neraka ialah ___ .",
            options: ["رضوان", "جبريل", "مالك", "ميکائيل"],
            answer: 2
        },
        {
            id: "AQ21",
            question: "Berapakah bilangan kitab yang wajib diketahui?",
            options: ["امڤت کتاب", "ليم کتاب", "تڬ کتاب", "سڤولوه کتاب"],
            answer: 0
        },
        {
            id: "AQ22",
            question: "Kitab Taurat diturunkan kepada Nabi ___ .",
            options: ["نبي عيسى", "نبي داود", "نبي موسى", "نبي محمد"],
            answer: 2
        },
        {
            id: "AQ23",
            question: "Kitab Zabur diturunkan kepada Nabi ___ .",
            options: ["نبي داود", "نبي ابراهيم", "نبي نوح", "نبي موسى"],
            answer: 0
        },
        {
            id: "AQ24",
            question: "Kitab Injil diturunkan kepada Nabi ___ .",
            options: ["نبي محمد", "نبي عيسى", "نبي يوسف", "نبي سليمان"],
            answer: 1
        },
        {
            id: "AQ25",
            question: "Kitab Al-Quran diturunkan kepada Nabi ___ .",
            options: ["نبي ادم", "نبي موسى", "نبي داود", "نبي محمد"],
            answer: 3
        },
        {
            id: "AQ26",
            question: "Al-Quran diturunkan dalam bahasa ___ .",
            options: ["ملايو", "عرب", "إڠڬريس", "ڤرسيا"],
            answer: 1
        },
        {
            id: "AQ27",
            question: "Berapakah bilangan rasul yang wajib diketahui?",
            options: ["١٠ رسول", "٢٥ رسول", "٥٠ رسول", "٣١٣ رسول"],
            answer: 1
        },
        {
            id: "AQ28",
            question: "Siapakah rasul yang pertama?",
            options: ["نبي نوح", "نبي ابراهيم", "نبي ادم", "نبي ادريس"],
            answer: 2
        },
        {
            id: "AQ29",
            question: "Siapakah rasul yang terakhir?",
            options: ["نبي عيسى", "نبي موسى", "نبي محمد صلي الله عليه وسلم", "نبي اسماعيل"],
            answer: 2
        },
        {
            id: "AQ30",
            question: "Berapakah sifat wajib bagi rasul?",
            options: ["امڤت صيفت", "ليم صيفت", "تڬ صيفت", "صيفت٢٠"],
            answer: 0
        },
        {
            id: "AQ31",
            question: "Sifat wajib 'Siddiq' bagi rasul bererti ___ .",
            options: ["جوجور", "بيجقسان", "بنر", "مڽمڤايکن"],
            answer: 2
        },
        {
            id: "AQ32",
            question: "Sifat wajib 'Amanah' bagi rasul bererti ___ .",
            options: ["دوستا", "دڤرچاياءي / جوجور", "بودوه", "مڽمبوڽيکن"],
            answer: 1
        },
        {
            id: "AQ33",
            question: "Sifat wajib 'Tabligh' bagi rasul bererti ___ .",
            options: ["مڽمڤايکن", "بيجقسان", "بنر", "امانة"],
            answer: 0
        },
        {
            id: "AQ34",
            question: "Sifat wajib 'Fatanah' bagi rasul bererti ___ .",
            options: ["لمه", "دوستا", "بيجقسان", "جوجور"],
            answer: 2
        },
        {
            id: "AQ35",
            question: "Lawan bagi sifat Siddiq ialah 'Kizib' yang bererti ___ .",
            options: ["خيانة", "دوستا / بوهوڠ", "بودوه", "مڽمبوڽيکن"],
            answer: 1
        },
        {
            id: "AQ36",
            question: "Lawan bagi sifat Amanah ialah 'Khianat' yang bererti ___ .",
            options: ["تيدق جوجور", "بنر", "بيجق", "طاعة"],
            answer: 0
        },
        {
            id: "AQ37",
            question: "Lawan bagi sifat Tabligh ialah 'Kitman' yang bererti ___ .",
            options: ["مڽمبوڽيکن", "مڽمڤايکن", "بوهوڠ", "بودوه"],
            answer: 0
        },
        {
            id: "AQ38",
            question: "Lawan bagi sifat Fatanah ialah 'Baladah' yang bererti ___ .",
            options: ["بيجقسان", "بنر", "بودوه", "امانة"],
            answer: 2
        },
        {
            id: "AQ39",
            question: "Berapakah bilangan rasul yang mendapat gelaran Ulul Azmi?",
            options: ["تڬ رسول", "امڤت رسول", "ليم رسول", "توجوه رسول"],
            answer: 2
        },
        {
            id: "AQ40",
            question: "Apakah nama lain bagi hari kiamat?",
            options: ["يوم الدين", "يوم الجمعة", "يوم الاثنين", "يوم العيد"],
            answer: 0
        },
        {
            id: "AQ41",
            question: "Beriman kepada Qada' dan Qadar ialah rukun iman yang ke- ___ .",
            options: ["امڤت", "ليم", "انم", "تڬ"],
            answer: 2
        },
        {
            id: "AQ42",
            question: "Maksud 'Qada'' ialah ketetapan Allah SWT sejak ___ .",
            options: ["ازلي", "سماليم", "هاري اين", "تامت دونيا"],
            answer: 0
        },
        {
            id: "AQ43",
            question: "Maksud 'Qadar' ialah ___ ketetapan yang telah ditetapkan oleh Allah.",
            options: ["ڤلقساناءن", "ڤمبطالن", "ڤراوبهن", "ڤراراڠن"],
            answer: 0
        },
        {
            id: "AQ44",
            question: "Sifat wajib 'Baqa'' bagi Allah bererti ___ .",
            options: ["بينسا", "بهارو", "ککل", "اد"],
            answer: 2
        },
        {
            id: "AQ45",
            question: "Sifat 'Mukhalafatuhu Lilhawadith' bererti Allah ___ dengan yang baharu.",
            options: ["سام", "بربيذا", "همڤير", "سنتياس"],
            answer: 1
        },
        {
            id: "AQ46",
            question: "Sifat wajib 'Wahdaniyat' bagi Allah bererti Allah SWT itu Maha ___ .",
            options: ["اسا / ساتو", "باڽق", "دوءا", "لمه"],
            answer: 0
        },
        {
            id: "AQ47",
            question: "Kesan beriman kepada Allah ialah sentiasa ___ perintah-Nya.",
            options: ["منيڠڬلکن", "ملاون", "ماتوهي / طاعة", "ملوڤاکن"],
            answer: 2
        },
        {
            id: "AQ48",
            question: "Amalan menyekutukan Allah SWT dengan yang lain dikenali sebagai ___ .",
            options: ["شيريك", "نفاق", "فاسق", "کفور"],
            answer: 0
        },
        {
            id: "AQ49",
            question: "Dosa besar yang tidak akan diampunkan tanpa taubat nasuha ialah dosa ___ .",
            options: ["منچوري", "شيريك", "بوهوڠ", "ماري ماراه"],
            answer: 1
        },
        {
            id: "AQ50",
            question: "Asmaul Husna bererti nama-nama Allah SWT yang ___ .",
            options: ["بوروق", "اينده دان باءيق", "بياسا", "سديريجت"],
            answer: 1
        }
    ],

    // ==========================================
    // 🟡 KATEGORI 2: IBADAH (MEDIUM - PvP Arena)
    // Format: Ganjil (Sepenuhnya RUMI) | Genap (Sepenuhnya JAWI)
    // ==========================================
    "ibadah": [
        {
            id: "IB01",
            question: "Rukun Islam mengandungi berapa perkara?",
            options: ["Empat perkara", "Lima perkara", "Enam perkara", "Tujuh perkara"],
            answer: 1
        },
        {
            id: "IB02",
            question: "اڤاکه روکون إسلام يڠ ڤرتام؟",
            options: ["مڠوچڤ دوا کلمة شهادة", "منونايکن صلاة", "برڤواسا", "منونايکن زکوة"],
            answer: 0
        },
        {
            id: "IB03",
            question: "Berapakah bilangan solat fardu dalam sehari semalam?",
            options: ["Tiga waktu", "Empat waktu", "Lima waktu", "Enam waktu"],
            answer: 2
        },
        {
            id: "IB04",
            question: "براڤاکه بيلڠن رکعة باڬي صلاة صبح؟",
            options: ["ساتو رکعة", "دوا رکعة", "تڬ رکعة", "امڤت رکعة"],
            answer: 1
        },
        {
            id: "IB05",
            question: "Berapakah bilangan rakaat bagi solat Maghrib?",
            options: ["Dua rakaat", "Tiga rakaat", "Empat rakaat", "Lima rakaat"],
            answer: 1
        },
        {
            id: "IB06",
            question: "صلاة ظهر، عصر دان عشاء مڠندوڠي ___ رکعة.",
            options: ["دوا رکعة", "تڬ رکعة", "امڤت رکعة", "ليم رکعة"],
            answer: 2
        },
        {
            id: "IB07",
            question: "Tujuan utama kita mandi hadas dan berwuduk ialah untuk ___ .",
            options: ["Menghilangkan hadas", "Membersihkan baju", "Menyegarkan badan", "Menunjuk-nunjuk"],
            answer: 0
        },
        {
            id: "IB08",
            question: "اڤاکه يڠ دڤرلوکن اونتوق بروضوء؟",
            options: ["أءير مطلق", "أءير تابه", "أءير کلاڤ", "أءير کوڤي"],
            answer: 0
        },
        {
            id: "IB09",
            question: "Air yang bercampur dengan najis dikenali sebagai ___ .",
            options: ["Air mutlak", "Air musta'mal", "Air mutanajjis", "Air musyammas"],
            answer: 2
        },
        {
            id: "IB10",
            question: "براڤاکه روکون وضوء يڠ wajib دلاکوکن؟",
            options: ["امڤت روکون", "ليم روکون", "انم روکون", "توجوه روکون"],
            answer: 2
        },
        {
            id: "IB11",
            question: "Membasuh tangan hingga ke siku termasuk dalam ___ wuduk.",
            options: ["Rukun", "Sunat", "Makruh", "Haram"],
            answer: 0
        },
        {
            id: "IB12",
            question: "برکومور-کومور سماس بروضوء حکومڽا ___ .",
            options: ["واجب", "سنة", "حرام", "مکروه"],
            answer: 1
        },
        {
            id: "IB13",
            question: "Apakah perkara yang membatalkan wuduk?",
            options: ["Bercakap", "Makan", "Keluar sesuatu dari dubur/qubul", "Tidur secara duduk tetap"],
            answer: 2
        },
        {
            id: "IB14",
            question: "لاءوڠن اونتوق مڽرو اومت إسلام منونايکن صلاة دسبوت ___ .",
            options: ["أذان", "إقامة", "ذکر", "تکبير"],
            answer: 0
        },
        {
            id: "IB15",
            question: "Hukum melaungkan azan bagi solat fardu ialah ___ .",
            options: ["Sunat muakkad", "Fardu ain", "Fardu kifayah", "Harus"],
            answer: 2
        },
        {
            id: "IB16",
            question: "سياڤاکه نام مؤذن (ڤلاوڠ أذان) ڤرتام دالم إسلام؟",
            options: ["بلال بن رباح", "ابو بکر", "عمر بن الخطاب", "علي بن ابي طالب"],
            answer: 0
        },
        {
            id: "IB17",
            question: "Apakah tanda masuknya waktu solat Subuh?",
            options: ["Terbit fajar sadiq", "Tenggelam matahari", "Matahari di atas kepala", "Terbit matahari"],
            answer: 0
        },
        {
            id: "IB18",
            question: "روکون صلاة يڠ مليبتکن باچاءن دسبوت روکون ___ .",
            options: ["قولي (باچاءن)", "فعلي (ڤربواتن)", "قلبي (هاتي)", "صوري"],
            answer: 0
        },
        {
            id: "IB19",
            question: "Rukun solat yang melibatkan pergerakan anggota badan disebut rukun ___ .",
            options: ["Qauli (Bacaan)", "Fi'li (Perbuatan)", "Qalbi (Hati)", "Maknawi"],
            answer: 1
        },
        {
            id: "IB20",
            question: "نيت دالم صلاة ترماسوق دالم روکون ___ .",
            options: ["فعلي", "قولي", "قلبي (هاتي)", "سنة"],
            answer: 2
        },
        {
            id: "IB21",
            question: "Berapakah bilangan rukun solat kesemuanya?",
            options: ["10 rukun", "13 rukun", "15 rukun", "20 rukun"],
            answer: 1
        },
        {
            id: "IB22",
            question: "ممباچ سورة الفاتحة دالم صلاة حکومڽا ___ .",
            options: ["واجب / روکون", "سنة", "هارس", "مکروه"],
            answer: 0
        },
        {
            id: "IB23",
            question: "Berhenti seketika (tenang) semasa rukuk dan sujud disebut ___ .",
            options: ["Tamninah", "Jalsah", "Iktidal", "Qunut"],
            answer: 0
        },
        {
            id: "IB24",
            question: "باچاءن قنوت دلاکوکن سماس صلاة ___ .",
            options: ["ظهر", "عصر", "صبح", "عشاء"],
            answer: 2
        },
        {
            id: "IB25",
            question: "Bercakap dengan sengaja semasa solat boleh ___ .",
            options: ["Membatalkan solat", "Menambahkan pahala", "Menambahkan rakaat", "Dimaafkan"],
            answer: 0
        },
        {
            id: "IB26",
            question: "اراه کعبة يڠ منجادي هادڤن اومت إسلام سماس صلاة دسبوت ___ .",
            options: ["محراب", "قبلة", "مناره", "مسجد"],
            answer: 1
        },
        {
            id: "IB27",
            question: "Solat berjemaah mempunyai kelebihan ___ darjat berbanding solat bersendirian.",
            options: ["10 darjat", "17 darjat", "27 darjat", "50 darjat"],
            answer: 2
        },
        {
            id: "IB28",
            question: "اورڠ يڠ مڠتواءي صلاة برجميعه دسبوت ___ .",
            options: ["امام", "مأموم", "بلال", "قاري"],
            answer: 0
        },
        {
            id: "IB29",
            question: "Orang yang mengikut imam dalam solat berjemaah disebut ___ .",
            options: ["Wali", "Makmum", "Khatib", "Muazin"],
            answer: 1
        },
        {
            id: "IB30",
            question: "مأموم يڠ ترلمبت دان تيدق سمڤت ممباچ الفاتحة برسام امام دسبوت ___ .",
            options: ["مأموم موافق", "مأموم مسبوق", "مأموم مسافر", "مأموم مريض"],
            answer: 1
        },
        {
            id: "IB31",
            question: "Solat dua rakaat yang dilakukan pada pagi Hari Raya Aidilfitri hukumnya ___ .",
            options: ["Wajib", "Sunat Muakkad", "Harus", "Fardu Kifayah"],
            answer: 1
        },
        {
            id: "IB32",
            question: "براڤاکه بيلڠن خطبة باڬي صلاة هاري راي دان صلاة جمعة؟",
            options: ["ساتو خطبة", "دوا خطبة", "تڬ خطبة", "تياد خطبة"],
            answer: 1
        },
        {
            id: "IB33",
            question: "Solat fardu Jumaat diwajibkan ke atas kaum ___ .",
            options: ["Wanita", "Lelaki", "Kanak-kanak", "Musafir wanita"],
            answer: 1
        },
        {
            id: "IB34",
            question: "مڠهيمڤونکن دوا صلاة فرض دالم ساتو وقتو دسبوت صلاة ___ .",
            options: ["قصر", "جمع", "وتر", "تراويح"],
            answer: 1
        },
        {
            id: "IB35",
            question: "Mengurangkan rakaat solat fardu daripada empat menjadi dua rakaat disebut ___ .",
            options: ["Jamak", "Qasar", "Sujud Sahwi", "Tayamum"],
            answer: 1
        },
        {
            id: "IB36",
            question: "مڠڬنتيکن وضوء دڠن دبو تانه يڠ سوچي دسبوت ___ .",
            options: ["استنجاء", "تيمم", "غسل", "مسح"],
            answer: 1
        },
        {
            id: "IB37",
            question: "Hukum menunaikan ibadah puasa di bulan Ramadan ialah ___ .",
            options: ["Sunat", "Fardu Ain", "Fardu Kifayah", "Harus"],
            answer: 1
        },
        {
            id: "IB38",
            question: "بڠون مکان سبلوم ماسوق وقتو صبح دسبوت ___ .",
            options: ["بربکال", "برسحور", "إفطار", "تراويح"],
            answer: 1
        },
        {
            id: "IB39",
            question: "Makan dan minum dengan sengaja pada siang hari boleh ___ puasa.",
            options: ["Membatalkan", "Mengabsahkan", "Menambah pahala", "Meneruskan"],
            answer: 0
        },
        {
            id: "IB40",
            question: "صلاة سنة يڠ هاڽ دلاکوکن دالم بولن رمضان اياله صلاة ___ .",
            options: ["وتر", "تراويح", "تهجد", "ضحى"],
            answer: 1
        },
        {
            id: "IB41",
            question: "Mengeluarkan harta tertentu kepada asnaf yang layak disebut ___ .",
            options: ["Sedekah", "Zakat", "Wakaf", "Hadiah"],
            answer: 1
        },
        {
            id: "IB42",
            question: "زکوة يڠ wajib دکلوارکن سبلوم صلاة عيد الفطري اياله زکوة ___ .",
            options: ["هرتا", "فطرة (Fitrah)", "امس", "ڤرنياڬاءن"],
            answer: 1
        },
        {
            id: "IB43",
            question: "Berapakah bilangan golongan (asnaf) yang layak menerima zakat?",
            options: ["Lima golongan", "Enam golongan", "Tujuh golongan", "Lapan golongan"],
            answer: 3
        },
        {
            id: "IB44",
            question: "مقصود عبادة حج اياله مڠونجوڠي ___ اونتوق ملاکوکن عبادة ترتنتو.",
            options: ["بيت المقدس", "بيت الله (مکه)", "مسجد النبي", "قبة الصخرة"],
            answer: 1
        },
        {
            id: "IB45",
            question: "Mengelilingi Kaabah sebanyak tujuh kali pusingan disebut ___ .",
            options: ["Sa'i", "Tawaf", "Wukuf", "Tahallul"],
            answer: 1
        },
        {
            id: "IB46",
            question: "برجالن اولڠ-اليق انتارا بوکيت صفا دان مروة دسبوت ___ .",
            options: ["طواف", "سعي", "وقوف", "مبيت"],
            answer: 1
        },
        {
            id: "IB47",
            question: "Berada di padang Arafah pada 9 Zulhijjah disebut ___ .",
            options: ["Wukuf", "Tahallul", "Ihram", "Tawaf"],
            answer: 0
        },
        {
            id: "IB48",
            question: "برچوکور اتاو مڠڬونتيڠ رامبوت سبلوم سليسائي حج دسبوت ___ .",
            options: ["تحلل", "سعي", "وقوف", "رمي"],
            answer: 0
        },
        {
            id: "IB49",
            question: "Menyembelih haiwan ternakan sebagai tanda syukur sempena Hari Raya Haji disebut ___ .",
            options: ["Akikah", "Korban", "Sedekah", "Walimah"],
            answer: 1
        },
        {
            id: "IB50",
            question: "مڽمبليه بيناتڠ ترنقن سيمڤنا کلاهيرن باي دسبوت ___ .",
            options: ["قربان", "عقيقة", "نذر", "هدية"],
            answer: 1
        }
    ],

"sirah": [
        {
            id: "SR01",
            question: "Siapakah nama bapa Nabi Muhammad SAW?",
            options: ["Abdullah", "Abu Talib", "Abdul Muttalib", "Abu Lahab"],
            answer: 0
        },
        {
            id: "SR02",
            question: "سياڤاکه ايبو نبي محمد صلي الله عليه وسلم؟",
            options: ["امينة", "خديجة", "عائشة", "حليمة"],
            answer: 0
        },
        {
            id: "SR03",
            question: "Di manakah Nabi Muhammad SAW dilahirkan?",
            options: ["Makkah", "Madinah", "Taif", "Syam"],
            answer: 0
        },
        {
            id: "SR04",
            question: "ڤد تاهون اڤاکه نبي محمد دلاهيرکن؟",
            options: ["تاهون هجره", "تاهون ڬاجه", "تاهون ايكن", "تاهون ايبو"],
            answer: 1
        },
        {
            id: "SR05",
            question: "Berapakah tarikh kelahiran Nabi Muhammad SAW?",
            options: ["10 Muharam", "12 Rabiulawal", "27 Rejab", "1 Syawal"],
            answer: 1
        },
        {
            id: "SR06",
            question: "سياڤاکه وانيتا ڤرتام يڠ مڽوسوکن نبي محمد؟",
            options: ["خديجة", "حليمة السعدية", "ثويبة", "فاطمة"],
            answer: 2
        },
        {
            id: "SR07",
            question: "Siapakah nama ibu susuan Nabi Muhammad SAW yang memelihara Baginda di perkampungan Bani Saad?",
            options: ["Aminah", "Thuwaibah", "Halimah As-Sa'diah", "Ummu Aiman"],
            answer: 2
        },
        {
            id: "SR08",
            question: "براڤاکه عمور نبي محمد کتيک ايبوڽ وفاة (منيڠڬل دونيا)؟",
            options: ["٤ تاهون", "٦ تاهون", "٨ تاهون", "١٠ تاهون"],
            answer: 1
        },
        {
            id: "SR09",
            question: "Siapakah datuk yang memelihara Nabi Muhammad SAW selepas ibunya meninggal dunia?",
            options: ["Abu Talib", "Abdul Muttalib", "Abu Lahab", "Abu Jahal"],
            answer: 1
        },
        {
            id: "SR10",
            question: "براڤاکه عمور نبي محمد کتيک داتوقڽ منيڠڬل دونيا؟",
            options: ["٦ تاهون", "٨ تاهون", "١٠ تاهون", "١٢ تاهون"],
            answer: 1
        },
        {
            id: "SR11",
            question: "Siapakah bapa saudara yang memelihara Nabi Muhammad SAW selepas datuknya meninggal dunia?",
            options: ["Abu Talib", "Hamzah", "Abbas", "Abu Lahab"],
            answer: 0
        },
        {
            id: "SR12",
            question: "اڤاکه ڤکرجاءن نبي محمد سماس رماج اونتوق ممبنتو باڤ ساوداراڽ؟",
            options: ["ڤتاني", "ڤڠمبالا کمبيڠ", "نلاين", "تکراڠ کايو"],
            answer: 1
        },
        {
            id: "SR13",
            question: "Ke manakah Nabi Muhammad SAW pergi untuk berniaga membawa barang dagangan Khadijah?",
            options: ["Yaman", "Taif", "Syam", "Habsyah"],
            answer: 2
        },
        {
            id: "SR14",
            question: "اڤاکه ڬلرن يڠ دبريکن کڤد نبي محمد کران کجوجورنڽ؟",
            options: ["الفاروق", "الأمين", "الصديق", "أسد الله"],
            answer: 1
        },
        {
            id: "SR15",
            question: "Siapakah isteri pertama Nabi Muhammad SAW?",
            options: ["Aisyah", "Saudah", "Hafsah", "Khadijah"],
            answer: 3
        },
        {
            id: "SR16",
            question: "براڤاکه عمور نبي محمد کتيک برکهوين دڠن خديجة؟",
            options: ["٢٠ تاهون", "٢٥ تاهون", "٣٠ تاهون", "٤٠ تاهون"],
            answer: 1
        },
        {
            id: "SR17",
            question: "Di manakah Nabi Muhammad SAW menerima wahyu yang pertama?",
            options: ["Gua Hira'", "Gua Thur", "Bukit Safa", "Bukit Marwah"],
            answer: 0
        },
        {
            id: "SR18",
            question: "اڤاکه سورة ڤرتام يڠ دتورونکن کڤد نبي محمد؟",
            options: ["سورة الفاتحة", "سورة الإخلاص", "سورة العلق", "سورة البقرة"],
            answer: 2
        },
        {
            id: "SR19",
            question: "Berapakah umur Nabi Muhammad SAW ketika dilantik menjadi Rasul?",
            options: ["25 tahun", "30 tahun", "35 tahun", "40 tahun"],
            answer: 3
        },
        {
            id: "SR20",
            question: "براڤ تاهونکه نبي محمد بردعوه سچارا رهسيا؟",
            options: ["٢ تاهون", "٣ تاهون", "٥ تاهون", "١٠ تاهون"],
            answer: 1
        },
        {
            id: "SR21",
            question: "Di manakah pusat dakwah rahsia pada awal Islam?",
            options: ["Rumah Abu Bakar", "Rumah Khadijah", "Rumah Al-Arqam", "Rumah Abu Talib"],
            answer: 2
        },
        {
            id: "SR22",
            question: "سياڤاکه للاکي ديواس ڤرتام يڠ مملوق إسلام؟",
            options: ["علي بن ابي طالب", "ابو بکر الصديق", "عمر بن الخطاب", "عثمان بن عفان"],
            answer: 1
        },
        {
            id: "SR23",
            question: "Siapakah wanita pertama yang memeluk Islam?",
            options: ["Khadijah binti Khuwailid", "Fatimah binti Muhammad", "Aisyah binti Abu Bakar", "Sumayyah"],
            answer: 0
        },
        {
            id: "SR24",
            question: "سياڤاکه کانق-کانق ڤرتام يڠ مملوق إسلام؟",
            options: ["حسن", "حسين", "علي بن ابي طالب", "زيد بن حارثة"],
            answer: 2
        },
        {
            id: "SR25",
            question: "Siapakah hamba yang diseksa di padang pasir kerana mempertahankan Islam?",
            options: ["Zaid bin Harithah", "Bilal bin Rabah", "Salman Al-Farisi", "Ammar bin Yasir"],
            answer: 1
        },
        {
            id: "SR26",
            question: "ڤريستيوا إسراء دان معراج برلاکو ڤد بولن اڤ؟",
            options: ["رمضان", "شوال", "رجب", "محرم"],
            answer: 2
        },
        {
            id: "SR27",
            question: "Ibadah apakah yang difardukan secara terus kepada Nabi semasa Israk Mikraj?",
            options: ["Puasa", "Zakat", "Haji", "Solat 5 waktu"],
            answer: 3
        },
        {
            id: "SR28",
            question: "نبي محمد برهجره دري مکه ک مان؟",
            options: ["شام", "مدينة", "طائف", "حبشة"],
            answer: 1
        },
        {
            id: "SR29",
            question: "Siapakah sahabat yang menemani Nabi Muhammad SAW berhijrah?",
            options: ["Abu Bakar As-Siddiq", "Umar bin Al-Khattab", "Ali bin Abi Talib", "Uthman bin Affan"],
            answer: 0
        },
        {
            id: "SR30",
            question: "دماناکه نبي دان ابو بکر برسمبوڽي دري کجرن قريش سماس هجره؟",
            options: ["ڬوا حراء", "ڬوا ثور", "بوکيت احد", "بوکيت صفا"],
            answer: 1
        },
        {
            id: "SR31",
            question: "Apakah masjid pertama yang dibina oleh Nabi Muhammad SAW dalam perjalanan hijrah?",
            options: ["Masjidil Haram", "Masjid Nabawi", "Masjid Quba'", "Masjidil Aqsa"],
            answer: 2
        },
        {
            id: "SR32",
            question: "اڤاکه نام مسجد يڠ دبينا اوليه نبي د مدينة؟",
            options: ["مسجد قباء", "مسجد الحرام", "مسجد النبوي", "مسجد الأقصى"],
            answer: 2
        },
        {
            id: "SR33",
            question: "Apakah peperangan pertama dalam sejarah Islam?",
            options: ["Perang Badar", "Perang Uhud", "Perang Khandaq", "Perang Khaibar"],
            answer: 0
        },
        {
            id: "SR34",
            question: "ڤرڠ بدر برلاکو ڤد بولن اڤ؟",
            options: ["شوال", "رمضان", "محرم", "صفر"],
            answer: 1
        },
        {
            id: "SR35",
            question: "Dalam Perang Uhud, bapa saudara Nabi SAW yang syahid ialah ___ .",
            options: ["Abu Talib", "Abbas", "Hamzah", "Abu Lahab"],
            answer: 2
        },
        {
            id: "SR36",
            question: "اڤاکه نام ڤرجنجين داماي انتارا اومت إسلام دان قريش مکه؟",
            options: ["ڤرجنجين عقبة", "ڤرجنجين حديبية", "ڤرجنجين مدينة", "ڤرجنجين طائف"],
            answer: 1
        },
        {
            id: "SR37",
            question: "Peristiwa pembukaan semula Kota Makkah dipanggil sebagai ___ .",
            options: ["Fathu Makkah", "Hijrah", "Israk Mikraj", "Haji Wida'"],
            answer: 0
        },
        {
            id: "SR38",
            question: "اڤاکه نام حج تراخير يڠ دلاکوکن اوليه نبي محمد؟",
            options: ["حج عمرة", "حج تمتع", "حجة الوداع", "حج مبرور"],
            answer: 2
        },
        {
            id: "SR39",
            question: "Berapakah umur Nabi Muhammad SAW ketika wafat?",
            options: ["60 tahun", "63 tahun", "65 tahun", "70 tahun"],
            answer: 1
        },
        {
            id: "SR40",
            question: "دماناکه نبي محمد صلي الله عليه وسلم دوافاتکن دان دکبوميکن؟",
            options: ["مکه", "طائف", "مدينة", "شام"],
            answer: 2
        },
        {
            id: "SR41",
            question: "Siapakah khalifah pertama selepas kewafatan Rasulullah SAW?",
            options: ["Umar bin Al-Khattab", "Ali bin Abi Talib", "Uthman bin Affan", "Abu Bakar As-Siddiq"],
            answer: 3
        },
        {
            id: "SR42",
            question: "سياڤاکه خليفة کدوءا دالم خولفاء الراشدين؟",
            options: ["ابو بکر", "عمر بن الخطاب", "عثمان بن عفان", "علي بن ابي طالب"],
            answer: 1
        },
        {
            id: "SR43",
            question: "Siapakah khalifah ketiga dalam Khulafa Ar-Rasyidin?",
            options: ["Abu Bakar", "Umar", "Uthman bin Affan", "Ali"],
            answer: 2
        },
        {
            id: "SR44",
            question: "سياڤاکه خليفة کأمڤت دالم خولفاء الراشدين؟",
            options: ["علي بن ابي طالب", "عمر", "عثمان", "معاوية"],
            answer: 0
        },
        {
            id: "SR45",
            question: "Perang Khandaq (Parit) juga dikenali sebagai perang ___ .",
            options: ["Badar", "Uhud", "Ahzab", "Hunain"],
            answer: 2
        },
        {
            id: "SR46",
            question: "سياڤاکه صحابت يڠ منچادڠکن اڬر ڤاريت دڬالي دالم ڤرڠ خندق؟",
            options: ["خالد بن الوليد", "سلمان الفارسي", "بلال بن رباح", "زيد بن ثابت"],
            answer: 1
        },
        {
            id: "SR47",
            question: "Siapakah panglima Islam yang mendapat gelaran 'Pedang Allah yang Terhunus'?",
            options: ["Hamzah bin Abdul Muttalib", "Khalid bin Al-Walid", "Tariq bin Ziyad", "Salahuddin Al-Ayyubi"],
            answer: 1
        },
        {
            id: "SR48",
            question: "دماناکه ايبو نبي محمد دکبوميکن؟",
            options: ["مکه", "مدينة", "طائف", "ابواء"],
            answer: 3
        },
        {
            id: "SR49",
            question: "Di manakah bapa Nabi Muhammad SAW (Abdullah) wafat dan dimakamkan?",
            options: ["Makkah", "Yathrib (Madinah)", "Syam", "Taif"],
            answer: 1
        },
        {
            id: "SR50",
            question: "اڤاکه نام اصل باڬي کوتا مدينة سبلوم نبي برهجره؟",
            options: ["بکه", "يثرب", "طائف", "خيبر"],
            answer: 1
        }
    ],

    // ==========================================
    // 🔴 KATEGORI 4: AKHLAK (HARD - Boss Battle)
    // Format: Keseluruhan Soalan & Jawapan dalam JAWI
    // ==========================================
    "akhlak": [
        {
            id: "AK01",
            question: "اڤاکه مقصود اخلاق محمودة؟",
            options: ["اخلاق بوروق", "اخلاق ترڤوجي (باءيق)", "اخلاق ترکجي", "اخلاق بياسا"],
            answer: 1
        },
        {
            id: "AK02",
            question: "اڤاکه مقصود اخلاق مذمومة؟",
            options: ["اخلاق ترڤوجي", "اخلاق باءيق", "اخلاق ترکجي (بوروق)", "اخلاق مليا"],
            answer: 2
        },
        {
            id: "AK03",
            question: "سبلوم ماکن، کيت مستيله ممولاکن دڠن باچاءن ___ .",
            options: ["الحمد لله", "بسم الله", "سبحان الله", "الله أکبر"],
            answer: 1
        },
        {
            id: "AK04",
            question: "سماس ماکن دان مينوم، کيت دسونتکن مڠڬوناکن تاڠن ___ .",
            options: ["کيري", "کانن", "کدوا-دواڽ", "سجاري"],
            answer: 1
        },
        {
            id: "AK05",
            question: "سلڤس سليسائي ماکن، کيت هندقله مڠوچڤکن ___ كڤد الله.",
            options: ["بسم الله", "استغفر الله", "الحمد لله", "ما شاء الله"],
            answer: 2
        },
        {
            id: "AK06",
            question: "سماس تيدور، کيت دسونتکن مڠيريڠ ک سبله ___ .",
            options: ["کانن", "کيري", "تيارڤ", "تلنتڠ"],
            answer: 0
        },
        {
            id: "AK07",
            question: "ممباچ دعاء سبلوم تيدور داڤت مڠيلقکن ڬڠڬوان ___ .",
            options: ["ماءنسي", "حيوان", "شيطان", "مالم"],
            answer: 2
        },
        {
            id: "AK08",
            question: "کتيک ماسوق ک تاندس، کيت دسونتکن ملڠکه دڠن کاکي ___ .",
            options: ["کانن", "کيري", "کدوا-دواڽ", "لومڤت"],
            answer: 1
        },
        {
            id: "AK09",
            question: "کتيک کلوار دري تاندس، کيت دسونتکن ملڠکه دڠن کاکي ___ .",
            options: ["کانن", "کيري", "کدوا-دواڽ", "لومڤت"],
            answer: 0
        },
        {
            id: "AK10",
            question: "ادب منونتوت علمو اياله ممبتولکن نيت سمات-مات کران ___ .",
            options: ["ڬورو", "ايبو باڤ", "الله", "کاون"],
            answer: 2
        },
        {
            id: "AK11",
            question: "سماس ڬورو سدڠ مڠاجر د هادڤن کلاس، موريد مستيله ___ .",
            options: ["برچاکڤ", "تيدور", "بوات بيسيڠ", "ممبري تومڤوان (فوکوس)"],
            answer: 3
        },
        {
            id: "AK12",
            question: "حکوم مندرحاک اتاو مڠڬوناکن ڤرکتاءن 'أه' کڤد ايبو باڤ اياله ___ .",
            options: ["حرام دان بردوسا بسر", "مکروه", "سنة", "هارس"],
            answer: 0
        },
        {
            id: "AK13",
            question: "دعاء ايبو باڤ ترهادڤ انق-انقڽ ساڠت ___ اوليه الله.",
            options: ["دبوات-بوات", "مستجاب (دماقبولکن)", "دطولق", "دبيارکن"],
            answer: 1
        },
        {
            id: "AK14",
            question: "اڤابيلا برتمو دڠن راکن سأڬام، کيت دڬالقکن ممبري ___ .",
            options: ["دوءيت", "حرمت", "سلام", "هدية"],
            answer: 2
        },
        {
            id: "AK15",
            question: "سلالو برچاکڤ بوهوڠ مروڤاکن ساله ساتو تندا اورڠ ___ .",
            options: ["منافق", "مؤمن", "صالح", "جوجور"],
            answer: 0
        },
        {
            id: "AK16",
            question: "صيفت 'امانة' دالم اخلاق برمقصود ___ .",
            options: ["ڤنيمڤو", "بوليه دڤرچاياءي (جوجور)", "ڤنچوري", "کدکوت"],
            answer: 1
        },
        {
            id: "AK17",
            question: "لاون باڬي صيفت امانة اياله 'خيانة' يڠ برمقصود ___ .",
            options: ["ڤيچه امانة / تيدق جوجور", "منجاڬ هرتا", "بربوات باءيق", "راجين"],
            answer: 0
        },
        {
            id: "AK18",
            question: "اورڠ يڠ بخيل (کدکوت) اکن دبنچي اوليه ماءنسي دان ___ .",
            options: ["شيطان", "حيوان", "الله", "ملائکة"],
            answer: 2
        },
        {
            id: "AK19",
            question: "صيفت ڤموره (سوک برصدقه) اکن ممباوا ماءنسي ک جڤان ک ___ .",
            options: ["نراک", "کمسکينن", "شرڬ", "کروڬين"],
            answer: 2
        },
        {
            id: "AK20",
            question: "کتيک براد د دالم مسجد، کيت دسونتکن برنيت ___ .",
            options: ["تيدور", "اعتكاف", "ماکن", "بربوال"],
            answer: 1
        },
        {
            id: "AK21",
            question: "انتارا ڤرکارا يڠ ديلارڠ سماس براد د مسجد اياله ___ .",
            options: ["صلاة سنة", "ممباچ القرآن", "بوات بيسيڠ دان برلاري", "برذکر"],
            answer: 2
        },
        {
            id: "AK22",
            question: "سبلوم ممباچ دان ممڬڠ القرآن، کيت ديواجبکن براد دالم کأداءن ___ .",
            options: ["سوچي دري حدس (بروضوء)", "لاڤر", "برکاين ڤليکت", "دالم کلاس"],
            answer: 0
        },
        {
            id: "AK23",
            question: "منجاڬ کبرسيهن ديري دان ڤرکيترن مروڤاکن سبهاڬين درڤد ___ .",
            options: ["بودايا", "ايمان", "هوبي", "تکبر"],
            answer: 1
        },
        {
            id: "AK24",
            question: "اورڠ يڠ 'صبر' کتيک دتيمڤا اوجين دان موسيڤه اکن منداڤت ___ الله.",
            options: ["عذاب", "کماراهن", "ڤهالا دان رحمة", "کبوروڤن"],
            answer: 2
        },
        {
            id: "AK25",
            question: "نبي برسبدا، تيدق ماسوق شرڬ سسياڤا يڠ اد دالم هاتيڽ سظره درڤد صيفت ___ .",
            options: ["تکبر (سومبوڠ)", "صبر", "جوجور", "کاسيه سايڠ"],
            answer: 0
        },
        {
            id: "AK26",
            question: "اڤابيلا برجنجي دڠن سسأورڠ، کيت دسارنکن مڠوچڤ ___ .",
            options: ["استغفر الله", "إن شاء الله", "الحمد لله", "سبحان الله"],
            answer: 1
        },
        {
            id: "AK27",
            question: "اڤابيلا کيت برسين، کيت دسونتکن مڠوچڤ ___ .",
            options: ["الله أکبر", "الحمد لله", "ما شاء الله", "يرحمك الله"],
            answer: 1
        },
        {
            id: "AK28",
            question: "اڤابيلا کيت مندڠر اورڠ برسين دان مموجي الله، کيت مستي منجواب ___ .",
            options: ["الحمد لله", "الله أکبر", "يرحمك الله", "إن شاء الله"],
            answer: 2
        },
        {
            id: "AK29",
            question: "اڤابيلا کيت تله ملقوکن کسيلڤن اتاو دوسا، کيت مستيله مڠوچڤ ___ .",
            options: ["الحمد لله", "استغفر الله", "بسم الله", "الله أکبر"],
            answer: 1
        },
        {
            id: "AK30",
            question: "سنتياس برباءيق سڠکا ترهادڤ اورڠ لاءين دسبوت سباڬاي ___ .",
            options: ["سوء الظن", "حسن الظن", "تکبر", "حسد دڠکي"],
            answer: 1
        },
        {
            id: "AK31",
            question: "بربوروق سڠکا ترهادڤ اورڠ لاءين تنڤا بوقتي دسبوت سباڬاي ___ .",
            options: ["حسن الظن", "سوء الظن", "جوجور", "اخلاص"],
            answer: 1
        },
        {
            id: "AK32",
            question: "سبلوم ماسوق ک رومه اورڠ، کيت دأجر اونتوق ممبري سلام دان ممينتا ايذين سباڽق ___ .",
            options: ["ساتو کالي", "دوا کالي", "تڬ کالي", "ليم کالي"],
            answer: 2
        },
        {
            id: "AK33",
            question: "منزيارهي جيرن يڠ ساكيت مروڤاکن ___ کيت سباڬاي اومت إسلام.",
            options: ["تڠڬوڠجواب (حق جيرن)", "ڤيليهن", "لارڠن", "کبوروڤن"],
            answer: 0
        },
        {
            id: "AK34",
            question: "حکوم مڠحرمتي جيرن يڠ بوکن برأڬام إسلام (بوکن مسلم) اياله ___ .",
            options: ["حرام", "واجب", "مکروه", "سنة"],
            answer: 1
        },
        {
            id: "AK35",
            question: "ممبنتو اورڠ بوتا ملينتس جالن اکن منداڤت ___ .",
            options: ["کماراهن", "دوءيت", "کريضاءن الله دان ڤهالا", "ککايأن"],
            answer: 2
        },
        {
            id: "AK36",
            question: "مروسقکن هرتا عوام (Vandalism) مروڤاکن ڤربواتن ___ .",
            options: ["محمودة", "حرام / مذمومة", "سنة", "واجب"],
            answer: 1
        },
        {
            id: "AK37",
            question: "انتارا ادب ماکن يڠ دأجرکن اوليه نبي اياله جاڠن ماکن اتاو مينوم سمبيل ___ .",
            options: ["دودوق", "بربوال باءيق", "برديري", "ممباچ دعاء"],
            answer: 2
        },
        {
            id: "AK38",
            question: "اڤابيلا کيت سدڠ ماراه، نبي مڠڬالقکن کيت اونتوق مڠمبيل ___ .",
            options: ["ماکنن", "وضوء", "تيڠکڤ", "کايو"],
            answer: 1
        },
        {
            id: "AK39",
            question: "سنپومن يڠ دبريکن کڤد سساودارا مسلم کيت اياله ساتو ___ .",
            options: ["صدقة", "دوسا", "رياء", "کبوروقن"],
            answer: 0
        },
        {
            id: "AK40",
            question: "اورڠ يڠ سنتياس مڠهوبوڠکن صلة الرحيم اکن دڤنجڠکن عمور دان دمورهکن ___ .",
            options: ["عذاب", "مسأله", "رزقي", "ڤڽاکيت"],
            answer: 2
        },
        {
            id: "AK41",
            question: "ڤربواتن منچوري هرتا اورڠ لاءين اياله ڤربواتن يڠ بردوسا ___ .",
            options: ["کچيل", "بسر", "تياد دوسا", "بياسا"],
            answer: 1
        },
        {
            id: "AK42",
            question: "ممبولي دان مڠيچيق راکن د سکوله اياله ڤربواتن يڠ ___ .",
            options: ["مذمومة (ترکجي)", "محمودة (ترڤوجي)", "سنة", "هارس"],
            answer: 0
        },
        {
            id: "AK43",
            question: "اڤابيلا دبريکن نعمة درڤد الله، کيت هندقله ___ .",
            options: ["تکبر", "مڠلوه", "برشکور", "سومبوڠ"],
            answer: 2
        },
        {
            id: "AK44",
            question: "اڤابيلا دتيمڤا موسيڤه اتاو کماتين، اوچڤن يڠ ڤرلو دسبوت اياله ___ .",
            options: ["إنا لله وإنا إليه راجعون", "سبحان الله", "الله أکبر", "الحمد لله"],
            answer: 0
        },
        {
            id: "AK45",
            question: "سلاين بوهوڠ، ميموڠکيري جنجي جوڬ مروڤاکن چيري-چيري اورڠ ___ .",
            options: ["منافق", "مؤمن", "صالح", "علماء"],
            answer: 0
        },
        {
            id: "AK46",
            question: "مڠخياناتي امانة (تيدق جوجور دالم توڬس) اکن منداڤت ___ الله.",
            options: ["کريضاءن", "کمورکاءن", "کبهاڬيأن", "کأمنن"],
            answer: 1
        },
        {
            id: "AK47",
            question: "اورڠ يڠ بخيل (کدکوت) اونتوق برصدقه اکن دبنچي اوليه ماءنسي دان ___ .",
            options: ["الله سبحانه وتعالى", "حيوان", "شيطان", "ملائکة"],
            answer: 0
        },
        {
            id: "AK48",
            question: "عملن برصدقه تيدق مڠورڠکن هرتا، ماله بوليه ممادمکن ___ الله.",
            options: ["رحمة", "کمورکاءن / کماهارهن", "کاسيه سايڠ", "رضاء"],
            answer: 1
        },
        {
            id: "AK49",
            question: "کيت واجب طاعة کڤد ايبو باڤ سلاڬي مريك تيدق مڽوروه کيت ملقوکن ___ .",
            options: ["کباءيقن", "معصية / دوسا", "سنه", "عملن باءيق"],
            answer: 1
        },
        {
            id: "AK50",
            question: "اخلاق رسول الله صلي الله عليه وسلم اداله برڤندوکن کڤد ___ .",
            options: ["القرآن", "عقل", "ککايأن", "بنجير"],
            answer: 0
        }
    ]
};
