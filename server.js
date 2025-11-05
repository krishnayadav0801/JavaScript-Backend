const express = require('express');
const app = express();
const mongoose = require('./db')
app.use(express.json());
const userRoutes = require('./routes/user');
app.use('/api', userRoutes);  // your endpoint becomes /api/signup



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => console.log('server running on port 5000'))
