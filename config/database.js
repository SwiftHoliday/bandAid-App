// require the modules
const mongoose = require('mongoose');

// set up shortcut variable
const db = mongoose.connection;

// connect to database server
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/bandAid', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// set up connection listener
db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

db.on('error', function (error) {
    console.log(`Encountered an error: ${error.message}`);
});