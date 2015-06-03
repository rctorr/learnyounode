var http = require("http")
var fs = require('fs')

var port = process.argv[2]
var file = process.argv[3]

var server = http.createServer( function(req, res) {
     // Se envía el encabezado para el tipo txt
     res.writeHead(200, {'content-type': 'text/plain'})
     
     // Leer archivo
     rstream = fs.createReadStream(file, 'utf8')
     
     // Se concatena vía tubería a res
     rstream.pipe(res)

})

server.listen(Number(port))

