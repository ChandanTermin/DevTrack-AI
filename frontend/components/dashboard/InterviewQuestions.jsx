"use client";

import { useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function InterviewQuestions({
  resumeText,
  jobDescription,
}) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  async function generateQuestions() {
    if (!jobDescription.trim()) {
      alert("Analyze a Job Description first.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/interview-questions`,
        {
          resume_text: resumeText,
          job_description: jobDescription,
        }
      );

      setQuestions(response.data.questions);
    } catch (err) {
      console.error(err);
      alert("Failed to generate interview questions.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Interview Questions
        </h2>

        <button
          onClick={generateQuestions}
          disabled={loading}
          className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-700 disabled:bg-slate-700"
        >
          {loading ? "Generating..." : "Generate Questions"}
        </button>
      </div>

      {questions.length > 0 && (
        <div className="mt-6 space-y-3">
          {questions.map((question, index) => (
            <div
              key={index}
              className="rounded-xl bg-slate-800 p-4 text-white"
            >
              <span className="font-bold">
                Q{index + 1}.
              </span>{" "}
              {question}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}