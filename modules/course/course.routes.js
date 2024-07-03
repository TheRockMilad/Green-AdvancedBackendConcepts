const express = require("express");
const coursesController = require("./course.controller");
const { courseValidator } = require("./../../utils/validators/course.validator");

const router = express.Router();

router.post("/", courseValidator(), coursesController.create);
router.get("/", coursesController.getAll);
router.get("/remove/:id", coursesController.remove);
router.get("/edit/:id", coursesController.edit);

module.exports = router;
