"use client";

import { Bell, User, CalendarDays } from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="mb-10 flex items-center justify-between border-b border-slate-800 pb-8">

      {/* Left */}

      <div>

        <p className="mb-2 flex items-center gap-2 text-sm text-slate-400">

          <CalendarDays size={16} />

          {today}

        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white">

          Welcome back, Chandan

        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">

          Upload your resume, analyze ATS compatibility,
          compare it against job descriptions and prepare
          for interviews—all in one place.

        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <button className="rounded-xl border border-slate-800 bg-slate-900 p-3 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800">

          <Bell size={20} />

        </button>

        <button className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 transition-all duration-300 hover:border-blue-500">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">

            <User size={18} />

          </div>

          <div className="text-left">

            <p className="font-semibold text-white">
              Chandan
            </p>

            <p className="text-xs text-slate-400">
              Student
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}