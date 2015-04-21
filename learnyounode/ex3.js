var fs=require('fs');

var fileName=process.argv[2];
var buffer=fs.readFileSync(fileName);
var string=buffer.toString();
var linesCount=string.split('\n').length;
console.log(linesCount-1);