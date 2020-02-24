const Flight = require("../models/flight");

module.exports = {
    index,
    show,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        if(err) {
            console.log(err)
        } else {
            res.render("flights/index", {flights});
        }
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if(err) {
            console.log(err)
        } else {
            res.render("flights/show", {flight});
        }
    });
}

function newFlight(req, res) {
    res.render("flights/new");
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return console.log(err);
        //res.redirect("/flights/new");
        res.redirect("/flights");
    });
}