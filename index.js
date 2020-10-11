const tmi = require("tmi.js");
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

const client = new tmi.client(options);
client.connect(console.log('Successfully connected.')).catch(console.error);

client.on('message', (channel, tags, message, self) => {
    if (self) return;
    if (message.toLowerCase() === '`ping') {
        if (tags.username === 'trefis') {
            client.say(channel, `@${tags.username}, Reporting for duty! TriHard 7`)
        }
    }
});             