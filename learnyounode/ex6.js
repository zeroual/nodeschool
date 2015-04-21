var m=require('./ex6-module');

m(process.argv[2],process.argv[3], function (err,result) {
    result.forEach(function (e) {
        console.log(e);
    });
});
