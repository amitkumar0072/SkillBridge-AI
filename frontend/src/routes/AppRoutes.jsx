import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import UploadResume from "../pages/UploadResume";
import AnalysisOverview from "../pages/AnalysisOverview";
import SkillGap from "../pages/SkillGap";
import LearningRoadmap from "../pages/LearningRoadmap";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/upload" element={<UploadResume />} />
      <Route path="/overview" element={<AnalysisOverview />} />
      <Route path="/skill-gap" element={<SkillGap />} />
      <Route path="/roadmap" element={<LearningRoadmap />} />
    </Routes>
  );
};
export default AppRoutes;