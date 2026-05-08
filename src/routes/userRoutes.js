const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controllers");

// POST /users
router.post("/", userController.create);

// GET /users
router.get("/", userController.list);

// GET /users/:id
router.get("/:id", userController.getById);

// PUT /users/:id
router.put("/:id", userController.update);

// DELETE /users/:id
router.delete("/:id", userController.remove);

module.exports = router;