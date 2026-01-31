import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 text-center px-6">
      <h2 className="text-3xl font-bold">
        Stop Guessing. Start Building the Right Skills.
      </h2>

      <p className="mt-4 text-gray-600">
        Clear guidance. Real skill gaps. Practical roadmap.
      </p>

      <Link
        to="/upload"
        className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-lg"
      >
        Start Career Analysis
      </Link>
    </section>
  );
};

export default CTASection;
