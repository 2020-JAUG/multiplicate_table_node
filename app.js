const { createFile } = require('./utils/multiplicate');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

createFile( argv.b, argv.l, argv.u )
    .then( nameFile => console.log(nameFile, 'Was create'.green) )
    .catch(err => console.log(err) );
