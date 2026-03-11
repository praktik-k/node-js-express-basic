import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Not found</h1>')
})

app.listen(3000, () => {
    console.log('start server...');
})