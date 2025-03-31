const express = require("express");
const dotenv = require("dotenv");
const assignmentRoutes = require("./routes/assignmentRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/assignments", assignmentRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
