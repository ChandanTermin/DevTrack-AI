"use client";

import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";
export default function ResumeUpload() {
    const [file, setFile] = useState(null);

const fileInputRef = useRef(null);
  return (
    <div className="mb-8 rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900 p-10 transition hover:border-violet-500">

      <div className="flex flex-col items-center justify-center text-center">

        <UploadCloud
          size={55}
          className="mb-4 text-violet-500"
        />

        <h2 className="text-2xl font-bold">
          Upload Your Resume
        </h2>

        <p className="mt-3 text-slate-400">
          Drag & Drop your resume here
        </p>

        <p className="text-slate-500">
          or
        </p>

        <>
  <input
    type="file"
    accept=".pdf,.doc,.docx"
    ref={fileInputRef}
    hidden
    onChange={(e) => {
      if (e.target.files.length > 0) {
        setFile(e.target.files[0]);
      }
    }}
  />

  <button
    onClick={() => fileInputRef.current.click()}
    className="mt-5 rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-700"
  >
    Browse File
  </button>
</>

        <p className="mt-5 text-sm text-slate-500">
          Supported formats: PDF • DOC • DOCX
        </p>
        {file && (
  <p className="mt-5 text-green-400 font-medium">
    ✅ {file.name}
  </p>
)}

      </div>

    </div>
  );
}