const mongoose = require('mongoose');

const MoviesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: false
    },
    duration: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    releasedDate: {
        type: String,
        required: false
    },
    trailerLink: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Movies', MoviesSchema);