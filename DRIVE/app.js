const express = require('express');
const userRouter = require('./routes/user.routes');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectToDB = require('./config/db');
const app = express();
const cookieParser = require('cookie-parser');
const indexRoute = require('./routes/index.routes');
dotenv.config();
connectToDB();

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.use('/', indexRoute);
app.use('/user', userRouter);

app.listen(3000);