const Jetpack = require("../../src/Entity/Jetpack");
const uuidv4 = require('uuid/v4');
const db = require('../../src/Db');
const JetpackRepository = require('../../src/Repository/JetpackRepository');
const BookingRepository = require('../../src/Repository/BookingRepository');

module.exports = (req, res) => {
    var start_date = req.query.start_date;
    var end_date = req.query.end_date;

    const repository = new JetpackRepository(db);
    var jetpacks = repository.getAll();
    
    if(start_date !== undefined && end_date !== undefined) {
        const repository = new BookingRepository(db);
        jetpacksToDelete = repository.getBetween(start_date,end_date);
        jetpacksToDelete.map(booking => booking.jetpack_id).forEach(function(jetpackToDelete) {
            jetpacks = jetpacks.filter(item => item.id !== jetpackToDelete);
        });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).send(jetpacks);
};