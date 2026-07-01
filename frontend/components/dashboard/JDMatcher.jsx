"use client";

import { useState } from "react";
import axios from "axios";

import MatchedSkills from "./MatchedSkills";
import MissingSkills from "./MissingSkills";
import SuggestionCard from "./SuggestionCard";
import InterviewQuestions from "./InterviewQuestions";

export default function JDMatcher({ resumeText }) {
  const [jobDescription, setJobDescription] = useState("");
  const [jdResult, setJdResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyzeJobDescription() {
    if (!jobDescription.trim()) {
      alert("Please paste a Job Description.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/match-jd",
        {
          resume_text: resumeText,
          job_description: jobDescription,
        }
      );

      setJdResult(response.data);

    } catch (error) {
      console.error(error);
      alert("JD Match failed.");
    } finally {
      setLoading(false);
    }
  }

  const getColor = (score) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

      <h2 className="text-3xl font-bold text-white">
        Job Description Match
      </h2>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the Job Description here..."
        className="mt-6 h-48 w-full rounded-2xl border border-slate-700 bg-slate-800 p-5 text-white outline-none focus:border-violet-500"
      />

      <button
        onClick={analyzeJobDescription}
        disabled={loading}
        className="mt-6 rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:bg-slate-700"
      >
        {loading ? "Analyzing..." : "Analyze Match"}
      </button>

      {jdResult && (
        <>
          <div className="mt-10 flex flex-col items-center">

            <div className="flex h-40 w-40 items-center justify-center rounded-full border-[10px] border-violet-500 bg-slate-950 shadow-xl">

              <div className="text-center">

                <div
                  className={`text-5xl font-bold ${getColor(
                    jdResult.match_score
                  )}`}
                >
                  {jdResult.match_score}%
                </div>

                <div className="mt-2 text-slate-400">
                  Match Score
                </div>

              </div>

            </div>

          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            <MatchedSkills skills={jdResult.matched_skills} />

            <MissingSkills skills={jdResult.missing_skills} />

          </div>

          <SuggestionCard suggestions={jdResult.suggestions} />
        <section id="interview">
          <InterviewQuestions
            resumeText={resumeText}
            jobDescription={jobDescription}
          /></section>
        </>
      )}

    </div>
  );
}