const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /performers
router.post('/flights/:id/tickets', ticketsCtrl.create);
//POST /movies/:id/performers
// router.post('/flights/:id/tickets', ticketsCtrl.addToFlight);

module.exports = router;