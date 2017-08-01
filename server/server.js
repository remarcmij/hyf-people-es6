'use strict';
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const seedJsonFilename = '../data/data.json'
let app = null;
let dbname = null;
let database = null;

run();

function run() {
    try {
        setupDatabase()
            .then(() => {
                setupExpress();
                setupApiEndPointRoutes();
                setupStaticRoutes();
                startServer();
            })
            .catch(err => {
                console.log(err);
                process.exit();
            });
    }
    catch (err) {
        console.log(err);
        process.exit();
    }
}

function setupDatabase() {
    let dbtype;
    let password = null;

    let argLen = process.argv.length;

    if (argLen >= 3 && process.argv[2] === 'mongo') {
        dbtype = 'mongo';
        dbname = (argLen >= 4 && process.argv[3] === 'test') ? 'hyf-people-test' : 'hyf-people';
    } else if (argLen >= 4 && process.argv[2] === 'mysql') {
        dbtype = 'mysql';
        password = process.argv[3];
        dbname = (argLen >= 5 && process.argv[4] === 'test') ? 'hyf-people-test' : 'hyf-peopl';
    } else {
        throw new Error('invalid command line: to run, type: node database.js mongo [test]| mysql <password> [test]');
    }

    switch (dbtype) {
        case 'mongo':
            database = require('./mongo.database.js');
            break;
        case 'mysql':
            database = require('./mysql.database.js');
            break;
        default:
            throw new Error('unsupported database type: ' + dbtype);
    }

    return database.openDatabase(dbname, password)
        .then(() => seedDatabaseIfEmpty())
}

function seedDatabaseIfEmpty() {
    return database.getPersons()
        .then(persons => {
            if (persons.length !== 0) {
                return Promise.resolve();
            }
            return loadSeedPersons()
                .then(persons => {
                    database.insertMany(persons)
                        .then(() => console.log(`database seeded with ${persons.length} people`));
                });
        });
}

function loadSeedPersons() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, seedJsonFilename), 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            let json = JSON.parse(data);
            resolve(json.persons)
        })
    });
}

function setupExpress() {
    app = express();
    app.use(bodyParser.json());
}

function setupApiEndPointRoutes() {
    app.get('/person', getPersons);
    app.post('/person', addPerson);
    app.get('/person/:id', getPersonById);
    app.patch('/person/:id', updatePerson);
    app.delete('/person/:id', deletePerson);
}

function setupStaticRoutes() {
    app.get('/', sendIndexHtml);
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.static(path.resolve(__dirname, '../build')));
}

function startServer() {
    app.listen(PORT, err => {
        if (err) {
            throw err;
        }
        console.log('server listening at port ' + PORT);
    });
}

// Request handlers

function sendIndexHtml(req, res) {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
}

function getPersons(req, res) {
    database.getPersons()
        .then(persons => res.json({persons}))
        .catch(err => res.status(400).json(err));
}

function getPersonById(req, res) {
    if (!req.params.id) {
        res.status(400).send('id parameter is required');
        return;
    }
    database.getPersonById(req.params.id)
        .then(person => res.json(person))
        .catch(err => res.status(400).json(err));
}

function addPerson(req, res) {
    let person = req.body;
    if (!person.text) {
        res.status(400).send('no text specified');
        return;
    }
    database.addPerson(person)
        .then(() => database.getPersons())
        .then(persons => res.json({persons}))
        .catch(err => res.status(400).send(err.message));
}

function deletePerson(req, res) {
    if (!req.params.id) {
        res.status(400).send('id parameter is required');
        return;
    }
    database.deletePerson(req.params.id)
        .then(() => database.getPersons())
        .then(persons => res.json({persons}))
        .catch(err => res.status(400).send(err.message));
}

function updatePerson(req, res) {
    if (!req.params.id) {
        res.status(400).send('id parameter is required');
        return;
    }

    let todo = req.body;
    if (!todo.text) {
        res.status(400).send('no text specified');
        return;
    }

    database.updatePerson(req.params.id, todo)
        .then(() => res.sendStatus(204))
        .catch(err => res.status(400).send(err.message));
}

module.exports = {
    dbname: dbname
}