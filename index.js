const http = require('http');
const url = require('url');
const qr = require('qr-image');
require('dotenv').config()

const server = http.createServer((request, response) => {
    let imgSize = 5;
    let imgURLName = new Date().toString();
    let SECRET_TOKEN = process.env.SECRET_TOKEN;
    let providedToken = "";

    try {
        imgURLName = url.parse(request.url, true).query.text;
        imgSize = parseInt(url.parse(request.url, true).query.size);
        providedToken = url.parse(request.url, true).query.token;

        if (providedToken == SECRET_TOKEN) {
            let code = qr.image(imgURLName, { type: 'png', size: imgSize });
            response.writeHead(200, { "Content-Type": "image/png" });
            code.pipe(response);
        } else {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end('Access denied, incorrect token: Try proving query strings like this "?token=" "?text=" "?size=" EXAMPLE: https://qrcodeapp20.azurewebsites.net/?size=6&text=www.bing.com&token=yoursupersecrettokencodefromenv');
        }

    } catch (error) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('You will need to provide ?token= ?text=, ?size= query strings. Like this: https://qrcodeapp20.azurewebsites.net/?size=6&text=www.bing.com&token=yoursupersecrettokencodefromenv');
    }
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
