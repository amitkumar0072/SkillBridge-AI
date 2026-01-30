import { extractTextFromPDF } from "../services/pdfParser.service.js";
import { extractSkillsFromText, detectExperienceLevel } from "../services/skillExtractor.service.js";
import { ROLE_SKILLS } from "../data/roleSkills.js";
import { analyzeSkillGap, calculateReadinessScore } from "../services/skillGapAnalyzer.service.js";

import path from "path";

export const uploadResume = async (req, res) => {
  try {
    const filePath = path.resolve(req.file.path);

    const resumeText = await extractTextFromPDF(filePath);
    const skills = extractSkillsFromText(resumeText);
    const experienceLevel = detectExperienceLevel(resumeText);

    const targetRole = req.body.targetRole || "SDE";
    const roleSkills = ROLE_SKILLS[targetRole];

    const gapAnalysis = analyzeSkillGap(skills, roleSkills);
    const readinessScore = calculateReadinessScore(gapAnalysis, roleSkills);
    

   res.status(200).json({
  message: "Career analysis complete",
  targetRole,
  skillsExtracted: skills,
  skillGap: gapAnalysis,
  readinessScore,
  experienceLevel
});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Resume parsing failed" });
  }
};
