"use client";

import { useState } from "react";

import ResumeUpload from "@/components/dashboard/ResumeUpload";
import ResumeHealth from "@/components/dashboard/ResumeHealth";
import StatsCard from "@/components/dashboard/StatsCard";

import {
  Sparkles,
  Target,
  FileText,
  Brain,
} from "lucide-react";

export default function Dashboard() {
  const [analysis, setAnalysis] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [jdResult, setJdResult] = useState(null);

  return (
    <section className="space-y-8">

      {/* Heading */}

      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Dashboard
        </h2>

        <p className="mt-2 text-zinc-400">
          Analyze your resume, compare it against job descriptions,
          and prepare for interviews.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          icon={<Sparkles size={20} />}
          title="ATS Score"
          value={analysis ? `${analysis.overall_score}/100` : "--"}
          subtitle="Resume Analysis"
        />

        <StatsCard
          icon={<Target size={20} />}
          title="JD Match"
          value={jdResult ? `${jdResult.match_score}%` : "--"}
          subtitle="Job Description"
        />

        <StatsCard
          icon={<FileText size={20} />}
          title="Skills Found"
          value={analysis ? analysis.skills_found.length : "--"}
          subtitle="Detected Skills"
        />

        <StatsCard
          icon={<Brain size={20} />}
          title="Interview Questions"
          value="AI"
          subtitle="Generated Automatically"
        />

      </div>

      {/* Upload + Resume Health */}

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">

        <ResumeUpload
          analysis={analysis}
          setAnalysis={setAnalysis}
          resumeText={resumeText}
          setResumeText={setResumeText}
          jdResult={jdResult}
          setJdResult={setJdResult}
        />

        <ResumeHealth
          analysis={analysis}
          jdResult={jdResult}
        />

      </div>

    </section>
  );
}