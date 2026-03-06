# Ahmad Azhar — Portfolio

Portfolio website modern yang di-hosting di GitHub Pages.

## 🚀 Deploy ke GitHub Pages

1. Push repository ini ke GitHub
2. Buka **Settings** → **Pages**
3. Pilih **Branch: main** → **/ (root)** → **Save**
4. Website akan live di `https://username.github.io/nama-repo`

## ✏️ Cara Edit Data

Semua data portfolio ada di **satu file terpisah**: `data.js`

Buka file tersebut lalu edit sesuai kebutuhan — **tidak perlu sentuh `index.html`**:

| Data | Lokasi di DATA |
|------|---------------|
| Nama & tagline | `name`, `tagline` |
| Deskripsi hero | `heroDescription` |
| Foto profil | `heroPhoto` (contoh: `"images/foto.jpg"`) |
| Statistik | `stats` |
| Tentang saya | `about.paragraphs`, `about.info` |
| Layanan/bisnis | `businesses` |
| Skills | `skillCategories` |
| Project | `projects` |
| Kontak | `contact` |
| Social media | `socials` |

## 🖼️ Cara Tambah Gambar

1. Taruh file gambar di folder `images/`
2. Di `data.js`, isi path gambar: `"images/nama-file.jpg"`
3. Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`, `.avif`

## 📁 Struktur

```
├── index.html      ← Template & engine (jangan diedit)
├── data.js         ← ⭐ Edit data portfolio di sini!
├── images/         ← Folder untuk gambar
│   ├── foto.jpg
│   ├── project1.jpg
│   └── ...
└── README.md
```

## 📝 Form Kontak

Untuk mengaktifkan form kontak:
1. Daftar di [Formspree](https://formspree.io) (gratis)
2. Buat form baru, copy ID-nya
3. Di `data.js`, ganti `YOUR_FORM_ID` di `contact.formAction`
