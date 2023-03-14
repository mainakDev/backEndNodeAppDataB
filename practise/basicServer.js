/*
Q1. Create a server at localhost:4200
	a. Create a home page on route '/', display a html page on it 'Home page'
	b. Create a '/login' route and console.log() something & also display a html page
*/


const http = require('http');
const server = http.createServer((req, res) => {
	const url = req.url;
	if(url === '/'){
		res.write('<html>');
		res.write('<body>')
		res.write('<h1>This is the home page</h1>')
		res.write('</body>')
		res.write('</html>');
		res.end();
	} 
	if(url === '/login'){
		console.log('THis is the login page');
		res.write('<html>');
		res.write('<body>')
		res.write('<h1>This is a login page</h1>')
		res.write('</body>')
		res.write('</html>');
		res.end();
	}
});
server.listen(4200);


