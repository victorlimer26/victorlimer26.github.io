/* ==========================================================
   â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•—  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•—
   â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•—â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•—â•šâ•â•â–ˆâ–ˆâ•”â•â•â•â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•—
   â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•‘
   â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•‘
   â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•”â•â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘
   â•šâ•â•â•â•â•â• â•šâ•â•  â•šâ•â•   â•šâ•â•   â•šâ•â•  â•šâ•â•

   EDIT SEMUA DATA PORTFOLIO ANDA DI FILE INI!
   - Taruh gambar di folder /images/
   - Untuk gambar, cukup tulis: images/nama-file.jpg
   ========================================================== */

const DATA = {

    // ===== INFORMASI UMUM =====
    name: "Ahmad Azhar",
    logo: "Ahmad Azhar",
    tagline: "Full-Stack Developer & UI/UX Designer",
    heroDescription: "Saya membangun solusi digital end-to-end dengan fokus pada fungsionalitas, pengalaman pengguna, dan kualitas implementasi yang berkelanjutan.",

    // Foto profil hero (taruh file di folder images/)
    // Kosongkan "" jika belum ada foto, akan tampil icon default
    heroPhoto: "images/azhar1.webp",

    // ===== HERO STATISTICS =====
    stats: [
        { number: "3+", label: "Tahun Experience" },
        { number: "25+", label: "Project Selesai" },
    ],

    // ===== NAVIGASI (jangan ubah href kecuali ubah id section) =====
    navLinks: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Business", href: "#business" },
        { label: "Skill", href: "#skill" },
        { label: "Project", href: "#project" },
        { label: "Contact", href: "#contact" },
    ],

    // ===== ABOUT =====
    about: {
        // Foto about (taruh file di folder images/)
        photo: "images/azhar1.webp",
        paragraphs: [
            "Halo! Saya Ahmad Azhar, seorang Full-Stack Developer yang berbasis di Indragiri Hilir, Riau, Indonesia. Saya berfokus membangun solusi digital yang fungsional, mudah digunakan, dan berdampak nyata untuk pengguna.",
            "Saya terbiasa mengerjakan pengembangan aplikasi dari awal hingga siap digunakan, mulai dari perencanaan fitur, pembuatan antarmuka, pengembangan backend, integrasi database, hingga proses deployment dan perawatan sistem.",
            "Dalam bekerja, saya mengutamakan kode yang bersih, pengalaman pengguna yang baik, komunikasi yang jelas, serta peningkatan berkelanjutan. Saya terbuka untuk kolaborasi pada berbagai kebutuhan pengembangan web dan produk digital."
        ],
    },

    // ===== BUSINESS / USAHA (Instagram-based) =====
    // Subtitle section business (opsional)
    businessSubtitle: "Usaha-usaha yang saya kelola dan kembangkan di Instagram.",

    businesses: [
        {
            logo: "images/logothejubel.webp",                // taruh: images/logo-brand1.png
            icon: "fa-solid fa-shirt",  // icon fallback jika logo kosong
            title: "THEJUBEL",
            igHandle: "@thejubel_ml",
            instagram: "https://instagram.com/thejubel_ml",
            description: "Spesialis Akun MLBB",
            features: [
                "Jual Akun",
                "Beli Akun"
            ]
        },
        {
            logo: "images/logoinhilcargo.webp",                // taruh: images/logo-brand3.png
            icon: "fa-solid fa-laptop-code",
            title: "INHILCARGO",
            igHandle: "@inhilcargo",
            instagram: "https://instagram.com/inhilcargo",
            description: "Jasa angkutan dan kirim barang daerah tembilahan",
            features: [
                "Angkutan Barang",
                "Armada pickup",
                "Viar",
                "Kirim barang"
            ]
        },
    ],

    // ===== SKILLS =====
    skillCategories: [
        {
            title: "Fullstack",
            icon: "fa-solid fa-layer-group",
            skills: [
                { name: "Laravel", icon: "fa-brands fa-laravel" },
                { name: "Laravel Inertia", icon: "fa-brands fa-laravel" },
                { name: "Next.js", icon: "fa-brands fa-react" },
            ]
        },
        {
            title: "Frontend",
            icon: "fa-solid fa-laptop-code",
            skills: [
                { name: "HTML5", icon: "fa-brands fa-html5" },
                { name: "CSS3", icon: "fa-brands fa-css3-alt" },
                { name: "JavaScript", icon: "fa-brands fa-js" },
                { name: "React", icon: "fa-brands fa-react" },
                { name: "Vue.js", icon: "fa-brands fa-vuejs" },
                { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
            ]
        },
        {
            title: "Backend",
            icon: "fa-solid fa-server",
            skills: [
                { name: "Node.js", icon: "fa-brands fa-node-js" },
                { name: "Python", icon: "fa-brands fa-python" },
                { name: "PHP", icon: "fa-brands fa-php" },
                { name: "Laravel", icon: "fa-brands fa-laravel" },
                { name: "Express.js", icon: "fa-brands fa-node" },
                { name: "MySql", icon: "fa-solid fa-database" },
                { name: "PostgreSQL", icon: "fa-solid fa-database" },
                { name: "Firebase", icon: "fa-solid fa-database" },
            ]
        },
        {
            title: "Tools & Lainnya",
            icon: "fa-solid fa-toolbox",
            skills: [
                { name: "Git", icon: "fa-brands fa-git-alt" },
                { name: "Docker", icon: "fa-brands fa-docker" },
                { name: "Firebase", icon: "fa-solid fa-fire" },
            ]
        },
    ],

    // ===== PROJECTS =====
    // Multi-image: gunakan "images" (array) untuk banyak gambar per project
    // Taruh gambar di folder images/ lalu isi path-nya
    projects: [
        {
            title: "INHILAPP",
            description: "Platform e-commerce penjualan app premium dengan fitur keranjang belanja, pembayaran, dan dashboard admin.",
            // longDescription: penjelasan detail project (opsional, tampil di halaman detail)
            longDescription: "Platform e-commerce full-stack dengan fitur keranjang belanja, pembayaran online terintegrasi, dashboard admin untuk manajemen produk, dan tracking order real-time. Dibangun dengan React untuk frontend yang responsif, Node.js untuk backend yang scalable, dan MongoDB untuk penyimpanan data yang fleksibel. Project ini mendukung multi-payment gateway, notifikasi email otomatis, dan sistem review produk.",
            images: [
                "images/inhilapp.webp",
                "images/inhilapp2.webp",
            ],
            tags: ["nextjs", "laravel", "MySql"],
            liveUrl: "https://inhilapp.vercel.app",
            githubUrl: "#",
        },
        {
            title: "THEJUBEL",
            description: "Website penjualan akun mobile legends dengan fitur payment gateway, notifikasi whatsapp, realtime, otomatis. dan menggunakan fitur admin yang lengkap dengan tools edit poster.",
            images: [
                "images/thejubel.webp",
                "images/thejubel2.webp",
            ],
            tags: ["Laravel 12", "Inertia react", "payment gateway", "MySql"],
            liveUrl: "https://thejubel.com",
            githubUrl: "#",
        },
        {
            title: "BAKERIA",
            description: "Aplikasi POS lengkap dengan login staff dan admin",
            images: [
               "images/bakeria.webp",
               "images/bakeria2.webp",
            ],
            tags: ["Flutter", "Firebase"],
            liveUrl: "#",
            githubUrl: "#",
        },
    ],

    // ===== CONTACT =====
    contact: {
        description: "Punya project menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi!",
        email: "ahmadazhar855@gmail.com",
        whatsapp: "082279082064",
        location: "Indragiri Hilir, Riau, Indonesia",
        // Form action - gunakan Formspree, Getform, dll untuk handling form
        // Daftar gratis di https://formspree.io lalu ganti link di bawah
        formAction: "https://formspree.io/f/mgonvekk",
    },

    // ===== SOCIAL MEDIA =====
    socials: [
        { icon: "fa-brands fa-threads", url: "https://threads.com/@ahmdzhaar", label: "Threads" },
        { icon: "fa-brands fa-instagram", url: "https://instagram.com/ahmdzhaar", label: "Instagram" },
        { icon: "fa-brands fa-facebook", url: "https://facebook.com/azhar855", label: "Facebook" },
    ],

    // ===== FOOTER =====
    footerText: "Ahmad Azhar. All rights reserved.",

    // ===== ENGLISH TRANSLATIONS (opsional) =====
    // Isi untuk versi bahasa Inggris konten Anda
    // Hapus field jika tidak perlu diterjemahkan
    en: {
        tagline: "Full-Stack Developer & UI/UX Designer",
        heroDescription: "I build end-to-end digital solutions with a focus on functionality, user experience, and sustainable implementation quality.",
        stats: [
            { number: "3+", label: "Years Experience" },
            { number: "25+", label: "Projects Done" },
        ],
        aboutParagraphs: [
            "Hello! I'm Ahmad Azhar, a Full-Stack Developer based in Indragiri Hilir, Riau, Indonesia. I focus on building digital solutions that are functional, user-friendly, and meaningful for real users.",
            "I am comfortable handling end-to-end development, from feature planning and UI implementation to backend development, database integration, deployment, and ongoing maintenance.",
            "My work approach emphasizes clean code, strong user experience, clear communication, and continuous improvement. I'm open to collaborating on a wide range of web and digital product needs."
        ],
        aboutInfo: [
        ],
        businessSubtitle: "Businesses I manage and develop on Instagram.",
        contactDescription: "Have an interesting project or want to collaborate? Don't hesitate to reach out. I'm always open for discussion!",
        footerText: "Ahmad Azhar. All rights reserved.",
    },
};

