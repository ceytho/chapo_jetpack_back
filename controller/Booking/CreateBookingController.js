const Booking = require("../../src/Entity/Booking");
const uuidv4 = require('uuid/v4');
const db = require('../../src/Db');
const BookingRepository = require('../../src/Repository/BookingRepository');

module.exports = (req, res) => {
console.log(req.body);
    let booking = new Booking();
    booking.jetpackId = req.body.jetpack_id;
    booking.startDate = req.body.start_date;
    booking.endDate = req.body.end_date;

    const repository = new BookingRepository(db);
    repository.create(booking);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).send(booking.toJson())
};