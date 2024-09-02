const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Basic authentication logic (for demonstration purposes)
  if (username === 'admin' && password === 'password') {
    res.send('Login successful');
  } else {
    res.send('Invalid credentials');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
