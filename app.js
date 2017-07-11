console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
// get arguments vector from command line
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add') {
    // add new note
    console.log('Adding new note');
} else if (command === 'list') {
    // list notes
    console.log('Listing all notes');
} else if (command === 'read') {
    // read one note
    console.log('Reading note');
} else if (command === 'remove') {
    // delete note
    console.log('Removing note');
} else {
    // unhandled
    console.log('Command not recognized');
}