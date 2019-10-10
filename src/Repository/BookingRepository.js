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

        if (!this.isAvailable(booking)) {
            throw 'This jetpack is already booked for this time period'
        }
        
        this.db
            .get('bookings')
            .push(booking.toJson())
            .write()
    }

    getBetween(start_date,end_date) {
        return this.db
            .get('bookings')
            .filter(
                x => ((new Date(x.start_date) >= new Date(start_date) && new Date(x.start_date) <= new Date(end_date)) ||
                (new Date(start_date) >= new Date(x.start_date) && new Date(start_date) <= new Date(x.end_date))))
            .value()
    }

    isAvailable(booking) {
        return this.db
            .get('bookings')
            .filter(
                x => (x.jetpack_id === booking.jetpackId) &&
                ((new Date(x.start_date) >= new Date(booking.startDate) && new Date(x.start_date) <= new Date(booking.endDate)) ||
                (new Date(booking.startDate) >= new Date(x.start_date) && new Date(booking.startDate) <= new Date(x.end_date))))
            .value()
            .length == 0
    }
};