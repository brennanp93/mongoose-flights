const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
}

function index(req,res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
};

function create (req, res){
    console.log(req.body);
    req.body.flightNo =  req.body.flightNo || undefined;
    req.body.departs =  req.body.departs || undefined;
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
