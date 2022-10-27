const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}


function index(req,res) {
    Flight.find({}, function(err, flights) {
        console.log(flights);
        res.render('flights/index', {flights});
    });
};

function show(req, res) {
    // console.log(req.params.id);
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: req.params.id}, function(err, tickets) {
            // console.log(flight, tickets);
            res.render('flights/show', {airline: 'All Flights', flight, tickets});
        })
    })
};

function create (req, res){
    // console.log(req.body);
    req.body.flightNo =  req.body.flightNo || undefined;
    req.body.departs =  req.body.departs || undefined;
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new')
        // console.log(flight);
        res.redirect('/flights');
    })
};

function newFlight(req,res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });
}
