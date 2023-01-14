// Importing dependencies
// import { appcommon } from "tizen-tv-webapis";
// import { application } from "tizen-common-web";
const Twit = require("twit");
const scraper = require("./webscraper")

// Creating Twitter instance
// const secret = require("dist/keys.js");
// const T = new Twit(secret);

function getTweet(id) {
	return new Promise(function (resolve, reject) {
		const config = {
			id: id,
			tweet_mode: "extended",
			include_rts: false,
			exclude_replies: true,
		};

		T.get("statuses/lookup", config, function (err, data) {
			if (err != undefined) {
				console.error(err);
				reject(err);
			}

			for (var i = 0; i < data.length; i++) {
				resolve(data[i].full_text);
			}

			// scraper.tweetHandler(data[0]);
		});
	});
}

function latestTweets(handle, count) {
	return new Promise(function (resolve, reject) {
		const config = {
			screen_name: handle,
			count: count,
			tweet_mode: "extended",
			include_rts: false,
			exclude_replies: true,
		};

		T.get("statuses/user_timeline", config, function (err, data) {
			if (err != undefined) {
				console.error(err);
				reject(err);
			}

			for (var i = 0; i < data.length; i++) {
				resolve(data[i]);
			}
		});
	});
}

window.onload = () => {
	// console.log('onload');
	// const version = appcommon.getVersion();
	// console.log('appcommon version : ', version);
	// document.body.addEventListener('keydown', keydownHandler);
	var box = document.querySelector('#textbox');
	box.innerHTML = document.domain;

	fetch(`https://feeds.nos.nl/nosnieuwsalgemeen`,{mode: "no-cors"})
		.then(response => response.text())
		.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
		.then(doc => {
			let items = doc.querySelectorAll("item");
			let data = [];
			items.forEach(item => data.push({ title: item.querySelector("title").textContent, link: item.querySelector('link').textContent, description: item.querySelector('description').textContent, enclosure: item.querySelector('enclosure').getAttribute("url") }))
			return data
		})
		.then(console.log)



	// console.log(title);

	// var textbox = document.querySelector('.contents');
	// textbox.addEventListener("click", async function () {
	// 	var tweet = await latestTweets("NOS", 1);
	// 	var title = tweet.full_text;


	// 	var data = await scraper.tweetHandler(tweet);
	// 	for (var i = 0; i < data.length; i++) {
	// 		console.log(i)
	// 	}

	// });
};

// const keyName = {
// 	10009: 'return'
// };

// function keydownHandler(e) {
// 	console.log(e.keyCode);
// 	switch (keyName[e.keyCode]) {
// 		case 'return':
// 			application.getCurrentApplication().exit();
// 			break;
// 	}
// }