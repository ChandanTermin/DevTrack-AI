import CircularProgress from "./CircularProgress";

export default function ATSAnalysis({ analysis }) {
  if (!analysis) return null;

  const sections = [
    { name: "Contact", score: analysis.section_scores.contact, total: 10 },
    { name: "Summary", score: analysis.section_scores.summary, total: 10 },
    { name: "Skills", score: analysis.section_scores.skills, total: 20 },
    { name: "Projects", score: analysis.section_scores.projects, total: 20 },
    { name: "Education", score: analysis.section_scores.education, total: 10 },
  ];

  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

      {/* Header */}
      <div className="mb-10 flex flex-col items-center">

        <h2 className="text-3xl font-bold text-white">
          ATS Resume Analysis
        </h2>

        <div className="mt-8">
          <CircularProgress score={analysis.overall_score} />
        </div>

      </div>

      {/* Section Scores */}
      <h3 className="mb-5 text-2xl font-semibold text-white">
        Section Scores
      </h3>

      <div className="space-y-5">

        {sections.map((section) => {
          const percentage = (section.score / section.total) * 100;

          return (
            <div key={section.name}>

              <div className="mb-2 flex justify-between">

                <span className="font-medium text-white">
                  {section.name}
                </span>

                <span className="font-semibold text-violet-400">
                  {section.score}/{section.total}
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                <div
                  className="h-full rounded-full bg-violet-500 transition-all duration-700"
                  style={{ width: `${percentage}%` }}
                />

              </div>

            </div>
          );
        })}

      </div>

      {/* Skills */}
      <div className="mt-10">

        <h3 className="mb-4 text-2xl font-semibold text-white">
          Skills Detected
        </h3>

        <div className="flex flex-wrap gap-3">

          {analysis.skills_found.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-violet-500 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

      {/* Suggestions */}
      <div className="mt-10">

        <h3 className="mb-4 text-2xl font-semibold text-white">
          ATS Suggestions
        </h3>

        {analysis.suggestions.length === 0 ? (

          <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-400">
            ✅ Excellent! Your resume meets all ATS checks.
          </div>

        ) : (

          <div className="space-y-3">

            {analysis.suggestions.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-300"
              >
                ⚠️ {item}
              </div>
            ))}

          </div>

        )}

      </div>

    </div>
  );
}