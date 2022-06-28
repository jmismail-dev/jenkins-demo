const express = require('express');
const cors = require('cors');
const app = express()
const port = 5000;

app.use(cors())

app.get('/api', (req, res) => {
    res.status(200).send({ message: "Hello from NodeJs" })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})