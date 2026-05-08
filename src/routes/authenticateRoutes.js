const { Router } = require("express");
const router = Router();

const authenticateController = require("../controllers/authenticate.controller");

router.post("/", authenticateController.login);

module.exports = router;