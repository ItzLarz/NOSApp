// Importing dependencies
const cheerio = require("cheerio/lib/slim");
const axios = require("axios");
const htmlparser2 = require('htmlparser2');
const chalk = require("chalk"); // TO BE REMOVED


function tweetHandler(tweet) {
  // Checking all urls in the tweet
  for (var url of tweet.entities["urls"]) {

    // Validating all urls in the tweet
    if (url["expanded_url"].startsWith("https://nos.nl") || url["expanded_url"].startsWith("http://nos.nl")) {
      // Initializing webscraper
      var URL = url["expanded_url"];
      axios.get(URL).then(({ data }) => {
        const dom = htmlparser2.parseDocument(data);
        var $ = cheerio.load(dom);

        // Omitting Wekdienst articles
        if (!$("h1").text().startsWith("Wekdienst")) {
          // Separating titles, headings and paragraphs from the page
          var allList = $("h1,h2,p");

          allList.each(function (idx, el) {
            if ($(el)[0]["name"] == "h1") {
              if ($(el).attr("class") == "sc-d1476f35-0 eGjUTF sc-f90e9c1f-3 iRoUEK") {
                console.log(chalk.bold($(el).text()));
                console.log("\n");
              }
            }

            if ($(el)[0]["name"] == "h2") {
              if ($(el).attr("class") == "sc-d1476f35-0 hXkhth") {
                console.log(chalk.bold($(el).text()));
              }
            }

            if ($(el)[0]["name"] == "p") {
              if ($(el).attr("class") == "sc-ebf8ab80-0 cQyWlQ") {
                // Omit paragraph if it introduces an image or a video
                if ($(el).children()[0] != undefined) {
                  if ($(el).children()[0]["name"] != "em") {
                    console.log($(el).text());
                    console.log("\n");
                  }
                }

                else {
                  console.log($(el).text());
                  console.log("\n");
                }
              }
            }
          });
        }
      });
    }

    else {
      console.log("There were no valid urls");
    }
  }
}