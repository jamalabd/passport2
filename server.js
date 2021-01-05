const express = require('express');
const app = express();
const passport = require('./passport.js');
const jwt = require('jsonwebtoken');

const users = {};
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

app.get('/', (req, res) => {
  res.send('server live my guy');
});

app.get('/register', (req, res) => {
  if (passport(users)) {
    return res.status(400).json({ err: 'User already exists' });
  }
  const { email, name, password } = req.body;
  users.email = email;
  users.name = name;
  users.password = password;
  const token = genToken(users);
  res.status(200).json({ token });
});
app.get('/login', (req, res) => {});

const port = 2000;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
