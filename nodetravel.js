var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('travel.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8771);
console.log(`Server running on port 8771 to open travel.html page`)