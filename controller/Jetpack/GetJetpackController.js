const Jetpack = require("../../src/Entity/Jetpack");
const uuidv4 = require('uuid/v4');
const db = require('../../src/Db');
const JetpackRepository = require('../../src/Repository/JetpackRepository');
const BookingRepository = require('../../src/Repository/BookingRepository');

module.exports = (req, res) => {
    var start_date = req.query.start_date;
    var end_date = req.query.end_date;
    
    if(start_date !== undefined && end_date !== undefined) {
        const repository = new BookingRepository(db);
        jetpacks = repository.getBetween(start_date,end_date);
    } else {
        const repository = new JetpackRepository(db);
        jetpacks = repository.getAll();
    }
    res.header("Access-Control-Allow-Origin", "*");
        res.status(201).send(jetpacks);
};