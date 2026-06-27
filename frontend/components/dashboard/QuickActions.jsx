"use client";

import { Upload, FileSearch, Bot } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Upload Resume",
      icon: Upload,
    },
    {
      title: "Analyze JD",
      icon: FileSearch,
    },
    {
      title: "AI Resume Chat",
      icon: Bot,
    },
  ];

  return (
<div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="space-y-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              className="flex w-full items-center gap-4 rounded-xl bg-slate-800 p-4 transition hover:bg-violet-600"
            >

              <Icon size={20} />

              {action.title}

            </button>

          );

        })}

      </div>

    </div>
  );
}