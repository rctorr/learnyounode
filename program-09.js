var oget = require("./oget")
var buff = []
var i = 0

function listar(error, data, n) {
    if(error)
        return console.error(error)
    
    buff[n] = data
    i++
    if(i === 3) {
        for(item in buff) {
            console.log(buff[item])
        }
    }
}

oget(0, process.argv[2], listar)
oget(1, process.argv[3], listar)
oget(2, process.argv[4], listar)

