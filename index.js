require("dotenv").config();
const { ChatClient } = require("dank-twitch-irc");
const options = require('./options.js')
const ping = require('./commands/ping/index.js');
const repos = require('./commands/repositories/index.js');
const python = require('./commands/python/index.js');
const cock = require('./commands/cock/index.js');
const booba = require('./commands/booba/index.js');
const strimink = require('./commands/strimink/index.js');

let client = new ChatClient(options);

client.on("ready", () => console.log("Ready."))
client.on("close", (error => {
    if (error != null) {
        console.error(error);
    }
}))

client.on("PRIVMSG", async (message) => {
    if (message.messageText.charAt(0) === options.prefix) {
        let args = message.messageText.substring(1).toLowerCase().split(' ');
        switch (true) {
            case (ping.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `@${message.displayName}, ${await ping.Code()}`);
                break;
            }
            case (python.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `${await python.Code()}`);
                break;
            }
            case (cock.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `${await cock.Code()}`);
                break;
            }
            case (repos.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `@${message.displayName}, ${await repos.Code(args[1], args[2])}`);
                break;
            }
            case (booba.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `${await booba.Code()}`);
                break;
            }
            case (strimink.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `${await strimink.Code()}`)
            }
        }
    }
});

client.connect();

(async () => {
    try {
        await client.join("trefis");
    } catch (error) {
        console.log("Error: timed out Okayeg");
    }
})();

// client.on('message', async (channel, tags, message, self) => {
//     if (self) return;

//     let prefix = message.charAt(0);
//     let args = message.substring(1).toLowerCase().split(' ');

//     if (prefix == options.prefix) {
//         //PING COMMAND
//         if (ping.Aliases.indexOf(args[0]) > -1) {
//             client.say(channel, `@${tags.username}, ${await ping.Code()}`);
//         }
//         //PYTHON COMMAND
//         if (python.Aliases.indexOf(args[0]) > -1) {
//             client.say(channel, `${await python.Code()}`);
//         }
//         //REPOS COMMAND
//         if (repos.Aliases.indexOf(args[0]) > -1) {
//             repos.Code(args[1], args[2]).then((messages) => {
//                 client.say(channel, `@${tags.username}, ${messages}`);
//             });
//         }
//         //COMMANDS COMMAND
//         if (ping.Aliases.indexOf(message[0]) > -1) {
//             let commandsQuery = '';
//             for (let i = 0; i < commands.length; i++) {
//                 commandsQuery += ` ${commands[i]}, `;
//             }

//             client.say(channel, `@${tags.username}, ${commandsQuery}`)
//         }

//         if (message[0].toLowerCase() === '`help') {
//             switch (message[1]) {
//                 case 'repos':
//                     client.say(channel, `Shows all public github repositories of user that indicated as argument. Type '--full' as third agrument after username for total information. Format: N - repository name, F - is forked? and L - programming languague.`);
//                     break;
//                 case 'ping':
//                     client.say(channel, `Ping!`);
//                     break;
//                 case 'commands':
//                     client.say(channel, `Shows list of all commands that you can use.`);
//                     break;
//                 case undefined:
//                     client.say(channel, `No args specified!`);
//                     break;
//                 default:
//                     client.say(channel, 'idk... FeelsDankMan');
//             }
//         }
//     }
// });