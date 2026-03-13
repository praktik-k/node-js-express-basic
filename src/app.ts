import express from "express";
import router from './routes';

const app = express()

// body parser
app.use(express.json())
// decodeURI in body
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.listen(3000, () => {
    console.log('server is work...');
})