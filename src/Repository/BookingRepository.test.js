const BookingRepository = require('./BookingRepository');
describe('BookingRepository create', function () {

    test('Test create complete object', () => {

        let dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };

        let bookingMock = {
            jetpackId : '1',
            startDate : '2019-01-01',
            endDate : '2019-01-02',
            toJson : jest.fn().mockReturnThis()
        }
        
        let repository = new BookingRepository(dbMock);
        repository.create(bookingMock);

        expect(dbMock.write.mock.calls.length).toBe(1);
    });

    test('Test create incomplete object', () => {

        let dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };

        let bookingMock = {
            startDate : '2019-01-01',
            endDate : '2019-01-02',
            toJson : jest.fn().mockReturnThis()
        }
        
        let repository = new BookingRepository(dbMock);

        expect(() => repository.create(bookingMock)).toThrow();
    });
});