const express = require('express');
const bodyParser = require('body-parser');
const reviewRoutesV1 = require('./v1/review/review.routes');
const reviewRoutesV2 = require('./v2/review/review.routes');
const userRoutesV2 = require('./v2/user/user.routes');
const app = express();
// configure bodyParser library
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// log all incoming requests for debugging purposes
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request for ${req.url}`);
  next();
});
// standard web server response headers configuration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use("/api/v1/review", reviewRoutesV1);
app.use("/api/v2/review", reviewRoutesV2);
app.use("/api/v2/user", userRoutesV2);

// Custom error handler
app.use(function(err, req, res, next) {
    // Any request that has not already been handled or has thrown an unhandled error will get here
    console.log(err);
    res.status(500).json({ message: err.message });
});
module.exports = app;
