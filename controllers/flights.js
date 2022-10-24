const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}


function index(req,res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {airline: 'All Flights', flight });
    })
}

function create (req, res){
    console.log(req.body);
    req.body.flightNo =  req.body.flightNo || undefined;
    // req.body.departs =  req.body.departs || undefined;
    if (req.body.departs === '') req.body.departs = new Date().setFullYear(new Date().getFullYear() + 1)
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new')
        console.log(flight);
        res.redirect('/flights');
    })
}

function newFlight(req,res) {
    res.render('flights/new');
}
