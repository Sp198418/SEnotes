const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./queries');
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
    extended: true,
    })
);

app.get('/', (request, response) => {
 response.json({ info: 'Node.js, Express, and Postgres API'})
})

app.get('/athletes', db.getAthletes);
app.get('/athletes/:id', db.getAthleteById);
app.post('/athletes', db.addAthletes);
app.delete('/athletes/:id',db.deleteAthleteById);
app.put('/athletes/:id',db.updateAthleteById);

app.listen(port, () => {
    console.log(`App running on port ${port} ✨`)
});