const express = require("express");
const { userValidator } = require("../validators/user.validator");
const { validationResult } = require("express-validator");

const router = express.Router();

router.post("/signup", userValidator(), (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
     const message = {}
     const errors = result.array()
     for (const error of errors) {
      message[error.path] = error.msg;
      }
    //   const obj = {};
    // result.errors.forEach((error) => {
    //   obj[error.path] = error.msg;
    // });
    return res.json(message)

    // return res.json(message);
  }

  return res.json({ msg: "User register successfully :))" });
});

module.exports = router;
