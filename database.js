require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "backendTest",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = "set foreign_key_checks = 0;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");
  });
  

  sql =
    "DROP TABLE if exists activity; CREATE TABLE user_data (id INT NOT NULL AUTO_INCREMENT, email: TEXT NOT NULL, password: TEXT NOT NULL, username: TEXT NOT NULL, firstName: TEXT NOT NULL, lastName: TEXT NOT NULL, address: TEXT NOT NULL, typeOfUser: INT, profession: TEXT NOT NULL, longitude: DECIMAL(11, 8), latitude: DECIMAL(10, 8), PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");
  });

  sql =
    "DROP TABLE if exists activity; CREATE TABLE client_data (id INT NOT NULL AUTO_INCREMENT, email: TEXT NOT NULL, password: TEXT NOT NULL, username: TEXT NOT NULL, firstName: TEXT NOT NULL, lastName: TEXT NOT NULL, address: TEXT NOT NULL, typeOfUser: INT, profession: TEXT, longitude: DECIMAL(11, 8), latitude: DECIMAL(10, 8), PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");
  });

});