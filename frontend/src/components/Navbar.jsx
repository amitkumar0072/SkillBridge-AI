import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b">
      <h1 className="text-xl font-bold">AI Career Navigator</h1>

      <Link
        to="/upload"
        className="bg-black text-white px-5 py-2 rounded-lg"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
