"use client";

import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";
import axios from "axios";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const fileInputRef = useRef(null);

  async function uploadResume() {
    if (!file) {
      alert("Please select a resume first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData
      );

      console.log(response.data);

      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      <div className="mb-8 rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900 p-10 transition hover:border-violet-500">

        <div className="flex flex-col items-center justify-center text-center">

          <UploadCloud
            size={55}
            className="mb-4 text-violet-500"
          />

          <h2 className="text-2xl font-bold text-white">
            Upload Your Resume
          </h2>

          <p className="mt-3 text-slate-400">
            Drag & Drop your resume here
          </p>

          <p className="text-slate-500">or</p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            hidden
            ref={fileInputRef}
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setFile(e.target.files[0]);
              }
            }}
          />

          <button
            onClick={() => fileInputRef.current.click()}
            className="mt-5 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Browse File
          </button>

          {file && (
            <>
              <p className="mt-5 font-medium text-green-400">
                ✅ {file.name}
              </p>

              <button
                onClick={uploadResume}
                disabled={uploading}
                className="mt-4 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-700"
              >
                {uploading ? "Uploading..." : "Upload Resume"}
              </button>
            </>
          )}

          <p className="mt-5 text-sm text-slate-500">
            Supported formats: PDF • DOC • DOCX
          </p>
        </div>
      </div>

      {analysis && (
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">

          <h2 className="mb-6 text-3xl font-bold text-white">
            ATS Analysis
          </h2>

          <div className="mb-8 rounded-xl bg-violet-600 p-5 text-center">

            <p className="text-sm text-violet-100">
              Overall ATS Score
            </p>

            <h1 className="mt-2 text-5xl font-bold text-white">
              {analysis.overall_score}/100
            </h1>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-slate-800 p-4">
              Contact
              <div className="mt-2 text-2xl font-bold text-green-400">
                {analysis.section_scores.contact}
              </div>
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              Summary
              <div className="mt-2 text-2xl font-bold text-green-400">
                {analysis.section_scores.summary}
              </div>
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              Skills
              <div className="mt-2 text-2xl font-bold text-green-400">
                {analysis.section_scores.skills}
              </div>
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              Projects
              <div className="mt-2 text-2xl font-bold text-green-400">
                {analysis.section_scores.projects}
              </div>
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              Education
              <div className="mt-2 text-2xl font-bold text-green-400">
                {analysis.section_scores.education}
              </div>
            </div>

          </div>

          <div className="mt-8">

            <h3 className="mb-3 text-xl font-bold text-white">
              Skills Detected
            </h3>

            <div className="flex flex-wrap gap-2">

              {analysis.skills_found.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-violet-600 px-4 py-2 text-sm text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          <div className="mt-8">

            <h3 className="mb-3 text-xl font-bold text-white">
              Suggestions
            </h3>

            <ul className="space-y-2">

              {analysis.suggestions.map((item, index) => (
                <li
                  key={index}
                  className="rounded-lg bg-red-500/10 p-3 text-red-400"
                >
                  • {item}
                </li>
              ))}

            </ul>

          </div>

        </div>
      )}
    </>
  );
}