const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = () => {
    router.get('/', homeController.home);
    router.get('/nosotros', nosotrosController.nosotros);
    router.get('/viajes', viajesController.viajes);
    router.get('/viajes/:id', viajesController.viaje);
    router.get('/testimoniales', testimonialesController.testimoniales);
    router.post('/testimoniales', testimonialesController.guardarTestimonial);

    return router;
};