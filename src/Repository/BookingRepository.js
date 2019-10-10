module.exports = class {
    constructor(db) {
        this.db = db;
    }

    create(booking) {      
        if (!booking) {
            throw 'Booking object is undefined';
        }

        if (!booking.jetpackId || !booking.startDate || !booking.endDate) {
            throw 'Booking object is missing information';
        }

        this.db
            .get('bookings')
            .push(booking.toJson())
            .write()
    }
};