const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opt = {
  secretOrKey: 'secret',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

module.exports = (users) => {
  passport.use(
    new JwtStrategy(opt, (jwt_payload, done) => {
      users.filter((user) => {
        if (!user || user.id != jwt_payload.id) return done(null, false);
        return done(null, user);
      });
    })
  );
};
