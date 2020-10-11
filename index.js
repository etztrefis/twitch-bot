const tmi = require("tmi.js");
const axios = require('axios');
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

    message = message.split(' ');

    if (message[0].toLowerCase() === '`ping') {
        if (tags.username === 'trefis') {
            client.say(channel, `@${tags.username}, Pong! Reporting for duty! TriHard 7`)
        }
    }

    if (message[0].toLowerCase() === '`repos') {
        if (message[2] === "--full") {
            let query = '';
            axios({
                method: 'get',
                url: `https://api.github.com/users/${message[1]}/repos`,
                responseType: 'json',
            })
                .then(function (response) {
                    for (let i = 0; i < response.data.length; i++) {
                        query += ` N: ${response.data[i]['name']}, F:  ${response.data[i]['fork']}, L:  ${response.data[i]['language']} ❗ `;
                    }
                    client.say(channel, `@${tags.username}, ${query}`);
                })
                .catch(function (err) {
                    console.error(err);
                })
        }
        else {
            let query = '';
            axios({
                method: 'get',
                url: `https://api.github.com/users/${message[1]}/repos`,
                responseType: 'json',
            })
                .then(function (response) {
                    for (let i = 0; i < response.data.length; i++) {
                        query += ` N: ${response.data[i]['name']}❗ `;
                    }
                    client.say(channel, `@${tags.username}, ${query}`);
                })
                .catch(function (err) {
                    console.error(err);
                })
        }
    }

    if (message[0].toLowerCase() === '`help') {
        switch (message[1]) {
            case 'repos':
                client.say(channel, `Shows all public github repositories of user that indicated as argument. Type '--full' as third agrument after username for total information. Format: N - repository name, F - is forked? and L - programming languague.`);
                break;
            case 'ping':
                client.say(channel, `Ping!`);
                break;
            case undefined:
                client.say(channel, `No args specified!`);
                break;
            default:
                client.say(channel, 'idk... FeelsDankMan');
        }
    }
});
