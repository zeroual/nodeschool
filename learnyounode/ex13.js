var http = require('http');
var url=require('url');

var server = http.createServer(function (req, res) {
    u=url.parse(req.url,true);
    if(u.pathname==='/api/parsetime'){
        dateString=u.query.iso;
        date=new Date(dateString);
        res.writeHead('200',"Content-Type:application/json");
        res.end(JSON.stringify(
            {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
        ));

    }
        if(u.pathname==='/api/unixtime'){
        dateString=u.query.iso;
        date=new Date(dateString);
        res.writeHead('200',"Content-Type:application/json");
        res.end(JSON.stringify(
            {
                unixtime:date.getTime()
            }
        ));

    }
});

server.listen(Number(process.argv[2]))
