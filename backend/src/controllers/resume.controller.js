import { extractTextFromPDF } from "../services/pdfParser.service.js";
import { extractSkillsFromText, detectExperienceLevel } from "../services/skillExtractor.service.js";
import path from "path";

export const uploadResume = async (req, res) => {
  try {
    const filePath = path.resolve(req.file.path);

    const resumeText = await extractTextFromPDF(filePath);
    const skills = extractSkillsFromText(resumeText);
    const experienceLevel = detectExperienceLevel(resumeText);

    res.status(200).json({
      message: "Resume processed successfully",
      extractedData: {
        skills,
        experienceLevel
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Resume parsing failed" });
  }
};
