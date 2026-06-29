export default function ATSAnalysis({ analysis }) {
  if (!analysis) return null;

  return (
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
  );
}