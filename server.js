const express=require('express');
const connect= require('./api/models');
const routers = require('./api/routers');
const cookieParser=require('cookie-parser');
const cors=require('cors');


const app=express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

routers(app);
app.listen(3000);
