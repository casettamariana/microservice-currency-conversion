const currencyBusiness = require('../business/currencyBusiness');
const coinsData = require('../util/coinsData.json');


async function findOne(req, res, next) {
    // "if" for parameter coin does not exist, because if not entered it will not fall in this route
    if (!req.query.value) {
        return res.status(500).json({ error: "Param 'value' not found." });
    }

    // coin parameter is not being "treated" because it is compared in business
    const data = {
        coin: req.params.coin,
        valueConvert: req.query.value
    };
    
    try {
        const result = await currencyBusiness.findOne(data);
        
        if (result && !result.error) 
            res.status(200).json({ result: result })
        else if(result.error != '')
            res.status(404).json({ result: result })
        else
            res.status(404).json({ error: "Error converting your currency, try again!" })

    } catch (e) {
        next(e);
        return res.status(404).json({ error: "Error converting your currency, try again!" });

    }
}

module.exports = { findOne };