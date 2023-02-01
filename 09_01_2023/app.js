const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html><head><title>Enter Message</title></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body></html>');
        return res.end();
    }
    if(url == '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=> {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSynce('message.txt',message);
        });
        // fs.writeFileSync('message.txt','DUMMYTEXT');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    } 
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>My first HTML page</title></head><body><h1>Hello from node.js</h1></body></html>');
    return res.end();
});

server.listen(3000);