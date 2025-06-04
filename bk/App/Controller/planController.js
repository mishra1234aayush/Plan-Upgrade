const {connection} = require("../Connection/connection");

const upgradePlan = (req, res) => {
  const { plan } = req.body;
  
  const allowedPlans = ["Free", "Bronze", "Silver", "Gold"];

  if (!allowedPlans.includes(plan)) {
    return res.status(400).json({ message: "Invalid plan selected" });
  }

  const userId = 1; 

  const sql = "UPDATE users SET plan = ? WHERE id = ?";
  connection.query(sql, [plan, userId], (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "Failed to upgrade plan" });
    }

    return res.status(200).json({ message: "Plan upgraded", plan });
  });
};

module.exports = { upgradePlan };
