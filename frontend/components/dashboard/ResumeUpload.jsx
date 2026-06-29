"use client";

import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";
import axios from "axios";
import ATSAnalysis from "./ATSAnalysis";
import JDMatcher from "./JDMatcher";

export default function ResumeUpload() {
  const [resumeText, setResumeText] = useState("");
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

      setAnalysis(response.data.analysis);
      setResumeText(response.data.resume_text);

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

            <ATSAnalysis analysis={analysis} />

      <p className="text-white text-2xl">
        Resume Text Length: {resumeText.length}
      </p>

      <JDMatcher resumeText={resumeText} />
    </>
  );
}