import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AnalysisOverview = () => {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("careerAnalysis");

    if (!stored) {
      navigate("/upload");
    } else {
      setAnalysis(JSON.parse(stored));
    }
  }, []);

  if (!analysis) return null;

  const {
    targetRole,
    readinessScore,
    explanations
  } = analysis;

  return (
    <div className="min-h-screen px-10 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">
        Career Analysis Overview
      </h1>

      {/* Role + Score */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl">
          <h2 className="text-lg font-semibold">Target Role</h2>
          <p className="mt-2 text-xl">{targetRole}</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h2 className="text-lg font-semibold">Readiness Score</h2>
          <p className="mt-2 text-3xl font-bold">
            {readinessScore}%
          </p>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="mt-8 p-6 border rounded-xl">
        <h2 className="text-lg font-semibold">
          Profile Summary
        </h2>
        <p className="mt-3 text-gray-700">
            {explanations}
          {/* {explanations}?.profileSummary ||
            "Summary not available"} */}
        </p>
      </div>

      {/* Navigation */}
      <div className="mt-10 text-right">
        <button
          onClick={() => navigate("/skill-gap")}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          View Skill Gap →
        </button>
      </div>
    </div>
  );
};

export default AnalysisOverview;
