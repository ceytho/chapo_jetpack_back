const BookingRepository = require('./BookingRepository');
describe('BookingRepository create', function () {

    const dbMock = {
        get : jest.fn().mockReturnThis(),
        push : jest.fn().mockReturnThis(),
        write : jest.fn().mockReturnThis()
    };

    test('Test create complete object', () => {

        const bookingMock = {
            jetpackId : '1',
            startDate : '2019-01-01',
            endDate : '2019-01-02',
            toJson : jest.fn().mockReturnThis()
        }
        
        const repository = new BookingRepository(dbMock);
        repository.create(bookingMock);

        expect(dbMock.write.mock.calls.length).toBe(1);
    });

    test('Test create incomplete object', () => {

        const bookingMock = {
            startDate : '2019-01-01',
            endDate : '2019-01-02',
            toJson : jest.fn().mockReturnThis()
        }
        
        const repository = new BookingRepository(dbMock);

        expect(() => repository.create(bookingMock)).toThrow();
    });
});