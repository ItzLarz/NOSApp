const cheerio = require("cheerio");
const axios = require("axios").default;
const htmlparser2 = require('htmlparser2');

// Importing dependencies
exports.tweetHandler = async function (tweet) {
	return new Promise(async function (resolve, reject) {
		// Checking all urls in the tweet
		for (var url of tweet.entities["urls"]) {
			returnList = [];

			// Validating all urls in the tweet
			if (url["expanded_url"].startsWith("https://nos.nl") || url["expanded_url"].startsWith("http://nos.nl")) {
				// Initializing webscraper
				var URL = url["expanded_url"];
				var textList = [];
				await axios.get(URL).then(async ({ data }) => {
					const dom = await htmlparser2.parseDocument(data);
					var $ = cheerio.load(dom);

					// Omitting Wekdienst articles
					if (!$("h1").text().startsWith("Wekdienst")) {
						// Separating titles, headings and paragraphs from the page
						
						var h1Count = 0;
						var h2Count = 0;
						var pCount = 0; 

						$("h1,h2,p").each(function (idx, el) {
							if ($(el)[0]["name"] == "h1") {
								if ($(el).attr("class") == "sc-d1476f35-0 eGjUTF sc-f90e9c1f-3 iRoUEK") {
									textList.push("[h1] " + $(el).text())
									h1Count++;
								}
							}

							if ($(el)[0]["name"] == "h2") {
								if ($(el).attr("class") == "sc-d1476f35-0 hXkhth") {
									textList.push("[h2] " + $(el).text())
									h2Count++;
								}
							}

							if ($(el)[0]["name"] == "p") {
								if ($(el).attr("class") == "sc-ebf8ab80-0 cQyWlQ") {
									// Omit paragraph if it introduces an image or a video
									if ($(el).children()[0] != undefined) {
										if ($(el).children()[0]["name"] != "em") {
											textList.push("[p] " + $(el).text())
											pCount++;
										}
									}

									else {
										textList.push("[p] " + $(el).text())
											pCount++;
									}
								}
							}
						});
					}
				});
				returnList.push(textList);
			}
			resolve(returnList);
		}
		reject("No URL's in Tweet");
	});
}