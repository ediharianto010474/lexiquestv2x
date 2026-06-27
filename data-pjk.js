// ==========================================
// DATA SOALAN PJK (4 Kategori Pertama)
// ==========================================
const pjkData = {
"gimnastik_asas": [
        { id: "PJK_GM01", question: "Kebolehan mengekalkan kedudukan badan dalam keadaan stabil dipanggil ___?", options: ["Lompatan", "Ayunan", "Imbangan", "Hambur"], answer: 2 },
        { id: "PJK_GM02", question: "Imbangan yang dilakukan dalam keadaan badan tidak bergerak dipanggil imbangan ___?", options: ["Dinamik", "Statik", "Lompatan", "Kreatif"], answer: 1 },
        { id: "PJK_GM03", question: "Imbangan yang dilakukan ketika badan sedang bergerak dipanggil imbangan ___?", options: ["Dinamik", "Statik", "Berirama", "Simetri"], answer: 0 },
        { id: "PJK_GM04", question: "Melakukan imbangan dengan hanya menggunakan sebelah kaki dinamakan imbangan bangau atau ___ kaki?", options: ["Satu", "Dua", "Tiga", "Tiada"], answer: 0 },
        { id: "PJK_GM05", question: "Imbangan statik menggunakan punggung sebagai tapak sokongan diletakkan sebagai posisi huruf ___?", options: ["A", "O", "T", "V"], answer: 3 },
        { id: "PJK_GM06", question: "Semakin banyak bilangan tapak sokongan, semakin ___ sesuatu imbangan badan.", options: ["Bergoyang", "Stabil", "Laju", "Tinggi"], answer: 1 },
        { id: "PJK_GM07", question: "Antara imbangan satu tapak sokongan dan tiga tapak sokongan, manakah yang lebih stabil?", options: ["Satu tapak sokongan", "Dua tapak sokongan", "Tiga tapak sokongan", "Sama sahaja"], answer: 2 },
        { id: "PJK_GM08", question: "Sebutkan kedudukan tapak sokongan yang paling luas antara berdiri berkaki rapat atau berdiri tegak berkaki buka?", options: ["Berkaki rapat", "Berdiri satu kaki", "Berdiri menjengket", "Berkaki buka"], answer: 3 },
        { id: "PJK_GM09", question: "Aktiviti menolak badan ke atas dari lantai dengan kekuatan kaki secara cepat dipanggil ___?", options: ["Guling", "Hambur", "Ayunan", "Imbangan"], answer: 1 },
        { id: "PJK_GM10", question: "Aktiviti memindahkan berat badan dari kaki ke tangan dan kembali ke kaki semula dipanggil hambur ___?", options: ["Kepala", "Bahu", "Tangan", "Punggung"], answer: 2 },
        { id: "PJK_GM11", question: "Semasa melakukan pendaratan dari tempat tinggi, lutut hendaklah ___ untuk menyerap daya gegaran.", options: ["Diluruskan keras", "Difleksi (dibengkokkan)", "Disilangkan", "Diangkat tinggi"], answer: 1 },
        { id: "PJK_GM12", question: "Apakah istilah bagi perbuatan membengkokkan lutut semasa mendarat?", options: ["Fleksi lutut", "Ekstensi lutut", "Kunci lutut", "Pusing lutut"], answer: 0 },
        { id: "PJK_GM13", question: "Pendaratan yang selamat memerlukan kedua-dua belah ___ menyentuh lantai secara serentak.", options: ["Tangan", "Lutut", "Kaki", "Siku"], answer: 2 },
        { id: "PJK_GM14", question: "Pergerakan memusingkan badan 360 darjah di atas lantai mengikut paksi membujur dipanggil ___ balak?", options: ["Guling", "Lompat", "Ayun", "Pusing"], answer: 0 },
        { id: "PJK_GM15", question: "Pergerakan menggulingkan badan ke hadapan bermula dari tengkuk, belakang dan punggung dipanggil guling ___?", options: ["Belakang", "Sisi", "Hadapan", "Balak"], answer: 2 },
        { id: "PJK_GM16", question: "Semasa melakukan guling hadapan, bahagian anggota badan manakah yang patut menyentuh tilam dahulu selepas tangan?", options: ["Dahi", "Tengkuk", "Dada", "Ubun-ubun"], answer: 1 },
        { id: "PJK_GM17", question: "Adakah bahagian dahi atau kepala dibenarkan menjadi tumpuan utama semasa memulakan guling hadapan?", options: ["Ya", "Tidak", "Bergantung pada saiz badan", "Boleh jika perlahan"], answer: 1 },
        { id: "PJK_GM18", question: "Mengapakah kepala tidak boleh ditekan pada tilam semasa berguling?", options: ["Boleh merosakkan rambut", "Boleh mencederakan leher", "Melambatkan gulingan", "Membatalkan markah"], answer: 1 },
        { id: "PJK_GM19", question: "Pergerakan menggulingkan badan ke arah belakang dipanggil guling ___?", options: ["Sisi", "Hadapan", "Balak", "Belakang"], answer: 3 },
        { id: "PJK_GM20", question: "Semasa posisi akhir guling hadapan, murid berada dalam keadaan ___ sebelum berdiri.", options: ["Mencangkung", "Baring", "Meniarap", "Melompat"], answer: 0 },
        { id: "PJK_GM21", question: "Aktiviti berjalan di atas bangku gimnastik melatih kemahiran imbangan ___?", options: ["Dinamik", "Statik", "Duduk", "Keras"], answer: 0 },
        { id: "PJK_GM22", question: "Alat beralas lembut yang wajib digunakan dalam semua aktiviti gimnastik asas dipanggil ___?", options: ["Papan anjal", "Tikar getah", "Tilam gimnastik", "Karpet"], answer: 2 },
        { id: "PJK_GM23", question: "Apakah nama lain bagi tilam gimnastik yang tebal dan lembut?", options: ["Mat", "Bed", "Cushion", "Board"], answer: 0 },
        { id: "PJK_GM24", question: "Imbangan statik secara meniarap dengan tangan dan sebelah kaki lurus ke belakang menyerupai bentuk pesawat dipanggil imbangan ___?", options: ["Kapal layar", "Helikopter", "Kereta kebal", "Aeroplan"], answer: 3 },
        { id: "PJK_GM25", question: "Melakukan pusingan badan di udara selepas melompat dari papan anjal dipanggil lompatan ___?", options: ["Udara", "Air", "Bumi", "Api"], answer: 0 },
        { id: "PJK_GM26", question: "Adakah kita dibenarkan melakukan gimnastik di atas lantai simen keras tanpa tilam?", options: ["Ya", "Boleh jika pandai", "Tidak", "Bergantung cuaca"], answer: 2 },
        { id: "PJK_GM27", question: "Sokongan badan menggunakan dua belah tangan dan dua belah kaki dikira mempunyai berapa tapak sokongan?", options: ["Dua", "Tiga", "Empat", "Lima"], answer: 2 },
        { id: "PJK_GM28", question: "Sokongan badan menggunakan kepala dan dua belah tangan membentuk imbangan ___?", options: ["Tiga segi", "Empat segi", "Bulat", "Sisi"], answer: 0 },
        { id: "PJK_GM29", question: "Aktiviti gimnastik dapat meningkatkan koordinasi dan ___ otot badan.", options: ["Kekuatan", "Lemak", "Tinggi", "Berat"], answer: 0 },
        { id: "PJK_GM30", question: "Sebelum memulakan aktiviti gimnastik, murid mestilah memakai pakaian sukan yang ___?", options: ["Ketat", "Sesuai", "Tebal", "Bercorak"], answer: 1 },
        { id: "PJK_GM31", question: "Fleksi lutut semasa mendarat penting untuk mengelakkan kecederaan pada sendi ___?", options: ["Siku", "Bahu", "Lutut", "Pinggang"], answer: 2 },
        { id: "PJK_GM32", question: "Adakah murid dibenarkan menolak rakan secara sengaja semasa melakukan gulingan?", options: ["Ya", "Boleh untuk bergurau", "Tidak", "Hanya rakan baik"], answer: 2 },
        { id: "PJK_GM33", question: "Mengekalkan imbangan badan di atas papan imbangan memerlukan fokus mata memandang ke ___?", options: ["Bawah", "Atas", "Belakang", "Hadapan"], answer: 3 },
        { id: "PJK_GM34", question: "Kedudukan pusat graviti yang rendah menjadikan tubuh badan kita lebih ___?", options: ["Stabil", "Goyang", "Tinggi", "Lemah"], answer: 0 },
        { id: "PJK_GM35", question: "Merendahkan badan dengan membengkokkan lutut membantu menurunkan pusat ___.", options: ["Udara", "Graviti", "Jisim", "Otot"], answer: 1 },
        { id: "PJK_GM36", question: "Gimnastik yang melibatkan pergerakan kreatif bersandarkan alatan seperti reben atau bola dipanggil gimnastik ___?", options: ["Keras", "Lantai", "Irama", "Artistik"], answer: 2 },
        { id: "PJK_GM37", question: "Gimnastik peringkat sekolah rendah memfokuskan kepada pergerakan ___?", options: ["Asas", "Ekstrem", "Pertandingan", "Profesional"], answer: 0 },
        { id: "PJK_GM38", question: "Hambur menggunakan bantuan peti lombol memerlukan kekuatan otot tangan dan ___?", options: ["Mata", "Kaki", "Telinga", "Kepala"], answer: 1 },
        { id: "PJK_GM39", question: "Semasa berguling, posisi dagu hendaklah dirapatkan ke bahagian ___?", options: ["Perut", "Dada", "Bahu", "Lutut"], answer: 1 },
        { id: "PJK_GM40", question: "Adakah perbuatan memakai jam tangan atau aksesori tajam dibenarkan semasa gimnastik?", options: ["Ya", "Boleh jika mahal", "Tidak", "Ikut suka"], answer: 2 },
        { id: "PJK_GM41", question: "Kemahiran mengawal pergerakan anggota badan dengan cekap dipanggil ___ motor.", options: ["Halangan", "Kawalan", "Laluan", "Kuasa"], answer: 1 },
        { id: "PJK_GM42", question: "Pendaratan yang tidak stabil boleh menyebabkan murid terjatuh atau ___?", options: ["Terseliuh", "Tinggi", "Cepat lapar", "Cepat habis"], answer: 0 },
        { id: "PJK_GM43", question: "Aktiviti gayut dan ayun pada palang menguji kekuatan genggaman tangan serta otot ___?", options: ["Bahu", "Kaki", "Lutut", "Perut"], answer: 0 },
        { id: "PJK_GM44", question: "Semasa mendarat dari lompatan, pastikan tangan dibuka ke sisi untuk mengimbangi ___?", options: ["Tilam", "Rakan", "Badan", "Angin"], answer: 2 },
        { id: "PJK_GM45", question: "Gulingan sisi di atas tilam gimnastik dipanggil juga guling ___?", options: ["Balak", "Sisi", "Hadapan", "Tegak"], answer: 1 },
        { id: "PJK_GM46", question: "Adakah arahan guru wajib dipatuhi sebelum mencuba sebarang gaya gimnastik baharu?", options: ["Ya", "Tidak", "Kadang-kadang", "Abaikan"], answer: 0 },
        { id: "PJK_GM47", question: "Imbangan 'handstand' ialah imbangan statik tegak menggunakan tapak ___?", options: ["Kaki", "Tangan", "Kepala", "Lutut"], answer: 1 },
        { id: "PJK_GM48", question: "Sokongan satu lutut dan dua tapak tangan di atas lantai memberikan bilangan ___ tapak sokongan.", options: ["Dua", "Tiga", "Empat", "Lima"], answer: 1 },
        { id: "PJK_GM49", question: "Aktiviti meniru pergerakan ulat bulu bergerak di atas tilam dikategorikan sebagai pergerakan ___?", options: ["Bukan lokomotor", "Lokomotor", "Statik", "Pasif"], answer: 1 },
        { id: "PJK_GM50", question: "Gimnastik melatih kebolehan melentur badan atau komponen ___.", options: ["Kekuatan", "Kelajuan", "Kelenturan", "Kardio"], answer: 2 },
    ],

    "pergerakan_berirama": [
        { id: "PJK_PB01", question: "Pergerakan fizikal yang dilakukan mengikut rentak, tempo atau muzik dipanggil pergerakan ___?", options: ["Kasar", "Berirama", "Pantas", "Gimnastik"], answer: 1 },
        { id: "PJK_PB02", question: "Kelajuan rentak irama atau muzik yang mengawal pergerakan dipanggil ___?", options: ["Melodi", "Vokal", "Tempo", "Nada"], answer: 2 },
        { id: "PJK_PB03", question: "Pergerakan yang menyebabkan badan berpindah dari satu tempat ke tempat yang lain dipanggil pergerakan ___?", options: ["Bukan lokomotor", "Setempat", "Lokomotor", "Kaku"], answer: 2 },
        { id: "PJK_PB04", question: "Sebutkan satu contoh pergerakan lokomotor dalam aktiviti berirama?", options: ["Berdiri tegak", "Membongkok", "Berjalan", "Memusing kepala"], answer: 2 },
        { id: "PJK_PB05", question: "Pergerakan yang dilakukan dalam keadaan badan kekal berada di tempat yang sama dipanggil pergerakan ___?", options: ["Lokomotor", "Bukan lokomotor", "Lari pecut", "Terbang"], answer: 1 },
        { id: "PJK_PB06", question: "Sebutkan satu contoh pergerakan bukan lokomotor dalam pergerakan berirama?", options: ["Berlari", "Melompat katak", "Berjalan bersilang", "Membengkok"], answer: 3 },
        { id: "PJK_PB07", question: "Langkah asas berjalan ke hadapan, ke belakang, atau ke sisi mengikut detik dipanggil pergerakan ___ lurus?", options: ["Tarian", "Langkah", "Lompat", "Pusing"], answer: 1 },
        { id: "PJK_PB08", question: "Langkah menari mengikut corak langkah huruf 'V' dipanggil langkah ___?", options: ["Z-step", "U-step", "V-step", "W-step"], answer: 2 },
        { id: "PJK_PB09", question: "Pergerakan mengikut irama muzik dengan ekspresi emosi bebas dipanggil pergerakan ___?", options: ["Kreatif", "Arahan", "Robot", "Statik"], answer: 0 },
        { id: "PJK_PB10", question: "Aktiviti meniru pergerakan haiwan seperti burung terbang mengikut muzik menguji daya ___ murid.", options: ["Kekuatan", "Kreativiti", "Kelajuan", "Kekerasan"], answer: 1 },
        { id: "PJK_PB11", question: "Tarian tradisional kaum Melayu yang ditarikan dengan tempo sederhana laju meter 4/4 ialah tarian ___?", options: ["Inang", "Zapin", "Ngajat", "Sumazau"], answer: 0 },
        { id: "PJK_PB12", question: "Tarian tradisional kaum Melayu yang mempunyai rentak sangat rancak dan ceria ialah tarian ___?", options: ["Mak Yong", "Inang", "Joget", "Kuda Kepang"], answer: 2 },
        { id: "PJK_PB13", question: "Alat perkusi atau tepukan tangan boleh digunakan sebagai penanda ___ irama.", options: ["Penamat", "Rehat", "Detik", "Suara"], answer: 2 },
        { id: "PJK_PB14", question: "Mendengar muzik terlebih dahulu sebelum melakukan pergerakan membantu murid menyelaraskan ___ badan.", options: ["Berat", "Koordinasi", "Ketinggian", "Warna baju"], answer: 1 },
        { id: "PJK_PB15", question: "Pergerakan melangkah sebelah kaki ke sisi dan menarik kaki sebelah lagi rapat ke arahnya dipanggil langkah ___?", options: ["Sisi", "Lurus", "Belakang", "Depan"], answer: 0 },
        { id: "PJK_PB16", question: "Apakah istilah bahasa Inggeris bagi pergerakan langkah sisi rapat?", options: ["Forward-step", "Back-step", "Side-step", "Jump-step"], answer: 2 },
        { id: "PJK_PB17", question: "Langkah menari bersilang kaki ke hadapan atau ke belakang dipanggil langkah ___ vin?", options: ["Apple", "Orange", "Grapevine", "Banana"], answer: 2 },
        { id: "PJK_PB18", question: "Adakah tempo muzik yang laju memerlukan kita bergerak dengan lebih pantas?", options: ["Ya", "Tidak", "Ikut suka", "Tidak bergerak langsung"], answer: 0 },
        { id: "PJK_PB19", question: "Adakah tempo muzik yang perlahan sesuai diiringi dengan pergerakan melompat pecut?", options: ["Ya", "Boleh cuba", "Tidak", "Bergantung pada kasut"], answer: 2 },
        { id: "PJK_PB20", question: "Aktiviti pergerakan berirama secara berkumpulan melatih nilai bekerjasama dan ___?", options: ["Pementingan diri", "Keseragaman", "Permusuhan", "Ketidaksamaan"], answer: 1 },
        { id: "PJK_PB21", question: "Melakukan pergerakan fleksi dan ekstensi tangan mengikut detik lagu ialah contoh pergerakan ___ lokomotor.", options: ["Bukan", "Campuran", "Bebas", "Penuh"], answer: 0 },
        { id: "PJK_PB22", question: "Pergerakan melonjak dengan sebelah kaki dan mendarat dengan kaki yang sama dipanggil ___?", options: ["Running", "Skipping", "Hopping", "Walking"], answer: 1 },
        { id: "PJK_PB23", question: "Pergerakan berlari anak dengan langkah berenjut-enjut mengikut rentak lagu kanak-kanak dinamakan langkah ___?", options: ["Pecut", "Jalan", "Enjut", "Lompat"], answer: 2 },
        { id: "PJK_PB24", question: "Adakah pakaian ketat atau jeans sesuai dipakai semasa melakukan aktiviti pergerakan berirama?", options: ["Ya, sangat sesuai", "Tidak", "Boleh jika sejuk", "Boleh jika mahal"], answer: 1 },
        { id: "PJK_PB25", question: "Menggunakan props seperti reben, gelung rotan, atau selendang menambah tarikan estetik dalam pergerakan ___?", options: ["Kreatif", "Lompatan", "Kasar", "Tidur"], answer: 0 },
        { id: "PJK_PB26", question: "Membongkokkan badan ke kiri dan kanan mengikut alunan muzik melatih komponen kecergasan ___.", options: ["Kekuatan", "Kelenturan", "Kelajuan", "Kardiovaskular"], answer: 1 },
        { id: "PJK_PB27", question: "Langkah berpusing di tempat yang sama mengikut rentak muzik ialah pergerakan ___?", options: ["Lompatan", "Lurus", "Pusingan", "Sisi"], answer: 2 },
        { id: "PJK_PB28", question: "Tarian tradisional etnik Kadazandusun dari Sabah yang popular diajar dalam PJK ialah tarian ___?", options: ["Ngajat", "Sumazau", "Zapin", "Inang"], answer: 1 },
        { id: "PJK_PB29", question: "Tarian tradisional etnik Iban dari Sarawak yang diajar dalam komponen pergerakan berirama ialah tarian ___?", options: ["Ngajat", "Joget", "Sumazau", "Kuda Kepang"], answer: 0 },
        { id: "PJK_PB30", question: "Sebutkan rentak irama tradisional yang sering digunakan untuk senamrobik sekolah?", options: ["Perlahan", "Rancak", "Menyedihkan", "Menakutkan"], answer: 1 },
        { id: "PJK_PB31", question: "Pergerakan berjalan sambil melambai-lambaikan tangan mengikut tempo melatih kemahiran motor ___?", options: ["Kasar", "Halus", "Mata", "Mulut"], answer: 0 },
        { id: "PJK_PB32", question: "Detik lagu yang berulang secara stabil menyamai rentak degupan ___ manusia.", options: ["Mata", "Jantung", "Perut", "Rambut"], answer: 1 },
        { id: "PJK_PB33", question: "Aktiviti berirama yang dilakukan di awal pagi untuk kecergasan seluruh sekolah dipanggil ___?", options: ["Tidur", "Makan pagi", "Senamrobik", "Gotong-royong"], answer: 2 },
        { id: "PJK_PB34", question: "Adakah kita perlu menghormati keunikan tarian dan pergerakan tradisional kaum lain?", options: ["Tidak", "Bergantung", "Ya", "Hanya jika disuruh"], answer: 2 },
        { id: "PJK_PB35", question: "Pergerakan mengilas badan tanpa mengubah kedudukan kaki ialah pergerakan ___ lokomotor.", options: ["Penuh", "Campuran", "Cepat", "Bukan"], answer: 3 },
        { id: "PJK_PB36", question: "Muzik berentak perlahan biasanya mempunyai nilai kesan emosi yang ___ dan tenang.", options: ["Syahdu", "Marah", "Tertekan", "Gelisah"], answer: 0 },
        { id: "PJK_PB37", question: "Menari mengikut formasi bulatan memerlukan murid peka dengan jarak ___ di sebelah mereka.", options: ["Rakan", "Tingkap", "Kipas", "Guru"], answer: 0 },
        { id: "PJK_PB38", question: "Langkah bergerak maju tiga langkah ke hadapan dan diakhiri dengan tepukan tangan mengikut detik ___?", options: ["Pertama", "Kedua", "Ketiga", "Keempat"], answer: 3 },
        { id: "PJK_PB39", question: "Adakah koordinasi mata, telinga, dan kaki penting dalam pergerakan berirama?", options: ["Ya", "Tidak", "Kurang penting", "Hanya telinga penting"], answer: 0 },
        { id: "PJK_PB40", question: "Tujuan utama aktiviti pergerakan berirama adalah untuk membina keyakinan diri dan apresiasi ___.", options: ["Matematik", "Sains", "Estetik", "Sejarah"], answer: 2 },
        { id: "PJK_PB41", question: "Melompat melepasi halangan mengikut rentak muzik menguji aspek ___ halangan.", options: ["Ketinggian", "Berat", "Warna", "Anggaran"], answer: 3 },
        { id: "PJK_PB42", question: "Sebutkan isyarat visual yang boleh digunakan oleh guru untuk menukar pergerakan selain muzik?", options: ["Lampu suluh", "Wisil", "Menjerit", "Baling bola"], answer: 1 },
        { id: "PJK_PB43", question: "Langkah mengejar corak langkah rakan di hadapan dinamakan pergerakan ___ bayang.", options: ["Mengikut", "Melawan", "Memukul", "Memijak"], answer: 0 },
        { id: "PJK_PB44", question: "Suku kata ritma 'Ta' dalam tepukan detik biasanya mewakili ketukan nota ___?", options: ["Kuaver", "Krochet", "Minim", "Semibrif"], answer: 1 },
        { id: "PJK_PB45", question: "Adakah senyuman dan ekspresi muka yang ceria sebahagian daripada markah pergerakan kreatif?", options: ["Ya", "Tidak", "Hanya jika cantik", "Hanya untuk guru"], answer: 0 },
        { id: "PJK_PB46", question: "Pergerakan berirama membantu membakar kalori dan meningkatkan daya tahan ___.", options: ["Otot", "Kardiovaskular", "Tulang", "Gigi"], answer: 1 },
        { id: "PJK_PB47", question: "Membentuk gaya patung membeku apabila muzik dihentikan secara tiba-tiba melatih fungsi ___?", options: ["Daya tahan otot", "Imbangan statik", "Kelajuan", "Kekuatan"], answer: 1 },
        { id: "PJK_PB48", question: "Langkah tarian singa tradisional menggunakan rentak paluan ___ yang kuat.", options: ["Gitar", "Dram", "Piano", "Seruling"], answer: 1 },
        { id: "PJK_PB49", question: "Pergerakan menolak tapak tangan ke depan mengikut irama ialah contoh pergerakan ___ lokomotor.", options: ["Sedia ada", "Lokomotor", "Bukan", "Menyerang"], answer: 2 },
        { id: "PJK_PB50", question: "Hasil gubahan gerakan kreatif murid boleh dipersembahkan semasa Hari ___ sekolah.", options: ["Sukan", "Hujan", "Kantin", "Peperiksaan"], answer: 0 },
    ],

    "olahraga_asas": [
        { id: "PJK_OA01", question: "Sukan olahraga asas terbahagi kepada tiga komponen utama iaitu acara larian, lompatan dan ___?", options: ["Tendangan", "Pukulan", "Balingan", "Renangan"], answer: 2 },
        { id: "PJK_OA02", question: "Acara larian jarak pendek seperti lari 50 meter dan 100 meter diklasifikasikan sebagai larian ___?", options: ["Jauh", "Pecut", "Rentas Desa", "Berganti-ganti"], answer: 1 },
        { id: "PJK_OA03", question: "Semasa memulakan larian pecut tanpa blok permulaan, gaya dekam atau gaya ___ digunakan?", options: ["Tidur", "Duduk", "Melompat", "Berdiri"], answer: 3 },
        { id: "PJK_OA04", question: "Apakah istilah bahasa Inggeris bagi fasa pecutan di mana atlet memecut dengan kelajuan maksimum?", options: ["Deceleration", "Acceleration", "Stopping", "Jumping"], answer: 1 },
        { id: "PJK_OA05", question: "Acara larian di mana sekumpulan empat orang atlet berganti-ganti berlari membawa baton dipanggil lari ___?", options: ["Jarak Sederhana", "Pecut", "Berhalangan", "Berganti-ganti"], answer: 3 },
        { id: "PJK_OA06", question: "Alat silinder pendek berongga yang dibawa dan diserahkan dalam acara lari berganti-ganti dipanggil ___?", options: ["Baton", "Kayu", "Papan", "Wisel"], answer: 0 },
        { id: "PJK_OA07", question: "Zon khas sepanjang 20 meter di dalam balapan larian untuk menyerahkan baton dipanggil zon ___ baton.", options: ["Rehat", "Pertukaran", "Penamat", "Larian"], answer: 1 },
        { id: "PJK_OA08", question: "Teknik penyerahan baton tanpa pelari penerima melihat ke arah pelari penghantar dipanggil teknik ___ visual?", options: ["Campuran", "Separuh", "Penuh", "Bukan"], answer: 3 },
        { id: "PJK_OA09", question: "Teknik penyerahan baton di mana pelari penerima melihat pergerakan baton dipanggil teknik ___?", options: ["Visual", "Bukan visual", "Bebas", "Meneka"], answer: 0 },
        { id: "PJK_OA10", question: "Semasa menamatkan larian di garisan penamat, bahagian anggota badan manakah yang mesti melintasi garisan dahulu?", options: ["Kaki", "Tangan", "Kepala", "Torso"], answer: 3 },
        { id: "PJK_OA11", question: "Apakah istilah bahasa Melayu bagi bahagian torso badan?", options: ["Dada", "Pinggang", "Punggung", "Lutut"], answer: 0 },
        { id: "PJK_OA12", question: "Acara lompatan di mana atlet berlari, melonjak dan mendarat sejauh mungkin di dalam kawasan pasir dipanggil lompat ___?", options: ["Tinggi", "Kijang", "Galah", "Jauh"], answer: 3 },
        { id: "PJK_OA13", question: "Kawasan pendaratan bagi acara lompat jauh mestilah diisi dengan ___ yang bersih.", options: ["Span", "Lumpur", "Batu", "Pasir"], answer: 3 },
        { id: "PJK_OA14", question: "Papan rata melintang tempat pelari melakukan lonjakan dalam lompat jauh dipanggil papan ___?", options: ["Larian", "Mendarat", "Lonjakan", "Ukuran"], answer: 2 },
        { id: "PJK_OA15", question: "Jika kaki atlet terpijak melepasi papan lonjakan semasa melompat, lompatan tersebut dikira ___?", options: ["Sah", "Batal", "Diulang", "Berjaya"], answer: 1 },
        { id: "PJK_OA16", question: "Empat fasa utama dalam lompat jauh ialah fasa penujuan, fasa lonjakan, fasa layangan dan fasa ___?", options: ["Rehat", "Berhenti", "Pendaratan", "Berlari"], answer: 2 },
        { id: "PJK_OA17", question: "Tujuan fasa penujuan atau lari landas dalam lompat jauh adalah untuk membina ___ larian.", options: ["Kepenatan", "Ketinggian", "Kelajuan", "Kekuatan"], answer: 2 },
        { id: "PJK_OA18", question: "Lonjakan dalam lompat jauh mestilah dilakukan dengan menggunakan kekuatan ___ kaki.", options: ["Sebelah", "Kedua-dua", "Tiga", "Tiada"], answer: 0 },
        { id: "PJK_OA19", question: "Semasa fasa pendaratan lompat jauh, kedua-dua belah tangan patut diayun ke ___ untuk mengelakkan badan jatuh ke belakang.", options: ["Bawah", "Sisi", "Atas", "Hadapan"], answer: 3 },
        { id: "PJK_OA20", question: "Jarak lompat jauh diukur dari kesan pendaratan anggota badan yang paling ___ dengan papan lonjakan.", options: ["Jauh", "Hampir", "Tengah", "Tepi"], answer: 1 },
        { id: "PJK_OA21", question: "Acara balangan asas menggunakan peluru logam bulat tegar yang diletakkan di pangkal leher dipanggil ___ peluru?", options: ["Baling", "Lempar", "Lontar", "Rejam"], answer: 2 },
        { id: "PJK_OA22", question: "Teknik menolak peluru dari bahagian bahu dipanggil melontar, adakah kita dibenarkan melemparnya seperti bola?", options: ["Ya", "Boleh jika bola ringan", "Tidak", "Bergantung cara pegang"], answer: 2 },
        { id: "PJK_OA23", question: "Mengapa perbuatan melempar peluru (throwing action) dilarang dalam acara lontar peluru?", options: ["Terlalu jauh", "Boleh mencederakan sendi siku", "Bukan gaya yang cantik", "Bola akan pecah"], answer: 1 },
        { id: "PJK_OA24", question: "Kawasan tempat melontar peluru berbentuk sebuah ___ bertanda.", options: ["Segi empat", "Segi tiga", "Bulatan", "Bujur"], answer: 2 },
        { id: "PJK_OA25", question: "Sebelum melontar, peluru mestilah diletakkan rapat menyentuh bahagian bawah ___?", options: ["Ketiak", "Dagu atau telinga", "Dada", "Siku"], answer: 1 },
        { id: "PJK_OA26", question: "Peluru yang dilontar mestilah mendarat di dalam kawasan sektor ___ yang dibenarkan.", options: ["Rehat", "Larian", "Pendaratan", "Khas"], answer: 2 },
        { id: "PJK_OA27", question: "Berat peluru yang digunakan untuk murid sekolah rendah (lelaki bawah 12 tahun) biasanya ialah ___ kilogram.", options: ["Dua", "Tiga", "Empat", "Lima"], answer: 1 },
        { id: "PJK_OA28", question: "Adakah atlet dibenarkan berjalan keluar dari bahagian hadapan bulatan lontaran selepas selesai melontar peluru?", options: ["Ya", "Tidak", "Bergantung situasi", "Boleh jika juri benarkan"], answer: 1 },
        { id: "PJK_OA29", question: "Atlet lontar peluru wajib keluar melalui bahagian ___ bulatan selepas lontaran dikira sah.", options: ["Sisi kanan", "Sisi kiri", "Hadapan", "Belakang"], answer: 3 },
        { id: "PJK_OA30", question: "Larian melepasi pagar penghalang setinggi paras tertentu di atas trek dipanggil acara lari ber___?", options: ["Pagar", "Halangan", "Tiang", "Dinding"], answer: 0 },
        { id: "PJK_OA31", question: "Ayunan lengan yang kuat bersilang dengan rentak kaki membantu menambah ___ larian pecut.", options: ["Gaya", "Berat", "Kelajuan", "Ketinggian"], answer: 2 },
        { id: "PJK_OA32", question: "Aktiviti memanaskan badan sebelum acara olahraga bertujuan untuk mengelakkan ___ otot.", options: ["Kecederaan", "Kelembutan", "Kekuatan", "Kepantasan"], answer: 0 },
        { id: "PJK_OA33", question: "Alat pengukur yang digunakan untuk mengukur jarak lontaran atau lompatan ialah ___?", options: ["Pembaris", "Jangka sudut", "Pita pengukur", "Tali"], answer: 2 },
        { id: "PJK_OA34", question: "Mendengar tembakan pistol permulaan menguji kepantasan masa ___ atlet.", options: ["Berjalan", "Tindak balas", "Lompatan", "Rehat"], answer: 1 },
        { id: "PJK_OA35", question: "Lompatan tinggi melepasi palang melintang dengan pendaratan di atas tilam tebal dipanggil lompat ___?", options: ["Jauh", "Tinggi", "Galah", "Kijang"], answer: 1 },
        { id: "PJK_OA36", question: "Gaya lompat tinggi yang paling popular di mana belakang badan melintasi palang dahulu dipanggil gaya ___ flop?", options: ["Fosbury", "Gunting", "Guling", "Lurus"], answer: 0 },
        { id: "PJK_OA37", question: "Gaya lompat tinggi yang melompat seperti pergerakan gunting dipanggil gaya ___?", options: ["Pisau", "Lompat sisi", "Gunting", "Tegak"], answer: 2 },
        { id: "PJK_OA38", question: "Adakah kita dibenarkan memakai kasut biasa yang licin semasa menyertai larian pecut di balapan?", options: ["Ya", "Boleh jika selesa", "Tidak", "Bergantung cuaca"], answer: 2 },
        { id: "PJK_OA39", question: "Lorong khas tempat pelari berlari di dalam balapan dipanggil ___?", options: ["Laluan jalan", "Jalan raya", "Lorong larian", "Laluan pejalan kaki"], answer: 2 },
        { id: "PJK_OA40", question: "Pelari yang keluar dari lorong larian sendiri secara sengaja dan mengganggu rakan boleh ___?", options: ["Dipuji", "Disingkirkan", "Dibantu", "Diberi markah"], answer: 1 },
        { id: "PJK_OA41", question: "Apakah istilah bahasa Inggeris bagi penyingkiran pelari akibat melanggar peraturan?", options: ["Qualified", "Winner", "Disqualified", "Runner-up"], answer: 2 },
        { id: "PJK_OA42", question: "Acara jalan laju memerlukan sebelah kaki atlet sentiasa ___ dengan tanah pada setiap masa.", options: ["Berjauhan", "Diangkat", "Terbang", "Bersentuhan"], answer: 3 },
        { id: "PJK_OA43", question: "Daya tahan otot dan ketangkasan merupakan komponen fizikal penting dalam acara ___?", options: ["Catur", "E-sukan", "Olahraga", "Berenang"], answer: 2 },
        { id: "PJK_OA44", question: "Baton kriket atau sofbol adakah boleh digunakan untuk acara lari berganti-ganti?", options: ["Ya", "Tidak", "Boleh jika terdesak", "Boleh jika ringan"], answer: 1 },
        { id: "PJK_OA45", question: "Penerima baton yang menjatuhkan baton semasa pertukaran mesti segera ___ semula untuk meneruskan larian.", options: ["Tinggalkan", "Mengambil", "Tendang", "Biar"], answer: 1 },
        { id: "PJK_OA46", question: "Lari landas yang konsisten membantu atlet melompat dengan ___ yang tepat.", options: ["Sudut", "Bentuk", "Baju", "Kasut"], answer: 0 },
        { id: "PJK_OA47", question: "Olahraga melatih sifat disiplin diri yang tinggi dan semangat ___ yang kuat.", options: ["Bermusuhan", "Juang", "Cepat putus asa", "Mementingkan diri"], answer: 1 },
        { id: "PJK_OA48", question: "Orang yang bertanggungjawab mencatat masa larian pelari menggunakan jam randik ialah ___ masa.", options: ["Penjaga", "Pengukur", "Peniup wisil", "Penonton"], answer: 0 },
        { id: "PJK_OA49", question: "Sebutkan warna garisan penamat balapan standard sekolah?", options: ["Merah", "Biru", "Kuning", "Putih"], answer: 3 },
        { id: "PJK_OA50", question: "Latihan larian berulang-ulang dengan kepantasan berbeza membantu membina sistem ___ kardiovaskular.", options: ["Anaerobik", "Otot", "Aerobik", "Tulang"], answer: 2 },
    ],
"permainan_kategori_serangan": [
        {
            id: "PJK_SA01",
            question: "Kategori permainan di mana sekumpulan pemain cuba menguasai kawasan pihak lawan untuk menjaringkan gol dipanggil kategori ___.",
            options: ["Jaring", "Padang", "Serangan", "Memanah"],
            answer: 2
        },
        {
            id: "PJK_SA02",
            question: "Sebutkan satu contoh permainan kategori serangan yang terkenal di dunia yang dimainkan menggunakan kaki.",
            answer: "bola sepak"
        },
        {
            id: "PJK_SA03",
            question: "Permainan kategori serangan yang dimainkan oleh tujuh orang pemain wanita (biasanya) di dalam gelanggang yang dibahagikan kepada tiga pertiga (1/3) ialah ___.",
            options: ["Bola Keranjang", "Bola Baling", "Bola Tampar", "Bola Jaring"],
            answer: 3
        },
        {
            id: "PJK_SA04",
            question: "Kemahiran menggerakkan atau memindahkan bola kepada rakan sepasukan dipanggil kemahiran ___.",
            answer: "menghantar"
        },
        {
            id: "PJK_SA05",
            question: "Kemahiran mengawal bola yang dihantar oleh rakan supaya tidak terlepas dipanggil kemahiran ___ bola.",
            options: ["Menanduk", "Menerima", "Memotong", "Menggelecek"],
            answer: 1
        },
        {
            id: "PJK_SA06",
            question: "Dalam permainan bola sepak, menjaringkan gol biasanya dilakukan dengan menggunakan kaki atau ___.",
            answer: "kepala"
        },
        {
            id: "PJK_SA07",
            question: "Dalam permainan bola baling, menghantar dan menerima bola dikawal sepenuhnya menggunakan anggota ___.",
            options: ["Tangan", "Kaki", "Dada", "Kepala"],
            answer: 0
        },
        {
            id: "PJK_SA08",
            question: "Pemain pertahanan terakhir yang ditugaskan menghalang bola daripada masuk ke dalam gawang dipanggil penjaga ___.",
            answer: "gol"
        },
        {
            id: "PJK_SA09",
            question: "Satu-satunya posisi pemain dalam bola sepak yang dibenarkan memegang bola menggunakan tangan di dalam kawasan penaltinya sendiri ialah ___.",
            options: ["Penyerang", "Pemain Tengah", "Pertahanan", "Penjaga Gol"],
            answer: 3
        },
        {
            id: "PJK_SA10",
            question: "Kemahiran menggerakkan bola ke hadapan secara pantas sambil mengawal dan melepasi pemain lawan dipanggil ___ bola.",
            answer: "menggelecek"
        },
        {
            id: "PJK_SA11",
            question: "Apakah istilah pinjaman bahasa Inggeris yang sering digunakan di Malaysia bagi perbuatan 'menggelecek'?",
            options: ["Passing", "Tackling", "Dribbling", "Shooting"],
            answer: 2
        },
        {
            id: "PJK_SA12",
            question: "Kemahiran melompat untuk memutuskan atau merebut hantaran bola pihak lawan di udara dipanggil kemahiran ___ bola.",
            answer: "memintas"
        },
        {
            id: "PJK_SA13",
            question: "Dalam permainan bola jaring, pemain posisi manakah yang DIBENARKAN menjaringkan gol selain posisi Goal Attack (GA)?",
            options: ["Goal Keeper (GK)", "Goal Shooter (GS)", "Center (C)", "Wing Attack (WA)"],
            answer: 1
        },
        {
            id: "PJK_SA14",
            question: "Singkatan bagi nama kedudukan pemain 'Goal Shooter' yang tertulis pada 'bib' baju bola jaring ialah ___.",
            answer: "gs"
        },
        {
            id: "PJK_SA15",
            question: "Adakah pemain bola jaring dibenarkan melantun bola sambil berlari (seperti bola keranjang) ke arah tiang gol?",
            options: ["Ya, dibenarkan", "Tidak, bola mesti dipegang", "Hanya pemain Center dibenarkan", "Ya, sebanyak 3 kali lantunan"],
            answer: 1
        },
        {
            id: "PJK_SA16",
            question: "Perbuatan berpusing memutar badan menggunakan sebelah kaki sebagai paksi (tanpa mengangkatnya) selepas menerima bola dalam bola jaring dipanggil ___ kaki.",
            answer: "gerak"
        },
        {
            id: "PJK_SA17",
            question: "Apakah istilah bahasa Inggeris bagi pergerakan mengekalkan satu tapak kaki sebagai paksi putaran?",
            options: ["Pivoting", "Dodging", "Landing", "Stepping"],
            answer: 0
        },
        {
            id: "PJK_SA18",
            question: "Dalam permainan bola baling, pemain hanya dibenarkan mengambil maksimum ___ langkah sambil memegang bola sebelum melantun atau menghantar.",
            answer: "tiga"
        },
        {
            id: "PJK_SA19",
            question: "Untuk hantaran leret yang lebih selamat dan tepat ke arah rakan, pemain bola sepak dinasihatkan menggunakan bahagian ___ kaki.",
            options: ["Luar", "Hujung (Jari)", "Tumit", "Dalam"],
            answer: 3
        },
        {
            id: "PJK_SA20",
            question: "Hantaran bola sepak yang melambung tinggi di udara (long pass) lebih mudah dilakukan menggunakan bahagian atas atau ___ kaki.",
            answer: "kekura"
        },
        {
            id: "PJK_SA21",
            question: "Tindakan mengekori, menutup ruang, dan mengawal ketat pergerakan pemain lawan yang sedang membawa bola dipanggil kemahiran ___.",
            options: ["Menggelecek", "Membayangi", "Melambung", "Merampas"],
            answer: 1
        },
        {
            id: "PJK_SA22",
            question: "Apakah istilah sukan bahasa Inggeris bagi perbuatan mengawal rapat pemain lawan (membayangi)?",
            answer: "marking"
        },
        {
            id: "PJK_SA23",
            question: "Kekasaran fizikal yang disengajakan seperti menendang kaki lawan dari belakang akan menyebabkan pemain diberikan amaran yang dipanggil ___.",
            options: ["Foul", "Corner kick", "Throw in", "Offside"],
            answer: 0
        },
        {
            id: "PJK_SA24",
            question: "Dalam permainan bola sepak, kad amaran peringkat pertama yang diberikan pengadil diwakili dengan kad berwarna ___.",
            answer: "kuning"
        },
        {
            id: "PJK_SA25",
            question: "Pemain akan terus dibuang padang dan pasukan kekurangan seorang pemain sekiranya pengadil melayangkan kad berwarna ___.",
            options: ["Biru", "Hitam", "Kuning", "Merah"],
            answer: 3
        },
        {
            id: "PJK_SA26",
            question: "Bagi memastikan hantaran bola baling aras dada kuat dan laju, ia memerlukan kekuatan tolakan siku dan sendi ___ tangan.",
            answer: "pergelangan"
        },
        {
            id: "PJK_SA27",
            question: "Hantaran bola jaring yang dilambung tinggi beralun melepasi capaian tangan pemain lawan dipanggil hantaran ___.",
            options: ["Aras Dada", "Leret", "Loba (Lob)", "Sisi"],
            answer: 2
        },
        {
            id: "PJK_SA28",
            question: "Kemahiran menyambut dan menangkap bola dengan kemas memerlukan kemahiran koordinasi antara mata dan ___.",
            answer: "tangan"
        },
        {
            id: "PJK_SA29",
            question: "Tujuan utama membina strategi serangan dan formasi pemain yang baik adalah untuk mencipta ruang dan menghasilkan ___.",
            options: ["Keceriaan", "Sorakan penyokong", "Jaringan (Gol)", "Kecederaan lawan"],
            answer: 2
        },
        {
            id: "PJK_SA30",
            question: "Semangat positif menghormati undang-undang perlawanan, keputusan pengadil dan pihak lawan dipanggil semangat ___.",
            answer: "kesukanan"
        },
        {
            id: "PJK_SA31",
            question: "Bagi permainan bola keranjang (Basketball), berapakah bilangan pemain bagi setiap pasukan yang bermain di dalam gelanggang?",
            options: ["5", "7", "9", "11"],
            answer: 0
        },
        {
            id: "PJK_SA32",
            question: "Kemahiran menggelecek di dalam bola keranjang dilakukan dengan melantun bola berulang kali menggunakan tekanan tapak ___ dan jari.",
            answer: "tangan"
        },
        {
            id: "PJK_SA33",
            question: "Dalam sukan bola keranjang, kesalahan berjalan atau membawa bola melepasi dua langkah tanpa melantun ke lantai dipanggil ___.",
            options: ["Dribbling", "Travelling", "Passing", "Shooting"],
            answer: 1
        },
        {
            id: "PJK_SA34",
            question: "Hantaran bola yang ditolak secara lurus bermula dari dada pengirim ke arah dada penerima dalam bola keranjang dipanggil hantaran ___.",
            answer: "dada"
        },
        {
            id: "PJK_SA35",
            question: "Apakah tujuan kemahiran menghantar secara lantunan (bounce pass) yang diaplikasikan dalam bola jaring?",
            options: ["Supaya nampak kemas", "Mengelak daripada dihalang pemain lawan yang tinggi", "Supaya bola mudah pecah", "Bola boleh bergolek laju"],
            answer: 1
        },
        {
            id: "PJK_SA36",
            question: "Dalam peraturan mengawal (Defending) sukan bola jaring, jarak halangan antara pemain dengan pihak yang memegang bola sekurang-kurangnya ialah 3 ___ (0.9 meter).",
            answer: "kaki"
        },
        {
            id: "PJK_SA37",
            question: "Serangan yang dilakukan secara mengejut dan pantas ke kubu lawan selepas merampas bola dari penguasaan lawan dipanggil strategi serangan ___.",
            options: ["Bertahan", "Sisi Padang", "Balas (Counter-attack)", "Gelap"],
            answer: 2
        },
        {
            id: "PJK_SA38",
            question: "Sepakan sudut (Corner kick) dalam sukan bola sepak diberikan jika bola terkeluar melintasi garisan ___ oleh pemain pertahanan secara sengaja atau tidak.",
            answer: "belakang"
        },
        {
            id: "PJK_SA39",
            question: "Sukan bola baling agak tegas. Sekiranya pemain melakukan kekasaran fizikal kepada lawan, pemain akan dikenakan penalti keluar berehat selama ___ minit.",
            options: ["2", "5", "10", "15"],
            answer: 0
        },
        {
            id: "PJK_SA40",
            question: "Sekiranya pemain bola sepak mengasari pihak penyerang di dalam kotak kawasan gawangnya, pengadil akan memberi sepakan daripada titik ___ (Penalty spot).",
            answer: "penalti"
        },
        {
            id: "PJK_SA41",
            question: "Teknik melontar bola tinggi menggunakan kedua-dua belah tangan yang diangkat melepasi sasaran kepala pemain lain dipanggil hantaran ___.",
            options: ["Leret", "Sisi", "Atas Kepala", "Bawah Ketiak"],
            answer: 2
        },
        {
            id: "PJK_SA42",
            question: "Undang-undang bola sepak melarang penyerang untuk berada di belakang pertahanan terakhir pihak lawan sebelum bola dihantar kepadanya. Situasi haram ini dipanggil ___.",
            answer: "ofsaid"
        },
        {
            id: "PJK_SA43",
            question: "Lontaran percuma (Free throw) tanpa sebarang gangguan di dalam bola keranjang akibat kekasaran pertahanan memberikan balasan markah sebanyak ___ mata.",
            options: ["1", "2", "3", "4"],
            answer: 0
        },
        {
            id: "PJK_SA44",
            question: "Bagi memastikan cengkaman yang kuat pada rumput sewaktu memecut, kasut khas pemain ragbi dan bola sepak dicipta berserta ___ di bahagian tapak (studs).",
            answer: "paku"
        },
        {
            id: "PJK_SA45",
            question: "Mengapakah hantaran leret lebih relevan dan selalu digunakan sebagai kaedah hantaran paling asas dalam bola sepak?",
            options: ["Cantik dilihat oleh penonton", "Hantaran lebih laju, pantas dan tepat", "Sukar ditangkap oleh penjaga gol", "Memang diwajibkan oleh undang-undang"],
            answer: 1
        },
        {
            id: "PJK_SA46",
            question: "Pemain bola jaring yang memakai jersi berlilitkan huruf C di dada melambangkan bahawa peranan posisinya ialah pemain ___ (Center).",
            answer: "tengah"
        },
        {
            id: "PJK_SA47",
            question: "Singkatan 'WA' pada dada pemain bola jaring melambangkan tanggungjawab khusus sebagai penyokong serangan iaitu ___.",
            options: ["Wing Attack", "Wide Attack", "West Area", "Wing Assist"],
            answer: 0
        },
        {
            id: "PJK_SA48",
            question: "Taktik bertahan di mana sekumpulan pemain berbaris rapat menghadap penyerang yang ingin membuat sepakan percuma dinamakan pertahanan ___.",
            answer: "benteng"
        },
        {
            id: "PJK_SA49",
            question: "Dalam sukan Ragbi Sentuh (Touch Rugby) yang diubah suai bagi pelajar sekolah, kemaraan pelari dimatikan bukan dengan rempuhan kasar, tetapi dengan menggunakan kaedah ___.",
            options: ["Tackle", "Pelukan Maut", "Sentuhan dua tangan", "Serkupan Jaring"],
            answer: 2
        },
        {
            id: "PJK_SA50",
            question: "Apabila pemain berjaya menembusi pertahanan dan meletakkan bola ragbi ke lantai di dalam kawasan in-goal lawan, lakuan 'Try' ini memberikan ___ mata.",
            answer: "lima"
        }
    ],

    "permainan_kategori_jaring": [
        {
            id: "PJK_JR01",
            question: "Kategori permainan sukan di mana dua pasukan dipisahkan oleh penghadang berupa net di tengah-tengah gelanggang dipanggil kategori ___.",
            options: ["Padang", "Jaring", "Serangan", "Berhalangan"],
            answer: 1
        },
        {
            id: "PJK_JR02",
            question: "Sebutkan satu contoh sukan kategori jaring popular di Malaysia yang dimainkan menggunakan raket dan bulu tangkis.",
            answer: "badminton"
        },
        {
            id: "PJK_JR03",
            question: "Sebutkan satu contoh sukan jaring di mana pemain melompat tinggi dan memukul bola menggunakan tangan kosong melintasi jaring yang sangat tinggi.",
            options: ["Bola Keranjang", "Tenis", "Sepak Takraw", "Bola Tampar"],
            answer: 3
        },
        {
            id: "PJK_JR04",
            question: "Pukulan permulaan untuk menghantar bola (atau bulu tangkis) ke kawasan lawan bagi memulakan permainan dipanggil ___.",
            answer: "servis"
        },
        {
            id: "PJK_JR05",
            question: "Pukulan raket badminton dari sebelah yang sama dengan bahagian tangan dominan yang memegang raket dipanggil pukulan ___.",
            options: ["Kilas", "Hadapan (Forehand)", "Bawah", "Lajak"],
            answer: 1
        },
        {
            id: "PJK_JR06",
            question: "Pukulan raket dengan kedudukan belakang tapak tangan menghala ke arah sasaran bulu tangkis dipanggil pukulan ___ (Backhand).",
            answer: "kilas"
        },
        {
            id: "PJK_JR07",
            question: "Pukulan serangan yang kuat dan menjunam laju ke bawah di kawasan gelanggang lawan dalam badminton dipanggil ___.",
            options: ["Smesh (Smash)", "Lob", "Drop", "Drive"],
            answer: 0
        },
        {
            id: "PJK_JR08",
            question: "Pukulan badminton yang perlahan dan menyebabkan bulu tangkis jatuh mendarat betul-betul di belakang jaring lawan dipanggil pukulan ___ (Drop shot).",
            answer: "pancung"
        },
        {
            id: "PJK_JR09",
            question: "Dalam bola tampar, kemahiran menyambut dan menahan bola pukulan kuat menggunakan kedua-dua belah lengan yang dirapatkan dipanggil ___.",
            options: ["Smesh", "Hadangan", "Sangga (Digging)", "Servis Atas"],
            answer: 2
        },
        {
            id: "PJK_JR10",
            question: "Kemahiran menghantar bola tampar melambung tinggi ke udara secara lembut menggunakan hujung jari tangan agar rakan mudah melakukan serangan dipanggil ___ (Setting).",
            answer: "mengumpan"
        },
        {
            id: "PJK_JR11",
            question: "Pemain bola tampar yang bertindak melompat ke udara di hadapan net dan memukul bola dengan sangat kuat (perejam) dipanggil ___.",
            options: ["Libero", "Spiker", "Setter", "Blocker"],
            answer: 1
        },
        {
            id: "PJK_JR12",
            question: "Tindakan melompat berhampiran jaring dengan mengangkat kedua-dua tangan ke atas untuk menyekat bola rejaman lawan daripada melepasi net dipanggil ___ (Blocking).",
            answer: "hadangan"
        },
        {
            id: "PJK_JR13",
            question: "Dalam sukan sepak takraw, pemain posisi tengah yang ditugaskan melakukan sepak mula (servis) dipanggil ___.",
            options: ["Apit Kanan", "Apit Kiri", "Tekong", "Libero"],
            answer: 2
        },
        {
            id: "PJK_JR14",
            question: "Dua orang pemain lagi yang berada berhampiran jaring (kiri dan kanan) dalam regu sepak takraw dipanggil pemain ___.",
            answer: "apit"
        },
        {
            id: "PJK_JR15",
            question: "Kemahiran menimang atau mengawal bola sepak takraw yang dihantar menggunakan bahagian dalam kaki (tapak kaki) dipanggil ___.",
            options: ["Sepakan Badek", "Sepakan Sila", "Guntingan", "Hadangan"],
            answer: 1
        },
        {
            id: "PJK_JR16",
            question: "Dalam bola tampar, sebuah pasukan hanya dibenarkan membuat maksimum ___ kali sentuhan bola berturut-turut sebelum bola mesti dipulangkan ke gelanggang lawan.",
            answer: "tiga"
        },
        {
            id: "PJK_JR17",
            question: "Semasa perlawanan bola tampar dan badminton sedang berlangsung, adakah mana-mana anggota tubuh pemain dibenarkan tersentuh pada net (jaring)?",
            options: ["Ya, asalkan bola tidak jatuh", "Tidak dibenarkan sama sekali", "Boleh, jika tangan panjang", "Boleh pada awal perlawanan"],
            answer: 1
        },
        {
            id: "PJK_JR18",
            question: "Jika bulu tangkis dipukul dan mendarat betul-betul jatuh di atas garisan putih tepi gelanggang badminton, ia dikira bulu tangkis ___ (masuk/keluar).",
            answer: "masuk"
        },
        {
            id: "PJK_JR19",
            question: "Cara paling asas dan biasa diajarkan bagi memegang raket badminton diumpamakan seperti cara kita ___.",
            options: ["Memegang cawan", "Memeluk bantal", "Berjabat tangan", "Memerah kain"],
            answer: 2
        },
        {
            id: "PJK_JR20",
            question: "Alat pemukul kayu bersaiz kecil dan dilapik getah yang digunakan di dalam sukan ping pong dipanggil ___.",
            answer: "bet"
        },
        {
            id: "PJK_JR21",
            question: "Pukulan defensif badminton yang melambungkan bulu tangkis tinggi jauh ke garisan belakang gelanggang lawan dipanggil pukulan ___.",
            options: ["Smesh", "Pancung", "Lob (Clear)", "Servis Pendek"],
            answer: 2
        },
        {
            id: "PJK_JR22",
            question: "Sistem pemarkahan antarabangsa (badminton & ping pong) di mana setiap kali bulu tangkis/bola mati satu pasukan akan mendapat markah dinamakan sistem ___ mata.",
            answer: "rali"
        },
        {
            id: "PJK_JR23",
            question: "Untuk menipu pihak lawan dengan putaran bola laju dalam ping pong, pemain sering menggunakan pukulan 'top___'.",
            options: ["Spin", "Jump", "Smash", "Block"],
            answer: 0
        },
        {
            id: "PJK_JR24",
            question: "Pergerakan tangkas menukar-nukar kedudukan kaki (depan, belakang, sisi) di dalam gelanggang bulu tangkis dipanggil kerja kaki atau ___ (Footwork).",
            answer: "langkah"
        },
        {
            id: "PJK_JR25",
            question: "Semasa permainan ping pong, pemain yang mahu melakukan pukulan servis diwajibkan melambung bola kecil tersebut lurus ke atas dari telapak tangannya yang ___.",
            options: ["Digenggam", "Tertutup separuh", "Memegang bet", "Terbuka rata"],
            answer: 3
        },
        {
            id: "PJK_JR26",
            question: "Servis lambung tinggi (high serve) dalam badminton adalah tektik untuk menolak posisi pihak lawan berlari menuju ke bahagian ___ gelanggang.",
            answer: "belakang"
        },
        {
            id: "PJK_JR27",
            question: "Pegangan bet ping pong yang merapatkan ibu jari dan jari telunjuk seperti posisi menulis dipanggil pegangan ___.",
            options: ["Shakehand", "Penhold", "Backhand Grip", "Forehand Grip"],
            answer: 1
        },
        {
            id: "PJK_JR28",
            question: "Pukulan gaya 'backhand' sangat berguna apabila bulu tangkis jatuh secara pantas menyilang ke arah bertentangan dengan tangan yang ___.",
            answer: "dominan"
        },
        {
            id: "PJK_JR29",
            question: "Dalam mana-mana sukan berjaring, pukulan servis yang tidak melepasi had jaring akan diisytiharkan ___ dan mata diberikan kepada lawan.",
            options: ["Seri", "Batal (Fault)", "Jaring Terputus", "Diteruskan"],
            answer: 1
        },
        {
            id: "PJK_JR30",
            question: "Menurut undang-undang antarabangsa ping pong, bola servis wajib dilambung lurus sekurang-kurangnya sejauh 16 ___ (cm) ke udara.",
            answer: "sentimeter"
        },
        {
            id: "PJK_JR31",
            question: "Permainan Sepak Takraw secara rasmi mempertandingkan format berpasukan di mana bilangan pemain bagi setiap regu yang masuk bermain ialah seramai ___.",
            options: ["Dua orang", "Tiga orang", "Empat orang", "Lima orang"],
            answer: 1
        },
        {
            id: "PJK_JR32",
            question: "Pemain penyambut servis khas yang digelar 'Libero' dalam bola tampar diwajibkan menyarungkan jersi yang berlainan ___ daripada pasukan rakan-rakannya.",
            answer: "warna"
        },
        {
            id: "PJK_JR33",
            question: "Keberkesanan kuasa pukulan rejam atau 'smash' dalam bola tampar paling tajam apabila dilakukan ketika atlet berada pada ___ lompatannya di udara.",
            options: ["Awal mula", "Pendaratan", "Puncak tertinggi", "Menjunam"],
            answer: 2
        },
        {
            id: "PJK_JR34",
            question: "Alat pengadang melintang iaitu jaring di tengah-tengah meja ping pong menanda dan membahagikan ukuran kawasan meja tersebut kepada ___ bahagian bersaiz sama.",
            answer: "dua"
        },
        {
            id: "PJK_JR35",
            question: "Sebutkan pukulan terbaik untuk menyelamatkan hantaran bola takraw yang jatuh dengan laju dan tepat tinggi di udara berhampiran badan atlet.",
            options: ["Sangga dengan paha", "Sepakan kura kaki", "Tandukan dahi", "Blok dengan dada"],
            answer: 2
        },
        {
            id: "PJK_JR36",
            question: "Tekong sepak takraw hanya dibenarkan melepaskan sepakan servis dari kedudukannya di dalam kawasan berpola ___ tengah yang dilukis di gelanggang.",
            answer: "bulatan"
        },
        {
            id: "PJK_JR37",
            question: "Pukulan dorongan mendatar ('Drive') secara laju menyusur jaring dalam badminton amat berkesan untuk taktik ___ dan memberikan kesukaran lawan.",
            options: ["Rehat sebentar", "Mempercepatkan tempoh rali", "Melambungkan rali", "Sukan persahabatan"],
            answer: 1
        },
        {
            id: "PJK_JR38",
            question: "Mana-mana pihak yang berjaya mendahului dan mengumpul kutipan kemenangan sehingga mata ke-___ terlebih dahulu diisytiharkan sebagai pemenang set tersebut.",
            answer: "21"
        },
        {
            id: "PJK_JR39",
            question: "Dalam peraturan BWF Badminton, para pemain akan dibenarkan mengambil waktu rehat singkat selama 60 saat pada pertengahan set (interval) apabila pungutan mata telah mencecah angka ___.",
            options: ["11", "15", "18", "20"],
            answer: 0
        },
        {
            id: "PJK_JR40",
            question: "Kesesuaian tapak kasut di gelanggang kayu dan polimer badminton menuntut pemain memakai pelapik bergetah supaya risiko cedera atau ___ dapat dielakkan.",
            answer: "tergelincir"
        },
        {
            id: "PJK_JR41",
            question: "Tindakan kelalaian di mana kelengkapan atau pakaian rasmi atlet secara langsung terkena pada jaring ketika perlawanan masih belum mati dipanggil kesalahan ___.",
            options: ["Out of boundary", "Carry over", "Touch net", "Fault service"],
            answer: 2
        },
        {
            id: "PJK_JR42",
            question: "Bagi setiap fasa serangan berbalas, peraturan bola tampar menetapkan seorang pemain haram memukul bertindih sebanyak ___ kali berturut-turut secara peribadi.",
            answer: "dua"
        },
        {
            id: "PJK_JR43",
            question: "Kejuruteraan geseran pukulan 'Backspin' membolehkan pergerakan bola ping pong berputar pusing secara ___ dan jatuh laju ke meja.",
            options: ["Hadapan lawan", "Bawah dan perlahan pantul", "Pacak siling mendatar", "Berpusing kiri kanan (sidespin)"],
            answer: 1
        },
        {
            id: "PJK_JR44",
            question: "Kerangka kayu pepejal bet ping pong dipertingkatkan keupayaan serangannya dengan melekatkan helaian lapisan berasaskan material ___ pada permukaan.",
            answer: "getah"
        },
        {
            id: "PJK_JR45",
            question: "Tindak-tanduk Tekong takraw yang dengan sengaja melompat atau mengangkat tinggi tapak kaki pivot (paksi sokongan) sewaktu melakukan rejaman servis diisytiharkan sebagai ___.",
            options: ["Sah permainan", "Berjaya", "Batal sepakan mula", "Tiada apa kesan"],
            answer: 2
        },
        {
            id: "PJK_JR46",
            question: "Istilah universal 'Rali' ('Rally') diguna pakai untuk mendefinisikan waktu permainan bertukar-tukar ___ secara aktif antara lawan sebelum berhentinya bola jatuh.",
            answer: "pukulan"
        },
        {
            id: "PJK_JR47",
            question: "Kebuntuan persaingan sengit 'Deuce' tercetus di hujung permainan akibat kedua-dua pesaing telah terikat mata dan menemui jalan seri seri pada kutipan ___.",
            options: ["11-11", "20-20", "21-21", "25-25"],
            answer: 1
        },
        {
            id: "PJK_JR48",
            question: "Dalam proses menamatkan konflik ketegangan 'Deuce', sistem markah moden mensyaratkan wajib ada penciptaan jurang kelebihan sejumlah ___ mata kemenangan tambahan.",
            answer: "dua"
        },
        {
            id: "PJK_JR49",
            question: "Varian Sukan Bola Tampar Duduk (Sitting Volleyball) diklasifikasikan sebagai sukan kategori ___ peringkat elit dunia khusus membabitkan warga atlet fizikal terhad (OKU).",
            options: ["Komuniti Remaja", "Kanak Kanak", "Sukan Kebangsaan Biasa", "Sukan Paralimpik"],
            answer: 3
        },
        {
            id: "PJK_JR50",
            question: "Semangat perlawanan berlandaskan rasa saling memaafkan dan menjauhi permusuhan yang dizahirkan menerusi perbuatan salaman jabat tangan dipanggil etika ___ mulia.",
            answer: "kesukanan"
        }
    ],

    "permainan_kategori_padang": [
        {
            id: "PJK_PD01",
            question: "Kategori sukan di mana pasukan memukul bergilir-gilir cuba mengumpul mata melalui larian base selepas memukul bola dipanggil kategori ___.",
            options: ["Jaring", "Padang", "Serangan", "Balapan"],
            answer: 1
        },
        {
            id: "PJK_PD02",
            question: "Sebutkan satu sukan padang terkenal yang menyerupai 'baseball' tetapi menggunakan saiz bola balingan yang sedikit lebih besar dan lembut.",
            answer: "sofbol"
        },
        {
            id: "PJK_PD03",
            question: "Dalam sukan kriket, pemain dari pasukan bertahan yang bertugas berlari jauh ke arah kayu wiket lalu membaling keras bola kayu kepada pemukul dipanggil ___ (Bowler).",
            options: ["Penjaga pangkalan", "Penangkap", "Pemukul", "Pembaling"],
            answer: 3
        },
        {
            id: "PJK_PD04",
            question: "Dalam sofbol, pemain tengah yang bertugas membaling laju bola lurus kepada pemukul di tempat Home Plate dipanggil ___ (Pitcher).",
            answer: "pitcher"
        },
        {
            id: "PJK_PD05",
            question: "Pemain sofbol pasukan bertahan yang lengkap memakai topeng sangkar besi dan mencangkung duduk di belakang pemukul dipanggil ___ (Catcher).",
            options: ["Penjaga garisan", "Penjaga Base Pertama", "Penangkap", "Pengadil"],
            answer: 2
        },
        {
            id: "PJK_PD06",
            question: "Sarung tangan besar yang tebal dan mempunyai kocek penyerap hentakan yang disarungkan pada tangan pemain sofbol (catcher & fielder) dipanggil sarung ___ (Mit).",
            answer: "tangan"
        },
        {
            id: "PJK_PD07",
            question: "Menurut undang-undang, balingan bola daripada seorang 'Pitcher' sofbol hendaklah dilakukan menggunakan balingan ___.",
            options: ["Bawah bahu lengan lurus", "Dari sisi badan", "Di atas kepala", "Dua tangan dari dada"],
            answer: 0
        },
        {
            id: "PJK_PD08",
            question: "Setelah pemain sofbol selesai memukul bola, dia hendaklah dengan pantas melepaskan kayu pemukul lalu memulakan ___ menuju ke tapak base.",
            answer: "larian"
        },
        {
            id: "PJK_PD09",
            question: "Berapakah jumlah pangkalan (base) yang diatur berbentuk intan (diamond) dalam sebuah padang sofbol standard termasuk 'Home Plate'?",
            options: ["Tiga base", "Empat base", "Lima base", "Enam base"],
            answer: 1
        },
        {
            id: "PJK_PD10",
            question: "Sekiranya pemain pemukul sofbol berjaya berlari membuat satu pusingan melepasi kesemua Base 1, 2, 3 dan memijak Home Plate semula, pasukannya akan beroleh 1 ___ (Run).",
            answer: "mata"
        },
        {
            id: "PJK_PD11",
            question: "Pemain padang yang bertaburan di padang rumput bertugas untuk mengejar bola yang dipukul jauh dinamakan pemain ___ (Fielder).",
            options: ["Pangkalan", "Pemukul", "Dalaman", "Luar"],
            answer: 3
        },
        {
            id: "PJK_PD12",
            question: "Sekiranya pemukul sofbol memukul bola tinggi melambung di udara, dan bola itu berjaya disauk masuk terus ke dalam sarung tangan pemain Fielder sebelum mendarat ke tanah, pemukul itu dikira telah ___ (Fly out).",
            answer: "mati"
        },
        {
            id: "PJK_PD13",
            question: "Tindakan pasukan bertahan cuba menyentuhkan bola yang dipegang mereka pada badan pelari yang belum sampai ke pangkalan dipanggil men___ (Tag).",
            options: ["Tampar", "Genggam", "Peluk", "Sentuh"],
            answer: 3
        },
        {
            id: "PJK_PD14",
            question: "Dalam sukan kriket yang sebenar, sekiranya bola dipukul pemukul bergolek deras melepasi tali sempadan padang (boundary), pemukul akan dianugerahkan ___ mata.",
            answer: "empat"
        },
        {
            id: "PJK_PD15",
            question: "Dalam sofbol, jika Pitcher membuat balingan ke arah pemukul, tetapi pemukul gagal menghayunkan kayunya, dan bola masuk dengan baik di dalam zon dada ke lututnya, balingan itu dikira sebagai 1 ___.",
            options: ["Strike", "Ball", "Foul", "Run"],
            answer: 0
        },
        {
            id: "PJK_PD16",
            question: "Tiga keping bongkah kayu pacak dan dua keping kecil melintang (bail) di atasnya yang dijaga oleh pemukul kriket di tengah padang dipanggil ___.",
            answer: "wiket"
        },
        {
            id: "PJK_PD17",
            question: "Adakah topi keledar keras bercermin tebal, sarung tangan pemukul dan pad penutup kaki (leg pad) WAJIB dipakai oleh pemukul bola sukan kriket?",
            options: ["Hanya jika padang basah", "Hanya untuk budak kecil", "Ya, diwajibkan", "Tidak, kriket sukan selamat"],
            answer: 2
        },
        {
            id: "PJK_PD18",
            question: "Teknik agresif atlet sofbol di mana mereka tiba-tiba merebahkan dan meluncurkan badan ke atas debu tanah semata-mata untuk cepat sampai memijak base dipanggil ___ (Sliding).",
            answer: "gelongsor"
        },
        {
            id: "PJK_PD19",
            question: "Sistem pusingan pertukaran peranan (siapa memukul, siapa masuk menjaga padang) selepas selesai pasukan tersebut mati tiga orang dalam kriket & sofbol dipanggil ___ (Innings).",
            options: ["Wisel", "Ining (Giliran)", "Rali", "Rehat"],
            answer: 1
        },
        {
            id: "PJK_PD20",
            question: "Orang dewasa berbaju gelap yang berdiri di belakang Catcher sofbol bertugas menjadi hakim atau ___ perlawanan (Umpire).",
            answer: "pengadil"
        },
        {
            id: "PJK_PD21",
            question: "Taktik memukul bola melayang merentasi seluruh posisi pemain padang memerlukan gabungan kelajuan ayunan lengan yang padu serta pemindahan berat ___ secara dinamik.",
            options: ["Baju dan seluar", "Berat badan keseluruhan", "Kasut bertumit", "Warna dan saiz bola"],
            answer: 1
        },
        {
            id: "PJK_PD22",
            question: "Sesudah lakuan memukul bola, pemain dilarang membaling alat kayu pemukul sesuka hati di sekeliling pangkalan. Alat ini wajib dijatuhkan perlahan-lahan dalam keadaan yang ___.",
            answer: "selamat"
        },
        {
            id: "PJK_PD23",
            question: "Sebelum pelancaran tenaga balingan bagi melepaskan bola ke arah pemukul, aksi pelempar Pitcher selalunya didahului ayunan tangan berputar ibarat gaya kincir ___.",
            options: ["Air", "Angin (Windmill)", "Air terjun", "Tornado"],
            answer: 1
        },
        {
            id: "PJK_PD24",
            question: "Serangan pukulan pendek serapan atau tampanan pepat (bunt) dipraktikkan oleh pemukul yang licik demi mengelirukan posisi penahan pasukan ___ agar tidak bersedia.",
            answer: "bertahan"
        },
        {
            id: "PJK_PD25",
            question: "Pukulan tinggi kriket yang terus merentasi garisan jauh lingkungan batas sempadan luar tanpa memantul ke bawah tanah terlebih dahulu menjana perolehan ___.",
            options: ["1 larian mata", "4 mata", "6 mata / Sixer", "Sifar (0) Mata"],
            answer: 2
        },
        {
            id: "PJK_PD26",
            question: "Tembakan bola keras Bowler kriket melepasi bahagian paras atas kepala pemukul dikategorikan sebagai balingan luar kawasan dan didenda hukuman ___ (No ball/Wide).",
            answer: "batal"
        },
        {
            id: "PJK_PD27",
            question: "Posisi fizikal Fielder semasa hendak menyambut lontaran bola parabola (Fly Ball) dengan kemas di padang mewajibkan paras sarung tangan mereka perlu berada sekurang-kurangnya setinggi atas ___.",
            options: ["Peha", "Tulang pinggang", "Ubun-ubun / Aras Kepala", "Belakang tapak kasut"],
            answer: 2
        },
        {
            id: "PJK_PD28",
            question: "Gaya renggangan jari tangan maksimum dan tegang di bahagian dalam kain sarung (glove) berfungsi untuk membuka rekaan poket buatan menjadi sebuah ___ pelindung yang lebih besar.",
            answer: "poket"
        },
        {
            id: "PJK_PD29",
            question: "Kayu alat pukulan bagi permainan ringkas Rounders sekolah rendah berbentuk bat ___ lurus dan bukannya melengkung mekar.",
            options: ["Sisi petak 4 persegi", "Bongkah Silinder pendek", "Papan Kayu Rata", "Segi Tiga Serong"],
            answer: 1
        },
        {
            id: "PJK_PD30",
            question: "Peraturan penetapan ukuran meter jarak lari di lapangan di antara pangkalan (base to base) berbeza-beza kerana padang sukan harus disesuaikan mengikut peringkat ___ serta saiz fizikal kelompok pemain berbeza.",
            answer: "umur"
        },
        {
            id: "PJK_PD31",
            question: "Lontaran sisi pantas ke bawah meleret berhampiran tanah sesuai digunakan pasukan padang bagi penghantaran umpanan secara ___ antara mereka.",
            options: ["Pukulan panjang melambung", "Tepat dan meluncur pantas dekat", "Tidak stabil goyang", "Jauh beralun"],
            answer: 1
        },
        {
            id: "PJK_PD32",
            question: "Syarat utama penganjuran pelontaran Bowler kriket sah apabila tenaga balingan bola dihentak supaya sentuhan tanah ___ kali wujud mendahului pemukul sasaran kayu wiket.",
            answer: "satu"
        },
        {
            id: "PJK_PD33",
            question: "Pengumpulan jumlah merit kemenangan perlawanan bersandarkan larian berulang-alik dari sisi tiang wiket pemukul ke wiket penjaga seberang (satu larian dikira 1 run). Lakuan ini dipanggil membuat ___.",
            options: ["Lemparan Batal", "Melompat Tali", "Mata Larian (Scoring Runs)", "Hentian Set"],
            answer: 2
        },
        {
            id: "PJK_PD34",
            question: "Kelengkapan statik perlawanan bertindak sebagai sasaran pusat tembakan di padang kriket ialah binaan blok kayu tiang tiga palang terpasak dikenali nama rasmi sebagai struktur ___.",
            answer: "wiket"
        },
        {
            id: "PJK_PD35",
            question: "Ganjaran pukulan sempurna yang merejam terbang jauh meninggalkan garisan padang membolehkan sang pemukul berlari lenggang di segenap base tanpa diganggu. Pukulan ikonik penamat ini termasyhur dengan sebutan ___.",
            options: ["Fly Bunt", "Base Walk", "Homerun (Home Run)", "Foul Strike"],
            answer: 2
        },
        {
            id: "PJK_PD36",
            question: "Bagi memastikan sasaran menangkap umpanan yang sempurna berdekatan zon gawang memukul, pemain pasukan pertahanan khas (Catcher) diarahkan berjaga tetap mencangkung bersembunyi persis di belakang badan si ___.",
            answer: "pemukul"
        },
        {
            id: "PJK_PD37",
            question: "Permainan antarabangsa elit Kriket ini sangat popular di liga Asia Selatan tetapi akar penubuhan tamadun rekaan sistem sukannya mula wujud beribu tahun dahulu berasal jauh dari geografi negara ___.",
            options: ["England / Great Britain", "Amerika Syarikat (USA)", "Persekutuan Rusia", "Republik China"],
            answer: 0
        },
        {
            id: "PJK_PD38",
            question: "Corak mekanik pergerakan pelari untuk berhenti tergempar ke atas petak 'safe base' sambil kaki menahan seretan momentum kasut terus ke pangkalan padang secara memanjang dipanggil gelongsoran ___.",
            answer: "lurus"
        },
        {
            id: "PJK_PD39",
            question: "Mana-mana lontaran sofbol yang cacat dan terbang melencong jauh terkeluar luar ruang kotak pergerakan pukul tanpa berjaya digapai, hakim pasti meniup wisel isytihar hukuman balingan sifar atau ___.",
            options: ["Dead ball (Mati)", "Batal (Ball Call)", "Strike Sempurna", "Safe base"],
            answer: 1
        },
        {
            id: "PJK_PD40",
            question: "Apabila pukulan berjaya dikenakan pada objek tetapi hala arah kelajuan bola jauh tercampak melepasi garis lingkungan sisi kiri luar bentuk V padang, ianya tidak sah lari sebaliknya batal atau 'bola ___'.",
            answer: "foul"
        },
        {
            id: "PJK_PD41",
            question: "Manuver agresif pelari pangkalan mendadak menukar lokasi sebelum tamatnya detik bola dilepaskan sepenuhnya keluar dari genggaman jemari pembaling demi merampas masa digelar taktikal mencuri ___.",
            options: ["Masa Umpire", "Bola Lawan", "Tapak Curi (Steal Base)", "Kesalahan Merampas"],
            answer: 2
        },
        {
            id: "PJK_PD42",
            question: "Kerja berpasukan merangkumi kewaspadaan Fielder pangkalan menadah lontaran tepat demi tepat memintas nyawa lawan sangat mementingkan hantaran laju penjaga jarak belakang iaitu padang ___.",
            answer: "luar"
        },
        {
            id: "PJK_PD43",
            question: "Beban ralat dan kepincangan tembakan si Pelempar (Pitcher) yang menyebabkan bola terpelanting ganas melanggar anatomi fizikal pemukul membolehkan ganjaran tebus rugi si pemukul berjalan menuju tapak Base ___ secara sukarela.",
            options: ["Keempat Belakang", "Disingkir Keluar Permainan", "Pertama Secara Percuma (Walk / HBP)", "Lari Semua Base Home"],
            answer: 2
        },
        {
            id: "PJK_PD44",
            question: "Rombongan taktik, komando strategi kumpulan, susun atur pemain di pelusuk posisi dan kata semangat perangsang di padang permainan banyak dipertanggungjawabkan kepada si pemakai pengenalan tofi lengan yang bergelar ___.",
            answer: "kapten"
        },
        {
            id: "PJK_PD45",
            question: "Sebiji peluru sukan besbol / sofbol teras bulatannya ditenun mampat oleh ketulan pepejal ringan dari sarang balak atau lapisan ___ sambil ketat dihias balutan benang gumpal merah berputar.",
            options: ["Spons Plastik", "Kerangka Kaca", "Gabus Mampat Berbalut", "Simen Tebal Berat"],
            answer: 2
        },
        {
            id: "PJK_PD46",
            question: "Kecuaian larian pelari laluan tapak di luar jangkaan di mana tubuh fizikal sang pelari tanpa niat berlanggar meredah pukulan bola pantas rakan pasukannya sendiri yang sedang aktif bergolek di zon balapan automatik diisytiharkan ___ terkeluar.",
            answer: "mati"
        },
        {
            id: "PJK_PD47",
            question: "Walau rupa tapak alas (base bag) 1, 2, 3 dirajut menggunakan bentuk potongan kanvas petak segi empat, sebaliknya kawasan pelindung tempat pijakan pemukul 'Home Plate' dibina tebal dengan struktur bersisi geografi sudut pentagon bernilai ___ bucu.",
            options: ["Empat Sisi", "Lima Bucu", "Tiga Tepat", "Bulatan Lingkaran"],
            answer: 1
        },
        {
            id: "PJK_PD48",
            question: "Demi mencedok gumpalan bola leret padang secara kilat meleret laju menuju tepat ke bumi, lutut pemain harus dilentur membongkok bagi objektif penyesuaian penurunan titik kestabilan tubuh ke bumi, iaitu merendahkan pusat ___ kinetiknya.",
            answer: "graviti"
        },
        {
            id: "PJK_PD49",
            question: "Pemantauan sukan sofbol seliaan badan kebangsaan dibawahi entiti 'SAM', sementara legasi tradisi kriket Malaysia secara tersusun digerakkan pengurusan tadbir urus jaya menerusi Persatuan ___ Melayu Malaysia.",
            options: ["Kriket", "Ragbi Sentuh Terbuka", "Olimpik Negara Asia", "Hoki Belia Tertutup"],
            answer: 0
        },
        {
            id: "PJK_PD50",
            question: "Sorakan kod strategik pertahanan formasi gempur lapangan padang sofbol yang besar dan riuh rendah sangat berpusat kepada pemantauan ketangkasan visual, laras bunyi lantang serta isyarat komunikasi jalinan kolaborasi ___.",
            answer: "suara"
        }
    ],
"komponen_kecergasan": [
        {
            id: "PJK_KK01",
            question: "Keupayaan tubuh badan melakukan aktiviti fizikal harian dengan cekap tanpa berasa letih keterlaluan dipanggil ___ fizikal.",
            answer: "kecergasan"
        },
        {
            id: "PJK_KK02",
            question: "Keupayaan jantung, paru-paru dan sistem peredaran darah membekalkan oksigen ke otot secara berterusan dipanggil daya tahan ___.",
            answer: "kardiovaskular"
        },
        {
            id: "PJK_KK03",
            question: "Sebutkan satu contoh senaman aerobik yang sangat berkesan membina daya tahan kardiovaskular selain berenang.",
            answer: "berjoging"
        },
        {
            id: "PJK_KK04",
            question: "Keupayaan otot melakukan kerja atau penguncupan berulang-ulang kali dalam satu jangka masa yang panjang dipanggil daya tahan ___.",
            answer: "otot"
        },
        {
            id: "PJK_KK05",
            question: "Aktiviti ringkuk tubi separa (bangkit tubi) yang dilakukan secara konsisten selama satu minit bertujuan menguji daya tahan otot bahagian ___.",
            answer: "perut"
        },
        {
            id: "PJK_KK06",
            question: "Keupayaan sesuatu otot menghasilkan daya maksimum untuk mengatasi rintangan dalam satu usaha tunggal dipanggil ___ otot.",
            answer: "kekuatan"
        },
        {
            id: "PJK_KK07",
            question: "Latihan menolak dinding atau mengangkat bebanan yang maksimum melatih komponen fizikal ___ otot.",
            answer: "kekuatan"
        },
        {
            id: "PJK_KK08",
            question: "Kebolehan regangan sendi anggota badan bergerak bebas dalam julat pergerakan yang maksimum dipanggil ___.",
            answer: "kelenturan"
        },
        {
            id: "PJK_KK09",
            question: "Apakah istilah pinjaman bahasa Inggeris (sains sukan) bagi komponen kelenturan tubuh badan?",
            answer: "fleksibiliti"
        },
        {
            id: "PJK_KK10",
            question: "Ujian SEGAK 'jangkauan melunjur' yang dilakukan di atas lantai bertujuan menguji tahap kelenturan bahagian bawah ___ dan otot belakang paha (hamstring).",
            answer: "belakang"
        },
        {
            id: "PJK_KK11",
            question: "Kadar nisbah perbandingan antara peratusan tisu lemak berbanding dengan tisu tanpa lemak (otot/tulang) dalam badan dipanggil ___ badan.",
            answer: "komposisi"
        },
        {
            id: "PJK_KK12",
            question: "Dalam ujian SEGAK, alat pengukur berat penimbang dan pita pengukur tinggi digunakan untuk menilai profil ___ badan murid.",
            answer: "komposisi"
        },
        {
            id: "PJK_KK13",
            question: "Kandungan lemak badan yang terlalu berlebihan akibat pemakanan tidak sihat boleh menyebabkan seseorang menghadapi masalah penyakit kegemukan yang kronik iaitu ___.",
            answer: "obesiti"
        },
        {
            id: "PJK_KK14",
            question: "Kaedah formula matematik bagi mengukur status berat badan normal berbanding ketinggian seseorang dipanggil rumus ___ (singkatan).",
            answer: "bmi"
        },
        {
            id: "PJK_KK15",
            question: "Apakah ejaan penuh bagi singkatan formula kesihatan 'BMI' dalam bahasa Inggeris?",
            answer: "body mass index"
        },
        {
            id: "PJK_KK16",
            question: "Apakah terjemahan bahasa Melayu bagi perkataan 'Body Mass Index' yang digunakan dalam buku teks?",
            answer: "indeks jisim badan"
        },
        {
            id: "PJK_KK17",
            question: "Senaman regangan otot secara statik dan dinamik wajib dilakukan sebelum bersukan untuk meningkatkan tahap ___ sendi dan mengelakkan kecederaan.",
            answer: "kelenturan"
        },
        {
            id: "PJK_KK18",
            question: "Senaman berterusan yang memerlukan penggunaan oksigen yang tinggi di dalam badan dipanggil senaman ___.",
            answer: "aerobik"
        },
        {
            id: "PJK_KK19",
            question: "Prinsip latihan kecergasan yang paling penting dalam Sains Sukan dipanggil prinsip F.I.T.T. Huruf 'F' merujuk kepada 'Frequency' atau ___ senaman.",
            answer: "kekerapan"
        },
        {
            id: "PJK_KK20",
            question: "Prinsip F.I.T.T: Huruf 'I' merujuk kepada 'Intensity' iaitu tahap ___ sesuatu bebanan senaman yang dilakukan.",
            answer: "intensiti"
        },
        {
            id: "PJK_KK21",
            question: "Prinsip F.I.T.T: Huruf 'T' yang pertama merujuk kepada 'Time' iaitu ___ atau tempoh masa senaman dijalankan.",
            answer: "masa"
        },
        {
            id: "PJK_KK22",
            question: "Prinsip F.I.T.T: Huruf 'T' yang kedua merujuk kepada 'Type' iaitu ___ aktiviti senaman yang dipilih (contoh: aerobik, anaerobik).",
            answer: "jenis"
        },
        {
            id: "PJK_KK23",
            question: "Aktiviti tekan tubi (push-up) ubah suai bagi murid perempuan di mana lutut menyentuh lantai membina kekuatan otot di bahagian ___.",
            answer: "tangan"
        },
        {
            id: "PJK_KK24",
            question: "Aktiviti menyejukkan badan (cool down) amat penting selepas bersukan untuk menurunkan kadar denyutan ___ kembali ke tahap normal.",
            answer: "jantung"
        },
        {
            id: "PJK_KK25",
            question: "Penumpukan asid laktik di dalam otot selepas bersukan yang kuat akan menyebabkan kita berasa sakit dan kejang otot. Ia boleh dikurangkan dengan aktiviti ___ badan.",
            answer: "menyejukkan"
        },
        {
            id: "PJK_KK26",
            question: "Mengamalkan gaya hidup aktif bersukan setiap hari dapat mengurangkan risiko mendapat penyakit kronik pembunuh utama seperti serangan ___.",
            answer: "jantung"
        },
        {
            id: "PJK_KK27",
            question: "Murid prasekolah dan sekolah rendah dinasihatkan mendapatkan sekurang-kurangnya 8 hingga 10 jam ___ yang berkualiti untuk pemulihan kecergasan otot.",
            answer: "tidur"
        },
        {
            id: "PJK_KK28",
            question: "Individu yang mempunyai kekurangan berat badan lampau (underweight) menunjukkan profil komposisi badannya adalah tidak ___.",
            answer: "seimbang"
        },
        {
            id: "PJK_KK29",
            question: "Ujian SEGAK: Ujian 'Naik Turun Bangku' setinggi 30.5 cm selama 3 minit mengikut detik metronom bertujuan menilai tahap kecergasan ___.",
            answer: "kardiovaskular"
        },
        {
            id: "PJK_KK30",
            question: "Aktiviti menahan berat badan bergantung di palang memfokuskan kepada peningkatan kekuatan genggaman ___ tangan.",
            answer: "jari"
        },
        {
            id: "PJK_KK31",
            question: "Kadar tenaga yang dibakar oleh otot sewaktu bersenam merujuk kepada peningkatan proses ___ di dalam sel tubuh.",
            answer: "metabolisme"
        },
        {
            id: "PJK_KK32",
            question: "Kekurangan pengambilan air kosong yang mencukupi semasa melakukan larian maraton boleh menyebabkan tubuh mengalami kekurangan air yang kritikal atau ___.",
            answer: "dehidrasi"
        },
        {
            id: "PJK_KK33",
            question: "Kekurangan kelenturan boleh menyebabkan masalah tisu otot terkoyak atau ___ sewaktu pergerakan yang mengejut.",
            answer: "kejang"
        },
        {
            id: "PJK_KK34",
            question: "Senaman 'Plank' statik di mana badan meniarap dan ditahan secara mendatar melatih kekuatan isometrik pada otot ___ (core muscles).",
            answer: "teras"
        },
        {
            id: "PJK_KK35",
            question: "Kecergasan fizikal dibahagikan kepada dua aspek utama: iaitu kecergasan berasaskan kesihatan dan kecergasan berasaskan perlakuan ___.",
            answer: "motor"
        },
        {
            id: "PJK_KK36",
            question: "Keupayaan seseorang untuk menukar arah pergerakan badannya ke kiri dan kanan secara mengejut dengan tangkas dinamakan ___.",
            answer: "ketangkasan"
        },
        {
            id: "PJK_KK37",
            question: "Aktiviti larian lari ulang-alik (shuttle run) 10 meter yang dilakukan semasa Larian Cergas menguji kemahiran motor ___.",
            answer: "ketangkasan"
        },
        {
            id: "PJK_KK38",
            question: "Kapasiti badan untuk mengekalkan postur yang seimbang sewaktu berlari di atas laluan sempit dipengaruhi oleh komponen ___.",
            answer: "imbangan"
        },
        {
            id: "PJK_KK39",
            question: "Pendedahan secara berterusan kepada cahaya matahari terik ketika bersukan tanpa perlindungan boleh mengakibatkan pitam haba atau strok ___.",
            answer: "haba"
        },
        {
            id: "PJK_KK40",
            question: "Kadar degupan jantung paling minimum yang diukur sejurus sahaja murid bangun daripada tidur pada waktu pagi dipanggil kadar nadi ___.",
            answer: "rehat"
        },
        {
            id: "PJK_KK41",
            question: "Atlet sukan yang mempunyai stamina tinggi biasanya akan merekodkan bacaan kadar nadi rehat yang lebih ___ berbanding orang biasa.",
            answer: "rendah"
        },
        {
            id: "PJK_KK42",
            question: "Formula untuk mengira Kadar Nadi Maksimum (KNM) ialah: 220 ditolak dengan ___ individu tersebut.",
            answer: "umur"
        },
        {
            id: "PJK_KK43",
            question: "Senaman regangan dinamik seperti lari lutut tinggi sebelum acara sukan membantu otot lebih bersedia dengan melancarkan pengaliran ___.",
            answer: "darah"
        },
        {
            id: "PJK_KK44",
            question: "Pergerakan kordinasi yang tepat dan pantas antara mata dan tangan sangat diperlukan dalam sukan seperti sukan bola ___.",
            answer: "jaring"
        },
        {
            id: "PJK_KK45",
            question: "Latihan rentas desa secara konsisten setiap minggu membantu merangsang paru-paru untuk mengambil masuk lebih banyak ___.",
            answer: "oksigen"
        },
        {
            id: "PJK_KK46",
            question: "Penggunaan jam tangan pintar (smartwatch) ketika berjoging memudahkan kita memantau bacaan kadar denyutan ___.",
            answer: "nadi"
        },
        {
            id: "PJK_KK47",
            question: "Semasa membuat rekod kecergasan, pengukuran 'Berat Badan' hendaklah dicatat dalam unit sukatan ___.",
            answer: "kilogram"
        },
        {
            id: "PJK_KK48",
            question: "Selain komponen kekuatan otot, lari pecut 100 meter sangat menguji komponen masa tindak balas dan ___.",
            answer: "kelajuan"
        },
        {
            id: "PJK_KK49",
            question: "Pergerakan lompat menegak (vertical jump) menguji kebolehan eksplosif otot kaki yang dikenali sebagai komponen ___ otot.",
            answer: "kuasa"
        },
        {
            id: "PJK_KK50",
            question: "Selaras dengan slogan KPM yang terkenal, 'Badan Cergas, Minda ___'.",
            answer: "cerdas"
        }
    ],

    "kekeluargaan_dan_perhubungan": [
        {
            id: "PJK_KP01",
            question: "Batas jarak fizikal atau sentuhan yang boleh diterima secara sosial untuk menjaga kehormatan diri dipanggil ___ sentuhan.",
            answer: "batas"
        },
        {
            id: "PJK_KP02",
            question: "Sentuhan berupa pelukan atau tepukan di bahu oleh ibu bapa yang membuatkan kita berasa tenang dihargai dipanggil sentuhan ___.",
            answer: "selamat"
        },
        {
            id: "PJK_KP03",
            question: "Sebarang jenis sentuhan fizikal pada badan yang menimbulkan rasa tidak selesa, cemas, jijik atau marah dipanggil sentuhan tidak ___.",
            answer: "selamat"
        },
        {
            id: "PJK_KP04",
            question: "Bahagian-bahagian peribadi pada tubuh badan manusia seperti dada, punggung dan alat kelamin diklasifikasikan sebagai kawasan ___ yang haram disentuh.",
            answer: "sulit"
        },
        {
            id: "PJK_KP05",
            question: "Kawasan reproduktif sulit yang terletak di bahagian kelengkang bagi manusia dipanggil organ ___.",
            answer: "genital"
        },
        {
            id: "PJK_KP06",
            question: "Sekiranya rakan sekolah atau orang dewasa secara tiba-tiba mencuba menyentuh bahagian sulit anda, langkah kecemasan pertama ialah bertindak menjerit perkataan ___ dengan kuat.",
            answer: "tidak"
        },
        {
            id: "PJK_KP07",
            question: "Selepas berjaya menyelamatkan dan melarikan diri dari ancaman pencabulan gangguan seksual, mangsa mestilah segera bertindak ___ kejadian tersebut kepada orang dewasa yang dipercayai (ibu bapa/guru).",
            answer: "melapor"
        },
        {
            id: "PJK_KP08",
            question: "Tindakan mendiamkan diri dan merahsiakan insiden jenayah amang seksual walaupun mangsa diugut dengan kekerasan adalah satu tindakan yang sangat ___.",
            answer: "berbahaya"
        },
        {
            id: "PJK_KP09",
            question: "Remaja yang beralih ke alam akil baligh akan mula mengalami perasaan tarikan romantis atau naluri tertarik kepada rakan yang berlainan ___.",
            answer: "jantina"
        },
        {
            id: "PJK_KP10",
            question: "Apabila berinteraksi dan bergaul dengan rakan-rakan berlainan jantina di sekolah, murid diwajibkan memelihara adab dan batas ___ yang tinggi.",
            answer: "sopan"
        },
        {
            id: "PJK_KP11",
            question: "Keluarga yang terdiri daripada komponen ibu, bapa serta anak-anak kandung mereka sahaja di bawah satu bumbung didefinisikan sebagai struktur keluarga ___.",
            answer: "asas"
        },
        {
            id: "PJK_KP12",
            question: "Struktur keluarga yang lebih besar yang mencakupi generasi datuk, nenek, ibu saudara, dan sepupu-sepapat dipanggil struktur keluarga ___.",
            answer: "kembang"
        },
        {
            id: "PJK_KP13",
            question: "Institusi yang diiktiraf dari segi agama dan undang-undang sebagai pengikat sebuah keluarga yang sah dipanggil ikatan ___.",
            answer: "perkahwinan"
        },
        {
            id: "PJK_KP14",
            question: "Sebagai individu yang paling berpengalaman dalam rumah tangga, bapa kebiasaannya bertindak dan memikul tanggungjawab sebagai ___ keluarga.",
            answer: "ketua"
        },
        {
            id: "PJK_KP15",
            question: "Di dalam aspek psikologi, suasana keluarga yang porak-peranda akan menyebabkan perkembangan emosi anak-anak mengalami impak trauma atau tidak ___.",
            answer: "stabil"
        },
        {
            id: "PJK_KP16",
            question: "Sebarang bentuk perbalahan, percanggahan pendapat atau perselisihan faham antara ahli keluarga patut ditangani secara rasional melalui kaedah ___.",
            answer: "berbincang"
        },
        {
            id: "PJK_KP17",
            question: "Menganjurkan sambutan hari kelahiran dan makan malam beramai-ramai adalah salah satu pendekatan efektif untuk memupuk semangat ___ ahli keluarga.",
            answer: "merapatkan"
        },
        {
            id: "PJK_KP18",
            question: "Sebarang insiden di mana seseorang ahli keluarga menggunakan kekerasan fizikal (memukul/menendang) terhadap ahli keluarga yang lain diklasifikasikan sebagai jenayah penderaan ___.",
            answer: "domestik"
        },
        {
            id: "PJK_KP19",
            question: "Tindakan tidak sopan seperti menggunakan barang peribadi kepunyaan abang atau kakak tanpa sebarang keizinan menzahirkan masalah kurangnya ___ ruang privasi.",
            answer: "menghormati"
        },
        {
            id: "PJK_KP20",
            question: "Dalam menyelesaikan konflik, tindakan memaafkan kesilapan dan kekhilafan ibu bapa atau adik-beradik merupakan satu bentuk terapi yang membersihkan rasa sakit ___.",
            answer: "hati"
        },
        {
            id: "PJK_KP21",
            question: "Perkembangan teknologi membolehkan aktiviti interaksi yang positif antara ibu bapa dan anak-anak melalui perkongsian melayari maklumat berfaedah di ___ secara bersama-sama.",
            answer: "internet"
        },
        {
            id: "PJK_KP22",
            question: "Bagi mencegah unsur-unsur negatif dari luar, anak-anak wajib menolak tawaran rakan yang cuba mengajak untuk terlibat dalam penyalahgunaan bahan terlarang seperti dadah dan ___.",
            answer: "alkohol"
        },
        {
            id: "PJK_KP23",
            question: "Tanggungjawab membersihkan imej dan menjaga nama baik keturunan keluarga terletak di bahu ___ ahli keluarga tanpa terkecuali.",
            answer: "setiap"
        },
        {
            id: "PJK_KP24",
            question: "Dalam prinsip etika persahabatan, rakan yang berstatus 'amanah' (trustworthy) sama sekali tidak akan cuba untuk membocorkan ___ rakan baiknya.",
            answer: "rahsia"
        },
        {
            id: "PJK_KP25",
            question: "Tindakan menyebarkan keaiban (fitnah) dan memburuk-burukkan kawan di media sosial terbukti boleh memusnahkan kepercayaan dan ikatan ___.",
            answer: "persahabatan"
        },
        {
            id: "PJK_KP26",
            question: "Sekiranya rakan anda mengalami masalah kemurungan (depresi), tindakan paling baik sebagai sahabat ialah memujuknya berjumpa dengan perkhidmatan unit ___ di sekolah.",
            answer: "kaunseling"
        },
        {
            id: "PJK_KP27",
            question: "Budaya memberi ruang kepada jiran tetangga atau keluarga berkongsi pandangan dan menonton rancangan televisyen bersama-sama menunjukkan ciri permuafakatan dan sifat bertolak ___.",
            answer: "ansur"
        },
        {
            id: "PJK_KP28",
            question: "Memaksa rakan memberikan wang saku, menyentuh secara fizikal atau melontarkan ejekan secara berterusan diklasifikasikan sebagai perbuatan siber atau mental iaitu ___.",
            answer: "buli"
        },
        {
            id: "PJK_KP29",
            question: "Sekiranya anda terlihat rakan sekolah dibuli, pendekatan paling bijak bukanlah dengan masuk campur dan bergaduh, sebaliknya anda perlu bertindak segera melaporkan insiden itu kepada ___.",
            answer: "guru"
        },
        {
            id: "PJK_KP30",
            question: "Remaja yang mengalami sindrom lari dari pangkuan rumah ibu bapa lazimnya berpunca daripada kecacatan atau kegagalan interaksi dan ___ yang sihat di antara ahli keluarga.",
            answer: "komunikasi"
        },
        {
            id: "PJK_KP31",
            question: "Keluarga berperanan sebagai unit mikrosistem, iaitu sebuah institusi ___ dan paling awal dalam merangka acuan sahsiah diri seorang kanak-kanak.",
            answer: "asas"
        },
        {
            id: "PJK_KP32",
            question: "Kemahiran komunikasi bukan lisan seperti tindakan memberikan tumpuan mata penuh serta pendengaran aktif semasa ibu bapa bercakap merupakan bukti konkrit bahawa kita ___ pandangan mereka.",
            answer: "menghormati"
        },
        {
            id: "PJK_KP33",
            question: "Apabila individu mencapai usia akil baligh, perubahan emosi dan hormon akan menyebabkan mereka cenderung untuk terpengaruh dan lebih patuh kepada pendapat rakan ___ berbanding keluarga.",
            answer: "sebaya"
        },
        {
            id: "PJK_KP34",
            question: "Tekanan persekitaran di mana seseorang remaja dipaksa melakukan perkara negatif (merokok/vape) supaya dilihat diterima atau 'cool' dalam sesuatu kumpulan sosial dipanggil tekanan rakan ___.",
            answer: "sebaya"
        },
        {
            id: "PJK_KP35",
            question: "Murid yang mempunyai kemahiran 'asertif' yang baik berkebolehan tinggi untuk menuturkan perkataan ___ secara tegas tanpa rasa bersalah apabila diajak berbuat perkara salah.",
            answer: "tidak"
        },
        {
            id: "PJK_KP36",
            question: "Menerima bimbingan pendidikan kesihatan reproduktif (PEERS) di sekolah mampu melahirkan murid yang cakna akan hak keselamatan tubuh badan demi mencegah ancaman jenayah eksploitasi ___.",
            answer: "seksual"
        },
        {
            id: "PJK_KP37",
            question: "Sesetengah kes pencerobohan ruang fizikal dan sentuhan tidak selamat juga berkemungkinan boleh dilakukan oleh ahli terdekat atau individu yang amat ___ oleh mangsa sendiri.",
            answer: "dikenali"
        },
        {
            id: "PJK_KP38",
            question: "Apabila seseorang menggunakan taktik manipulasi mempamerkan imej alim, memberikan pujian palsu dan hadiah sebagai perangkap mendapatkan mangsa kanak-kanak, perbuatan ini dipanggil jenayah 'child ___'.",
            answer: "grooming"
        },
        {
            id: "PJK_KP39",
            question: "Langkah pencegahan utama apabila dihubungi pemangsa tidak dikenali di platform permainan dalam talian (online game) adalah dengan menggunakan fungsi laporan dan sekat akaun (___ account).",
            answer: "block"
        },
        {
            id: "PJK_KP40",
            question: "Pertolongan cemas kognitif yang membolehkan remaja yang terjebak dalam tekanan mental mengurangkan kesakitan jiwa mereka adalah dengan mendapatkan rawatan terapi ___.",
            answer: "psikologi"
        },
        {
            id: "PJK_KP41",
            question: "Talian kecemasan utama kerajaan Malaysia yang menghubungkan perkhidmatan pihak polis atau ambulans sekiranya wujud kes keganasan rumah tangga adalah talian ___.",
            answer: "999"
        },
        {
            id: "PJK_KP42",
            question: "Talian Kasih kebangsaan khas bebas tol di bawah Jabatan Kebajikan Masyarakat (JKM) bagi mengadu kes pembuangan bayi, amang seksual atau penderaan ialah talian ___.",
            answer: "15999"
        },
        {
            id: "PJK_KP43",
            question: "Memelihara kerukunan ahli masyarakat setempat dapat ditunjukkan melalui budi bahasa memuliakan dan menghormati tetamu yang datang melakukan program ___ rumah terbuka ke rumah kita.",
            answer: "ziarah"
        },
        {
            id: "PJK_KP44",
            question: "Sentiasa memupuk rasa simpati dan tidak mempersendakan kawan-kawan berkeperluan khas (OKU) di dalam kelas adalah tanda pemupukan nilai keprihatinan dan rasa ___.",
            answer: "empati"
        },
        {
            id: "PJK_KP45",
            question: "Adab dan batas sopan berinteraksi dengan berlainan jantina menggariskan panduan supaya pergaulan hanya bertujuan untuk hal-hal pelajaran tanpa adanya niat ___.",
            answer: "serong"
        },
        {
            id: "PJK_KP46",
            question: "Sifat menghargai kebaikan rakan yang meminjamkan barangnya boleh disuarakan menerusi lafaz penghargaan yang paling asas, iaitu ___.",
            answer: "terima kasih"
        },
        {
            id: "PJK_KP47",
            question: "Pengurusan emosi positif dalam perhubungan menuntut setiap pertengkaran wajib diselesaikan dengan saling meminta dan memberi kemaafan demi membersihkan sebarang dendam ___.",
            answer: "kesumat"
        },
        {
            id: "PJK_KP48",
            question: "Penjagaan aspek keselamatan di luar sekolah menasihatkan agar anak-anak wajib memaklumkan terlebih dahulu tentang hala tuju dan masa pulangnya bagi tujuan mendapatkan ___.",
            answer: "keizinan"
        },
        {
            id: "PJK_KP49",
            question: "Sifat toleransi menerima perbezaan amalan budaya rakan berbilang kaum seperti Melayu, Cina dan India menjadi paksi kepada ikatan kekuatan perpaduan masyarakat majmuk di ___.",
            answer: "malaysia"
        },
        {
            id: "PJK_KP50",
            question: "Setiap tubuh badan remaja dikurniakan kehormatan privasi yang mulia. Ia merupakan hak eksklusif mutlak kepunyaan anda seorang, lantaran itu anda berhak dan wajib ___ kehormatannya daripada pencerobohan.",
            answer: "mempertahankan"
        }
    ]
};
