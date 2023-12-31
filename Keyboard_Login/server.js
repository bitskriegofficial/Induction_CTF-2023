const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5005;

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/chall2', express.static(__dirname + '/public'));

// Simulated database of valid users
const users = [
  { username: 'floofcat', password: 'bitskrieg@69420' },
];

app.get('/chall2/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/chall2/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided credentials match a valid user
  const validUser = users.find(user => user.username === username && user.password === password);

  if (validUser) {
    res.redirect('/chall2/flag-bits-floof.html');
  } else {
    res.send('Invalid login credentials. Please try again.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
