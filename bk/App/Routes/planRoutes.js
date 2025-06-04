const express = require("express");
const router = express.Router();
const { upgradePlan } = require("../Controller/planController");

router.post("/upgrade-plan", upgradePlan);

module.exports = router;
