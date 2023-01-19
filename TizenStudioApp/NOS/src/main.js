// Importing dependencies
import { appcommon } from "tizen-tv-webapis";
import { application } from "tizen-common-web";

let debugMode = false;

window.onload = async () => {
	if (!debugMode) {
		const version = appcommon.getVersion();
		console.log("App version:", version);
		document.body.addEventListener("keydown", keydownHandler);
	}

	let articles = [];

	await fetch(`https://nos-app.vercel.app/api/rss`)
		.then((response) => response.text())
		.then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
		.then((doc) => {
			let items = doc.querySelectorAll("item");
			items.forEach((item) => {
				articles.push({
					title: item.querySelector("title").textContent,
					img: item.querySelector("enclosure").getAttribute("url"),
					text: item.querySelector("description").textContent,
					link: item.querySelector("link").textContent, // (click to open on phone?)
				});
			});
		});

	let pagesDiv = document.getElementById("pages");
	pagesDiv.removeChild(document.getElementById("main"));

	articles.forEach((item, idx) => {
		page = document.createElement("div");
		page.setAttribute("id", "page" + String(idx + 1));
		page.className = "ui-page";
		content = document.createElement("div");
		content.className = "ui-page";
		content.innerHTML = item.title;
		pagesDiv.appendChild(page);
	});

	document.getElementById("page1").classList.add("ui-page-active");

	console.log(articles);

	// var textbox = document.querySelector(".contents");
	// textbox.addEventListener("click", function () {
	// 	console.log("debug");
	// });
};

const keyName = {
	10009: "return",
};

function keydownHandler(e) {
	console.log(e.keyCode);
	switch (keyName[e.keyCode]) {
		case "return":
			application.getCurrentApplication().exit();
			break;
	}
}
