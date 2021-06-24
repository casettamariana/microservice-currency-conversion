const currencyBusiness = require('../business/currencyBusiness');

async function findOne(req, res, next) {
    if (!req.params.value) {
        return res.status(500).json({ error: "Param 'value' not found." });
    }

    const data = req.params.value;
    
    try {
        const result = await currencyBusiness.findOne(data);
        
        if (result && !result.error) 
            res.status(200).json({ result: result })
        else if(result?.error != '' && result != null)
            res.status(404).json({ result: result })
        else
            res.status(404).json({ error: "Error converting your currency, try again!" })
    } catch (e) {
        next(e);
        return res.status(404).json({ error: "Error converting your currency, try again!" });
    }
}

module.exports = { findOne };