/* TODO: 
- Bulletpoints don't work
- Run every 15 minutes
- Keep record of tweets that have been found
- What if 2 url's are in tweet
- Fix liveblogs
*/

// Importing dependencies
const twit = require("twit");
const scraper = require("./webscraper.js");

// Creating Twitter instance
const secret = require("./secret.js");
const T = new twit(secret);

const config = {
  screen_name: "NOS",
  count: 1,
  tweet_mode: "extended",
  include_rts: "false",
  exclude_replies: "true"
};

T.get("statuses/user_timeline", config, function (err, data) {
  if (err != undefined) { console.log(err) }
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].entities);
  }
})

// TO BE REMOVED
const tempconfig = {
  // id: "1611968219505377280"
  id: "1568145835229171712",
  tweet_mode: "extended",
  include_rts: "false",
  exclude_replies: "true"
};

// TO BE REMOVED
T.get("statuses/lookup", tempconfig, function (err, data) {
  if (err != undefined) { console.log(err) }
  tweetHandler(data[0]);

  // console.log(data[0].full_text);
  // console.log(data[0].entities["urls"])
  // console.log(data[0])
})