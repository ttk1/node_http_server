const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    res.write('hello, world');
    res.end();
    console.log(req.connection.remoteAddress);
    console.log(req.url);
})

server.listen(3000);