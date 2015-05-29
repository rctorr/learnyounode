var http = require('http')
var bl = require('bl')

function procesa(response) {
    response.pipe(bl(function(err, data) {
        if(err)
            return console.error(err)
        s1 = data.toString()
        console.log(s1.length)
        console.log(s1)
    }))
}


http.get(process.argv[2], procesa)
