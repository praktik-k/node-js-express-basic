import express from "express";
import { getHomePage, postHomePage } from "./controllers/home";

const app = express()

// body parser
app.use(express.json())
// decodeURI in body
app.use(express.urlencoded({ extended: false }))

app.get('/', getHomePage)

app.post('/', postHomePage)

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Not found</h1>')
})

app.listen(3000, () => {
    console.log('start server...');
})