# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## 🚀 Panduan Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda.

### Prasyarat
Pastikan Anda sudah menginstal:
*   [Node.js](https://nodejs.org) (Versi 22 atau terbaru)
*   [NPM](https://npmjs.com) atau [Yarn](https://yarnpkg.com)
*   GIT 
*   buka Fil: package.json dan install semua dependencies

### Langkah Instalasi

1. **Klon repositori ini** ke komputer Anda:
   ```bash
   git clone https://github.com/Fuj1io/kasir_frontend.git
   cd nama-repositori
   ```

2. **Instal semua dependensi** yang dibutuhkan:
   ```bash
   npm install nama_dependencies
   # atau jika menggunakan yarn: yarn install
   ```

3. **Konfigurasi Environment Variables (`.env`)**:
   Proyek ini menggunakan file `.env` untuk menyimpan konfigurasi sensitif. Salin file `.env.example` yang sudah disediakan dan ubah namanya menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
   *Catatan untuk pengguna Windows (Command Prompt):* `copy .env.example .env`


5. **Jalankan aplikasi**:
   ```bash
   - npm run dev
   - atau sesuaikan dengan package manager yang dipakai 
   ```