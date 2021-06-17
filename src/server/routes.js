const router = require("express").Router();
const currencyController = require('../controllers/currencyController');


router.get("/:coin", (req, res, next) => {
    currencyController.findOne(req, res, next);
});

module.exports = router;
