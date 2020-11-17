const { request, response } = require('express');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'athletes',
    password: 'Postgre',
    port: 5432,
})

const getAthletes = (request, response) => {
    pool.query('SELECT * FROM athletes', (error, results) => {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const getAthleteById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM athletes WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}
const addAthletes = (request, response) => {
    const { name, image, team, jersey, position } = request.body;

    pool.query('INSERT INTO athletes (name, image, team, jersey, position) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, image, team, jersey, position], (error, results) => {
    if(error){
        throw error;
    }
        response.status(200).json(results.rows);
    });
}

const updateAthleteById = (request, response) => {
    const { name, image, team, jersey, position } = request.body;
    const id = parseInt(request.params.id);

    pool.query(`UPDATE athletes SET name = $1, image = $2, team = $3, jersey = $4, position = $5 WHERE id = $6` , [name, image, team, jersey, position, id], (error, results) => {
    if(error){
        throw error;
    }
        response.status(200).send(`People with id: ${id} updated.`)
    });
}

const deleteAthleteById = (request, response) => {
    const id = parseInt(request.params.id);
    console.log(request.params)

    pool.query('DELETE FROM athletes WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error;
        }
        response.status(200).json(results.rows);
        console.log(`Athlete with id:${id} was deleted`)
    });

}

module.exports = {
    getAthletes,
    getAthleteById,
    addAthletes,
    deleteAthleteById,
    updateAthleteById
}