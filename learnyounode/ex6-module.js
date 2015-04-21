var fs = require('fs')
var path = require('path')


module.exports=function(dir,ext,callback){

    fs.readdir(dir, function (err, list) {
        var result=[];
        if(err) {
            return callback(err,[]);
        }else{
            list.forEach(function (file) {
                if (path.extname(file) === '.' + ext)
                    result.push(file);
            });
        }
       return callback(false,result);
    });
};
