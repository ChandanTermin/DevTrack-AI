"use client";

import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import StatsCard from "../../components/dashboard/StatsCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import ResumeUpload from "../../components/dashboard/ResumeUpload";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <section className="flex-1 p-10">

        <Header />
        <ResumeUpload />

<div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <StatsCard
            title="Resume Score"
            value="82%"
            subtitle="+6% this week"
          />

          <StatsCard
            title="Applications"
            value="14"
            subtitle="3 pending"
          />

          <StatsCard
            title="Interview Calls"
            value="3"
            subtitle="2 this month"
          />

          <StatsCard
            title="GitHub Score"
            value="91"
            subtitle="Excellent"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
  <QuickActions />
  <RecentActivity />
</div>

        </div>

      </section>

    </main>
  );
}