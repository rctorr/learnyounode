var fs = require('fs')
var file = process.argv[2]

function cuenta(error, contenido) {
    console.log(contenido.split('\n').length - 1)
}

fs.readFile(file, 'utf8', cuenta)


