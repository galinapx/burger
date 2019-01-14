var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "wiad5ra41q8129zn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "g999vp0u4zysppad",
  password: "du0ifim9r3vmsfgg",
  database: "kmxil3b7hscovnsh"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting!!!: " + err.stack);
    return;
  }
  console.log("connected as id !!!" + connection.threadId);
});

module.exports = connection;
