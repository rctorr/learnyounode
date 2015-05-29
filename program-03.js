var fs = require('fs')

fn = process.argv[2]

buf = fs.readFileSync(fn)
mystr = buf.toString()
myarray = mystr.split('\n')
n = myarray.length
nlineas = myarray.length

nlineas-=1

console.log(nlineas)

