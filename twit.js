const twitter = require('twitter');
const fs = require('fs')
const client = new twitter({
    consumer_key: 'yv9ej7k0iCbAzzZ5kWvjnUNn7',
    consumer_secret: 'fRSiLQam98ejBye0Ib597P9NwUcOqocC7lGA4GPjkAOAJAVuck',
    access_token_key: '903220008943329280-RVtRdaZrjorIjCo4iByvzO0YgcobfjB',
    access_token_secret: 'Y0Hs5nxyxMOTCAsZ31t1ckBkZXSv8fohFqJG7a4jMAGJu'
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

