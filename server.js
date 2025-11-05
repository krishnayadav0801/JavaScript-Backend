const express = require('express');
const bcrypt = require('bcryptjs');

const app = express();
const mongoose = require('./db'); // ✅ make sure this file actually connects to DB

app.use(express.json()); // ✅ middleware to parse JSON body

// Import routes
const userRoutes = require('./routes/user');

// ✅ Prefix all user routes with /api
app.use('/api', userRoutes);  
// Now: POST http://localhost:5000/api/signup
// or    POST http://localhost:5000/api/login

// ✅ Basic test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ✅ Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
