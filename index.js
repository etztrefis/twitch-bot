const tmi = require('tmi.js');
const axios = require('axios');
const options = require('./options.js')
const ping = require('./commands/ping/index.js');
const repos = require('./commands/repositories/index.js');

const commands = [`ping`, `repos`, `help`, `commands`];

const client = new tmi.client(options);
client.connect(console.log('Successfully connected.')).catch(console.error);

client.on('message', async (channel, tags, message, self) => {
    if (self) return;

    let prefix = message.charAt(0);
    let body = message.substring(1);
    let args = body.toLowerCase().split(' ');

if(prefix == options.prefix){
    //PING COMMAND
    if (ping.Aliases.indexOf(body) > -1) {
        client.say(channel, `@${tags.username}, ${await ping.Code()}`);
    }
    //COMMANDS COMMAND
    if (ping.Aliases.indexOf(message[0]) > -1) {
        let commandsQuery = '';
        for (let i = 0; i < commands.length; i++) {
            commandsQuery += ` ${commands[i]}, `;
        }

        client.say(channel, `@${tags.username}, ${commandsQuery}`)
    }
    //REPOS COMMAND
    if (repos.Aliases.indexOf(body) > -1) {
        console.log("working");
    }

    if (message[0].toLowerCase() === '`help') {
        switch (message[1]) {
            case 'repos':
                client.say(channel, `Shows all public github repositories of user that indicated as argument. Type '--full' as third agrument after username for total information. Format: N - repository name, F - is forked? and L - programming languague.`);
                break;
            case 'ping':
                client.say(channel, `Ping!`);
                break;
            case 'commands':
                client.say(channel, `Shows list of all commands that you can use.`);
                break;
            case undefined:
                client.say(channel, `No args specified!`);
                break;
            default:
                client.say(channel, 'idk... FeelsDankMan');
        }
    }
}
});