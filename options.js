require("dotenv").config();

const options = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    prefix: "`",
};

module.exports = options;