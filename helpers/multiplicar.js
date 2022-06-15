const fs = require("fs");
const colors = require("colors");

const crearTabla = async (base = 2, listar, hasta) => {
  try {
    let salida, consola = "";

    for (let i = 1; i <= hasta; i += 1) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.cyan} ${base * i}\n`;
    }
    if (listar == true) {
      console.log("============".america);
      console.log('Tabla del:'.green, colors.blue(base));
      console.log("============".rainbow);
      console.log(consola);
    }

    fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearTabla,
};
