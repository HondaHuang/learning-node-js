const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// use (alias, middleware)
app.use('public', express.static(path.join(__dirname, 'static')))
app.listen(3000)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

// allows us to parse url encoded forms
// app.use(bodyParser.urlencoded({extended: false}))
// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send('successfully posted data');
// })

// allows us to parse json
app.use(bodyParser.json());
app.post('/', (req, res) => {
  console.log(req.body);
  res.json({success: true});
})

app.use(bodyParser.json());
app.get('/hello', (req, res) => {
  res.send('Hello World');
})

app.get('/example', (req, res) => {
  res.send('hitting example route');
})

app.get('/example/:name/:age', (req, res) => {
  console.log(req.params);
  console.log(req.query); // ?name=value&name=value in the url
  res.send(req.params.name + ', age: ' + req.params.age);
})
