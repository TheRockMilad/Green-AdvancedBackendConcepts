const { body } = require("express-validator");

const courseValidator = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("عنوان دوره نمی‌تونه خالی باشه")
      .isLength({ min: 3, max: 10 })
      .withMessage("عنوان دوره باید بین 3 تا 10 کاراکتر باشه"),
  ];
};

module.exports = { courseValidator };
