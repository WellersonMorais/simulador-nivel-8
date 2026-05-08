// const express = require('express');
// const movieRoutes = require('./routes/movieRoutes');
// const userRoutes = require("./routes/userRoutes");
// const authenticateRoutes = require("./routes/authenticateRoutes");

// const app = express();

// app.use(express.json());

// app.use('/movies', movieRoutes);
// app.use("/users", userRoutes);
// app.use("/auth", authenticateRoutes);

// module.exports = app;

const express = require("express");

const movieRoutes = require("./routes/movieRoutes");

const app = express();

app.use(express.json());

app.use("/movies", movieRoutes);

module.exports = app;