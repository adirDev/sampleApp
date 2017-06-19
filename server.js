var express = require('express');
var app = express();
var instagram = require('instagram-node').instagram();
var instagramHandler = require('./instagramRequestHandler.js');


app.get('/', instagramHandler.authorize_user);
app.get('/authorize_user', instagramHandler.authorize_user);
app.get('/handleauth', instagramHandler.handleauth);
app.get('/searchTag', instagramHandler.searchTag);
app.get('/randomLoveTag', instagramHandler.randomLoveTag);


app.listen(8000,function(){
  console.log("listening port 8000")
});

