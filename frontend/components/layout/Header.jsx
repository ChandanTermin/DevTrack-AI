"use client";

import { Bell, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">

      <div>
        <h1 className="text-4xl font-bold">
          Good Afternoon, Chandan 👋
        </h1>

        <p className="mt-2 text-slate-400">
          Let's build your career today.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-xl bg-slate-900 p-3 hover:bg-slate-800">
          <Search size={20} />
        </button>

        <button className="rounded-xl bg-slate-900 p-3 hover:bg-slate-800">
          <Bell size={20} />
        </button>

        <button className="rounded-xl bg-violet-600 p-3 hover:bg-violet-700">
          <User size={20} />
        </button>

      </div>

    </header>
  );
}