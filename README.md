# Belajar Vibe Engineering: Bun + ElysiaJS + Drizzle (MySQL)

Backend API berbasis **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## Struktur Direktori

```text
├── src/
│   ├── config/
│   │   └── env.ts          # Konfigurasi environment variable
│   ├── db/
│   │   ├── index.ts        # Inisialisasi koneksi Drizzle & MySQL pool
│   │   └── schema.ts       # Definisi skema tabel database
│   ├── routes/
│   │   └── users.ts        # Endpoint rute User CRUD (contoh)
│   └── index.ts            # Entry point server Elysia
├── drizzle.config.ts       # Konfigurasi Drizzle Kit untuk migrasi
├── .env.example            # Template variabel lingkungan
├── package.json
└── tsconfig.json
```

## Memulai

### 1. Salin Konfigurasi Environment
```bash
cp .env.example .env
```
Sesuaikan konfigurasi koneksi MySQL di dalam file `.env`.

### 2. Jalankan Server Dev (Watch Mode)
```bash
bun run dev
```
Server akan berjalan di `http://localhost:3000`.

### 3. Endpoint Tersedia
- `GET /health` - Cek kesehatan server.
- `GET /users` - Mengambil daftar user dari database.
- `POST /users` - Menambahkan user baru `{ "name": "...", "email": "..." }`.

### 4. Database & Migrasi (Drizzle Kit)
- **Push skema langsung ke DB:**
  ```bash
  bun run db:push
  ```
- **Generate migrasi SQL:**
  ```bash
  bun run db:generate
  ```
- **Jalankan Drizzle Studio:**
  ```bash
  bun run db:studio
  ```
