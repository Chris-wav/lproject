# 🎮 LOL Academy

> **Learn League of Legends — the Duolingo way.**

LOL Academy is a gamified learning app that teaches League of Legends concepts through interactive lessons, quizzes, and AI-powered feedback. Built as an MVP for a hackathon, it combines modern web technologies with a fun, mobile-first experience.(STILL ONLY FOR MOBILE, TO GAIN THE FULL EXPERIENCE OPEN DEV TOOLS AND SELECT A MOBILE LAYOUT)

---

## ✨ Features

- **Lesson System** — Structured lessons covering champions, roles, mechanics, and strategy
- **Quiz Mode** — Multiple-choice quizzes with instant feedback
- **AI Quiz** — Dynamic AI-generated questions powered by Groq
- **XP & Streak System** — Earn XP and maintain daily streaks to climb the ranks
- **Lives System** — Limited lives per session keep the stakes real
- **Leaderboard** — Compete with other players for the top spot
- **User Profiles** — Track your progress, XP, and completed lessons
- **Authentication** — Secure sign up / login via Supabase Auth

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + TypeScript + Vite |
| Routing | TanStack Router |
| State / Data | TanStack Query + Axios |
| Styling | Tailwind CSS v4 |
| Backend | Express.js + TypeScript |
| Database & Auth | Supabase (PostgreSQL + Auth) |
| AI | Groq API |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project
- A Groq API key

### Frontend

```bash
# From the project root
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the root and in `/server`:

**Root `.env`**
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:3000
```

**`server/.env`**
```
GROQ_API_KEY=your_groq_api_key
```

---

## 📁 Project Structure

```
lol-academy/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── auth/
│   │   ├── learn/
│   │   ├── profile/
│   │   ├── quiz/
│   │   └── shared/
│   ├── context/          # Auth context
│   ├── routes/           # TanStack Router pages
│   ├── services/         # API & Supabase calls
│   └── types/            # TypeScript types
└── server/
    ├── routes/           # Express API routes
    └── index.ts          # Server entry point
```

---

## 🏆 Hackathon MVP

This project was built as an MVP for a hackathon with a mid-April 2026 deadline. Core focus areas:

- Mobile-first UI
- AI-powered quiz generation
- Gamification (XP, streaks, lives, leaderboard)
- Full-stack architecture with real authentication

---

## 📄 License

MIT
