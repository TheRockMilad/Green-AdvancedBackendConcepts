const express = require("express");
const userController = require("./../controllers/user");
const {userValidatorSchema} = require('./../validators/user.validator');
const validate = require("../middlewares/joi.validator");

const router = express.Router();

// router.post("/signup", userValidator(),userController.siqnUp); //express-validator
router.post("/signup",validate(userValidatorSchema),userController.siqnUp);

module.exports = router;
