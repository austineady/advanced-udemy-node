const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read an individual note', {
        title: titleOptions
    })
    .command('remove', 'Remove an individual note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];
// get arguments vector from command line
// console.log('Command: ', command);
// console.log('Yargs', argv);

if (command === 'add') {
    // add new note
    var note = notes.addNote(argv.title, argv.body);
    if (!note) {
        console.log('Note title taken');
    } else {
        notes.logNote('Note Created', note);
    }
} else if (command === 'list') {
    // list notes
    var allNotes = notes.getAll();

    if (allNotes.length > 0) {
        console.log('Printing ${ allNotes.length } notes(s).');
        allNotes.forEach((note, index) => console.log(`${ index + 1 }. ${ note.title }\n`));
    } else {
        console.log('Did not find any notes');
    }
} else if (command === 'read') {
    // read one note
    var note = notes.getNote(argv.title);

    if (note) {
        notes.logNote('Note found', note);
    } else {
        console.log('Title not found');
    }
} else if (command === 'remove') {
    // delete note
    var noteRemoved;
    
    if (argv.title) {
        noteRemoved = notes.removeNoteByTitle(argv.title);
    } else if (argv.id) {
        noteRemoved = notes.removeNoteById(argv.id);
    }
    
    console.log(noteRemoved ? 'Note was removed' : 'Note not found');
} else {
    // unhandled
    console.log('Command not recognized');
}