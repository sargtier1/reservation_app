var express = require('express')
var app = express()
var PORT = 3000;

var reservations = []
var waitingList = []

app.use(express.json());

app.get('/',function(req, res){
    res.send('success!')
})

app.listen(PORT)