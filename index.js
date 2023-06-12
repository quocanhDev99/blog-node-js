const express = require('express')
const app = express() // function
const port = 3000

app.get('/', (req, res) => {
  res.send('Your Demo')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})