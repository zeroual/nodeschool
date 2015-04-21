var http=require('http');
var bl=require('bl');
var count=0;
var result=[];
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
        if(!err){
            result[0]=data.toString();
            count++;
            printResponse();
        }
    }));
});

http.get(process.argv[3], function (response) {
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
        if(!err){
            result[1]=data.toString();
            count++;
            printResponse();
        }
    }));
});

http.get(process.argv[4], function (response) {
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {

        if(!err){
           result[2]=data.toString();
            count++;
            printResponse();
        }
    }));
});

 function printResponse(){
     if(count===3){
        for(var i=0;i<result.length;i++){
             console.log(result[i]);
         }
     }
 }