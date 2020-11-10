const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const db = require('./queries');
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
    extended: true,
})
);

app.get('/', (request, response) => {
 response.json({ info: 'Node.js, Express, and Postgres API'})
})

app.get('/athletes', db.getathletes);
app.get('/athletes/:id', db.getAthletesById);
app.get('/athletes/:id', db.createAthletes);

app.listen(port, () => {
    console.log(`App running on port ${port} ✨`)
});