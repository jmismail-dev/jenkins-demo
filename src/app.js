const express = require('express');
const cors = require('cors');
const app = express()
const port = 5000;

app.use(cors())

app.get('/api', (req, res) => {
    res.status(200).send({ message: "Hello from API 1" })
})

app.get('/api/nginx', (req, res) => {
    res.status(200).send({ message: "Hello NGINX PROXY 1" })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})