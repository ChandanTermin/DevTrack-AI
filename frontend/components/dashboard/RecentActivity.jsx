"use client";

import { CheckCircle2 } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    "Resume uploaded successfully",
    "Applied to Oracle Internship",
    "ATS Score improved to 82%",
    "Java skill added",
  ];

  return (
<div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <CheckCircle2
              size={18}
              className="text-green-500"
            />

            <p className="text-slate-300">
              {activity}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}