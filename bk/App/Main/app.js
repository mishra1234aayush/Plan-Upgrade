const express = require("express");
const cors = require("cors");
const planRoutes = require("../Routes/planRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", planRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
