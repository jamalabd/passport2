const users = require('./users');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opt = {
  secretOrKey: 'secret',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opt, (jwt_payload, done) => {
      console.log(jwt_payload);
      try {
        users.filter((user) => {
          if (!user || user.id != jwt_payload.id) return done(null, false);
          return done(null, user);
        });
      } catch (error) {
        console.log(error);
      }
    })
  );
};
