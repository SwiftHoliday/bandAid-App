// require the modules
const mongoose = require('mongoose');

// set up shortcut variable
const db = mongoose.connection;

// connect to database server
mongoose.connect('mongodb://localhost/bands', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// set up connection listener
db.on('connected', function () {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});