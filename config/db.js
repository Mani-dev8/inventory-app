const mongoose = require('mongoose');
const mongoDB = () => mongoose.connect('mongodb+srv://mmanitest:LM6cUsCxo0btq1ZU@inventoryclustor.7c2mcdg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });

module.exports = mongoDB;
