const validate = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false }); //400
      next();
    } catch (err) {
      if (err.isJoi) {
        const errObject = {};
        err.details.forEach((errorDetail) => {
          errObject[errorDetail.context.key] = errorDetail.message.replace(
            /"/g,
            ""
          );
        });
        return res.status(400).json(errObject); //400
      }

      return res.status(500).json({ message: err.message }); //500
    }
  };
};

module.exports = validate;
