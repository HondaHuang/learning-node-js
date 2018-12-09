// file system
const fs = require('fs');

// creates a file
fs.writeFile('example.txt', 'this is an example, created from app.js', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File successfully created');
    fs.readFile('example.txt', 'utf-8', (err, file) => {
      if (err) {
        console.log(err);
      } else {
        console.log(file);
      }
    })
  }
})

// rename a file
fs.rename('example.txt', 'example2.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File renamed');
  }
})

// add to a file
fs.appendFile('example2.txt', ' Appended text', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Text appended to file');
  }
})

// delete a file
fs.unlink('example2.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('successfully deleted the file');
  }
})
