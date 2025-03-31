const { db } = require("../config/firebase");
const { gradeAssignment } = require("../services/aiGradingService");

const checkAssignment = async (req, res) => {
  const { assignmentId } = req.params;

  try {
    const assignmentRef = db.collection("assignments").doc(assignmentId);
    const assignmentSnap = await assignmentRef.get();

    if (!assignmentSnap.exists) {
      return res.status(404).json({ error: "Assignment not found." });
    }

    const assignmentData = assignmentSnap.data();
    const { content: question, submitted = [] } = assignmentData;

    if (!question) {
      return res.status(400).json({ error: "Assignment has no question content." });
    }

    let aiResponses = [];

    for (const submission of submitted) {
      const { email, content: studentAnswer } = submission;
      const report = await gradeAssignment(question, studentAnswer);
      aiResponses.push({ studentEmail: email, report });
    }

    await assignmentRef.update({ airesponse: aiResponses });

    res.json({ message: "Assignment checked successfully", aiResponses });
  } catch (error) {
    console.error("Error checking assignment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { checkAssignment };
