const axios = require('axios');

const {parse, stringify} = require('flatted');

const coinsData = require('../util/coinsData.json');

function convertValue(valueCoin, valueToConvert) { return valueCoin * valueToConvert }

async function findOne(data) {
    let response = null;

    response = await axios.get(`https://economia.awesomeapi.com.br/json/all`);

    const arrayKeyResponse = Object.keys(response.data);
    
    var valuesConvert = arrayKeyResponse.map(coin => {
        var aux = {
            coin: coin,
            value: convertValue(data, response.data[coin].bid) 
        }
        return aux;
      });


    return valuesConvert;
}

module.exports = { findOne };