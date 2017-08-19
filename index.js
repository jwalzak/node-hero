const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Word up from Express')
})

app.listen(port, (err) => {
  if(err) {
    return console.log('Some shit went down', err)
  }

console.log(`Server is listening on ${port}`)
})
