var net = require('net');
var strftime = require('strftime');

var port=process.argv[2];
var server = net.createServer(function (socket) {
    var date =new Date();
    console.log(date);
    socket.write(
      strftime('%Y-%m-%d %k:%M',date)
    );
    socket.end();
})
server.listen(port);
