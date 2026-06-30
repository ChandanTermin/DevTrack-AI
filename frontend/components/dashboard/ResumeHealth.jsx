"use client";

import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ResumeHealth({ analysis, jdResult }) {
  const score = analysis?.overall_score || 0;
  const skills = analysis?.skills_found?.length || 0;
  const missing = jdResult?.missing_skills?.length || 0;

  const status =
    score >= 80
      ? {
          text: "Excellent",
          color: "text-green-400",
          icon: <CheckCircle2 size={16} />,
        }
      : {
          text: "Needs Improvement",
          color: "text-yellow-400",
          icon: <AlertCircle size={16} />,
        };

  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#111827] p-6">

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-blue-600/10 p-3">
          <Sparkles className="text-blue-500" size={20} />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            Resume Health
          </h2>

          <p className="text-sm text-zinc-400">
            Overall resume quality
          </p>

        </div>

      </div>

      <div className="space-y-6">

        <div>

          <div className="mb-2 flex justify-between">

            <span className="text-zinc-400">
              ATS Score
            </span>

            <span className="font-semibold text-white">
              {score}%
            </span>

          </div>

          <div className="h-2 rounded-full bg-zinc-800">

            <div
              className="h-full rounded-full bg-blue-600"
              style={{
                width: `${score}%`,
              }}
            />

          </div>

        </div>

        <div className="flex justify-between">

          <span className="text-zinc-400">
            Skills Found
          </span>

          <span className="font-semibold text-white">
            {skills}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-zinc-400">
            Missing Skills
          </span>

          <span className="font-semibold text-white">
            {missing}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-zinc-400">
            Status
          </span>

          <span className={`flex items-center gap-2 ${status.color}`}>
            {status.icon}
            {status.text}
          </span>

        </div>

      </div>

    </div>
  );
}