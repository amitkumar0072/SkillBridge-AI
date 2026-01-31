import { LEARNING_RESOURCES } from "../data/learningResources.js";

export const generateLearningRoadmap = (skillGap) => {
  const roadmap = [];
  let week = 1;

  const prioritySkills = [
    ...skillGap.missing,
    ...skillGap.needsImprovement
  ];

  prioritySkills.forEach(skill => {
    const resource = LEARNING_RESOURCES[skill];

    if (!resource) return;

    roadmap.push({
      week: `Week ${week}`,
      skill,
      topics: resource.topics,
      resources: resource.resources,
      miniProject: resource.project
    });

    week++;
  });

  return roadmap;
};
