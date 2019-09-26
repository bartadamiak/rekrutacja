const twitter = require('twitter');
const fs = require('fs')
const client = new twitter({
    consumer_key: 'your consumer key',
    consumer_secret: 'your consumer_secret',
    access_token_key: 'your access token key',
    access_token_secret: 'your acces token secret'
});



function getApi() {
    const params = { screen_name: 'Polska', tweet_mode: "extended" };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            fs.writeFile("./static/api.json", "", function () {
                console.log('cleaning')
            });
            for (var i = 0; i < tweets.length; i++) {
                if (tweets[i].entities.media != undefined) {
                    fs.appendFile("./static/api.json", ("<div class='column'> <img class='img' src=" + tweets[i].entities.media[0].media_url + "></img> </div>"), function () {
                        
                    })

                }
            }

        }
    })
}



module.exports.getApi = getApi;

