const express = require("express");
const { checkAssignment } = require("../controllers/assignmentController");

const router = express.Router();

router.get("/check/:assignmentId", checkAssignment);

module.exports = router;
