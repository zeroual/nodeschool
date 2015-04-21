var fs=require('fs');

var fileName=process.argv[2];
fs.readFile(fileName, function (err,buffer) {
    if(!err){
        var string=buffer.toString();
        var linesCount=string.split('\n').length;
        console.log(linesCount-1);
    }
});
