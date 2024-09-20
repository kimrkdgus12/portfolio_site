const mysql = require("mysql2")

const conn = mysql.createConnection({
    // host: process.env.DB_HOST,
    // port : process.env.DB_PORT,
    // database: process.env.DB_DATABASE,
    // password: process.env.DB_PASSWORD,
    // user: process.env.DB_USER

    host: "project-db-stu3.smhrd.com",
    port: "3307",
    database: "Insa5_JSA_hacksim_2",
    password: "aischool2",
    user: "Insa5_JSA_hacksim_2"
});

conn.connect()
module.exports = conn;