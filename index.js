require("dotenv").config();
const { ChatClient } = require("dank-twitch-irc");
const { Sequelize, QueryTypes } = require("sequelize");
const options = require("./options.js");

const ping = require("./commands/ping/index.js");
const repos = require("./commands/repositories/index.js");
const python = require("./commands/python/index.js");
const cock = require("./commands/cock/index.js");
const booba = require("./commands/booba/index.js");
const strimink = require("./commands/strimink/index.js");
const test = require("./commands/test/index.js");
const userid = require("./commands/userid/index.js");
const whois = require("./commands/whois/index.js");
const vanish = require("./commands/vanish/index.js");
const asBot = require("./commands/as_bot/index.js");
const forsenHead = require("./commands/forsenHead/index.js");
const commands = require("./commands/commands/index.js");
const help = require("./commands/help/index.js");

let client = new ChatClient(options);

const sequelize = new Sequelize(
	process.env.DBNAME,
	process.env.USER,
	process.env.PASS,
	{
		host: process.env.HOST,
		dialect: "mysql",
	}
);

client.on("ready", () => console.log("Ready."));
client.on("close", (error) => {
	if (error != null) {
		console.error(error);
	}
});
client.say("feelsokayegbot", `monkaS`);
(async () => {
	await sequelize.query(`DELETE FROM Cooldowns`, { type: QueryTypes.DELETE });
})();
client.on("PRIVMSG", async (message) => {
	let time = new Date()
		.toLocaleString()
		.replace(/T/, " ")
		.replace(/\..+/, "");
	console.log(
		`${time} #${message.channelName} [${message.displayName}] ${message.messageText}`
	);

	if (message.messageText.charAt(0) === options.prefix) {
		let args = message.messageText.substring(1).toLowerCase().split(" ");

		switch (true) {
			case ping.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					client.say(
						message.channelName,
						`@${message.displayName}, ${await ping.Code()}`
					);
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});

					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, ping.Cooldown);
				}
				break;
			}

			case python.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					client.say(message.channelName, `${await python.Code()}`);
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});

					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, python.Cooldown);
				}
				break;
			}

			case cock.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					client.say(message.channelName, `${await cock.Code()}`);
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});
					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, cock.Cooldown);
				}
				break;
			}

			case repos.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					if (!args[1]) {
						client.say(
							message.channelName,
							`@${message.displayName}
                        , You cannot use this command without specifying a target.`
						);
					} else {
						const string = await repos.Code(args[1]);
						if (string.length >= 500) {
							client.say(
								message.channelName,
								`@${message.displayName}, большое говно`
							);
							//TODO: MESSAGE SEPARATOR
						} else {
							client.say(
								message.channelName,
								`@${message.displayName}, ${string}`
							);
						}
					}
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});
					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, repos.Cooldown);
				}
				break;
			}

			case booba.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					client.say(message.channelName, `${await booba.Code()}`);
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});
					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, booba.Cooldown);
				}
				break;
			}

			case strimink.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					client.say(message.channelName, `${await strimink.Code()}`);
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});
					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, strimink.Cooldown);
				}
				break;
			}

			case test.Aliases.indexOf(args[0]) > -1: {
				if (message.displayName === "trefis") {
					const commandUsed = await sequelize.query(
						`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
						{ type: QueryTypes.SELECT }
					);
					if (commandUsed.length == 0) {
						client.say(message.channelName, `${await test.Code()}`);
						await sequelize
							.query(
								`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
								{ type: QueryTypes.INSERT }
							)
							.catch((error) => {
								console.error(error);
							});
						setTimeout(() => {
							sequelize.query(
								`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
								{ type: QueryTypes.DELETE }
							);
						}, test.Cooldown);
					}
				}
				break;
			}

			case userid.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					if (!args[1]) {
						client.say(
							message.channelName,
							`@${message.displayName}, Please specify a target.`
						);
					} else {
						client.say(
							message.channelName,
							`@${message.displayName}, ${await userid.Code(
								args[1]
							)}`
						);
					}
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});
					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, userid.Cooldown);
				}
				break;
			}

			case whois.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					if (!args[1]) {
						client.say(
							message.channelName,
							`@${message.displayName}, Please specify a target.`
						);
					} else {
						client.say(
							message.channelName,
							`@${message.displayName}, ${await whois.Code(
								args[1]
							)}`
						);
					}
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});
					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, whois.Cooldown);
				}
				break;
			}

			case vanish.Aliases.indexOf(args[0]) > -1: {
				client.privmsg(message.channelName, await vanish.Code(message));
				break;
			}

			case asBot.Aliases.indexOf(args[0]) > -1: {
				if (
					message.badges.hasModerator ||
					message.badges.hasBroadcaster
				) {
					if (!args[1]) {
						client.say(message.channelName, `Okayeg`);
					} else {
						client.say(
							message.channelName,
							await asBot.Code(args[1])
						);
					}
				}
				break;
			}

			case forsenHead.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					if (args[1]) {
						if (args[1].charAt(0) == "@") {
							client.say(
								message.channelName,
								`${args[1]}, ${await forsenHead.Code()}`
							);
						} else {
							client.say(
								message.channelName,
								`@${args[1]}, ${await forsenHead.Code()}`
							);
						}
					} else {
						client.say(
							message.channelName,
							`@${
								message.displayName
							}, ${await forsenHead.Code()}`
						);
					}
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});
					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, forsenHead.Cooldown);
				}
				break;
			}

			case help.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					if (args[1]) {
						client.say(
							message.channelName,
							`@${message.displayName}, ${await help.Code(
								args[1]
							)}`
						);
					} else if (!args[1]) {
						return `Need to specify the command that you want to know more about. Type \`commands`;
					}
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});
					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, help.Cooldown);
				}
				break;
			}

			case commands.Aliases.indexOf(args[0]) > -1: {
				const commandUsed = await sequelize.query(
					`SELECT * FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
					{ type: QueryTypes.SELECT }
				);
				if (commandUsed.length == 0) {
					client.say(
						message.channelName,
						`@${message.displayName}, ${await commands.Code()}`
					);
					await sequelize
						.query(
							`INSERT INTO Cooldowns(DisplayName, Command) VALUES ("${message.displayName}", "${args[0]}")`,
							{ type: QueryTypes.INSERT }
						)
						.catch((error) => {
							console.error(error);
						});
					setTimeout(() => {
						sequelize.query(
							`DELETE FROM Cooldowns WHERE DisplayName = "${message.displayName}" AND Command = "${args[0]}"`,
							{ type: QueryTypes.DELETE }
						);
					}, commands.Cooldown);
				}
				break;
			}
		}
	}
});

client.connect();

(async () => {
	try {
		const channels = ["trefis", "feelsokayegbot"];
		await client.joinAll(channels);
	} catch (error) {
		console.log("Error: timed out Okayeg");
	}
})();
