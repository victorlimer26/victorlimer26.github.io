/* ==========================================================
   ██████╗  █████╗ ████████╗ █████╗
   ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗
   ██║  ██║███████║   ██║   ███████║
   ██║  ██║██╔══██║   ██║   ██╔══██║
   ██████╔╝██║  ██║   ██║   ██║  ██║
   ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝

   EDIT SEMUA DATA PORTFOLIO ANDA DI FILE INI!
   - Ganti teks, link, dan gambar sesuai kebutuhan
   - Taruh gambar di folder /images/
   - Untuk gambar, cukup tulis: images/nama-file.jpg
   ========================================================== */

const DATA = {

    // ===== INFORMASI UMUM =====
    name: "Ahmad Azhar",
    logo: "Ahmad Azhar",
    tagline: "Full-Stack Developer & UI/UX Designer",
    heroDescription: "Saya adalah seorang developer yang passionate dalam menciptakan pengalaman digital yang luar biasa. Fokus pada kode yang bersih, desain yang elegan, dan solusi yang inovatif.",

    // Foto profil hero (taruh file di folder images/)
    // Kosongkan "" jika belum ada foto, akan tampil icon default
    heroPhoto: "images/IMG_0769.jpeg",

    // ===== HERO STATISTICS =====
    stats: [
        { number: "3+", label: "Tahun Experience" },
        { number: "25+", label: "Project Selesai" },
        { number: "15+", label: "Client Happy" },
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
        photo: "images/image.png",
        paragraphs: [
            "Halo! Saya Ahmad Azhar, seorang Full-Stack Developer yang berbasis di Indonesia. Saya memiliki pengalaman lebih dari 3 tahun dalam mengembangkan aplikasi web dan mobile yang modern dan scalable.",
            "Saya percaya bahwa teknologi terbaik adalah yang tidak terlihat — yang bekerja dengan mulus dan memberikan pengalaman terbaik bagi penggunanya. Itulah mengapa saya selalu mengutamakan clean code, performa optimal, dan desain yang intuitif.",
            "Ketika tidak coding, saya biasanya exploring teknologi baru, menulis artikel tech, atau menikmati secangkir kopi sambil brainstorming ide project berikutnya."
        ],
        info: [
            { label: "Nama", value: "Ahmad Azhar" },
            { label: "Lokasi", value: "Indonesia" },
            { label: "Email", value: "ahmadazhar@gmail.com" },
            { label: "Status", value: "Freelancer" },
        ]
    },

    // ===== BUSINESS / USAHA (Instagram-based) =====
    // Subtitle section business (opsional)
    businessSubtitle: "Usaha-usaha yang saya kelola dan kembangkan di Instagram.",

    businesses: [
        {
            logo: "",                // taruh: images/logo-brand1.png
            icon: "fa-solid fa-shirt",  // icon fallback jika logo kosong
            title: "THEJUBEL",
            igHandle: "@thejubel_ml",
            instagram: "https://instagram.com/thejubel_ml",
            description: "Spesialis Akun MLBB",
            price: "Mulai dari Rp 150.000",
            features: [
                "Jual Akun",
                "Beli Akun"
            ]
        },
        {
            logo: "",                // taruh: images/logo-brand2.png
            icon: "fa-solid fa-mug-hot",
            title: "Kopi Azhar",
            igHandle: "@kopi.azhar",
            instagram: "https://instagram.com/kopi.azhar",
            description: "Kopi specialty roasted fresh dengan biji pilihan dari berbagai daerah di Indonesia.",
            price: "Mulai dari Rp 35.000",
            features: [
                "Single Origin",
                "Fresh Roasted",
                "Gratis Ongkir min. 3 pack",
                "Packaging Eksklusif"
            ]
        },
        {
            logo: "",                // taruh: images/logo-brand3.png
            icon: "fa-solid fa-laptop-code",
            title: "Azhar Digital",
            igHandle: "@azhar.digital",
            instagram: "https://instagram.com/azhar.digital",
            description: "Jasa pembuatan website, desain grafis, dan solusi digital untuk UMKM.",
            price: "Mulai dari Rp 500.000",
            features: [
                "Website & Landing Page",
                "Desain Logo & Branding",
                "Social Media Management",
                "Konsultasi Gratis"
            ]
        },
    ],

    // ===== SKILLS =====
    skillCategories: [
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
                { name: "PostgreSQL", icon: "fa-solid fa-database" },
            ]
        },
        {
            title: "Tools & Lainnya",
            icon: "fa-solid fa-toolbox",
            skills: [
                { name: "Git", icon: "fa-brands fa-git-alt" },
                { name: "Docker", icon: "fa-brands fa-docker" },
                { name: "Figma", icon: "fa-brands fa-figma" },
                { name: "Linux", icon: "fa-brands fa-linux" },
                { name: "AWS", icon: "fa-brands fa-aws" },
                { name: "Firebase", icon: "fa-solid fa-fire" },
            ]
        },
    ],

    // ===== PROJECTS =====
    // Multi-image: gunakan "images" (array) untuk banyak gambar per project
    // Taruh gambar di folder images/ lalu isi path-nya
    projects: [
        {
            title: "E-Commerce Pebjualan App Premium",
            description: "Platform e-commerce full-stack dengan fitur keranjang belanja, pembayaran, dan dashboard admin.",
            images: [
                "images/inhilapp.png",
                "images/inhilapp2.png",
                "images/inhilapp3.png",
                "images/inhilapp4.png",
            ],
            tags: ["Nextjs", "Laravel", "MySql"],
            liveUrl: "https://inhilapp.vercel.app",
        },
        {
            title: "Task Management App",
            description: "Aplikasi manajemen tugas dengan fitur drag & drop, kolaborasi tim, dan real-time updates.",
            images: [
                // "images/project2-1.jpg",
                // "images/project2-2.jpg",
            ],
            tags: ["Vue.js", "Firebase", "Tailwind"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Portfolio Generator",
            description: "Tool untuk membuat portfolio website secara otomatis dari file konfigurasi JSON.",
            images: [],
            tags: ["JavaScript", "HTML", "CSS"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Weather Dashboard",
            description: "Dashboard cuaca real-time dengan visualisasi data, prakiraan 7 hari, dan lokasi GPS.",
            images: [],
            tags: ["React", "API", "Chart.js"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Chat Application",
            description: "Aplikasi chat real-time dengan WebSocket, kirim gambar, dan group chat.",
            images: [],
            tags: ["Socket.io", "Express", "React"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Blog CMS",
            description: "Content Management System untuk blog dengan editor markdown dan manajemen kategori.",
            images: [],
            tags: ["Laravel", "MySQL", "Vue.js"],
            liveUrl: "#",
            githubUrl: "#",
        },
    ],

    // ===== CONTACT =====
    contact: {
        description: "Punya project menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi!",
        email: "ahmad@example.com",
        phone: "+62 812 3456 7890",
        location: "Jakarta, Indonesia",
        // Form action - gunakan Formspree, Getform, dll untuk handling form
        // Daftar gratis di https://formspree.io lalu ganti link di bawah
        formAction: "https://formspree.io/f/YOUR_FORM_ID",
    },

    // ===== SOCIAL MEDIA =====
    socials: [
        { icon: "fa-brands fa-github", url: "https://github.com/azhar85", label: "GitHub" },
        { icon: "fa-brands fa-instagram", url: "https://instagram.com/ahmdzhaar", label: "Instagram" },
        { icon: "fa-brands fa-x", url: "https://x.com/ahmdzhaar", label: "x" },
        { icon: "fa-brands fa-threads", url: "https://threads.net/ahmdzhaar", label: "Threads" },
    ],

    // ===== FOOTER =====
    footerText: "Ahmad Azhar. All rights reserved.",

    // ===== ENGLISH TRANSLATIONS (opsional) =====
    // Isi untuk versi bahasa Inggris konten Anda
    // Hapus field jika tidak perlu diterjemahkan
    en: {
        tagline: "Full-Stack Developer & UI/UX Designer",
        heroDescription: "I am a developer passionate about creating extraordinary digital experiences. Focused on clean code, elegant design, and innovative solutions.",
        stats: [
            { number: "3+", label: "Years Experience" },
            { number: "25+", label: "Projects Done" },
            { number: "15+", label: "Happy Clients" },
        ],
        aboutParagraphs: [
            "Hello! I'm Ahmad Azhar, a Full-Stack Developer based in Indonesia. I have over 3 years of experience in developing modern and scalable web and mobile applications.",
            "I believe the best technology is invisible - it works seamlessly and delivers the best experience for its users. That's why I always prioritize clean code, optimal performance, and intuitive design.",
            "When I'm not coding, I'm usually exploring new technologies, writing tech articles, or enjoying a cup of coffee while brainstorming ideas for my next project."
        ],
        aboutInfo: [
            { label: "Name", value: "Ahmad Azhar" },
            { label: "Location", value: "Indonesia" },
            { label: "Email", value: "ahmad@example.com" },
            { label: "Status", value: "Freelancer" },
        ],
        businessSubtitle: "Businesses I manage and develop on Instagram.",
        contactDescription: "Have an interesting project or want to collaborate? Don't hesitate to reach out. I'm always open for discussion!",
        footerText: "Ahmad Azhar. All rights reserved.",
    },
};
