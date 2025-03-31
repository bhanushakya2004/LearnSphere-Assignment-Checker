const fetch = require("node-fetch");

const gradeAssignment = async (question, studentAnswer) => {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemini-flash-1.5-8b-exp",
        messages: [
          { role: "system", content: "You are an AI assignment grader." },
          { role: "user", content: `Question: ${question}\nStudent's Answer: ${studentAnswer}\nEvaluate the answer and provide a mark (out of 10) along with a short report.` }
        ]
      })
    });

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "Error in grading.";
    return aiResponse;
  } catch (error) {
    console.error("AI grading failed:", error);
    return "Grading service is unavailable.";
  }
};

module.exports = { gradeAssignment };
