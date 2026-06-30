"use client";

import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";

import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <section className="flex-1 p-10">

        <Header />

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-blue-600 p-4">
              <Settings size={28} />
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Settings
              </h2>

              <p className="mt-2 text-slate-400">
                Customize your DevTrack AI experience.
              </p>

            </div>

          </div>

          <div className="mt-10 space-y-6">

            <div className="rounded-2xl border border-slate-800 p-6">
              <h3 className="font-semibold">Theme</h3>
              <p className="mt-2 text-slate-400">
                Dark Mode (Coming Soon)
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-6">
              <h3 className="font-semibold">Notifications</h3>
              <p className="mt-2 text-slate-400">
                Email notifications (Coming Soon)
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}