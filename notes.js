const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => "Your notes..";

/**************** Filter method of arrays  *************
            var ages = [32 , 33, 16, 40];
            var voters = ages.filter(function(age){
                return age >= 18; 
            });
            console.log(voters);
*****************************************************/

const addNotes = (title, body) => {
    const notes = loadNotes();

    const duplicate = notes.filter((note) => note.title === title);
         
    if(duplicate.length === 0){
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('Note added!'));     
    }
    else {
        console.log(chalk.red.inverse('Note Title Taken'));
    }    
}

const removeNotes = (title) => {

    const notes = loadNotes();
    const dupliacteNotes = notes.filter((note) => note.title !== title);

    if(notes.length === dupliacteNotes.length){
        console.log(chalk.red.inverse('Note hasn\'t been found'));
    } else {
        console.log(chalk.green.inverse('Note removed successfully'));
    }
    saveNotes(dupliacteNotes);

}

const listNotes = () => {
    console.log(chalk.yellow.inverse('Your Notes......'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const requiredNote = notes.filter((node) => node.title === title )
    console.log(requiredNote[0].title + ' : ');
    console.log(requiredNote[0].body);
}

const saveNotes = (notes) => {
    
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => { 
    // Error Handling
    try{                                                            
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }    
}

// For exporting multiple functions we export the object
module.exports = {
    getNotes : getNotes,
    addNotes : addNotes, 
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNote : readNote
};
