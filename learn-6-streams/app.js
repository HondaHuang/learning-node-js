// more efficiently read/write data, by doing it in chunks rather than the whole file at once
const fs = require('fs');
// returns a readable stream, which inherits from eventEmitter
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('example2.txt');

// reads in chunks, and writes to another file in chunks
// readStream.on('data', (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// })

// easier way of doing the above
readStream.pipe(writeStream);


// for compressing files
const zlib = require('zlib');
const gzip = zlib.createGzip();
// compressed files need .gz extension
const compressedStream = fs.createWriteStream('example3.txt.gz')

// gzip will compress the data, and creates a zip file
readStream.pipe(gzip).pipe(compressedStream);

// const gunzip = zlib.createGunzip();
// const readZipStream = fs.createReadStream('./example3.txt.gz');
// const writeZipStream = fs.createWriteStream('uncompressed.txt');
//
// // unzips compressed file and writes to new file
// readZipStream.pipe(gunzip).pipe(writeZipStream);
