var bodyParser = require("body-parser");
var app = require('express')();
var express = require('express');
var http = require("http").Server(app)
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var items = require("./model/shop.js");



app.use(bodyParser.urlencoded({ extended: true }));



app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.put('/item/add', function (req, res) {
    console.log(req.body.item + " " + req.body.quantity + " " + req.body.priority)

    var list = new items({ item: req.body.item, quantity: req.body.quantity, priority: req.body.priority })

    list.save(function (err, data) {
        if (err) return console.error(err);
        console.log(data.item + " saved!");
    });

})

app.get('/item/retrieve/all', function (req, res) {
    res.send("Retrieve all.")
    
})

app.get('/item/retrieve/:items', function (req, res) {
    res.send(items)
})

app.post('/item/update/', function (req, res) {
    res.send("Update here.")
})

app.delete('/item/delete', function (req, res) {
    res.send('Delete here.')
})

http.listen(port, function () {
    console.log('listening on *:' + port);
});