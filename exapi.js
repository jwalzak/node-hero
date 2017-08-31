// The GET method
const request = require('request-promise')

const options = {
  method: 'GET',
  uri: 'https://risingstack.com'
}

request(options)
.then(function(response){
  // Success
  })
.catch(function(err) {
  // Fail
  })

// Post method 
const options = {
  METHOD = 'post',
  uri: 'https://risingstack.com/login',
  body: {
    foo: 'bar'
  },
  json: true
  // JSON will automatically stringify the body
}

request(options)
  .then(function (response) {
    // Handle response
    }
  .catch(function (err) {
    // Handle error
  })
  )
