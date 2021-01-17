const fs = require('fs');

console.log(__dirname);
var myReadStream = fs.createReadStream(__dirname+'/readMe.txt', 'utf-8');
var myWtiteStream = fs.createWriteStream(__dirname+'/writeMe.txt');


myReadStream.on('data', function(chunk){


	console.log('New chunk received');
	console.log(chunk);

	myWtiteStream.write(chunk);

	

});