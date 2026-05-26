# Portfolio — Rian Surya Pradhikta

Website portofolio personal dengan Astro + Decap CMS.

## Stack
- Astro 4 (hybrid mode)
- Decap CMS (edit konten via browser)
- Deploy via Coolify

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. GitHub OAuth App (untuk Decap CMS login)
1. Buka https://github.com/settings/developers
2. New OAuth App:
   - Application name: `Portfolio CMS`
   - Homepage URL: `https://pradhikta.my.id`
   - Callback URL: `https://pradhikta.my.id/api/auth`
3. Copy Client ID & Client Secret

### 3. Environment Variables
Buat file `.env`:
```
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
```

Di Coolify → Environment Variables, tambahkan kedua variable di atas.

### 4. Dev server
```bash
npm run dev
```

### 5. Edit konten via CMS
Buka `https://pradhikta.my.id/admin` → Login dengan GitHub → Edit semua konten dari dashboard!

## Struktur konten
Semua konten ada di `src/content/`:
- `site/settings.json` — Info utama (nama, email, social links)
- `about/about.json` — Teks about, foto, sertifikasi
- `skills/skills.json` — Daftar skill
- `projects/projects.json` — Daftar proyek
