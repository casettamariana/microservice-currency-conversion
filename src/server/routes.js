const router = require("express").Router();
const currencyController = require('../controllers/currencyController');


router.get("/:value", (req, res, next) => {
    currencyController.findOne(req, res, next);
});

module.exports = router;
