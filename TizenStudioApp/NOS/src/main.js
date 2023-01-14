// Importing dependencies
import { appcommon } from "tizen-tv-webapis";
import { application } from "tizen-common-web";

window.onload = () => {
	const version = appcommon.getVersion();
	console.log("App version:", version);
	document.body.addEventListener("keydown", keydownHandler);

	fetch(`https://nos-app.vercel.app/api/rss`)
		.then((response) => response.text())
		.then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
		.then((doc) => {
			let items = doc.querySelectorAll("item");
			let titles = [];
			let imgs = [];
			let articles = [];
			let links = [];
			items.forEach((item) => [
				titles.push({ title: item.querySelector("title").textContent }),
				imgs.push({
					enclosure: item.querySelector("enclosure").getAttribute("url"),
				}),
				articles.push({ text: item.querySelector("description").textContent }),
				links.push({ link: item.querySelector("link").textContent }), // (click to open on phone?)
			]);
		});

	// var textbox = document.querySelector(".contents");
	// textbox.addEventListener("click", function () {
	// 	console.log("fakka");
	// });
};

// const keyName = {
// 	10009: "return"
// };

function keydownHandler(e) {
	console.log(e.keyCode);
	switch (keyName[e.keyCode]) {
		case "return":
			application.getCurrentApplication().exit();
			break;
	}
}
