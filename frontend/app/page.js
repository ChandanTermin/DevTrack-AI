"use client";

import { useRef } from "react";
import { ArrowRight, FileText, Target, Briefcase } from "lucide-react";

import ResumeUpload from "@/components/dashboard/ResumeUpload";
import StatsCard from "@/components/dashboard/StatsCard";

import {
  ArrowRight,
  FileText,
  Target,
  Briefcase,
  Brain,
  Download,
} from "lucide-react";

export default function Home() {
  const uploadRef = useRef(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">

      {/* Navbar */}

      <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <h1 className="text-2xl font-bold tracking-tight">
            DevTrack
            <span className="text-blue-500"> AI</span>
          </h1>

          <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95">
            Login
          </button>

        </div>

      </nav>

      {/* Hero */}

      <section className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">

        <div className="rounded-full border border-slate-800 bg-slate-900 px-5 py-2 text-sm text-slate-300">
          AI Powered Resume Intelligence
        </div>

        <h1 className="mt-8 max-w-4xl text-6xl font-bold leading-tight tracking-tight">

          Land Better Interviews
          <br />

          <span className="text-blue-500">
            with DevTrack AI
          </span>

        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">

          Analyze your resume with ATS scoring, compare it with job
          descriptions, receive improvement suggestions, and prepare
          with personalized interview questions.

        </p>

        <button
          onClick={() =>
            uploadRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="mt-10 flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
        >
          Analyze Resume

          <ArrowRight size={20} />
        </button>

      </section>

      {/* Stats */}

<section className="mx-auto mb-20 grid max-w-7xl gap-6 px-8 md:grid-cols-2 lg:grid-cols-4">

  <StatsCard
    icon={<FileText size={22} />}
    title="ATS Score"
    value="100"
    subtitle="Maximum Score"
  />

  <StatsCard
    icon={<Target size={22} />}
    title="JD Match"
    value="95%"
    subtitle="Target Match"
  />

  <StatsCard
    icon={<Brain size={22} />}
    title="Interview"
    value="AI"
    subtitle="Question Generator"
  />

  <StatsCard
    icon={<Download size={22} />}
    title="Reports"
    value="PDF"
    subtitle="Export Analysis"
  />

</section>

      {/* Features */}

      <section className="mx-auto grid max-w-7xl gap-6 px-8 md:grid-cols-3">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

          <FileText className="text-blue-500" size={30} />

          <h3 className="mt-5 text-xl font-semibold">
            ATS Analysis
          </h3>

          <p className="mt-3 text-slate-400">
            Analyze resume quality with detailed section-wise scoring.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

          <Target className="text-blue-500" size={30} />

          <h3 className="mt-5 text-xl font-semibold">
            JD Matching
          </h3>

          <p className="mt-3 text-slate-400">
            Compare your resume against job descriptions and identify
            missing skills.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

          <Briefcase className="text-blue-500" size={30} />

          <h3 className="mt-5 text-xl font-semibold">
            Interview Preparation
          </h3>

          <p className="mt-3 text-slate-400">
            Generate interview questions tailored to your resume and target role.
          </p>

        </div>

      </section>

      {/* Resume Upload */}

      <section
        ref={uploadRef}
        className="mx-auto mt-24 max-w-7xl px-8"
      >
        <ResumeUpload />
      </section>

      {/* Footer */}

      <footer className="mt-24 border-t border-slate-800 py-8 text-center text-slate-500">

        © 2026 DevTrack AI • Built with Next.js & FastAPI

      </footer>

    </main>
  );
}