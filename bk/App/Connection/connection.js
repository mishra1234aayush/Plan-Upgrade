const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ayush@124",    
  database: "Plan_app" 
});

connection.connect((err) => {
  if (err) {
    console.error("DB Connection Error:", err);
  } else {
    console.log("✅ MySQL connected!");
  }
});

module.exports = {connection};
