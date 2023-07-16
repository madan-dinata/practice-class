// const bodyParser = require('body-parser')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get("/:id", (req, res) => {
    const id = req.params.id
    res.send(id)
})

app.post('/data', (req, res) => {
    res.send(req.body);
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})