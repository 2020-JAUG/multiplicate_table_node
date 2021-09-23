const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'It is the base of the multiplication table'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: 'Show the tabla in the console'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: 'Create the table up to the indicated number'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "It must be a number";
    }
    return true;
  }).argv; //METODO CHECK DE YARGS

  module.exports = argv;


  /*==================================SUSTITUIMOS ESTA MANERA DE EJECUTARLO, USANDO YARGS. UP!=====================================================*/
//DE ESTA MANERA RECIBIMOS COMANDOS DESDE LA CONSOLA
//DESESTRUCTURACIÓN DEL ARRAY,
// const [, ,  arg3 = 'base=5'] = process.argv;
// const [, base ] = arg3.split('=');