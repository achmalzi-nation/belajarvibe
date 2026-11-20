# Rencana Proyek: Bun + ElysiaJS + Drizzle (MySQL)

## Tujuan
Membuat proyek backend web baru menggunakan **Bun** sebagai runtime/package manager, **ElysiaJS** untuk kerangka HTTP, **Drizzle** sebagai ORM tipe‑aman, dan **MySQL** sebagai basis data.

## Langkah Tingkat Tinggi

1. **Inisialisasi proyek**
   - Jalankan `bun init` (atau `bun create`) di folder target untuk menghasilkan `package.json` dan struktur proyek dasar.
   - Commit scaffold awal ke version control.

2. **Tambahkan dependensi inti**
   - Instal `elysia`, `drizzle-orm`, `mysql2` (atau driver MySQL yang sesuai) lewat `bun add`.
   - Tambahkan dev‑dependency untuk TypeScript (jika belum ada) supaya mendapatkan tipe aman.

3. **Buat tata letak folder**
   - `src/`
     - `server.ts` – titik masuk yang membuat aplikasi Elysia.
     - `routes/` – folder untuk modul route.
     - `db/`
       - `index.ts` – inisialisasi Drizzle dengan koneksi MySQL.
       - `schema.ts` – definisi tabel menggunakan DSL Drizzle.
   - `config/`
     - `env.ts` – memuat variabel lingkungan (misalnya kredensial DB) dengan pustaka ringan.
   - `scripts/`
     - `dev.ts` – perintah untuk menjalankan server dev (`bun run dev`).

4. **Konfigurasi koneksi MySQL**
   - Buat file `.env` (atau serupa) dengan `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`.
   - Di `db/index.ts`, buat instance Drizzle yang mengarah ke DSN MySQL menggunakan variabel lingkungan.
   - Ekspor client database untuk dipakai di handler route.

5. **Buat server Elysia dasar**
   - Inisialisasi instance Elysia di `server.ts`.
   - Daftarkan parsing JSON body dan middleware global (misalnya CORS, penanganan error).
   - Mount route dari folder `routes/`.
   - Mulai listening pada port yang dapat dikonfigurasi.

6. **Definisikan model data awal**
   - Di `db/schema.ts`, deklarasikan tabel penting (contoh: `users`, `posts`).
   - Gunakan tipe definisi Drizzle untuk menghasilkan tipe TypeScript secara otomatis.
   - Sertakan strategi migrasi singkat (misalnya memakai CLI migrasi Drizzle).

7. **Tambahkan contoh route**
   - Buat endpoint sederhana `GET /health` yang mengembalikan `{ status: "ok" }`.
   - Tambahkan route CRUD placeholder yang menunjukkan cara mengambil data lewat Drizzle.

8. **Atur skrip**
   - Tambahkan skrip di `package.json`:
     - `dev` – menjalankan server dengan hot‑reloading (`bun run dev`).
     - `build` – meng‑compile TypeScript (jika dipakai) dan bundel untuk produksi.
     - `start` – meluncurkan server yang sudah dibangun.

9. **Pengujian & linting (opsional)**
   - Tambahkan framework testing (misalnya Vitest) dan tulis beberapa tes integrasi untuk endpoint health.
   - Konfigurasikan linter (ESLint) dengan aturan dasar.

10. **Dokumentasi**
    - Perbarui `README.md` repositori dengan instruksi setup, variabel lingkungan yang diperlukan, dan cara menjalankan server dev.
    - Sertakan catatan singkat tentang cara memperluas proyek (menambah route, model, dll.).

## Hasil yang Diharapkan
- Proyek Bun yang telah ter‑scaffold lengkap dengan tata letak folder di atas.
- `package.json` yang mencantumkan `elysia`, `drizzle-orm`, `mysql2` (atau setara) sebagai dependensi.
- Kode starter minimal untuk server, koneksi DB, dan satu contoh route.
- `.env.example` yang menampilkan variabel yang dibutuhkan.
- README dengan petunjuk setup dan cara menjalankan.

---
*Rencana tingkat tinggi ini ditujukan untuk programmer junior atau model dengan biaya lebih rendah agar dapat mengimplementasikan kode dan konfigurasi secara detail.*