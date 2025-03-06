// Create web server
// 1. Import express
// 2. Create an express app
// 3. Create a GET route
// 4. Listen on port 3000

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});