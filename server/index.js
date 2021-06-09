const express = require('express');
const authRoute = require('./Routes/auth');
require('dotenv').config();

const app =express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(authRoute);

app.listen(PORT, ()=>{
    console.log(`Server now listening on port ${PORT}`);
});