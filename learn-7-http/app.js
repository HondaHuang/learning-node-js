const http = require('http');
const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Hello World from nodejs'); // creates response
    response.end(); // sends the response
  } else {
    response.write('Go to root url');
    response.end();
  }
});

// port
server.listen('3000')
