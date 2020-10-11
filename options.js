require("dotenv").config();

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    },
    channels: ['trefis']
};

module.exports = options;