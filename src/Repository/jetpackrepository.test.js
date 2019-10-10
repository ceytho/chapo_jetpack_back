const JetpackRepository = require('./JetpackRepository');
const Jetpack = require('../Entity/Jetpack');

describe('JetpackRepository list', function () {
    let jetpacks = []

    let jetpack1 = new Jetpack();
    jetpack1.id = "1";
    jetpack1.name = "X1982BD";
    jetpack1.image = "base64...";

    let jetpack2 = new Jetpack();
    jetpack2.id = "2";
    jetpack2.name = "Lol";
    jetpack2.image = "base64...";

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