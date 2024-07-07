const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 9000;
const category = require('./data/category.json')
const data = require('./data/data.json')

// app.use(cors())
app.use(cors({
    origin: "*",
    credentials: true,
}))

app.get('/', (req, res) => {
    res.send('Hello world!! Welcome to my server world, this is my learning website...')
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.get('/category/:category', (req, res) => {
    const name = req.params.category;
    const info = data.filter(eachData => eachData.category === name);
    res.send(info)
})

app.listen(port, () => {
    console.log(`This sever is running on ${port} number port`)
})