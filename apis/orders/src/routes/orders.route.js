const { Router } = require('express');

const router = new Router();

// Respond to POST request on the root route (/), the application’s home page:
router.post('/create', (req, res) => {
    res.send('Got a create order request')
})

// Respond to a PUT request to the /user route:
router.put('/update', function (req, res) {
    res.send('Got a update order request')
})

// Respond to a DELETE request to the /user route:
router.delete('/delete', function (req, res) {
    res.send('Got a delete order request')
})

module.exports = router;