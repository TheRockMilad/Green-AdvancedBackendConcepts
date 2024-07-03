// const { validationResult } = require("express-validator");
const Joi = require("joi");
const { userValidatorSchema } = require("../../utils/validators/user.validator");

exports.siqnUp = async (req, res) => {
  //express-validator
  // باید بره توی میدلور
  //     const result = validationResult(req);
  //     if (!result.isEmpty()) {
  //        const message = {}
  //        const errors = result.array()
  //        for (const error of errors) {
  //         message[error.path] = error.msg;
  //         }
  //       //   const obj = {};
  //       // result.errors.forEach((error) => {
  //       //   obj[error.path] = error.msg;
  //       // });
  //       return res.json(message)
  //       // return res.json(message);
  //     }
  //     return res.json({ msg: "User register successfully :))" });
  //Joi validatror :

    res.json("register user successfully");
  };

