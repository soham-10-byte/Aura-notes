# 📓 Aura Notes – Modern Notes Manager

A sleek, responsive, and immersive glassmorphic notes management application built with **React**, **Vite**, and **Tailwind CSS**. 

Featuring a premium dark-mode aesthetic with dynamic background glowing orbs, smooth transitions, and fluid micro-interactions, Aura Notes provides a beautiful workspace to capture and organize your thoughts.

---

## ✨ Features

- **Modern Glassmorphic UI:** Beautiful translucent cards with subtle gradient borders and backdrop filters.
- **Dynamic Backgrounds:** Ambient floating glowing orbs (`violet` and `indigo` hues) that create an immersive, futuristic writing environment.
- **Responsive Workspace Layout:** Optimized for all screen sizes—from mobile phones to ultra-wide desktop monitors.
- **Instant Actions:** Easily create and delete notes with fluid hover animations and real-time counter updates.
- **Polished UX Details:** Responsive inputs, interactive hover-to-reveal delete buttons, custom layout transitions, and high-contrast typography.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React 19](https://react.dev/)
- **Build Tool / Bundler:** [Vite 8](https://vite.dev/) (with fast Hot Module Replacement)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (integrated via `@tailwindcss/vite`)
- **Design System:** Custom Dark Theme (`#0b0c10` workspace background) with glowing neon aesthetics.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/soham-10-byte/notes-manager.git
cd notes-manager
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open your browser and visit `http://localhost:5173` to see the application in action.

### 4. Build for production
To build a highly optimized version of the app for production deployment:
```bash
npm run build
```

---

## 📁 Project Structure

```text
notes-manager/
├── public/              # Static public assets (icons, etc.)
├── src/
│   ├── assets/          # SVG / image assets
│   ├── App.jsx          # Core application component (Form, Grid & Notes logic)
│   ├── main.jsx         # Entry point for React rendering
│   └── index.css        # Global CSS & Tailwind configuration
├── index.html           # Main HTML document
└── vite.config.js       # Vite & Tailwind configuration
```

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.
