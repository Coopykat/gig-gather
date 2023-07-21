require("dotenv").config();

const mysql = require("mysql2/promise");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = mysql.createPool({
    host: process.env.DB_HOST, // address of the server
    port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the APP_PORT !
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  db
  .getConnection()
  .then(() => {
    console.log("Can reach database");
  })
  .catch((err) => {
    console.error(err);
  });

  module.exports = db;