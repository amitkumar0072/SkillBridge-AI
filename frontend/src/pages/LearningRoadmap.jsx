import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RoadmapCard = ({ item, open, onClick }) => (
  <div className="border rounded-xl overflow-hidden">
    <button
      onClick={onClick}
      className="w-full px-6 py-4 flex justify-between items-center bg-gray-100"
    >
      <div className="text-left">
        <h2 className="font-semibold">{item.week}</h2>
        <p className="text-sm text-gray-500">
          {item.focus}
        </p>
      </div>
      <span>{open ? "−" : "+"}</span>
    </button>

    {open && (
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-medium">Topics</h3>
          <ul className="list-disc list-inside text-sm mt-1">
            {item.topics.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium">Resources</h3>
          <ul className="text-sm mt-1 space-y-1">
            {item.resources.map((r, i) => (
              <li key={i}>
                <a
                  href={r.link}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium">Practice Tasks</h3>
          <ul className="list-disc list-inside text-sm mt-1">
            {item.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
);

const Roadmap = () => {
  const navigate = useNavigate();
  const [roadmap, setRoadmap] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("careerAnalysis");
    if (!stored) {
      navigate("/upload");
    } else {
      const parsed = JSON.parse(stored);
      setRoadmap(parsed.roadmap || []);
    }
  }, []);

  return (
    <div className="min-h-screen px-10 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">
        Personalized Learning Roadmap
      </h1>

      <div className="mt-8 space-y-4">
        {roadmap.map((item, idx) => (
          <RoadmapCard
            key={idx}
            item={item}
            open={openIndex === idx}
            onClick={() =>
              setOpenIndex(openIndex === idx ? -1 : idx)
            }
          />
        ))}
      </div>

      {/* Finish CTA */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Start Again
        </button>
      </div>
    </div>
  );
};

export default Roadmap;
