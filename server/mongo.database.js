'use strict';
const assert = require('assert');
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
let mongoUrl;

let personCollection;

function openDatabase(dbname) {
    mongoUrl = 'mongodb://localhost:27017/' + dbname;

    return mongo.connect(mongoUrl)
        .then(db => {
            personCollection = db.collection('persons');
            console.log('Connected to Mongo database...');
        })
        .catch(err => {
            console.log('Could not connect to Mongo database');
            throw err;
        });
}

function insertMany(persons) {
    return personCollection.insertMany(persons);
}

function getPersons() {
    return personCollection.find().toArray();
}

function getPersonById(id) {
    return hexStringToObjectID(id)
        .then(objectID => {
            return personCollection.find({_id: objectID}).toArray()
                .then(docs => {
                    if (docs.length === 0) {
                        throw new Error('no todo found with id ' + id);
                    }
                    return docs[0];
                });
        });
}

function addPerson(person) {
    return personCollection.insertOne(person)
        .then(result => result.insertedId);
}

function updatePerson(id, person) {
    return hexStringToObjectID(id)
        .then(objectID => {
            delete person._id;
            delete person.__v;
            return personCollection.findOneAndUpdate({_id: objectID}, {$set: person});
        });
}

function deletePerson(id) {
    return hexStringToObjectID(id)
        .then(objectID => personCollection.deleteOne({_id: objectID}));
}

function hexStringToObjectID(hexString) {
    return new Promise((resolve, reject) => {
        try {
            resolve(new ObjectID(hexString));
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    openDatabase,
    insertMany,
    getPersons,
    getPersonById,
    addPerson,
    updatePerson,
    deletePerson
};
