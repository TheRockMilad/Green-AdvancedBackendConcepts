const express = require("express");
const { userValidator } = require("../validators/user.validator");
const userController = require("./../controllers/user")

const router = express.Router();

router.post("/signup", userValidator(),userController.siqnUp);

module.exports = router;
