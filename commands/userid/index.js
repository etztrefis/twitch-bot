module.exports = {
    Name: "userid",
    Author: "trefis",
    Aliases: ["uid", "userid"],
    Date: "",
    Code: (async function userid(user) {
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
            return data.data == "" ? `User doesnt exists.` : `id: ${data.data[0]['id']}`
        } catch (error) {
            return `Bad request. 404 Okayeg`
        }
    })
};