var http = require('http')

var url = process.argv[2]

function procesa(response) {
    response.setEncoding("utf8")
    response.on("data", function(data) {
        console.log(data)
    })
    response.on("error", console.error)
}


http.get(url, procesa)
