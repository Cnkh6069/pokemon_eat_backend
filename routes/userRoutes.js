const usersController = require("../controllers/usersController.js");

const express = require("express");
const user = require("../models/user.js");
const router = express.Router();

router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUserById);

module.exports = router;
