
const {tablaMultiplicacion} = require("./helpers/mltiplicar")
const argv = require("./config/yargs")

console.clear();
console.log(argv);
tablaMultiplicacion(argv.b, argv.h, argv.l)
.then(archivo => console.log(archivo," creado"))
.catch(err => console.log(err))
