//npm i mysql12
//MYSQL2
const mysql = require("mysql12/promise")


const pool = mysql.createPool({
    host: "217.0.0.1",
    port: 3306,
    user: "root",
    password: "escola",
    database: "Rafaelly2dsb"
})
module.exports = Object.freeze({
    pool: pool
})