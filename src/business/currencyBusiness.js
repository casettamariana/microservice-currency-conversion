const axios = require('axios');

const coinsData = require('../util/coinsData.json');

const coinsOb = Object.keys(coinsData.result);


function compareCurrencyCode(code) {
    let cleanCode = coinsOb.filter((value) => {
        if(value == code) { return value }
    });

    (cleanCode) ? cleanCode : (cleanCode = []);

    return cleanCode;
}

function convertValue(valueCoin, valueToConvert) { return valueCoin * valueToConvert }

async function findOne(data) {
    const code = compareCurrencyCode(data.coin);
    let response = null;

    if (Object.keys(code).length !== 0) {
        response = await axios.get(`https://economia.awesomeapi.com.br/json/${data.coin}`);

        const value = convertValue(data.valueConvert, response?.data[0]?.bid);
        response = { data: value }
    } else {
        response = { error: "Error converting your currency, try again!" }
    }

    return response;
}

module.exports = { findOne };