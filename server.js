// server.js (Node.js backend code)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse incoming form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files like HTML, CSS, JS
app.use(express.static('public'));

// Simulate storing subscriptions in memory
let subscriptions = [];

// Handle POST request for course subscription
app.post('/subscribe', (req, res) => {
  const { name, email, paymentMethod, courseName } = req.body;

  // Simulating saving the subscription in the server
  subscriptions.push({ name, email, paymentMethod, courseName });

  // Send response back to the frontend
  res.json({ success: true, courseName });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
