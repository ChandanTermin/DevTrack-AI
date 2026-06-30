"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Target,
  Brain,
  Download,
  Settings,
  LogOut,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menu = [
  {
    icon: LayoutDashboard,
    name: "Overview",
    href: "/dashboard",
  },
  {
    icon: FileText,
    name: "Resume Analyzer",
    href: "#",
  },
  {
    icon: Target,
    name: "JD Matcher",
    href: "#",
  },
  {
    icon: Brain,
    name: "Interview Prep",
    href: "#",
  },
  {
    icon: Download,
    name: "Reports",
    href: "/reports",
  },
];

  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col justify-between border-r border-zinc-800 bg-[#09090B] px-6 py-8">

      {/* Top */}

      <div>

        {/* Logo */}

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">

            <Sparkles size={22} className="text-white" />

          </div>

          <div>

            <h1 className="text-xl font-bold tracking-tight text-white">
              DevTrack AI
            </h1>

            <p className="text-sm text-zinc-500">
              Career Intelligence
            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 border-t border-zinc-800" />

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Workspace
        </p>

        {/* Menu */}

        <nav className="space-y-2">

          {menu.map((item) => {
            const Icon = item.icon;
const active =
  item.href !== "#" && pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200 ${
                  active
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">

                  <Icon size={19} />

                  <span className="font-medium">
                    {item.name}
                  </span>

                </div>

                <ChevronRight
                  size={16}
                  className={`transition ${
                    active
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

              </Link>
            );
          })}

        </nav>

      </div>

      {/* Bottom */}

      <div>

        {/* User */}

        <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">

          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Logged in as
          </p>

          <h3 className="mt-2 font-semibold text-white">
            Chandan
          </h3>

          <p className="text-sm text-zinc-500">
            Student Developer
          </p>

        </div>

        <div className="space-y-2">

          <Link
            href="/settings"
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
              pathname === "/settings"
                ? "bg-blue-600 text-white"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            <Settings size={18} />
            Settings
          </Link>

          <button
            onClick={() => router.push("/login")}
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-red-400 transition-all duration-200 hover:bg-red-500/10"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>

    </aside>
  );
}