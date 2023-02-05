// Importing dependencies
// import { appcommon } from "tizen-tv-webapis";
// import { application } from "tizen-common-web";

window.addEventListener("tizenhwkey", keydownHandler);

window.onload = async () => {
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

	console.log(articles);

	let pagesDiv = document.getElementById("pages");
	pagesDiv.removeChild(document.getElementById("main"));

	articles.forEach((item, idx) => {
		page = document.createElement("div");
		page.setAttribute("id", "page" + String(idx + 1));
		page.className = "ui-page";
		content = document.createElement("div");
		content.className = "ui-content";
		content.innerHTML = item.title;
		// content.classList.add("center-fit");
		page.appendChild(content);
		pagesDiv.appendChild(page);
	});

	// document.getElementById("page1").classList.add("ui-page-active");

	window.addEventListener("rotarydetent", function (ev) {
		var direction = ev.detail.direction;
		page = document.getElementsByClassName("ui-page-active")[0];

		// FIX THIS
		if (!page) {
			page = document.getElementById("page1")
		}
		numb = page.id.replace(/[^0-9]/g, "");
		console.log(document.getElementsByClassName("ui-page-active"));

		if (direction == "CW") {
			// console.log("CW");
			if (page.id != "page20") {
				// tau.changePage("#page" + String(Number(numb) + 1));
				console.log("debug1");
				console.log("page" + String(Number(numb) + 1));
				window.location.hash = "page" + String(Number(numb) + 1);
			}
		} else if (direction == "CCW") {
			// console.log("CCW");
			if (page.id != "page1") {
				console.log("debug2");
				console.log("page" + String(Number(numb) - 1));
				window.location.hash = "page" + String(Number(numb) - 1);
			}
		}
		console.log();
	});

	// var textbox = document.querySelector("div");
	// textbox.addEventListener("click", function () {
	// 	textbox.innerHTML = "fakka";
	// });
};

function keydownHandler(ev) {
	console.log(ev.keyName);
	// switch (ev.keyName) {
	// 	case "back":
	// 	// 	application.getCurrentApplication().exit();
	// 	// 	break;
	// }
}
