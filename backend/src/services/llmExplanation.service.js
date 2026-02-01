import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export const generateCareerExplanation = async ({
  targetRole,
  skillGap,
  readinessScore,
  roadmap
}) => {
  const prompt = `
You are a career guidance assistant.

Given:
Target Role: ${targetRole}
Readiness Score: ${readinessScore}%

Strong Skills: ${skillGap.strong.join(", ")}
Skills Needing Improvement: ${skillGap.needsImprovement.join(", ")}
Missing Skills: ${skillGap.missing.join(", ")}

Weekly Roadmap:
${roadmap.map(w => `${w.week}: ${w.skill}`).join("\n")}

Tasks:
1. Write a short profile summary (3–4 lines).
2. Explain why the missing skills matter for this role.
3. Explain how the roadmap will help improve readiness.
4. Keep the tone practical, not motivational.
5. Do NOT invent new skills.

Return output strictly as valid JSON with keys:
profileSummary, skillGapExplanation, roadmapExplanation
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    response_format: { type: "json_object" } // 🔥 forces JSON only
  });


  console.log("Groq Response:", response.choices[0].message.content);
  // Groq guarantees valid JSON here
  return response.choices[0].message.content;
};
