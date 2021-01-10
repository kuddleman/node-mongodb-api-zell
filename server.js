const express = require('express')

// Express doesn't handle reading data on its own  
//Need body parser.  
//Body Parser is middleware
const bodyParser = require('body-parser')

const app = express() 
const PORT = 3000


app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.post('/quotes', (req, res)=>{
    console.log(`This is from ANOTHER POST REQUEST`)
})



app.listen(PORT,(err)=>{
    if(err) console.log(`Error in server setup`)
    console.log(`Server listening on Port ${PORT}`)
})