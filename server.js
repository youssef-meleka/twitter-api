var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '0nnCrHuqbCuVVWS6PCHfGFbUn',
  consumer_secret: 'oRAdpAHvkEFnECbB32MXXKV7jaGMMjxyx0HxTQi6QMtCESMBOA',
  access_token_key: '1733102437777432576-FMsnoSp2DagjOqb0eEbq2IuXeSUJLq',
  access_token_secret: 'zyVN0YWOXH7OP5Rvuec0DnzPo3pqMyg8dAsg4ncSB16TF'
});

var params = {screen_name: 'YoussefAtef2205'};
client.get('statuses/show', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
    console.log('Error occurred: ' + JSON.stringify(error));
  }
});
