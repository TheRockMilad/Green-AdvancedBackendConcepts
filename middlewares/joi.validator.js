const validate = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (err) {
      const errObject = {};
      
      err.details.forEach((errorDetail) => {
        errObject[errorDetail.context.key] = errorDetail.message.replace(/"/g, "");
      });

      return res.status(400).json(errObject);
    }
  };
};

module.exports = validate;
