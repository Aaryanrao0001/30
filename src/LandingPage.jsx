import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Menu } from "lucide-react";

// Single-file React + Tailwind component
// Default export at bottom
// Tailwind must be configured in the project. This file assumes Tailwind is available.

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900 antialiased">
      {/* Page container */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-md">
            <span className="font-bold text-white">30</span>
          </div>
          <div>
            <div className="font-semibold text-lg leading-tight">30 Day Coding</div>
            <div className="text-xs text-slate-500 -mt-0.5">Challenge</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-indigo-600 transition">Overview</a>
          <a className="hover:text-indigo-600 transition">Challenges</a>
          <a className="hover:text-indigo-600 transition">Resources</a>
          <a className="hover:text-indigo-600 transition">Leaderboard</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-100 transition">
            Log in
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-transform">
            Join the challenge
          </button>

          <button className="md:hidden p-2 rounded-md border">
            <Menu size={18} />
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Hero */}
        <section className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Ship small wins every day.
            <span className="text-indigo-600"> Build skills in 30 days.</span>
          </motion.h1>

          <p className="text-slate-600 max-w-xl text-base md:text-lg">
            A focused, daily challenge set designed to level up your practical coding skills — one problem, one day. Clean layout, clear milestones and a community leaderboard to keep you going.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:scale-[1.01] transition">Start Day 1</button>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition">View Challenges</button>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center shadow-sm">
                <CheckCircle size={18} className="text-indigo-500" />
              </div>
              <div>
                <div className="text-sm font-semibold">Daily problems</div>
                <div className="text-xs text-slate-500">Short, practical and graded</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center shadow-sm">🔥</div>
              <div>
                <div className="text-sm font-semibold">Progress tracking</div>
                <div className="text-xs text-slate-500">Hit streaks & milestones</div>
              </div>
            </div>
          </div>
        </section>

        {/* Right column - challenge preview card */}
        <aside className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl bg-white shadow-lg border border-slate-100"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-500">Current Challenge</div>
                <div className="text-xl font-semibold">Day 7 — Two-sum variations</div>
              </div>
              <div className="text-xs text-slate-400">Level: Intermediate</div>
            </div>

            <div className="mt-4 text-slate-600 text-sm leading-relaxed">
              This challenge focuses on efficient counting and edge-case handling. The UI encourages small, incremental improvements and clear feedback.
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="py-2 rounded-md bg-indigo-600 text-white font-medium">Open</button>
              <button className="py-2 rounded-md border border-slate-200">Read editorial</button>
            </div>

            <div className="mt-6">
              <div className="text-xs text-slate-500">Your streak</div>
              <div className="mt-1 flex items-center gap-3">
                <div className="w-28 bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div className="h-3 rounded-full bg-indigo-500" style={{ width: "56%" }} />
                </div>
                <div className="text-sm font-medium">17 days</div>
              </div>
            </div>
          </motion.div>

          {/* subtle decorative panel */}
          <div className="absolute -right-8 -bottom-6 w-48 h-40 bg-gradient-to-tr from-indigo-100 to-cyan-50 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
        </aside>
      </main>

      {/* Challenges grid */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h3 className="text-lg font-semibold mb-4">This month's highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1,2,3,4].map((n) => (
            <article key={n} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div className="text-sm text-slate-500">Day {n}</div>
              <h4 className="mt-2 font-semibold">Shortest Subarray Problem</h4>
              <p className="mt-2 text-xs text-slate-500">Practice sliding windows and two pointer patterns.</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-slate-400">Est. 20–30 min</div>
                <button className="text-xs font-medium px-3 py-1 rounded-md border">Try</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} 30 Day Coding Challenge</div>
          <div className="flex gap-4">
            <a className="hover:text-indigo-600">Privacy</a>
            <a className="hover:text-indigo-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}