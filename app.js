import express from 'express'
import { join } from 'path'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import connectdb from './db/connectdb.js';
//import routes
import web from './routes/web.js'
import routerStudent from './routes/student.js';
const app = express();


const port = process.env.PORT || '4000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mdwasim6123:wasim_123@cluster0.wwbdsrb.mongodb.net/Register?retryWrites=true&w=majority"
//static files
app.use(express.static(join(process.cwd(), "public")))
app.use('/student/edit', express.static(join(process.cwd(), "public")))
app.use('/student/attendance', express.static(join(process.cwd(), "public")))


//templete engine
app.set('view engine', 'ejs')

//connect database
connectdb(DATABASE_URL);

//set body parser
app.use(bodyParser.urlencoded({ extended: true }));

//set routes
app.use('/', web)
app.use('/', routerStudent)



app.listen(port, function () {
    console.log(`hello run this program at http://localhost:${port}`);
})