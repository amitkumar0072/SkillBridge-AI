

const SKILL_KEYWORDS = {
  programming: ["javascript", "python", "c++", "java"],
  frontend: ["react", "redux", "html", "css", "tailwind"],
  backend: ["node", "express", "mongodb", "sql"],
  devops: ["docker", "aws", "gcp", "kubernetes"],
  ai_ml: ["machine learning", "deep learning", "pytorch", "tensorflow"]
};

export const extractSkillsFromText = (text) => {
  const lowerText = text.toLowerCase();
  const foundSkills = new Set();

  Object.values(SKILL_KEYWORDS).flat().forEach(skill => {
    if (lowerText.includes(skill)) {
      foundSkills.add(skill);
    }
  });

  return Array.from(foundSkills);
};
export const detectExperienceLevel = (text) => {
    const lowerText = text.toLowerCase();
    if(lowerText.includes("senior") || lowerText.includes("5+ years") ){ return "Senior Level";}
    if (lowerText.includes("intern")) return "Entry Level";
    if (lowerText.includes("2+ years") || lowerText.includes("3+ years")) return "Mid Level";

    return "Entry Level";

};

