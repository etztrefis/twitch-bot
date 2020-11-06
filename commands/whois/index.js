module.exports = {
    Name: "whois",
    Author: "trefis",
    Aliases: ["whois"],
    Date: "11/1/2020, 5:17:51 PM",
    Description: "Posts all user`s twitch data from his channel.",
    Code: (async function whois(user) {
        try {
            const axios = require('axios').default;
            require("dotenv").config({ path: '../../.env' });
            const { data } = await axios({
                method: 'get',
                url: `https://api.twitch.tv/helix/users?login=${user}`,
                responseType: 'json',
                headers: {
                    'Client-Id': process.env.KEYVALUE,
                    'Authorization': process.env.BEARER
                }
            });
            try {
                let btype = data.data[0]['broadcaster_type'] == "" ? `` : `, Broadcaster: ${data.data[0]['broadcaster_type']}`;
                let response = `Name: ${data.data[0]['display_name']}, Description: ${data.data[0]['description']}, View count: ${data.data[0]['view_count']}${btype}`
                return response;
            } catch (error) {
                return `User doesnt exists.`;
            }
        } catch (error) {
            return `Bad request. 404 Okayeg`;
        }
    })
};