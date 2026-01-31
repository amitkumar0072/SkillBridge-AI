import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const UploadResume = () => {
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);
  const [role, setRole] = useState("AIML");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!resume) {
      setError("Please upload a resume");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("targetRole", role);

    try {
      const response = await API.post("/resume/upload", formData);

      // Save analysis temporarily
      localStorage.setItem(
        "careerAnalysis",
        JSON.stringify(response.data)
      );

      navigate("/overview");
    } catch (err) {
      setError("Resume analysis failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md p-8 border rounded-xl">
        <h1 className="text-2xl font-semibold text-center">
          Upload Your Resume
        </h1>

        {/* File Upload */}
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setResume(e.target.files[0])}
          className="mt-6 w-full"
        />

        {/* Role Selection */}
        <select
          className="mt-4 w-full border p-2 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="SDE">Software Development Engineer</option>
          <option value="AIML">AI / ML Engineer</option>
          <option value="DEVOPS">DevOps Engineer</option>
        </select>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mt-3">{error}</p>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 w-full bg-black text-white py-2 rounded-lg"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </div>
    </div>
  );
};

export default UploadResume;
