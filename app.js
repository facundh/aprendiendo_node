
const argv = require('./config/yargs.js');
const {crearTabla} = require('./helpers/multiplicar.js');
const colors = require('colors');

console.clear();

// const [, , arg3='base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(process.argv);
// console.log(argv);
// console.log('base yargs', argv.base);
// console.log('l yargs', argv.listar);

// const base = -5;
crearTabla(argv.base , argv.listar, argv.hasta)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creada correctamente'))
.catch(error => console.log(error));