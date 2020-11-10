const { response, request } = require('express');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'athletes',
    password: 'Postgre',
    port: 5432,
})

const getathletes = (request, response) => {
    pool.query('SELECT * FROM athletes', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getAthletesById = (request, response) => {
    const id = parseInt(request.param.id);
    pool.query('SELECT * FROM athletes WHERE is = $1', [id], (error, results) => {
        if(error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}
const createAthletes = (request, response) => {
    const {name, type} = request.body;
pool.query('INSERT INTO athletes (name, team) VALUE ($1, $2) RETURNING *', [name, team], (error, results) => {
    if(error){
        throw error;
    }
        response.status(200).send(`Athletes added with name:${name}, team: ${team}`);
    });
}

module.exports = {
    getathletes,
    getAthletesById
    createAthletes
}