# German Citizenship Test Prep (Einburgerungstest)

A free, offline-first, mobile-ready drill app for the **German Citizenship Test (Einburgerungstest)**. Practice all 310 official questions with bilingual mode, state-specific filtering, and timed exam simulation.

Built with Next.js 16, React 19, and TypeScript.

---

## Features

- **310 Official Questions** - Full question bank including national questions and state-specific sets (Questions 301 and 308 for all 16 German states).
- **Exam Simulation** - 33-question timed exam (60 minutes) replicating the real Einburgerungstest format.
- **Practice Mode** - Browse, search, and filter all questions by category or topic.
- **Bilingual Mode** - Toggle English translations on or off at any time.
- **Image Flashcards** - Visual aids for map and landmark questions.
- **Mastery Tracking** - Questions are marked "Exam-Ready" only after 2 correct consecutive answers; wrong answers reset the counter.
- **Bookmarks** - Save tricky questions for focused review.
- **Progress Persistence** - All progress saved locally in the browser (no account needed).
- **Mobile Ready** - Optimized for studying on the go.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel (Free)

1. Push to GitHub.
2. Import at [vercel.com](https://vercel.com) - Next.js is auto-detected.
3. Click Deploy.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Storage**: localStorage (zero backend cost)
