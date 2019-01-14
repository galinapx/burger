var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "wiad5ra41q8129zn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "zvcnngb4o0j3wuuz",
  password: "du0ifim9r3vmsfgg",
  database: "w08a9kjlc7o4j5i6"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
