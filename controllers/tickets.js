const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
// const ticket = require('../models/ticket');

module.exports = {
    create, 
    new: newTicket
};

function create(req, res) {
    console.log(req.params.id);
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        console.log(req.body, ticket, err);
        res.redirect(`/flights/${req.params.id}`);
    });
}

function newTicket(req, res) {
        console.log(req.params.id);
        res.render('tickets/new', {
            title: 'Add Ticket', 
            flightId: req.params.id, 
        });
}