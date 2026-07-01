"use client";

import Dashboard from "./dashboard/Dashboard";

import {
  ArrowRight,
  FileText,
  Target,
  Briefcase,
  Brain,
  Download,
} from "lucide-react";

import StatsCard from "@/components/dashboard/StatsCard";

export default function Home() {
  const scrollToDashboard = () => {
    document
      .getElementById("dashboard")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">

      {/* Navbar */}

      <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <h1 className="text-2xl font-bold tracking-tight">
            DevTrack
            <span className="text-blue-500"> AI</span>
          </h1>

          <button
            onClick={scrollToDashboard}
            className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
          >
            Get Started
          </button>

        </div>

      </nav>

      {/* Hero */}

      <section className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">

        <div className="rounded-full border border-slate-800 bg-slate-900 px-5 py-2 text-sm text-slate-300">
          AI-Powered Resume Analyzer
        </div>

        <h1 className="mt-8 max-w-5xl text-6xl font-bold leading-tight tracking-tight">

          AI-Powered Resume
          <br />

          <span className="text-blue-500">
            Analyzer & Career Assistant
          </span>

        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">

          Upload your resume, receive ATS analysis, compare it with job
          descriptions, identify missing skills, generate interview
          questions, and get AI-powered career guidance.

        </p>

        <button
          onClick={scrollToDashboard}
          className="mt-10 flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
        >
          Get Started

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

      <section className="mx-auto mb-24 grid max-w-7xl gap-6 px-8 md:grid-cols-3">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">

          <FileText
            className="text-blue-500"
            size={30}
          />

          <h3 className="mt-5 text-xl font-semibold">
            ATS Resume Analysis
          </h3>

          <p className="mt-3 text-slate-400">
            Analyze your resume with section-wise ATS scoring,
            identify weaknesses, and receive actionable suggestions.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">

          <Target
            className="text-blue-500"
            size={30}
          />

          <h3 className="mt-5 text-xl font-semibold">
            Job Description Matching
          </h3>

          <p className="mt-3 text-slate-400">
            Compare your resume with any job description,
            calculate the match score, and identify missing skills.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">

          <Briefcase
            className="text-blue-500"
            size={30}
          />

          <h3 className="mt-5 text-xl font-semibold">
            AI Interview Preparation
          </h3>

          <p className="mt-3 text-slate-400">
            Generate personalized interview questions
            and receive AI-powered career guidance.
          </p>

        </div>

      </section>

      {/* Dashboard Intro */}

      <section className="py-16 text-center">

        <h2 className="text-4xl font-bold">
          Start Your Resume Analysis
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">

          Upload your resume below and let DevTrack AI analyze
          your ATS score, compare it with job descriptions,
          prepare interview questions, and provide personalized
          career guidance.

        </p>

      </section>

      {/* Dashboard */}

      <section
        id="dashboard"
        className="mx-auto max-w-7xl px-8 pb-24"
      >
        <Dashboard />
      </section>

      {/* Footer */}

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">

        © 2026 DevTrack AI • Built with Next.js, FastAPI & Google Gemini AI

      </footer>

    </main>
  );
}