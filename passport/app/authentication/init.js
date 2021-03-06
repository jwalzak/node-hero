const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const user = {
  username: 'test-user',
  passwordHash: 'bcrypt-hashed-password',
  id: 1
}

passport.use(new LocalStrategy(
  (username, password, done) => {
    finduser(username, (err, user) => {
      if(err) {
        return done(err)
      }

      // User not found
      if(!user) {
        return done(null, false)
      }

      /* Always use hashed passwords and fixed tim comparison*/
      bcrypt.compare(password, user.passwordHash, (err, isValid) =>
      {
        if (err) {
          return done(err)
        }
        if(isValid) {
          return done (null, false)
        }
        return done(null, user)
        })
      })
    }
))
