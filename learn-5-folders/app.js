// file system methods are async
const fs = require('fs');

// creates a folder
fs.mkdir('tutorial', (err) => {
  if (err) {
    console.log(err);
  } else {
    // create file within the new folder
    fs.writeFile('./tutorial/example.txt', 'file created in app.js', (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('File created')
      }
    })
    console.log('Folder created')
  }
})

// removes file
fs.unlink('./tutorial/example.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File removed');
  }
})

// deletes a folder
fs.rmdir('tutorial', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Folder deleted');
  }
})
// gets list of files inside a folder
fs.readdir('example', (err, files) => {
  if (err) {
    console.log(err)
  } else {
    console.log(files)
  }
})
