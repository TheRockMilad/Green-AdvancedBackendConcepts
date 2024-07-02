const { body } = require("express-validator");

const userValidator = () => {
  return [
    body("firstname")
      .isString()
      .withMessage("لطفا نام را به شکل متن وارد کنید")
      .isLength({ min: 3, max: 15 })
      .withMessage("نام شما باید بین 3 تا 15 کاراکتر باشه"),

    body("lastname")
      .isString()
      .withMessage("لطفا نام خانوادگی را به شکل متن وارد کنید")
      .isLength({ min: 3, max: 15 })
      .withMessage("نام خانوادگی باید بین 3 تا 15 کاراکتر باشه"),

    body("username")
      .isString()
      .withMessage("لطفا نام کاربری را به شکل متن وارد کنید")
      .isLength({ min: 8, max: 24 })
      .withMessage("نام کاربری باید بین 8 تا 24 کاراکتر باشه"),

    body("email").isEmail().withMessage("ایمیل وارد شده معتبر نمی‌باشد"),

    body("phone")
      .isMobilePhone(["fa-IR"])
      .withMessage("شماره تماس وارد شده معتبر نمی‌باشد")
      .not()
      .isEmpty()
      .withMessage("نمیتواند خالی باشه "),

    body("password")
      .isLength({ min: 8, max: 24 })
      .withMessage("پسورد باید بین 8 تا 24 کاراکتر باشه"),
  ];
};

module.exports = { userValidator };
