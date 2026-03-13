import express from "express";
import appRouter from './routes';
import path from "path";

const app = express()

// body parser
app.use(express.json())
// decodeURI in body
app.use(express.urlencoded({ extended: false }))

app.use(express.static( path.join(__dirname, '..', 'public') ))

app.use('/', appRouter)

app.listen(3000, () => {
    console.log('server is work...');
})