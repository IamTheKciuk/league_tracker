axios = require("axios");
var https = require("https");
var fs = require("fs");

exports.handler = async function (event, context) {
    try {
        const data = await axios.get(
            "https://127.0.0.1:2999/liveclientdata/allgamedata",
            {
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false,
                }),
            }
        );

        // console.log(data.data.activePlayer);

        const response = JSON.stringify(data.data);
        return { statusCode: 200, body: JSON.stringify(response) };
    } catch (error) {
        console.log(error);
    }
    return { statusCode: 200, body: "hello" };
};
