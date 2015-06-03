var http = require("http")
var url = require('url')

var port = process.argv[2]

var server = http.createServer( function(req, res) {
     // El method recibido es:
     if(req.method == 'POST') {
        res.end('enviar en GET\n')
     }

     ourl = url.parse(req.url, true)
     newdate = new Date(ourl.query['iso'])
     

     if(ourl.pathname == '/api/parsetime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({hour: newdate.getHours(),
                                    minute: newdate.getMinutes(),
                                    second: newdate.getSeconds() }))
     }
     else if(ourl.pathname == '/api/unixtime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ unixtime: newdate.getTime() }))
     }
     else {
        res.end()
     }

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

