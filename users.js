const users = []

app.post('/users', function(req, res) {
  const user = req.body

  pg.connect(conString, function(err, client done) {
    if(err) {
      // Pass the error to the express router
      return next(err)
  }
  client.query('INSERT INTO users (name, age) VALUES ($1, $2);',
    [user.name, user.age], function (err, result) {
      done() // This done callback signales the pg driver that the connection can be closed or returned to the connection pool

    if (er) {
      // pass the error to the express error handler
      return next(err)
    }
    res.send(200)
    })
  })
})
