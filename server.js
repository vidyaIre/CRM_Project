const express = require('express');
const router = require('./routes');
const app = express();
require('dotenv').config();

const dbConfig = require('./dbConfig');



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', router);


// app.get('/', (req, res) => {
//     res.send('Welcome to the API');
// });



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})