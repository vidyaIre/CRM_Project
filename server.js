const express = require('express');
const router = require('./routes');
const connectDB = require('./dbConfig');
const app = express();

require('dotenv').config();
//console.log(process.env);
//console.log(process.env.MONGODB_STRING_URI);

//const dbConfig = require('./dbConfig');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})