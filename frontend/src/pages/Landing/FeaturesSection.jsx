const features = [
  {
    title: "Resume-Based Analysis",
    desc: "We analyze your real resume, not a generic questionnaire."
  },
  {
    title: "Skill Gap Breakdown",
    desc: "See exactly which skills are strong, missing, or need improvement."
  },
  {
    title: "Actionable Roadmap",
    desc: "Get a week-by-week learning plan with projects and resources."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-10 bg-gray-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-xl bg-white"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
