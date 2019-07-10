const http = require('http');
const server = http.createServer();
const port = process.env.PORT || 3000;

server.on('request', (req, res) => {
    res.write('hello, world');
    res.end();
    console.log(req.connection.remoteAddress);
    console.log(req.url);
})

server.listen(port);