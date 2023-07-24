const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', {
        title: 'Mongoose Flights List',
        flights
    })
}

function newFlight(req, res) {
    const nFlight = new Flight();
    const dt = nFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { 
        title: 'Plot New Flight',
        departsDate,
        errorMsg: ''
    });
}

async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.redirect('/flights/new');
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const ticket = await Ticket.find({flight: flight._id});
    res.render('flights/show', { title: 'Flight Details', flight, ticket});
}


