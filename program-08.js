var http = require('http')

var url = process.argv[2]

function procesa(response) {
    s1 = ""
    response.setEncoding("utf8")
    response.on("data", function(data) {
        s1 = s1 + data
    })
    response.on("error", console.error)
    
    response.on("end", function(data) {
        console.log(s1.length)
        console.log(s1)
    })
}


http.get(url, procesa)
