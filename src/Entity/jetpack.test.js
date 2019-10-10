const Jetpack = require('./Jetpack');
describe('Jetpack toJson', function () {

    test('Test toJson', () => {
        let jetpack = new Jetpack();
        jetpack.id = "1";
        jetpack.name = "X1982BD";
        jetpack.image = "base64...";
        expect(jetpack.toJson()).toMatchObject({
            id: "1",
            name: "X1982BD",
            image: "base64..."
        })
    });

    test('Test jetpack list', () => {
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

        expect(jetpacks).toMatchObject([{
            id: "1",
            name: "X1982BD",
            image: "base64..."
        },
        {
            id: "2",
            name: "Lol",
            image: "base64..."
        }])
    });
});