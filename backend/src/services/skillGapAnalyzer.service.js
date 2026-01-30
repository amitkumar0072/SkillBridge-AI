export const analyzeSkillGap = (resumeSkills, roleSkills) => {
  const strong = [];
  const needsImprovement = [];
  const missing = [];

  roleSkills.core.forEach(skill => {
    if (resumeSkills.includes(skill)) {
      strong.push(skill);
    } else {
      missing.push(skill);
    }
  });

  roleSkills.supporting.forEach(skill => {
    if (resumeSkills.includes(skill)) {
      strong.push(skill);
    } else {
      needsImprovement.push(skill);
    }
  });

  roleSkills.nice_to_have.forEach(skill => {
    if (!resumeSkills.includes(skill)) {
      needsImprovement.push(skill);
    }
  });

  return { strong, needsImprovement, missing };
};


export const calculateReadinessScore = (gapResult , roleSkills) =>{
    const totalCore = roleSkills.core.length;
    const missingCore = gapResult.missing.length;

    const coreScore = ((totalCore - missingCore) / totalCore) * 100;
    return Math.round(coreScore);
}