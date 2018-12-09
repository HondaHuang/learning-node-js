const express = require('express');
const app = express();

// hello world
app.get('/', (req, res) => {
  res.send('Hello World');
})
app.listen(3000)

app.get('/example', (req, res) => {
  res.send('hitting example route');
})

app.get('/example/:name/:age', (req, res) => {
  console.log(req.params);
  console.log(req.query); // ?name=value&name=value in the url
  res.send(req.params.name + ', age: ' + req.params.age);
})
