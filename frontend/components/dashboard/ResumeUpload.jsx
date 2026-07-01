"use client";

import { useRef, useState } from "react";
import axios from "axios";
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaCheckCircle,
  FaTrash,
} from "react-icons/fa";

import ATSAnalysis from "./ATSAnalysis";
import JDMatcher from "./JDMatcher";

export default function ResumeUpload({
  analysis,
  setAnalysis,
  resumeText,
  setResumeText,
  jdResult,
  setJdResult,
}) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
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
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">

        <div className="flex flex-col items-center text-center">

          <FaCloudUploadAlt
            size={70}
            className="text-blue-500"          />

          <h2 className="mt-5 text-3xl font-bold text-white">
            Upload Your Resume
          </h2>

          <p className="mt-3 text-slate-400">
            Drag & Drop your resume or browse your computer.
          </p>

          <input
            hidden
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setFile(e.target.files[0]);
              }
            }}
          />

          <button
            onClick={() => fileInputRef.current.click()}
            className="mt-6 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Browse Resume
          </button>

          {file && (

            <div className="mt-8 w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-800 p-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <FaFilePdf
                    size={35}
                    className="text-red-500"
                  />

                  <div className="text-left">

                    <h3 className="font-semibold text-white">
                      {file.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => setFile(null)}
                  className="text-red-400 transition hover:text-red-500"
                >
                  <FaTrash size={20} />
                </button>

              </div>

              <div className="mt-5 flex items-center gap-2 text-green-400">

                <FaCheckCircle />

                <span>Ready to upload</span>

              </div>

            </div>

          )}

          {file && (

            <button
              onClick={uploadResume}
              disabled={uploading}
              className="mt-8 rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700 disabled:bg-slate-700"
            >
{uploading ? "Analyzing..." : "Analyze Resume"}            </button>

          )}

        </div>

      </div>

<section id="ats">
  <ATSAnalysis analysis={analysis} />
</section>
      {resumeText && (
  <section id="jd">
    <JDMatcher resumeText={resumeText} />
  </section>
)}
    </>
  );
}