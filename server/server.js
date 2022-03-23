const path = require('path');
const fs = require('fs');
const { join } = require('path');
const request = require ('request');

////STEP 1!!!!!//////
const dataPath = path.join(__dirname, '../chirps.json');

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {

console.log(data);

    // const person = JSON.parse(data);
    // console.log(person.name);
    // console.log(person.chirp);
});
