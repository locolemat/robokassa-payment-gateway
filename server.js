const express = require('express');
const path = require('path');
const fsp = require('fs').promises;
const cors = require('cors');
const {logEvent} = require('./middleware/logEvents')

PORT = process.env.PORT || 3500;
app = express();

app.use(cors())

app.use((req,res,next)=>{
    logEvent(`${req.method}\t${req.headers.origin}\t${req.url}\t${req.path}`)
    next()
})

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use(express.static(__dirname))

app.get('/robokassa_result', (req,res)=>{
    logEvent(`${req.url}\t${req.json}`)
})

app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)});
