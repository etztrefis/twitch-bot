INSERT INTO Commands 

(
    Name,
    Author,
    Cooldown,
    Aliases, 
    Date, 
    Description,
    Code
)

VALUES

(
    "ping",
    "trefis",
	5000,
	"pang, peng, pong, pung, pyng, ping",
	"10/12/2020, 10:12:26 AM",
	"Ping!",
	"async function ping() {
		const process = require('process');

		let ut_sec = process.uptime();
		let ut_min = ut_sec / 60;
		let ut_hour = ut_min / 60;

		ut_sec = Math.floor(ut_sec);
		ut_min = Math.floor(ut_min);
		ut_hour = Math.floor(ut_hour);

		ut_hour = ut_hour % 60;
		ut_min = ut_min % 60;
		ut_sec = ut_sec % 60;

		return `Pong! Reporting for duty! Okayeg :+1:  Uptime: ${ut_hour}h, ${ut_min}m, ${ut_sec}s;`
    }"
)