
module.exports = function (n, myurl, guardar) {
    var http = require('http')
    var bl = require('bl')

    function procesa(response) {
        response.pipe(bl(function(err, data) {
            if(err)
                return guardar(err)
            return guardar(null, data.toString(), n)
        }))
    }

    http.get(myurl, procesa)
}


