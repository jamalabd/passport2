const express = require('express');
const app = express();
const passport = require('./passport.js');
const pP = require('passport');
const jwt = require('jsonwebtoken');
const users = require('./users');

const genToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      iat: Date.now(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    'secret'
  );
};

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(pP.initialize());
passport(pP);

app.get('/', (req, res) => {
  res.send('server live my guy');
});

app.get(
  '/secret',
  pP.authenticate('jwt', { session: false }),
  (req, res, next) => {
    res.json('Secret Data');
  }
);

app.post('/', (req, res) => {
  const { email, name, password } = req.body;
  const newUser = {
    email,
    name,
    password,
    id: 1,
  };

  const usr = users.find((user) => user.email == email);
  console.log(usr);
  if (usr) {
    return res.status(400).json({ err: 'User already exists' });
  } else {
    users.push(newUser);
    const token = genToken(newUser);
    res.status(200).json({ token });
    console.log(newUser);
  }
});
app.get('/login', (req, res) => {});

const port = 2000;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});

// passprt id check isnt wokring
// even if user already exist it is still
// letting them register
