const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();
const routes = require('./routes/index.route');
const express = require('express');
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT_PRODUCT || 3000;

const BASE_URL = '/fullstack';

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// Respond to POST request on the root route (/), the application’s home page:
app.post('/create', (req, res) => {
  console.log(req.body);
  res.send({ result: 'success' })
})

// Respond to a PUT request to the /user route:
app.put('/update', function (req, res) {
  console.log(req.body);
  res.send('Hello World - Update')
})

// Respond to a DELETE request to the /user route:
app.delete('/delete', function (req, res) {
  console.log(req.body);
  res.send('Hello World - Delete')
})

app.use(BASE_URL, routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})