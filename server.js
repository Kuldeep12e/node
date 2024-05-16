const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
require('dotenv').config();
const route = require('./routes/routes')
const database = require('./config/database');
const { signup } = require('./controller/user');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

database.connect();

app.use('/v1', route);

app.get('/home' , (req , res) =>{
    return res.json({
        success:true,
        message:"Bhai run ho rha hu"
    })
})

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});
