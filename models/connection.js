var mysql = require('mysql');

var con = mysql.createPool({
    connectionLimit: 50,
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "b414c39104cf93",
    password: "67640951",
    database: "heroku_5ec38031bc367ea"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

module.exports = con;
