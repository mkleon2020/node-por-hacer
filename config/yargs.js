const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea"

}
const completado = {
    default: true,
    alias: 'c',
    desc: "Marca como completado o pendiente la tarea"
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el comando del estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar la tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}