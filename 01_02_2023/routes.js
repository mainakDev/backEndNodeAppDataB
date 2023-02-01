const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body></html>');
        return res.end();
    }
    if(url === '/message' && method == 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); //message=hello
            const message = parsedBody.split('=')[0]; ['message','hello']
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>My HTML page</title></head><body><h1>Welcome to Node.js</h1></body></html>');
    res.end();
};


module.exports = requestHandler;