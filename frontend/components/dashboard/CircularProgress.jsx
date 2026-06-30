export default function CircularProgress({
  score,
  size = 190,
  strokeWidth = 14,
}) {
  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const progress =
    circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">

      <svg
        width={size}
        height={size}
        className="-rotate-90"
      >

        <defs>

          <linearGradient
            id="gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >

            <stop
              offset="0%"
              stopColor="#8b5cf6"
            />

            <stop
              offset="100%"
              stopColor="#06b6d4"
            />

          </linearGradient>

        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#1e293b"
          strokeWidth={strokeWidth}
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          style={{
            transition:
              "stroke-dashoffset 1.5s ease",
          }}
        />

      </svg>

      <div className="absolute text-center">

        <h1 className="text-5xl font-bold text-white">
          {score}
        </h1>

        <p className="mt-2 text-slate-400">
          ATS Score
        </p>

      </div>

    </div>
  );
}