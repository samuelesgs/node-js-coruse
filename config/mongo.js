const mongoose = require("mongoose")

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useUnifiedTopology: true,
    }, (err, res) => {
        if (!err) {
            console.log('*** CONECCTION SUCCESS *** ');
        } else {
            console.log('*** ERROR CONNECTION *** '+err);
        }
    }
    );
};

module.exports = dbConnect

