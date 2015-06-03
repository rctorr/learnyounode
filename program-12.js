var http = require("http")

var port = process.argv[2]

var server = http.createServer( function(req, res) {
     // El method recibido es:
     if(req.method != 'POST') {
        res.end('enviar en POST\n')
     }
     req.setEncoding('utf8')

     req.on('data', function(data) {
        res.write(data.toString().toUpperCase())
     })
     req.on('end', function(err) {
        res.end()
     })

})

server.listen(Number(port))

// =======================================================
// Solución oficial

//    var http = require('http')
//    var map = require('through2-map')
//    
//    var server = http.createServer(function (req, res) {
//      if (req.method != 'POST')
//        return res.end('send me a POST\n')
//    
//      req.pipe(map(function (chunk) {
//        return chunk.toString().toUpperCase()
//      })).pipe(res)
//    })
//    
//    server.listen(Number(process.argv[2]))

