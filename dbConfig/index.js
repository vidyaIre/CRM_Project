const mongoose = require('mongoose');

const mongoDBUri = process.env.MONGODB_STRING;

// mongoose
//     .connect(mongoDBUri)
//     .then((response) => {
//         console.log("EntryApp Database connected");
//     }).catch((err) => {
//         console.log("Database connction error: ", err);
//     });
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoDBUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch (error) {
        console.log("error:", error);
        process.exit(1);
    }
};
module.exports = connectDB


