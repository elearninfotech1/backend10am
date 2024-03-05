let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3308,
  user: "root",
  password: "123456",
  database: "db10am",
});

connection.connect((err, suc) => {
  if (err) throw err;
  //console.log("connected");
});

module.exports = connection;
