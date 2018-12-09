// more efficiently read/write data, by doing it in chunks
const fs = require('fs');
// returns a readable stream
const readStream = fs.createReadStream('./example.txt');
