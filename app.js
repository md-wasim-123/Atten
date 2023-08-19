import express from 'express'
import dotenv from 'dotenv'
dotenv.config()// config file
import { join } from 'path'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flush from 'connect-flash'
import connectdb from './db/connectdb.js';
//import routes
import web from './routes/web.js'
import routerStudent from './routes/student.js';
const app = express();


const port = process.env.port
//static files
app.use(express.static(join(process.cwd(), "public")))
app.use('/student', express.static(join(process.cwd(), "public")))
app.use('/student/edit', express.static(join(process.cwd(), "public")))
app.use('/student/attendance', express.static(join(process.cwd(), "public")))

//set cookieparser
app.use(cookieParser('secret'));
//set session
let TIME_INTERVAL = 1000 * 60 * 24 * 30
app.use(session(
    {
        secret: 'secret',
        cookie: { maxAge: TIME_INTERVAL},
        resave: false,
        saveUninitialized: false
    }))

//use flash 
app.use(flush())

//templete engine
app.set('view engine', 'ejs')

//connect database
connectdb(process.env.DATABASE_URL);

//set body parser
app.use(bodyParser.urlencoded({ extended: true }));

//set routes
app.use('/', web)


app.listen(port, function () {
    console.log(`hello run this program at http
app.use('/', routerStudent)://localhost:${port}`);
})