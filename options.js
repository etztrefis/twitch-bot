require("dotenv").config();

const options = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    prefix: "`",
    user: process.env.USER,
    dbname: process.env.DBNAME,
    pass: process.env.PASS,
    host: process.env.HOST,
    dialect: "mysql"
};

module.exports = options;