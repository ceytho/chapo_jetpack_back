const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

var cors = require('cors')
app.use(cors())

app
    .route('/jetpacks/:id?')
    .get(require('./controller/Jetpack/GetJetpackController'))
    .post(require('./controller/Jetpack/CreateJetpackController'))
app
    .route('/bookings')
    .post(require('./controller/Booking/CreateBookingController'))
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
