var fs = require('fs')
var path = require('path')
var mypath = process.argv[2]
var myext = process.argv[3]

function filtrar(error, lista) {
    for(i=0; i<lista.length; i++) {
        ext = path.extname(lista[i])
        newext = '.'+myext
        if(ext == newext) {
            console.log(lista[i])
        }
    }
}

fs.readdir(mypath, filtrar)


