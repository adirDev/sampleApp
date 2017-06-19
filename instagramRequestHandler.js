var instagram = require('instagram-node').instagram();
var request = require('request');
var CONFIG = require('./config/default');

var redirectURI = CONFIG.redirectURI;
var userAccessToken = "";
var tagToSearch = 'telaviv';

instagram.use({
  client_id: CONFIG.clientId,
  client_secret: CONFIG.clientSecret
});


function buildSuccessResponse(result) {
  var successResponse = {
        status: 200,
        message: "The request completed succesfully",
        body: JSON.parse(result)};    //requiers to add try catch in order not to crush
  return successResponse;
}

exports.authorize_user = function(req, res) {
  res.redirect(instagram.get_authorization_url(redirectURI, { scope: ['public_content'], state: 'a state' }));
};
 
exports.handleauth = function(req, res) {
  instagram.authorize_user(req.query.code, redirectURI, function(err, result) {
    if (err) {
      console.log(err);
      res.send("Didn't work");
    } else {
      userAccessToken = result.access_token;
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
};

exports.searchTag = function(req, res) {
  var url = 'https://api.instagram.com/v1/tags/search?q=' + tagToSearch + '&access_token=' + userAccessToken;
  request(url, function (error, response, body) {
    console.log('statusCode:', response && response.statusCode); 
    if ((response.statusCode != 200) || error) {
      console.log('error:', error); 
      console.log('body:', body);
      res.send(body);
    } else {
      console.log('body:', body);
      var successResponse = buildSuccessResponse(body);
      res.status(200).send(successResponse);
    }
  });
}

exports.randomLoveTag = function(req, res) {
  instagram.use({access_token: userAccessToken});
  instagram.tag_search('love', function(err, result, remaining, limit) {
    if (err) {
      console.log('I\'t failed %s', err);
      res.send(err.body);
    }
    else {
      console.log('here is the result %s', result);
      var randomTag = randomTagResult(result);
      var successResponse = buildSuccessResponse(JSON.stringify(randomTag));
      res.status(200).send(successResponse);
    }
  });
};

function randomTagResult(tagArray) {
  var randomNum = Math.floor((Math.random() * tagArray.length));
  console.log('randomNum = %d', randomNum);
  console.log('randomObject is: %j', tagArray[randomNum]);
  return tagArray[randomNum];
}



