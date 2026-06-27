// data-ba.js - Pangkalan Data Bahasa Arab LexiQuest V2
const baQuestions = {
"mufrodat": [
        {
            id: "BA_MF01",
            question: "Apakah maksud perkataan 'كِتَابٌ' (Kitaabun)?",
            options: ["Buku", "Pensel", "Pembaris", "Pemadam"],
            answer: 0
        },
        {
            id: "BA_MF02",
            question: "Apakah maksud perkataan 'قَلَمٌ' (Qalamun)?",
            options: ["Pemadam", "Pensel / Pena", "Meja", "Kerusi"],
            answer: 1
        },
        {
            id: "BA_MF03",
            question: "Apakah maksud perkataan 'مِسْطَرَةٌ' (Mistaratun)?",
            options: ["Pembaris", "Pemadam", "Buku", "Beg"],
            answer: 0
        },
        {
            id: "BA_MF04",
            question: "Apakah maksud perkataan 'مِمْحَاةٌ' (Mimhaatun)?",
            options: ["Pensel", "Buku", "Pemadam", "Meja"],
            answer: 2
        },
        {
            id: "BA_MF05",
            question: "Apakah maksud perkataan 'حَقِيبَةٌ' (Haqiibatun)?",
            options: ["Beg", "Kelas", "Pembaris", "Kerusi"],
            answer: 0
        },
        {
            id: "BA_MF06",
            question: "Apakah maksud perkataan 'مَكْتَبٌ' (Maktabun)?",
            options: ["Kerusi", "Meja", "Pintu", "Tingkap"],
            answer: 1
        },
        {
            id: "BA_MF07",
            question: "Apakah maksud perkataan 'كُرْسِيٌّ' (Kursiyyun)?",
            options: ["Meja", "Pintu", "Kerusi", "Papan Tulis"],
            answer: 2
        },
        {
            id: "BA_MF08",
            question: "Apakah maksud perkataan 'سَبُّورَةٌ' (Sabburatun)?",
            options: ["Papan Tulis", "Meja", "Buku", "Pembaris"],
            answer: 0
        },
        {
            id: "BA_MF09",
            question: "Apakah maksud perkataan 'مِقْلَمَةٌ' (Miqlamatun)?",
            options: ["Beg", "Bekas Pensel", "Buku", "Pemadam"],
            answer: 1
        },
        {
            id: "BA_MF10",
            question: "Apakah maksud perkataan 'دَفْتَرٌ' (Daftarun)?",
            options: ["Buku Tulis", "Buku Teks", "Pena", "Meja"],
            answer: 0
        },
        {
            id: "BA_MF11",
            question: "Apakah maksud anggota badan 'رَأْسٌ' (Ra'sun)?",
            options: ["Kepala", "Rambut", "Mata", "Telinga"],
            answer: 0
        },
        {
            id: "BA_MF12",
            question: "Apakah maksud anggota badan 'عَيْنٌ' ('Aynun)?",
            options: ["Hidung", "Mata", "Telinga", "Mulut"],
            answer: 1
        },
        {
            id: "BA_MF13",
            question: "Apakah maksud anggota badan 'أَنْفٌ' (Anfun)?",
            options: ["Hidung", "Mata", "Mulut", "Lidah"],
            answer: 0
        },
        {
            id: "BA_MF14",
            question: "Apakah maksud anggota badan 'أُذُنٌ' (Uzunun)?",
            options: ["Mata", "Telinga", "Pipi", "Dagu"],
            answer: 1
        },
        {
            id: "BA_MF15",
            question: "Apakah maksud anggota badan 'فَمٌ' (Famun)?",
            options: ["Mulut", "Lidah", "Gigi", "Tangan"],
            answer: 0
        },
        {
            id: "BA_MF16",
            question: "Apakah maksud anggota badan 'لِسَانٌ' (Lisaanun)?",
            options: ["Gigi", "Lidah", "Pipi", "Tangan"],
            answer: 1
        },
        {
            id: "BA_MF17",
            question: "Apakah maksud anggota badan 'يَدٌ' (Yadun)?",
            options: ["Kaki", "Tangan", "Perut", "Dada"],
            answer: 1
        },
        {
            id: "BA_MF18",
            question: "Apakah maksud anggota badan 'رِجْلٌ' (Rijlun)?",
            options: ["Tangan", "Kaki", "Kepala", "Lutut"],
            answer: 1
        },
        {
            id: "BA_MF19",
            question: "Apakah maksud anggota badan 'شَعْرٌ' (Sya'run)?",
            options: ["Rambut", "Mata", "Kening", "Gigi"],
            answer: 0
        },
        {
            id: "BA_MF20",
            question: "Apakah maksud anggota badan 'أَسْنَانٌ' (Asnaanun)?",
            options: ["Lidah", "Gigi", "Rambut", "Mulut"],
            answer: 1
        },
        {
            id: "BA_MF21",
            question: "Apakah maksud haiwan 'قِطٌّ' (Qittun)?",
            options: ["Kucing", "Anjing", "Arnab", "Kuda"],
            answer: 0
        },
        {
            id: "BA_MF22",
            question: "Apakah maksud haiwan 'أَسَدٌ' (Asadun)?",
            options: ["Singa", "Harimau", "Gajah", "Zirafah"],
            answer: 0
        },
        {
            id: "BA_MF23",
            question: "Apakah maksud haiwan 'فِيلٌ' (Fiilun)?",
            options: ["Kucing", "Gajah", "Unta", "Lembu"],
            answer: 1
        },
        {
            id: "BA_MF24",
            question: "Apakah maksud haiwan 'أَرْنَبٌ' (Arnabun)?",
            options: ["Arnab", "Tikus", "Monyet", "Burung"],
            answer: 0
        },
        {
            id: "BA_MF25",
            question: "Apakah maksud haiwan 'طَائِرٌ' (Too'irun)?",
            options: ["Ikan", "Burung", "Ayam", "Itik"],
            answer: 1
        },
        {
            id: "BA_MF26",
            question: "Apakah maksud haiwan 'سَمَكٌ' (Samakun)?",
            options: ["Ikan", "Katak", "Kucing", "Beruk"],
            answer: 0
        },
        {
            id: "BA_MF27",
            question: "Apakah maksud haiwan 'بَقَرَةٌ' (Baqarotun)?",
            options: ["Kambing", "Lembu", "Kuda", "Unta"],
            answer: 1
        },
        {
            id: "BA_MF28",
            question: "Apakah maksud haiwan 'غَنَمٌ' (Ghanamun)?",
            options: ["Kambing", "Lembu", "Rusa", "Ayam"],
            answer: 0
        },
        {
            id: "BA_MF29",
            question: "Apakah maksud haiwan 'حِصَانٌ' (Hisaanun)?",
            options: ["Kuda", "Gajah", "Singa", "Unta"],
            answer: 0
        },
        {
            id: "BA_MF30",
            question: "Apakah maksud haiwan 'جَمَلٌ' (Jamalun)?",
            options: ["Lembu", "Kuda", "Unta", "Kambing"],
            answer: 2
        },
        {
            id: "BA_MF31",
            question: "Dalam keluarga, apakah maksud 'أَبٌ' (Abun)?",
            options: ["Bapa", "Ibu", "Datuk", "Nenek"],
            answer: 0
        },
        {
            id: "BA_MF32",
            question: "Dalam keluarga, apakah maksud 'أُمٌّ' (Ummun)?",
            options: ["Bapa", "Ibu", "Kakak", "Abang"],
            answer: 1
        },
        {
            id: "BA_MF33",
            question: "Dalam keluarga, apakah maksud 'أَخٌ' (Akhun)?",
            options: ["Saudara Lelaki", "Saudara Perempuan", "Ibu", "Bapa"],
            answer: 0
        },
        {
            id: "BA_MF34",
            question: "Dalam keluarga, apakah maksud 'أُخْتٌ' (Ukhtun)?",
            options: ["Saudara Lelaki", "Saudara Perempuan", "Ibu", "Datuk"],
            answer: 1
        },
        {
            id: "BA_MF35",
            question: "Dalam keluarga, apakah maksud 'جَدٌّ' (Jaddun)?",
            options: ["Datuk", "Nenek", "Bapa Saudara", "Ibu Saudara"],
            answer: 0
        },
        {
            id: "BA_MF36",
            question: "Dalam keluarga, apakah maksud 'جَدَّةٌ' (Jaddatun)?",
            options: ["Datuk", "Nenek", "Ibu", "Bapa"],
            answer: 1
        },
        {
            id: "BA_MF37",
            question: "Apakah maksud perkataan 'بَيْتٌ' (Baitun)?",
            options: ["Rumah", "Sekolah", "Kedai", "Masjid"],
            answer: 0
        },
        {
            id: "BA_MF38",
            question: "Apakah maksud perkataan 'غُرْفَةٌ' (Ghurfatun)?",
            options: ["Ruang", "Bilik", "Dapur", "Ruang Tamu"],
            answer: 1
        },
        {
            id: "BA_MF39",
            question: "Apakah maksud perkataan 'مَطْبَخٌ' (Matbakhun)?",
            options: ["Tandas", "Dapur", "Ruang Makan", "Halaman"],
            answer: 1
        },
        {
            id: "BA_MF40",
            question: "Apakah maksud perkataan 'بَابٌ' (Baabun)?",
            options: ["Pintu", "Tingkap", "Dinding", "Lantai"],
            answer: 0
        },
        {
            id: "BA_MF41",
            question: "Apakah maksud kenderaan 'سَيَّارَةٌ' (Sayyaarotun)?",
            options: ["Kereta", "Bas", "Motosikal", "Basikal"],
            answer: 0
        },
        {
            id: "BA_MF42",
            question: "Apakah maksud kenderaan 'حَافِلَةٌ' (Haafilatun)?",
            options: ["Kereta", "Bas", "Lori", "Kereta Api"],
            answer: 1
        },
        {
            id: "BA_MF43",
            question: "Apakah maksud kenderaan 'دَرَّاجَةٌ' (Darraajatun)?",
            options: ["Basikal", "Kereta", "Kapal Terbang", "Kereta Api"],
            answer: 0
        },
        {
            id: "BA_MF44",
            question: "Apakah maksud kenderaan 'طَائِرَةٌ' (Too'irotun)?",
            options: ["Kapal Terbang", "Kapal Laut", "Bas", "Kereta"],
            answer: 0
        },
        {
            id: "BA_MF45",
            question: "Apakah maksud kenderaan 'قِطَارٌ' (Qitoorun)?",
            options: ["Kereta Api", "Kereta", "Bas", "Basikal"],
            answer: 0
        },
        {
            id: "BA_MF46",
            question: "Apakah maksud warna 'أَحْمَرُ' (Ahmaru)?",
            options: ["Merah", "Biru", "Hijau", "Kuning"],
            answer: 0
        },
        {
            id: "BA_MF47",
            question: "Apakah maksud warna 'أَزْرَقُ' (Azraqu)?",
            options: ["Merah", "Biru", "Kuning", "Hitam"],
            answer: 1
        },
        {
            id: "BA_MF48",
            question: "Apakah maksud warna 'أَخْضَرُ' (Akhdhoru)?",
            options: ["Hijau", "Merah", "Biru", "Putih"],
            answer: 0
        },
        {
            id: "BA_MF49",
            question: "Apakah maksud warna 'أَصْفَرُ' (Asfaru)?",
            options: ["Biru", "Kuning", "Hijau", "Merah"],
            answer: 1
        },
        {
            id: "BA_MF50",
            question: "Apakah maksud warna 'أَبْيَضُ' (Abyadhu)?",
            options: ["Putih", "Hitam", "Biru", "Kuning"],
            answer: 0
        }
    ],

"qawaid": [
        {
            id: "BA_QW01",
            question: "Pilih kata tunjuk Arab bagi 'Ini' untuk lelaki (Muzakkar).",
            options: ["هَذَا (Haza)", "هَذِهِ (Hazihi)", "ذَلِكَ (Zalika)", "تِلْكَ (Tilka)"],
            answer: 0
        },
        {
            id: "BA_QW02",
            question: "مَا هُوَ اسْمُ الإِشَارَةِ العَرَبِيُّ لِـ 'Ini' (لِلْمُؤَنَّثِ)؟",
            options: ["هَذَا (Haza)", "هَذِهِ (Hazihi)", "ذَلِكَ (Zalika)", "تِلْكَ (Tilka)"],
            answer: 1
        },
        {
            id: "BA_QW03",
            question: "Pilih kata tunjuk Arab bagi 'Itu' untuk lelaki (Muzakkar).",
            options: ["هَذَا (Haza)", "هَذِهِ (Hazihi)", "ذَلِكَ (Zalika)", "تِلْكَ (Tilka)"],
            answer: 2
        },
        {
            id: "BA_QW04",
            question: "مَا هُوَ اسْمُ الإِشَارَةِ العَرَبِيُّ لِـ 'Itu' (لِلْمُؤَنَّثِ)؟",
            options: ["هَذَا (Haza)", "هَذِهِ (Hazihi)", "ذَلِكَ (Zalika)", "تِلْكَ (Tilka)"],
            answer: 3
        },
        {
            id: "BA_QW05",
            question: "Apakah kata ganti nama Arab bagi 'Dia' (Lelaki)?",
            options: ["هُوَ (Huwa)", "هِيَ (Hiya)", "أَنَا (Ana)", "نَحْنُ (Nahnu)"],
            answer: 0
        },
        {
            id: "BA_QW06",
            question: "مَا هُوَ الضَّمِيرُ العَرَبِيُّ لِـ 'Dia' (لِلْمُؤَنَّثِ)؟",
            options: ["هُوَ (Huwa)", "هِيَ (Hiya)", "أَنَا (Ana)", "نَحْنُ (Nahnu)"],
            answer: 1
        },
        {
            id: "BA_QW07",
            question: "Apakah kata ganti nama Arab bagi 'Saya'?",
            options: ["هُوَ (Huwa)", "هِيَ (Hiya)", "أَنَا (Ana)", "نَحْنُ (Nahnu)"],
            answer: 2
        },
        {
            id: "BA_QW08",
            question: "مَا هُوَ الضَّمِيرُ العَرَبِيُّ لِـ 'Kami / Kita'؟",
            options: ["هُمْ (Hum)", "هُنَّ (Hunna)", "أَنَا (Ana)", "نَحْنُ (Nahnu)"],
            answer: 3
        },
        {
            id: "BA_QW09",
            question: "Apakah kata ganti nama Arab bagi 'Awak' (Lelaki)?",
            options: ["أَنْتَ (Anta)", "أَنْتِ (Anti)", "أَنْتُمَا (Antuma)", "أَنْتُمْ (Antum)"],
            answer: 0
        },
        {
            id: "BA_QW10",
            question: "مَا هُوَ الضَّمِيرُ العَرَبِيُّ لِـ 'Awak' (لِلْمُؤَنَّثِ)؟",
            options: ["أَنْتَ (Anta)", "أَنْتِ (Anti)", "أَنْتُمَا (Antuma)", "أَنْتُمْ (Antum)"],
            answer: 1
        },
        {
            id: "BA_QW11",
            question: "Kata sendi 'فِي' (Fi) bermaksud ___ .",
            options: ["Di dalam", "Di atas", "Dari", "Kepada"],
            answer: 0
        },
        {
            id: "BA_QW12",
            question: "مَا مَعْنَى حَرْفِ الجَرِّ 'عَلَى'؟",
            options: ["Di dalam", "Di atas (bersentuh)", "Dari", "Kepada"],
            answer: 1
        },
        {
            id: "BA_QW13",
            question: "Kata sendi 'مِنْ' (Min) bermaksud ___ .",
            options: ["Di dalam", "Di atas", "Dari", "Kepada"],
            answer: 2
        },
        {
            id: "BA_QW14",
            question: "مَا مَعْنَى حَرْفِ الجَرِّ 'إِلَى'؟",
            options: ["Di dalam", "Di atas", "Dari", "Ke / Kepada"],
            answer: 3
        },
        {
            id: "BA_QW15",
            question: "Kata sendi 'مَعَ' (Ma'a) bermaksud ___ .",
            options: ["Bersama / Dengan", "Tanpa", "Kerana", "Hingga"],
            answer: 0
        },
        {
            id: "BA_QW16",
            question: "مَا مَعْنَى أَدَاةِ الاِسْتِفْهَامِ 'مَنْ'؟",
            options: ["Apa", "Siapa", "Bila", "Di mana"],
            answer: 1
        },
        {
            id: "BA_QW17",
            question: "Kata tanya 'مَا' (Ma) atau 'مَاذَا' (Maza) bermaksud ___ .",
            options: ["Apa", "Siapa", "Bila", "Di mana"],
            answer: 0
        },
        {
            id: "BA_QW18",
            question: "مَا مَعْنَى أَدَاةِ الاِسْتِفْهَامِ 'أَيْنَ'؟",
            options: ["Apa", "Siapa", "Bila", "Di mana"],
            answer: 3
        },
        {
            id: "BA_QW19",
            question: "Kata tanya 'مَتَى' (Mata) bermaksud ___ .",
            options: ["Apa", "Siapa", "Bila", "Bagaimana"],
            answer: 2
        },
        {
            id: "BA_QW20",
            question: "مَا مَعْنَى أَدَاةِ الاِسْتِفْهَامِ 'كَيْفَ'؟",
            options: ["Berapa", "Siapa", "Bila", "Bagaimana"],
            answer: 3
        },
        {
            id: "BA_QW21",
            question: "Kata tanya 'هَلْ' (Hal) bermaksud ___ .",
            options: ["Adakah", "Kenapa", "Bila", "Berapa"],
            answer: 0
        },
        {
            id: "BA_QW22",
            question: "مَا مَعْنَى أَدَاةِ الاِسْتِفْهَامِ 'كَمْ'؟",
            options: ["Adakah", "Kenapa", "Bila", "Berapa"],
            answer: 3
        },
        {
            id: "BA_QW23",
            question: "Kata tanya 'لِمَاذَا' (Limaza) bermaksud ___ .",
            options: ["Adakah", "Kenapa / Mengapa", "Bila", "Berapa"],
            answer: 1
        },
        {
            id: "BA_QW24",
            question: "مَا هُوَ الحَرْفُ الَّذِي يُعْتَبَرُ عَلَامَةً لِلتَّأْنِيثِ فِي آخِرِ الكَلِمَةِ؟",
            options: ["Alif Lam (ال)", "Ta' Marbuthah (ة)", "Waw Nun (ون)", "Ya' Nun (ين)"],
            answer: 1
        },
        {
            id: "BA_QW25",
            question: "Antara berikut, perkataan manakah yang merujuk kepada perempuan (Muannath)?",
            options: ["قَلَمٌ", "كِتَابٌ", "مَدْرَسَةٌ", "مَكْتَبٌ"],
            answer: 2
        },
        {
            id: "BA_QW26",
            question: "أَيٌّ مِنَ الكَلِمَاتِ التَّالِيَةِ هِيَ 'مُذَكَّرٌ'؟",
            options: ["سَبُّورَةٌ", "مِسْطَرَةٌ", "حَقِيبَةٌ", "قَلَمٌ"],
            answer: 3
        },
        {
            id: "BA_QW27",
            question: "Perkataan 'مُسْلِمٌ' (Seorang lelaki Islam) apabila ditukar kepada perempuan menjadi ___ .",
            options: ["مُسْلِمَاتٌ", "مُسْلِمَةٌ", "مُسْلِمَانِ", "مُسْلِمُونَ"],
            answer: 1
        },
        {
            id: "BA_QW28",
            question: "مَا مَعْنَى 'فِعْلُ المَاضِي'؟",
            options: ["Sedang berlaku", "Telah berlaku (Past Tense)", "Arahan", "Larangan"],
            answer: 1
        },
        {
            id: "BA_QW29",
            question: "Pilih kata kerja yang bermaksud perbuatan 'Sedang berlaku' (Fi'il Mudhari').",
            options: ["Sedang / Akan berlaku", "Telah berlaku", "Arahan", "Larangan"],
            answer: 0
        },
        {
            id: "BA_QW30",
            question: "مَا مَعْنَى 'فِعْلُ الأَمْرِ'؟",
            options: ["Sedang berlaku", "Telah berlaku", "Arahan (Imperative)", "Larangan"],
            answer: 2
        },
        {
            id: "BA_QW31",
            question: "Perkataan 'ذَهَبَ' (Zahaba) bermaksud ___ .",
            options: ["Dia telah pergi", "Dia sedang pergi", "Pergilah!", "Saya pergi"],
            answer: 0
        },
        {
            id: "BA_QW32",
            question: "مَا مَعْنَى الكَلِمَةِ 'يَذْهَبُ'؟",
            options: ["Dia telah pergi", "Dia sedang pergi", "Pergilah!", "Saya pergi"],
            answer: 1
        },
        {
            id: "BA_QW33",
            question: "Perkataan 'اِذْهَبْ' (Izhab) bermaksud ___ .",
            options: ["Dia telah pergi", "Dia sedang pergi", "Pergilah!", "Saya pergi"],
            answer: 2
        },
        {
            id: "BA_QW34",
            question: "إِذَا كَانَ الفَاعِلُ 'أَنَا'، يَبْدَأُ الفِعْلُ المُضَارِعُ بِحَرْفِ ___ .",
            options: ["ي (Ya)", "ت (Ta)", "أ (Alif)", "ن (Nun)"],
            answer: 2
        },
        {
            id: "BA_QW35",
            question: "Jika 'Kami' (نَحْنُ) sedang melakukan sesuatu, kata kerja tersebut mesti bermula dengan huruf ___ .",
            options: ["ي (Ya)", "ت (Ta)", "أ (Alif)", "ن (Nun)"],
            answer: 3
        },
        {
            id: "BA_QW36",
            question: "أَكْمِلِ الجُمْلَةَ: 'أَنَا ___ إِلَى المَدْرَسَةِ'.",
            options: ["يَذْهَبُ", "تَذْهَبُ", "أَذْهَبُ", "نَذْهَبُ"],
            answer: 2
        },
        {
            id: "BA_QW37",
            question: "Lengkapkan ayat: 'نَحْنُ ___ القُرْآنَ' (Kami ___ Al-Quran).",
            options: ["يَقْرَأُ", "نَقْرَأُ", "أَقْرَأُ", "تَقْرَأُ"],
            answer: 1
        },
        {
            id: "BA_QW38",
            question: "مَا مَعْنَى الكَلِمَةِ 'كَتَبَ'؟",
            options: ["Telah membaca", "Telah menulis", "Telah duduk", "Telah makan"],
            answer: 1
        },
        {
            id: "BA_QW39",
            question: "Perkataan 'قَرَأَ' (Qara'a) bermaksud ___ .",
            options: ["Telah membaca", "Telah menulis", "Telah duduk", "Telah makan"],
            answer: 0
        },
        {
            id: "BA_QW40",
            question: "مَا مَعْنَى الكَلِمَةِ 'جَلَسَ'؟",
            options: ["Telah membaca", "Telah menulis", "Telah duduk", "Telah makan"],
            answer: 2
        },
        {
            id: "BA_QW41",
            question: "Kata hubung 'وَ' (Waw) dalam Bahasa Arab bermaksud ___ .",
            options: ["Atau", "Dan", "Tetapi", "Kemudian"],
            answer: 1
        },
        {
            id: "BA_QW42",
            question: "مَا مَعْنَى حَرْفِ العَطْفِ 'أَوْ'؟",
            options: ["Atau", "Dan", "Tetapi", "Kemudian"],
            answer: 0
        },
        {
            id: "BA_QW43",
            question: "Perkataan 'مُفْرَد' (Mufrad) merujuk kepada bilangan benda yang berjumlah ___ .",
            options: ["Satu", "Dua", "Tiga atau lebih", "Tiada"],
            answer: 0
        },
        {
            id: "BA_QW44",
            question: "إِلَى أَيِّ عَدَدٍ تُشِيرُ كَلِمَةُ 'مُثَنَّى'؟",
            options: ["Satu", "Dua", "Tiga atau lebih", "Tiada"],
            answer: 1
        },
        {
            id: "BA_QW45",
            question: "Perkataan 'جَمْع' (Jama') merujuk kepada bilangan benda yang berjumlah ___ .",
            options: ["Satu", "Dua", "Banyak (Tiga atau lebih)", "Tiada"],
            answer: 2
        },
        {
            id: "BA_QW46",
            question: "مَا مَعْنَى ظَرْفِ المَكَانِ 'أَمَامَ'؟",
            options: ["Di belakang", "Di hadapan / Di depan", "Di bawah", "Di sisi"],
            answer: 1
        },
        {
            id: "BA_QW47",
            question: "Kata arah 'وَرَاءَ' (Wara'a) atau 'خَلْفَ' (Kholfa) bermaksud ___ .",
            options: ["Di belakang", "Di hadapan", "Di bawah", "Di sisi"],
            answer: 0
        },
        {
            id: "BA_QW48",
            question: "مَا مَعْنَى ظَرْفِ المَكَانِ 'تَحْتَ'؟",
            options: ["Di atas", "Di hadapan", "Di bawah", "Di sisi"],
            answer: 2
        },
        {
            id: "BA_QW49",
            question: "Kata arah 'بَيْنَ' (Bayna) bermaksud ___ .",
            options: ["Di antara", "Di hadapan", "Di bawah", "Di sisi"],
            answer: 0
        },
        {
            id: "BA_QW50",
            question: "مَا مَعْنَى ظَرْفِ المَكَانِ 'جَانِبَ'؟",
            options: ["Di antara", "Di hadapan", "Di bawah", "Di sebelah / Di sisi"],
            answer: 3
        }
    ],

"hiwar": [
        {
            id: "BA_HW01",
            question: "مَا هُوَ الرَّدُّ الصَّحِيحُ لِتَحِيَّةِ 'السَّلَامُ عَلَيْكُمْ'؟",
            options: ["وَعَلَيْكُمُ السَّلَامُ (Wa'alaikumussalam)", "صَبَاحَ النُّورِ (Sabahan Nur)", "شُكْرًا (Syukran)", "عَفْوًا ('Afwan)"],
            answer: 0
        },
        {
            id: "BA_HW02",
            question: "مَا هُوَ الرَّدُّ لِتَحِيَّةِ 'صَبَاحَ الخَيْرِ'؟",
            options: ["مَسَاءَ النُّورِ (Masa'an Nur)", "صَبَاحَ النُّورِ (Sabahan Nur)", "أَهْلًا بِكَ (Ahlan bika)", "مَعَ السَّلَامَةِ (Ma'as salamah)"],
            answer: 1
        },
        {
            id: "BA_HW03",
            question: "مَا هُوَ الرَّدُّ لِتَحِيَّةِ 'مَسَاءَ الخَيْرِ'؟",
            options: ["صَبَاحَ النُّورِ (Sabahan Nur)", "مَسَاءَ النُّورِ (Masa'an Nur)", "شُكْرًا (Syukran)", "إِلَى اللِّقَاءِ (Ilalliqa')"],
            answer: 1
        },
        {
            id: "BA_HW04",
            question: "مَا هُوَ الرَّدُّ لِتَحِيَّةِ 'أَهْلًا وَسَهْلًا'؟",
            options: ["أَهْلًا بِكَ (Ahlan bika)", "مَسَاءَ النُّورِ (Masa'an Nur)", "صَبَاحَ النُّورِ (Sabahan Nur)", "عَفْوًا ('Afwan)"],
            answer: 0
        },
        {
            id: "BA_HW05",
            question: "مَا مَعْنَى السُّؤَالِ 'كَيْفَ حَالُكَ؟'؟",
            options: ["Siapakah nama kamu?", "Apa khabar kamu?", "Di manakah kamu?", "Berapakah umur kamu?"],
            answer: 1
        },
        {
            id: "BA_HW06",
            question: "مَا هِيَ الإِجَابَةُ الصَّحِيحَةُ لِسُؤَالِ 'كَيْفَ حَالُكَ؟'؟",
            options: ["اِسْمِي أَحْمَد (Ismi Ahmad)", "أَنَا مِنْ مَالِيزِيَا (Ana min Malaysia)", "أَنَا بِخَيْرٍ، الحَمْدُ لِلَّهِ (Ana bikhair, Alhamdulillah)", "عُمْرِي عَشَرَة (Umri 'asyarah)"],
            answer: 2
        },
        {
            id: "BA_HW07",
            question: "مَا مَعْنَى السُّؤَالِ 'مَا اسْمُكَ؟'؟",
            options: ["Apa khabar kamu?", "Di manakah kamu?", "Siapakah nama kamu?", "Dari manakah kamu?"],
            answer: 2
        },
        {
            id: "BA_HW08",
            question: "مَا هِيَ الإِجَابَةُ الصَّحِيحَةُ لِـ 'مَا اسْمُكَ؟'؟",
            options: ["أَنَا بِخَيْرٍ (Ana bikhair)", "اِسْمِي... (Ismi...)", "أَنَا مِنْ... (Ana min...)", "شُكْرًا (Syukran)"],
            answer: 1
        },
        {
            id: "BA_HW09",
            question: "مَا مَعْنَى 'مَنْ أَنْتَ؟'؟",
            options: ["Siapakah kamu?", "Apakah ini?", "Bilakah kamu datang?", "Kenapakah kamu marah?"],
            answer: 0
        },
        {
            id: "BA_HW10",
            question: "مَا مَعْنَى 'مِنْ أَيْنَ أَنْتَ؟'؟",
            options: ["Siapakah nama kamu?", "Dari manakah kamu berasal?", "Apakah pekerjaan kamu?", "Berapakah umur kamu?"],
            answer: 1
        },
        {
            id: "BA_HW11",
            question: "مَا هِيَ الإِجَابَةُ الصَّحِيحَةُ لِـ 'مِنْ أَيْنَ أَنْتَ؟'؟",
            options: ["اِسْمِي عَلِيّ (Ismi 'Ali)", "أَنَا بِخَيْرٍ (Ana bikhair)", "أَنَا مِنْ مَالِيزِيَا (Ana min Malaysia)", "شُكْرًا (Syukran)"],
            answer: 2
        },
        {
            id: "BA_HW12",
            question: "مَا مَعْنَى 'أَيْنَ تَسْكُنُ؟'؟",
            options: ["Di manakah kamu tinggal?", "Ke manakah kamu pergi?", "Dari manakah kamu?", "Siapakah kamu?"],
            answer: 0
        },
        {
            id: "BA_HW13",
            question: "مَا مَعْنَى 'كَمْ عُمْرُكَ؟'؟",
            options: ["Berapakah harga ini?", "Berapakah bilangan mereka?", "Berapakah umur kamu?", "Pukul berapakah sekarang?"],
            answer: 2
        },
        {
            id: "BA_HW14",
            question: "مَا مَعْنَى كَلِمَةِ 'شُكْرًا'؟",
            options: ["Terima kasih", "Sama-sama", "Minta maaf", "Selamat pagi"],
            answer: 0
        },
        {
            id: "BA_HW15",
            question: "مَاذَا تَرُدُّ عِنْدَمَا يَقُولُ شَخْصٌ 'شُكْرًا'؟",
            options: ["آسِفٌ (Asifun)", "عَفْوًا ('Afwan / Sama-sama)", "مَعَ السَّلَامَةِ (Ma'as salamah)", "أَهْلًا بِكَ (Ahlan bika)"],
            answer: 1
        },
        {
            id: "BA_HW16",
            question: "مَا مَعْنَى كَلِمَةِ 'آسِفٌ'؟",
            options: ["Saya pergi", "Saya setuju", "Saya gembira", "Saya minta maaf"],
            answer: 3
        },
        {
            id: "BA_HW17",
            question: "مَا مَعْنَى العِبَارَةِ 'إِلَى اللِّقَاءِ'؟",
            options: ["Selamat datang", "Selamat hari raya", "Jumpa lagi", "Selamat malam"],
            answer: 2
        },
        {
            id: "BA_HW18",
            question: "مَا هُوَ الرَّدُّ المُنَاسِبُ لِـ 'إِلَى اللِّقَاءِ'؟",
            options: ["مَعَ السَّلَامَةِ (Ma'as salamah)", "عَفْوًا ('Afwan)", "صَبَاحَ النُّورِ (Sabahan Nur)", "أَهْلًا بِكَ (Ahlan bika)"],
            answer: 0
        },
        {
            id: "BA_HW19",
            question: "مَا مَعْنَى 'مَعَ السَّلَامَةِ'؟",
            options: ["Terima kasih", "Selamat tinggal / Semoga selamat", "Minta maaf", "Sama-sama"],
            answer: 1
        },
        {
            id: "BA_HW20",
            question: "مَا مَعْنَى 'مَاذَا تَفْعَلُ؟'؟",
            options: ["Apa yang sedang kamu lakukan?", "Ke manakah kamu pergi?", "Di manakah kamu tinggal?", "Siapakah yang melakukannya?"],
            answer: 0
        },
        {
            id: "BA_HW21",
            question: "مَا مَعْنَى كَلِمَةِ 'نَعَمْ'؟",
            options: ["Tidak", "Ya", "Mungkin", "Tidak tahu"],
            answer: 1
        },
        {
            id: "BA_HW22",
            question: "مَا مَعْنَى كَلِمَةِ 'لَا'؟",
            options: ["Ya", "Boleh", "Tidak", "Okey"],
            answer: 2
        },
        {
            id: "BA_HW23",
            question: "مَا مَعْنَى 'تَفَضَّلْ'؟",
            options: ["Tunggu sebentar", "Minta diri", "Silakan (Jemput)", "Terima kasih"],
            answer: 2
        },
        {
            id: "BA_HW24",
            question: "مَا مَعْنَى عِبَارَةِ 'لَحْظَةً مِنْ فَضْلِكَ'؟",
            options: ["Terima kasih banyak-banyak", "Tunggu sebentar", "Silakan masuk", "Saya minta maaf"],
            answer: 1
        },
        {
            id: "BA_HW25",
            question: "مَا مَعْنَى 'أَنَا طَالِبٌ'؟",
            options: ["Saya seorang guru", "Saya seorang pelajar", "Saya seorang doktor", "Saya seorang polis"],
            answer: 1
        },
        {
            id: "BA_HW26",
            question: "مَا مَعْنَى 'أَنَا مُعَلِّمٌ'؟",
            options: ["Saya seorang pelajar", "Saya seorang guru", "Saya seorang polis", "Saya seorang jururawat"],
            answer: 1
        },
        {
            id: "BA_HW27",
            question: "مَا مَعْنَى 'هَلْ أَنْتَ مَرِيضٌ؟'؟",
            options: ["Adakah kamu sakit?", "Adakah kamu sedih?", "Adakah kamu sihat?", "Adakah kamu lapar?"],
            answer: 0
        },
        {
            id: "BA_HW28",
            question: "مَا مَعْنَى دُعَاءِ 'شَفَاكَ اللهُ' عِنْدَ زِيَارَةِ المَرِيضِ؟",
            options: ["Semoga Allah merahmati kamu", "Semoga Allah menyembuhkan kamu", "Semoga Allah memberi rezeki", "Semoga Allah memberkati kamu"],
            answer: 1
        },
        {
            id: "BA_HW29",
            question: "مَا مَعْنَى كَلِمَةِ 'مَبْرُوكٌ'؟",
            options: ["Tahniah", "Takziah", "Terima kasih", "Selamat datang"],
            answer: 0
        },
        {
            id: "BA_HW30",
            question: "مَا هُوَ الرَّدُّ المُنَاسِبُ لِـ 'مَبْرُوكٌ'؟",
            options: ["عَفْوًا ('Afwan)", "بَارَكَ اللهُ فِيكَ (Barakallahu fiika)", "أَهْلًا بِكَ (Ahlan bika)", "مَسَاءَ النُّورِ (Masa'an Nur)"],
            answer: 1
        },
        {
            id: "BA_HW31",
            question: "مَا مَعْنَى السُّؤَالِ 'أَيْنَ المِرْحَاضُ؟'؟",
            options: ["Di manakah kelas?", "Di manakah kantin?", "Di manakah tandas?", "Di manakah pejabat?"],
            answer: 2
        },
        {
            id: "BA_HW32",
            question: "مَا مَعْنَى 'أُرِيدُ أَنْ أَشْرَبَ'؟",
            options: ["Saya mahu makan", "Saya mahu tidur", "Saya mahu minum", "Saya mahu pulang"],
            answer: 2
        },
        {
            id: "BA_HW33",
            question: "مَا مَعْنَى 'أُرِيدُ أَنْ آكُلَ'؟",
            options: ["Saya mahu makan", "Saya mahu minum", "Saya mahu bermain", "Saya mahu baca"],
            answer: 0
        },
        {
            id: "BA_HW34",
            question: "مَا مَعْنَى 'أَنَا جَوْعَانُ'؟",
            options: ["Saya dahaga", "Saya kenyang", "Saya mengantuk", "Saya lapar"],
            answer: 3
        },
        {
            id: "BA_HW35",
            question: "مَا مَعْنَى 'أَنَا عَطْشَانُ'؟",
            options: ["Saya dahaga", "Saya lapar", "Saya sakit", "Saya penat"],
            answer: 0
        },
        {
            id: "BA_HW36",
            question: "مَا مَعْنَى السُّؤَالِ 'مَا هَذَا؟'؟",
            options: ["Siapakah ini?", "Apakah ini?", "Di manakah ini?", "Bilakah ini?"],
            answer: 1
        },
        {
            id: "BA_HW37",
            question: "مَا مَعْنَى كَلِمَةِ 'أَحْسَنْتَ'؟",
            options: ["Bagus / Syabas (Lelaki)", "Tidak bagus", "Cuba lagi", "Sabarlah"],
            answer: 0
        },
        {
            id: "BA_HW38",
            question: "مَا مَعْنَى عِبَارَةِ 'لَا أَدْرِي'؟",
            options: ["Saya tahu", "Saya tidak tahu", "Saya lupa", "Saya ingat"],
            answer: 1
        },
        {
            id: "BA_HW39",
            question: "مَا مَعْنَى العِبَارَةِ 'مَا مَعْنَى هَذَا؟'؟",
            options: ["Apakah nama ini?", "Apakah harga ini?", "Apakah erti ini?", "Apakah warna ini?"],
            answer: 2
        },
        {
            id: "BA_HW40",
            question: "مَا مَعْنَى الأَمْرِ 'اِفْتَحِ الكِتَابَ'؟",
            options: ["Tutup buku", "Buka buku", "Baca buku", "Tulis di buku"],
            answer: 1
        },
        {
            id: "BA_HW41",
            question: "مَا مَعْنَى الأَمْرِ 'اِقْرَأْ'؟",
            options: ["Tulislah", "Dengarlah", "Bacalah", "Duduklah"],
            answer: 2
        },
        {
            id: "BA_HW42",
            question: "مَا مَعْنَى الأَمْرِ 'اُكْتُبْ'؟",
            options: ["Tulislah", "Bacalah", "Padamlah", "Lukislah"],
            answer: 0
        },
        {
            id: "BA_HW43",
            question: "مَا مَعْنَى الأَمْرِ 'اِسْمَعْ جَيِّدًا'؟",
            options: ["Lihat dengan teliti", "Baca dengan kuat", "Tulis dengan kemas", "Dengar dengan teliti"],
            answer: 3
        },
        {
            id: "BA_HW44",
            question: "مَا مَعْنَى الأَمْرِ 'اِجْلِسْ'؟",
            options: ["Bangun", "Duduk", "Berjalan", "Lari"],
            answer: 1
        },
        {
            id: "BA_HW45",
            question: "مَا مَعْنَى الأَمْرِ 'قِفْ'؟",
            options: ["Bangun / Berdiri", "Duduk", "Tidur", "Lari"],
            answer: 0
        },
        {
            id: "BA_HW46",
            question: "مَا مَعْنَى الأَمْرِ 'اِرْفَعْ يَدَكَ'؟",
            options: ["Tutup mata kamu", "Angkat tangan kamu", "Turunkan tangan kamu", "Buka mulut kamu"],
            answer: 1
        },
        {
            id: "BA_HW47",
            question: "مَا مَعْنَى الأَمْرِ 'اُنْظُرْ إِلَى السَّبُّورَةِ'؟",
            options: ["Lihat ke papan tulis", "Lihat ke buku", "Lihat ke tingkap", "Lihat ke pintu"],
            answer: 0
        },
        {
            id: "BA_HW48",
            question: "مَا مَعْنَى الأَمْرِ 'تَعَالَ هُنَا'؟",
            options: ["Pergilah sana", "Duduk di sini", "Mari ke mari / Datang sini", "Keluarlah"],
            answer: 2
        },
        {
            id: "BA_HW49",
            question: "مَا مَعْنَى الأَمْرِ 'اُسْكُتْ'؟",
            options: ["Bercakaplah", "Diam", "Bacalah", "Ketawa"],
            answer: 1
        },
        {
            id: "BA_HW50",
            question: "مَا مَعْنَى التَّهْنِئَةِ 'كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ'؟",
            options: ["Selamat hari lahir", "Selamat pagi", "Selamat Hari Raya / Tahun Baharu", "Selamat berjaya"],
            answer: 2
        }
    ],

    "arqam": [
        {
            id: "BA_AR01",
            question: "Apakah maksud nombor 'وَاحِدٌ' (Waahidun)?",
            options: ["Satu", "Dua", "Tiga", "Empat"],
            answer: 0
        },
        {
            id: "BA_AR02",
            question: "Apakah maksud nombor 'اِثْنَانِ' (Ithnaani)?",
            options: ["Satu", "Dua", "Tiga", "Empat"],
            answer: 1
        },
        {
            id: "BA_AR03",
            question: "Apakah maksud nombor 'ثَلَاثَةٌ' (Thalaathatun)?",
            options: ["Lima", "Empat", "Tiga", "Dua"],
            answer: 2
        },
        {
            id: "BA_AR04",
            question: "Apakah maksud nombor 'أَرْبَعَةٌ' (Arba'atun)?",
            options: ["Tiga", "Empat", "Lima", "Enam"],
            answer: 1
        },
        {
            id: "BA_AR05",
            question: "Apakah maksud nombor 'خَمْسَةٌ' (Khamsatun)?",
            options: ["Empat", "Lima", "Enam", "Tujuh"],
            answer: 1
        },
        {
            id: "BA_AR06",
            question: "Apakah maksud nombor 'سِتَّةٌ' (Sittatun)?",
            options: ["Lima", "Enam", "Tujuh", "Lapan"],
            answer: 1
        },
        {
            id: "BA_AR07",
            question: "Apakah maksud nombor 'سَبْعَةٌ' (Sab'atun)?",
            options: ["Enam", "Tujuh", "Lapan", "Sembilan"],
            answer: 1
        },
        {
            id: "BA_AR08",
            question: "Apakah maksud nombor 'ثَمَانِيَةٌ' (Thamaaniyatun)?",
            options: ["Tujuh", "Lapan", "Sembilan", "Sepuluh"],
            answer: 1
        },
        {
            id: "BA_AR09",
            question: "Apakah maksud nombor 'تِسْعَةٌ' (Tis'atun)?",
            options: ["Lapan", "Sembilan", "Sepuluh", "Sebelas"],
            answer: 1
        },
        {
            id: "BA_AR10",
            question: "Apakah maksud nombor 'عَشَرَةٌ' ('Asyaratun)?",
            options: ["Lapan", "Sembilan", "Sepuluh", "Sebelas"],
            answer: 2
        },
        {
            id: "BA_AR11",
            question: "Apakah maksud nombor 'أَحَدَ عَشَرَ' (Ahada 'asyara)?",
            options: ["Satu", "Sepuluh", "Sebelas", "Dua belas"],
            answer: 2
        },
        {
            id: "BA_AR12",
            question: "Apakah maksud nombor 'اِثْنَا عَشَرَ' (Ithna 'asyara)?",
            options: ["Sebelas", "Dua belas", "Dua puluh", "Dua"],
            answer: 1
        },
        {
            id: "BA_AR13",
            question: "Apakah maksud nombor 'عِشْرُونَ' ('Isyruuna)?",
            options: ["Dua", "Dua belas", "Dua puluh", "Seratus"],
            answer: 2
        },
        {
            id: "BA_AR14",
            question: "Apakah maksud nombor 'خَمْسُونَ' (Khamsuuna)?",
            options: ["Lima", "Lima belas", "Lima puluh", "Lima ratus"],
            answer: 2
        },
        {
            id: "BA_AR15",
            question: "Apakah maksud nombor 'مِائَةٌ' (Mi'atun)?",
            options: ["Sepuluh", "Seratus", "Seribu", "Sejuta"],
            answer: 1
        },
        {
            id: "BA_AR16",
            question: "Apakah maksud 'يَوْمُ الأَحَدِ' (Yaumul Ahad)?",
            options: ["Hari Isnin", "Hari Ahad", "Hari Jumaat", "Hari Sabtu"],
            answer: 1
        },
        {
            id: "BA_AR17",
            question: "Apakah maksud 'يَوْمُ الإِثْنَيْنِ' (Yaumul Ithnain)?",
            options: ["Hari Isnin", "Hari Selasa", "Hari Ahad", "Hari Jumaat"],
            answer: 0
        },
        {
            id: "BA_AR18",
            question: "Apakah maksud 'يَوْمُ الثُّلَاثَاءِ' (Yaumuth Thulaathaa')?",
            options: ["Hari Rabu", "Hari Selasa", "Hari Khamis", "Hari Isnin"],
            answer: 1
        },
        {
            id: "BA_AR19",
            question: "Apakah maksud 'يَوْمُ الأَرْبِعَاءِ' (Yaumul Arbi'aa')?",
            options: ["Hari Selasa", "Hari Rabu", "Hari Khamis", "Hari Jumaat"],
            answer: 1
        },
        {
            id: "BA_AR20",
            question: "Apakah maksud 'يَوْمُ الخَمِيسِ' (Yaumul Khamiis)?",
            options: ["Hari Khamis", "Hari Jumaat", "Hari Sabtu", "Hari Rabu"],
            answer: 0
        },
        {
            id: "BA_AR21",
            question: "Apakah maksud 'يَوْمُ الجُمُعَةِ' (Yaumul Jumu'ah)?",
            options: ["Hari Khamis", "Hari Jumaat", "Hari Sabtu", "Hari Ahad"],
            answer: 1
        },
        {
            id: "BA_AR22",
            question: "Apakah maksud 'يَوْمُ السَّبْتِ' (Yaumus Sabt)?",
            options: ["Hari Jumaat", "Hari Sabtu", "Hari Ahad", "Hari Isnin"],
            answer: 1
        },
        {
            id: "BA_AR23",
            question: "Apakah maksud 'اليَوْمَ' (Al-yauma)?",
            options: ["Esok", "Semalam", "Hari ini", "Lusa"],
            answer: 2
        },
        {
            id: "BA_AR24",
            question: "Apakah maksud 'غَدًا' (Ghadan)?",
            options: ["Esok", "Hari ini", "Semalam", "Kelmarin"],
            answer: 0
        },
        {
            id: "BA_AR25",
            question: "Apakah maksud 'أَمْسِ' (Amsi)?",
            options: ["Hari ini", "Esok", "Semalam", "Lusa"],
            answer: 2
        },
        {
            id: "BA_AR26",
            question: "Apakah maksud 'أُسْبُوعٌ' (Usbuu'un)?",
            options: ["Hari", "Minggu", "Bulan", "Tahun"],
            answer: 1
        },
        {
            id: "BA_AR27",
            question: "Apakah maksud 'شَهْرٌ' (Syahrun)?",
            options: ["Hari", "Minggu", "Bulan", "Tahun"],
            answer: 2
        },
        {
            id: "BA_AR28",
            question: "Apakah maksud 'سَنَةٌ' (Sanatun)?",
            options: ["Hari", "Minggu", "Bulan", "Tahun"],
            answer: 3
        },
        {
            id: "BA_AR29",
            question: "Apakah maksud 'صَبَاحٌ' (Sabaahun)?",
            options: ["Pagi", "Tengah hari", "Petang", "Malam"],
            answer: 0
        },
        {
            id: "BA_AR30",
            question: "Apakah maksud 'ظُهْرٌ' (Zhuhrun)?",
            options: ["Pagi", "Tengah hari", "Petang", "Malam"],
            answer: 1
        },
        {
            id: "BA_AR31",
            question: "Apakah maksud 'مَسَاءٌ' (Masaa'un)?",
            options: ["Pagi", "Tengah hari", "Petang", "Malam"],
            answer: 2
        },
        {
            id: "BA_AR32",
            question: "Apakah maksud 'لَيْلٌ' (Lailun)?",
            options: ["Pagi", "Tengah hari", "Petang", "Malam"],
            answer: 3
        },
        {
            id: "BA_AR33",
            question: "Apakah maksud 'سَاعَةٌ' (Saa'atun)?",
            options: ["Minit", "Saat", "Jam", "Hari"],
            answer: 2
        },
        {
            id: "BA_AR34",
            question: "Apakah maksud 'دَقِيقَةٌ' (Daqiiqatun)?",
            options: ["Jam", "Minit", "Saat", "Hari"],
            answer: 1
        },
        {
            id: "BA_AR35",
            question: "Apakah maksud 'ثَانِيَةٌ' (Thaaniyatun)?",
            options: ["Jam", "Minit", "Saat", "Minggu"],
            answer: 2
        },
        {
            id: "BA_AR36",
            question: "Apakah maksud soalan 'كَمِ السَّاعَةُ الآنَ؟' (Kamis saa'atul aan)?",
            options: ["Berapakah harga ini?", "Pukul berapakah sekarang?", "Bilakah kamu sampai?", "Berapakah umur kamu?"],
            answer: 1
        },
        {
            id: "BA_AR37",
            question: "Apakah erti 'السَّاعَةُ الوَاحِدَةُ' (As-saa'atul waahidah)?",
            options: ["Pukul satu", "Pukul dua", "Pukul tiga", "Pukul empat"],
            answer: 0
        },
        {
            id: "BA_AR38",
            question: "Apakah erti 'السَّاعَةُ الثَّانِيَةُ' (As-saa'atuth thaaniyah)?",
            options: ["Pukul satu", "Pukul dua", "Pukul tiga", "Pukul empat"],
            answer: 1
        },
        {
            id: "BA_AR39",
            question: "Apakah erti 'السَّاعَةُ الثَّالِثَةُ' (As-saa'atuth thaalithah)?",
            options: ["Pukul dua", "Pukul tiga", "Pukul empat", "Pukul lima"],
            answer: 1
        },
        {
            id: "BA_AR40",
            question: "Apakah erti 'السَّاعَةُ الرَّابِعَةُ' (As-saa'atur raabi'ah)?",
            options: ["Pukul tiga", "Pukul empat", "Pukul lima", "Pukul enam"],
            answer: 1
        },
        {
            id: "BA_AR41",
            question: "Apakah erti 'السَّاعَةُ الخَامِسَةُ' (As-saa'atul khaamisah)?",
            options: ["Pukul empat", "Pukul lima", "Pukul enam", "Pukul tujuh"],
            answer: 1
        },
        {
            id: "BA_AR42",
            question: "Apakah erti 'السَّاعَةُ السَّادِسَةُ' (As-saa'atus saadisah)?",
            options: ["Pukul lima", "Pukul enam", "Pukul tujuh", "Pukul lapan"],
            answer: 1
        },
        {
            id: "BA_AR43",
            question: "Apakah maksud 'النِّصْفُ' (An-nisfu) dalam menyebut waktu?",
            options: ["Suku (15 minit)", "Setengah (30 minit)", "Tepat", "Kurang"],
            answer: 1
        },
        {
            id: "BA_AR44",
            question: "Apakah maksud 'الرُّبْعُ' (Ar-rub'u) dalam menyebut waktu?",
            options: ["Setengah (30 minit)", "Suku (15 minit)", "Tepat", "Kurang"],
            answer: 1
        },
        {
            id: "BA_AR45",
            question: "Apakah erti 'السَّاعَةُ الثَّامِنَةُ وَالنِّصْفُ' (As-saa'atuth thaaminatu wan nisf)?",
            options: ["Pukul lapan setengah", "Pukul tujuh setengah", "Pukul lapan suku", "Pukul sembilan setengah"],
            answer: 0
        },
        {
            id: "BA_AR46",
            question: "Kata hubung 'وَ' (wa) dalam waktu (Contoh: وَالرُّبْعُ) bermaksud ___ .",
            options: ["Kurang", "Lebih", "Tepat", "Setengah"],
            answer: 1
        },
        {
            id: "BA_AR47",
            question: "Perkataan 'إِلَّا' (illa) dalam waktu (Contoh: إِلَّا الرُّبْعَ) bermaksud ___ .",
            options: ["Lebih", "Kurang", "Tepat", "Setengah"],
            answer: 1
        },
        {
            id: "BA_AR48",
            question: "Apakah erti 'السَّاعَةُ العَاشِرَةُ تَمَامًا' (As-saa'atul 'aasyiratu tamaaman)?",
            options: ["Pukul sepuluh setengah", "Pukul sepuluh suku", "Pukul sepuluh tepat", "Pukul sebelas tepat"],
            answer: 2
        },
        {
            id: "BA_AR49",
            question: "Perkataan 'الأَوَّلُ' (Al-awwalu) bermaksud ___ .",
            options: ["Pertama", "Kedua", "Ketiga", "Keempat"],
            answer: 0
        },
        {
            id: "BA_AR50",
            question: "Perkataan 'الثَّانِي' (Ath-thaanii) bermaksud ___ .",
            options: ["Pertama", "Kedua", "Ketiga", "Keempat"],
            answer: 1
        }
    ]
};
