import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SkillColumn = ({ title, skills, color }) => (
  <div className="p-6 border rounded-xl">
    <h2 className={`text-lg font-semibold ${color}`}>
      {title}
    </h2>

    {skills.length === 0 ? (
      <p className="mt-4 text-gray-400 text-sm">
        No skills here
      </p>
    ) : (
      <ul className="mt-4 space-y-2">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="px-3 py-2 bg-gray-100 rounded-lg"
          >
            {skill}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const SkillGap = () => {
  const navigate = useNavigate();
  const [gap, setGap] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("careerAnalysis");
    if (!stored) {
      navigate("/upload");
    } else {
      const parsed = JSON.parse(stored);
      setGap(parsed.skillGap);
    }
  }, []);

  if (!gap) return null;

  return (
    <div className="min-h-screen px-10 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">
        Skill Gap Analysis
      </h1>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <SkillColumn
          title="Strong Skills"
          skills={gap.strong}
          color="text-green-600"
        />

        <SkillColumn
          title="Needs Improvement"
          skills={gap.needsImprovement}
          color="text-yellow-600"
        />

        <SkillColumn
          title="Missing Skills"
          skills={gap.missing}
          color="text-red-600"
        />
      </div>

      {/* Navigation */}
      <div className="mt-10 text-right">
        <button
          onClick={() => navigate("/roadmap")}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          View Learning Roadmap →
        </button>
      </div>
    </div>
  );
};

export default SkillGap;
