const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movies.controllers');

const { verifyAuthentication } = require("../middlewares/verifyAuthentication");

// POST /movies
router.post('/', verifyAuthentication, movieController.create);

// GET /movies
router.get('/', movieController.list);

// GET /movies/:id
router.get('/:id', movieController.getById);

// PUT /movies/:id
router.put('/:id', movieController.update);

// DELETE /movies/:id
router.delete('/:id', movieController.remove);

module.exports = router;