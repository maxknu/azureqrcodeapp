const http = require('http');
var qr = require('qr-image');
var url = require('url');

const server = http.createServer((request, response) => {
    let imgSize = 5;
    let imgURLName = new Date().toString()

    try {
        imgURLName = url.parse(request.url, true).query.text;
        imgSize = parseInt(url.parse(request.url, true).query.size);

        let code = qr.image(imgURLName, { type: 'png', size: imgSize });

        response.writeHead(200, { "Content-Type": "image/png" });
        code.pipe(response);
    } catch (error) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Try adding ?text and ?size tags. Like this: http://localhost:1337/?size=6&text=bing.com');
    }
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
