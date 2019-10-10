const Booking = require('./Booking');
describe('Booking toJson', function () {

    test('Test Booking', () => {
        let booking = new Booking();
        booking.jetpackId = "1";
        booking.startDate = "2019-01-01";
        booking.endDate = "2019-01-02";
        expect(booking.toJson()).toMatchObject({
            jetpack_id: "1",
            start_date: "2019-01-01",
            end_date: "2019-01-02"
        })
    });
});