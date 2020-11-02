const { Sequelize } = require("sequelize");
const { QueryTypes }
const options = require("../options.js")

const sequelize = new Sequelize(options.dbname, options.user, options.pass, {
    host: options.host,
    dialect: options.dialect
})

async function borobushe_loh() {
    let arg = "ping";
    const query = await sequelize.query('SELECT * FROM Commands WHERE Name = ')

}

// var axios = require('axios');

// var config = {
//     method: 'get',
//     url: 'https://api.twitch.tv/helix/users?login=trefis&=',
//     headers: {
//         'Client-Id': 'ept4kn251t3kwqawgrd9u9q4uexlva',
//         'Authorization': 'Bearer 65fbnv57chah7ww17nx82bh4lt7nh4'
//     }
// };

// axios(config)
//     .then(function (response) {
//         console.log(response.status)
//         console.log(response.data.data);
//         let uid = JSON.stringify(response.data.data[0]['id']);
//         console.log(uid)
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// const axios = require('axios').default;
// allo("trefis");
// async function allo(user) {
//     require("dotenv").config({ path: "../../.env" });
//     const { data } = await axios({
//         method: 'get',
//         url: 'https://api.twitch.tv/helix/users?login=gjaskgjnaskdjgasd',
//         responseType: 'json',
//         headers: {
//             'Client-Id': process.env.KEYVALUE, //ept4kn251t3kwqawgrd9u9q4uexlva
//             'Authorization': process.env.BEARER //Bearer 65fbnv57chah7ww17nx82bh4lt7nh4
//         }
//     });
//     console.log(data.data[0]['id'])
// }