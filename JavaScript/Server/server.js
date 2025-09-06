import http from 'http';

const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello</h1>");
    res.end();
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})