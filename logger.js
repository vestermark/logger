var fs = require('fs');
var filename =  process.argv[0];

var ws = fs.createWriteStream(filename);