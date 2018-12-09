const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const readStream = fs.createReadStream('./index.html');
  // create header, (status code, content type)
  res.writeHead(200, {'Content-type': 'text/html'})
  // response is also a writable stream
  readStream.pipe(res);
}).listen(3000);
