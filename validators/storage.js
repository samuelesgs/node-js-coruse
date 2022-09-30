const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
    check("filename")
    .exists()
    .notEmpty(),
    check("url")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
];

module.exports = { validatorGetItem};