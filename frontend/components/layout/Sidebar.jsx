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

  function scrollToSection(id) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col justify-between border-r border-zinc-800 bg-[#09090B] px-6 py-8">

      {/* Logo */}

      <div>

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

        <div className="my-10 border-t border-zinc-800" />

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Workspace
        </p>

        <nav className="space-y-2">

          {/* Overview */}

          <Link
            href="/dashboard"
            className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200 ${
              pathname === "/dashboard"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >

            <div className="flex items-center gap-3">

              <LayoutDashboard size={19} />

              <span className="font-medium">
                Overview
              </span>

            </div>

            <ChevronRight size={16} />

          </Link>

          {/* Resume */}

          <button
            onClick={() => scrollToSection("resume")}
            className="group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-zinc-400 transition-all duration-200 hover:bg-zinc-900 hover:text-white"
          >

            <div className="flex items-center gap-3">

              <FileText size={19} />

              <span className="font-medium">
                Resume Analyzer
              </span>

            </div>

            <ChevronRight
              size={16}
              className="opacity-0 transition group-hover:opacity-100"
            />

          </button>

          {/* JD */}

          <button
            onClick={() => scrollToSection("jd")}
            className="group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-zinc-400 transition-all duration-200 hover:bg-zinc-900 hover:text-white"
          >

            <div className="flex items-center gap-3">

              <Target size={19} />

              <span className="font-medium">
                JD Matcher
              </span>

            </div>

            <ChevronRight
              size={16}
              className="opacity-0 transition group-hover:opacity-100"
            />

          </button>

          {/* Interview */}

          <button
            onClick={() => scrollToSection("interview")}
            className="group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-zinc-400 transition-all duration-200 hover:bg-zinc-900 hover:text-white"
          >

            <div className="flex items-center gap-3">

              <Brain size={19} />

              <span className="font-medium">
                Interview Prep
              </span>

            </div>

            <ChevronRight
              size={16}
              className="opacity-0 transition group-hover:opacity-100"
            />

          </button>

          {/* Reports */}

          <Link
            href="/reports"
            className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200 ${
              pathname === "/reports"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >

            <div className="flex items-center gap-3">

              <Download size={19} />

              <span className="font-medium">
                Reports
              </span>

            </div>

            <ChevronRight
              size={16}
              className="opacity-0 transition group-hover:opacity-100"
            />

          </Link>

        </nav>

      </div>

      {/* Bottom */}

      <div>

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

            <span>Settings</span>

          </Link>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              router.replace("/login");
            }}
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-red-400 transition-all duration-200 hover:bg-red-500/10"
          >

            <LogOut size={18} />

            <span>Logout</span>

          </button>

        </div>

      </div>

    </aside>
  );
}