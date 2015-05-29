var mypath = process.argv[2]
var myext = process.argv[3]

var mymod = require('./mymodule')

function listar(error, data) {
    if(error)
        return callback(error)

    // Imprime la lista en data
    for(i=0; i<data.length; i++) {
        console.log(data[i])
    }
}

mymod(mypath, myext, listar)

