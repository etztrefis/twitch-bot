// const { Sequelize } = require("sequelize");
// const { QueryTypes } = require("sequelize");
// require("dotenv").config({ path: "../../.env" })

// const sequelize = new Sequelize(process.env.DBNAME, process.env.USER, process.env.PASS, {
//     host: process.env.HOST,
//     dialect: 'mysql'
// })
// borobushe_loh();
// async function borobushe_loh() {
//     let arg = "ping";
//     const query = await sequelize.query(`SELECT * FROM Coommands WHERE Name = "${arg}" AND Avaliable = 1`, { type: QueryTypes.SELECT });
//     if (query.length > 0) {
//         console.log(JSON.stringify(query[0].Description))
//     }

// }

// const fs = require("fs");
// fs.readFile("./data/mom_jokes.json", (err, data) => {
//     if (err) { console.log(err); }
//     const obj = JSON.parse(data);
//     const values = Object.values(obj.data);
//     const random = Math.floor(Math.random() * values.length);
//     const randomValue = values[random];
//     console.log(randomValue);
// });

// const axios = require('axios').default;
// const { data } = axios({
//     method: 'get',
//     url: `https://trefis.net/mom_jokes.json`,
//     responseType: 'json',
// }).then(responseconsole.log(data));
// axios.get('https://trefis.net/mom_jokes.json').then(response => console.log(response.data));
