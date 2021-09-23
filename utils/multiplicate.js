/*===============================Imprimir la base del 5 por la consola==============================*/
//PARA GUARDAR NueSTRA TABLA EN LA COMPUTADORA (DISCO)
const fs = require('fs');
const colors = require('colors');

const createFile = async ( base = 5, listar = false, hasta = 10 ) => {

    try {
        let output = "";//Sin colores
        let consola = "";//Para imprimir por consola con los colores elejidos del paquete

        for (let i = 1; i <= hasta; i++) {
          output += `${base} X ${i} = ${base * i}\n`;
          consola += `${base} ${'X'.cyan} ${i} ${'='.cyan} ${base * i}\n`;
        }

          if( listar ) {
            console.log("===============================================".yellow);
            console.log('           This is the table of'.white, colors.cyan( base ) );
            console.log("===============================================".yellow);
            console.log(consola);
          }

          try {
            fs.writeFileSync(`./output/base-${base}.txt`, output);
            return (`The base-${base}.txt`.yellow);
          } catch (error) {
            console.log(error);
          }
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createFile
}