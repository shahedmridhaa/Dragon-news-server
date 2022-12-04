const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const categories = require('./data/categories.json')
const news = require ('./data/news.json')

app.get('/',(req, res) =>{
    res.send('Dragon news is coming')
})

app.get ('/categories', (req, res) =>{
    res.send(categories)
})

app.get ('/news', (req, res) =>{
    res.send(news)
})

app.get('/category/:id',(req, res) =>{
    const id = req.params.id
     const selected = news.filter(n => n.category_id === id)
        res.send(selected)   
})

app.get('/news/:id',(req, res) =>{
   const id = req.params.id
   const selected = news.find(n => n._id === id )
   res.send(selected)
})

app.listen(port,() =>{
    console.log('Dragon news server running', port);
})
