const axios = require('axios');
const coinsData = require('../util/coinsData.json');

function convertValue(valueCoin, valueToConvert) { return valueCoin * valueToConvert }

function saveInArray(data) {
    coinsData.data = data;
}

async function conectAwesomeApi() {
    const urlApi = 'https://economia.awesomeapi.com.br/json/all';
    const response = await axios.get(`${urlApi}`);

    saveInArray(response.data);
    
    return response;
}

async function findOne(data) {
    let response = null;
    try {
        response = await conectAwesomeApi();
    } catch (e) {
        response = coinsData;
    }

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