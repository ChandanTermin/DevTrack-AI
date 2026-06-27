"use client";

import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Bot,
  FolderGit2,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { icon: LayoutDashboard, name: "Dashboard" },
    { icon: FileText, name: "Resume" },
    { icon: Briefcase, name: "Applications" },
    { icon: Bot, name: "AI Assistant" },
    { icon: FolderGit2, name: "GitHub" },
    { icon: Settings, name: "Settings" },
  ];

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 p-6">

      <h1 className="mb-10 text-3xl font-bold text-violet-500">
        DevTrack AI
      </h1>

      <div className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex w-full items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-slate-900"
            >
              <Icon size={20} />

              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

    </aside>
  );
}