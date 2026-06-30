"use client";

import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";

import { FileDown } from "lucide-react";

export default function ReportsPage() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <section className="flex-1 p-10">

        <Header />

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-blue-600 p-4">
              <FileDown size={28} />
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Reports
              </h2>

              <p className="mt-2 text-slate-400">
                View and download your generated ATS reports.
              </p>

            </div>

          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-slate-700 p-10 text-center">

            <h3 className="text-xl font-semibold">
              No Reports Yet
            </h3>

            <p className="mt-3 text-slate-400">
              Generate a PDF report after analyzing a resume.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}