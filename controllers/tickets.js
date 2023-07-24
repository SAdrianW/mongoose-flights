const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}



async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', { title: 'New Ticket', flight });
}

async function create(req, res) {
    req.body.flight = req.params.id;
    await Ticket.create(req.body);
    res.redirect(`/flights/${req.params.id}`);
}
