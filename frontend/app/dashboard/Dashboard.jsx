"use client";

import { useState } from "react";

import ResumeUpload from "@/components/dashboard/ResumeUpload";
import ResumeHealth from "@/components/dashboard/ResumeHealth";
import StatsCard from "@/components/dashboard/StatsCard";
import AIChat from "@/components/ai/AIChat";
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

      {/* Stats Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          icon={<Sparkles size={20} />}
          title="ATS Score"
          value={analysis ? `${analysis.overall_score}%` : "--"}
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
          title="Interview"
          value="AI"
          subtitle="Question Generator"
        />

      </div>

      {/* Resume Upload */}

      <section id="resume">

        <ResumeUpload
          analysis={analysis}
          setAnalysis={setAnalysis}
          resumeText={resumeText}
          setResumeText={setResumeText}
          jdResult={jdResult}
          setJdResult={setJdResult}
        />

      </section>

      {/* Resume Health */}

      <ResumeHealth
        analysis={analysis}
        jdResult={jdResult}
      />
      <section id="ai">
  <AIChat
  resumeText={resumeText}
  analysis={analysis}
  jdResult={jdResult}
/>
</section>

    </section>
    
  );
}