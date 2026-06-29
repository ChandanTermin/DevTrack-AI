"use client";

import { useState } from "react";
import axios from "axios";
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

  return (
    <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold text-white">
        Job Description Match
      </h2>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the Job Description here..."
        className="mt-5 h-48 w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
      />

      <button
        onClick={analyzeJobDescription}
        disabled={loading}
        className="mt-5 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:bg-slate-700"
      >
        {loading ? "Analyzing..." : "Analyze Match"}
      </button>

      {jdResult && (
        <div className="mt-8">

          <h3 className="text-4xl font-bold text-green-400">
            {jdResult.match_score}%
          </h3>

          <p className="text-slate-400">
            Job Match Score
          </p>

          {/* Matched Skills */}

          <div className="mt-6">

            <h4 className="font-bold text-white">
              Matched Skills
            </h4>

            <div className="mt-2 flex flex-wrap gap-2">

              {jdResult.matched_skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-green-600 px-4 py-2 text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Missing Skills */}

          <div className="mt-6">

            <h4 className="font-bold text-white">
              Missing Skills
            </h4>

            <div className="mt-2 flex flex-wrap gap-2">

              {jdResult.missing_skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-red-600 px-4 py-2 text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Suggestions */}

          {jdResult.suggestions &&
            jdResult.suggestions.length > 0 && (

              <div className="mt-8">

                <h4 className="mb-4 text-xl font-bold text-white">
                  Resume Improvement Suggestions
                </h4>

                <div className="space-y-3">

                  {jdResult.suggestions.map((item, index) => (

                    <div
                      key={index}
                      className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-yellow-300"
                    >
                      💡 {item}
                    </div>

                  ))}

                </div>

              </div>

            )}

        </div>
      )}
      <InterviewQuestions
  resumeText={resumeText}
  jobDescription={jobDescription}
/>

    </div>
  );
}