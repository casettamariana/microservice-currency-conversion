const axios = require('axios');

async function findOne(req, res, next) {
    const data = {
        coin: parseInt(req.query.coin),
        valueConvert: parseInt(req.params.value) ?? null
    };

    try {
        const response = await axios.get('https://economia.awesomeapi.com.br/json/all');
        
        res.status(200).json(response.data);
    } catch (e) {
        console.log(e.response.body);
    }
}

module.exports = { findOne };