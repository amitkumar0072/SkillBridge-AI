import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-24 px-6">
      <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
        AI-Powered Career Guidance, Built on Skills Not Hype
      </h1>

      <p className="mt-6 text-gray-600 max-w-xl">
        Upload your resume, choose a role, and get a clear skill-gap analysis
        with a personalized learning roadmap.
      </p>

      <Link
        to="/upload"
        className="mt-8 bg-black text-white px-8 py-3 rounded-lg"
      >
        Analyze My Career
      </Link>
    </section>
  );
};

export default HeroSection;
