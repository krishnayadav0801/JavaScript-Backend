const mongoose = require('mongoose');
mongoose
    .connect('mongodb+srv://krishnayadav:krishna1234@cluster0.pd2tdsw.mongodb.net/?appName=Cluster0',

        { useNewUrlParser: true, useUnifiedTopology: true }
    )

    .then(() => console.log('DB CONNECTED'))
    .catch(err => console.log(err));

module.exports = mongoose;