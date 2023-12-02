// Create web server
// 1. Import Express
// 2. Create an instance of Express
// 3. Create routes
// 4. Start the server
// 5. Add middleware

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Add middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// POST route
app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('Thank you for your comment!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});