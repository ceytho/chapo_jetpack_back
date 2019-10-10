const JetpackRepository = require('./JetpackRepository');

describe('JetpackCreation', function() {
    const dbMock = {
        get : jest.fn().mockReturnThis(),
        push : jest.fn().mockReturnThis(),
        write : jest.fn().mockReturnThis(),
        toJson : jest.fn().mockReturnThis()
    };

    const repository = new JetpackRepository(dbMock);
    test('Create jetpack fail', () => {
        jp = {};
        
        try {
            repository.create(jp);
            // Fail test if above expression doesn't throw anything.
            expect(true).toBe(false);
        } catch (e) {
            expect(e).toBe("Jetpack object is missing information");
        }
    });

    test('Create jetpack OK', () => {
        jp = {id : '1',
        name: 'X1982BD',
        image: 'base64...',
        toJson() { jest.fn().mockReturnThis() }
    };
        
        repository.create(jp);
        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('JetpackRepository list', function () {
    let jetpacks = []

    let jetpack1 = {id : '1',
    name: 'X1982BD',
    image: 'base64...'};

    let jetpack2 = {id : '2',
    name: 'Lol',
    image: 'base64...'};

    jetpacks.push(jetpack1);
    jetpacks.push(jetpack2);

    test('Test JP list match', () => {
        const dbMock = {
            get : jest.fn().mockReturnValue(jetpacks)
        };

        const repository = new JetpackRepository(dbMock);
        expect(repository.getAll()).toMatchObject([{
            id: "1",
            name: "X1982BD",
            image: "base64..."
        },
        {
            id: "2",
            name: "Lol",
            image: "base64..."
        }]);
    });
});