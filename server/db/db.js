const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/finalProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}), () => {
    try {
    } catch(error) {
        console.error(error);
    }
}

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection to DB was successful');
});