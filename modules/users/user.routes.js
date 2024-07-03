const express = require("express");
const userController = require("./user.controller");
const {userValidatorSchema} = require('../../utils/validators/user.validator');
const validate = require("../../utils/middlewares/joi.validator");

const router = express.Router();

// router.post("/signup", userValidator(),userController.siqnUp); //express-validator
router.post("/signup",validate(userValidatorSchema),userController.siqnUp);

module.exports = router;
