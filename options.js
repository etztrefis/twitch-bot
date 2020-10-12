require("dotenv").config();

const options = {
    prefix: "`",
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