const mongoose = require('mongoose');

const mongoDBUri = process.env.MONGODB_STRING;

mongoose
    .connect(mongoDBUri)
    .then((response) => {
        console.log("EntryApp Database connected");
    }).catch((err) => {
        console.log("connction error: ", err);
    });