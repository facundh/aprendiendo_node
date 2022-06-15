

const argv = require('yargs')
.option('b', {
    alias:'base',
    type: 'number',
    describe:'Da la base para imprimir la tabla de multiplicar'

})
.option('l',{
    alias:'listar',
    type:'boolean',
    default:'false',
    describe:'Muestra la tabla en consola'
})
.option('h',{
    alias:'hasta',
    type:'number',
    default: 10,
    describe:'Limite de nuestra tabla de multiplicar'
})
.check((argv, options) =>{
    if(isNaN(argv.b && argv.h)){
        throw 'La base y el hasta tiene que ser un numero'
    }
    return true;
})
.argv;

module.exports = argv;