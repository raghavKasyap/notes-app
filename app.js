const notes = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');

yargs.command({
    command : 'add',
    description : 'Adds a note',
    builder: {
        body: { 
            description : 'Notes Body',
            demandOption : true,
            type : 'string'
        },
        title:{
            description : 'Notes title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command : 'remove',
    description : 'removes a note',
    builder: {
        title:{
            description : 'Notes title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command : 'list',
    description : 'lists all notes',
    handler(argv) {
        notes.listNotes();
    }
});

yargs.command({
    command : 'read',
    description : 'read a note',
    builder: {
        title:{
            description : 'Notes title',
            demandOption : true,
            type :'string'
        }
    },
    handler(argv) {
       notes.readNote(argv.title);
    }
});

yargs.parse();