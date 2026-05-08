const Movie = require("../models/Movie");

const create = async (req, res) => {

    try {

        const movie = await Movie.create(req.body);

        return res.status(201).json(movie);

    } catch (error) {

        return res.status(500).json({
            error: "movie/create-error",
            message: error.message
        });
    }
};

const list = async (req, res) => {

    try {

        const movies = await Movie.find();

        return res.json(movies);

    } catch (error) {

        return res.status(500).json({
            error: "movie/list-error",
            message: error.message
        });
    }
};

const getById = async (req, res) => {

    try {

        const { id } = req.params;

        const movie = await Movie.findById(id);

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        return res.json(movie);

    } catch (error) {

        return res.status(500).json({
            error: "movie/get-error",
            message: error.message
        });
    }
};

const update = async (req, res) => {

    try {

        const { id } = req.params;

        const movie = await Movie.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        return res.json(movie);

    } catch (error) {

        return res.status(500).json({
            error: "movie/update-error",
            message: error.message
        });
    }
};

const remove = async (req, res) => {

    try {

        const { id } = req.params;

        await Movie.findByIdAndDelete(id);

        return res.json({
            message: "Movie deleted"
        });

    } catch (error) {

        return res.status(500).json({
            error: "movie/delete-error",
            message: error.message
        });
    }
};

module.exports = {
    create,
    list,
    getById,
    update,
    remove
};

