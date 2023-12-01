// Rutas para movies
const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

// api/movies
router.post('/', moviesController.crearMovie);
router.get('/', moviesController.obtenerMovies);
router.put('/:id', moviesController.actualizarMovie);
router.get('/:id', moviesController.obtenerMovie);
router.delete('/:id', moviesController.eliminarMovie);

module.exports = router;