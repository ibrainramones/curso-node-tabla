
const fs = require("fs")

const imprimirArchivo = ({base,salida}) => {

    try {
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)
        return `Tabla-${base}.txt`
    } catch (error) {
        throw error
    }
    
}

const tablaMultiplicacion = async (base, hasta, listar) => {

    try {

        console.log(`Creando Tabla`)

        let salida = ""
        salida += "================\n"
        salida += `=  TABLA DEL ${base} =\n`
        salida += "================\n\n"

        for (let index = 0; index < hasta; index++) {
            salida += `${base} x ${index + 1} = ${base * (index + 1)}\n`
        }

        if (listar) {
            console.log(salida)
        }

        let data = {base,salida}

        return await imprimirArchivo(data)

    } catch (error) {
        throw error
    }

}

module.exports = {
    tablaMultiplicacion
}