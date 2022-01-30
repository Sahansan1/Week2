const http = require('http'); //requiring http module

const hostname = '127.0.0.1';  //local host url
const port = 3000;

const server = http.createServer((req, res) => { //creating a small server
  res.statusCode = 200; //status 200 means its good
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('Hello World!!!!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
