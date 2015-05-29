
module.exports = function (mypath, myext, listar) {
    var fs = require('fs')
    var path = require('path')

    function filtrar(error, lista) {
        var data = [];
        
        if(error)
            return listar(error)

        for(i=0; i<lista.length; i++) {
            ext = path.extname(lista[i])
            newext = '.'+myext
            if(ext == newext) {
                data.push(lista[i])
            }
        }
        
        return listar(null, data)
    }

    fs.readdir(mypath, filtrar)

}


