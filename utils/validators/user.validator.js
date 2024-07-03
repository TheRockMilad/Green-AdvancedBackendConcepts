// const { body } = require("express-validator");

const Joi = require("joi");

// express-validator :

// const userValidator = () => {
//   return [
//     body("firstname")
//       .isString()
//       .withMessage("لطفا نام را به شکل متن وارد کنید")
//       .isLength({ min: 3, max: 15 })
//       .withMessage("نام شما باید بین 3 تا 15 کاراکتر باشه"),

//     body("lastname")
//       .isString()
//       .withMessage("لطفا نام خانوادگی را به شکل متن وارد کنید")
//       .isLength({ min: 3, max: 15 })
//       .withMessage("نام خانوادگی باید بین 3 تا 15 کاراکتر باشه"),

//     body("username")
//       .isString()
//       .withMessage("لطفا نام کاربری را به شکل متن وارد کنید")
//       .isLength({ min: 8, max: 24 })
//       .withMessage("نام کاربری باید بین 8 تا 24 کاراکتر باشه"),

//     body("email").isEmail().withMessage("ایمیل وارد شده معتبر نمی‌باشد"),

//     body("phone")
//       .isMobilePhone(["fa-IR"])
//       .withMessage("شماره تماس وارد شده معتبر نمی‌باشد")
//       .notEmpty()
//       .withMessage("نمیتواند خالی باشه "),

//     body("password")
//       .isLength({ min: 8, max: 24 })
//       .withMessage("پسورد باید بین 8 تا 24 کاراکتر باشه"),
//   ];
// };

//Joi validator
const userValidatorSchema = Joi.object({
  firstname: Joi.string().lowercase().min(3).max(15).required(), // AMIn -> amin
  lastname: Joi.string().uppercase().min(3).max(15).required(),
  username: Joi.string().min(8).max(24).required(),
  signupMethod: Joi.string().required().valid("email", "phone"),
  email: Joi.string()
    .email()
    .min(10)
    .max(40)
    .when("signupMethod", { is: "email", then: Joi.required() }),
  phone: Joi.string()
    .pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
    .when("signupMethod", { is: "phone", then: Joi.required() }),
  password: Joi.string().min(8).max(24).required(),
  confirmPassword: Joi.ref("password"),
});

// module.exports = { userValidators };
module.exports = { userValidatorSchema };
