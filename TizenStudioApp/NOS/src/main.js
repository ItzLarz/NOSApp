// Importing dependencies
// import { appcommon } from "tizen-tv-webapis";
// import { application } from "tizen-common-web";


window.onload = () => {
	// console.log('onload');
	// const version = appcommon.getVersion();
	// console.log('appcommon version : ', version);
	// document.body.addEventListener('keydown', keydownHandler);

	var box = document.querySelector('#textbox');
	box.innerHTML = document.domain;

	fetch(`https://nos-app.vercel.app/api/rss`)
		.then(response => response.text())
		.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
		.then(doc => {
			let items = doc.querySelectorAll("item");
			let data = [];
			items.forEach(item => data.push({ title: item.querySelector("title").textContent, link: item.querySelector('link').textContent, description: item.querySelector('description').textContent, enclosure: item.querySelector('enclosure').getAttribute("url") }))
			return data
		})
		.then(console.log)




	var textbox = document.querySelector('.contents');
	textbox.addEventListener("click", function () {
		console.log("fakka");

	// 	var data = await scraper.tweetHandler(tweet);
	// 	for (var i = 0; i < data.length; i++) {
	// 		console.log(i)
	// 	}

	});
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