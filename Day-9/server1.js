const fs = require('fs');
const http = require('http');

var server = http.createServer(function(req, res){
	console.log('Request from: '+req.url);
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	var myReadStream = fs.createReadStream(__dirname+'/readMe.txt', 'utf-8');
	myReadStream.pipe(res);
});

//console.log(__dirname);
const PORT = 8080;
server.listen(PORT, '127.0.0.1');


console.log('Testing');
console.log(`Server listening on port ${PORT}`);

