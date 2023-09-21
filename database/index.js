const mysql = require("mysql2")

//Se crea la conexion con la DB
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    connectionLimit: 100
}).promise();

module.exports = pool;