const http = require('http');
const server = http.createServer();
const PORT = process.env.PORT || 3000;
const TOP_SECRET = require('./TOP_SECRET');

server.on('request', (req, res) => {
    const content = TOP_SECRET[req.url] || TOP_SECRET['/notfound'];
    const status = TOP_SECRET[req.url] ? 200 : 404;
    res.writeHead(status, {
        'Content-Type': 'application/json'
    })
    res.write(JSON.stringify(content));
    res.end();
})
server.listen(PORT);