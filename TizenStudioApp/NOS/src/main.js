// Importing dependencies
// import { appcommon } from "tizen-tv-webapis";
// import { application } from "tizen-common-web";

// import { productinfo } from "tizen-tv-webapis";
// import { systeminfo } from "tizen-common-web";

// const { getFirmware, getDuid, getModelCode } = productinfo;
// const { getCapability } = systeminfo;

let artOpen = false;

window.onload = async () => {
	window.addEventListener("tizenhwkey", keydownHandler);

	let articles = await loadArticles();
	loadPages(articles);

	window.addEventListener("rotarydetent", changePage);
	// window.addEventListener("swipe", changePage);
	document.body.addEventListener("click", () => openArticle(articles));
};

async function loadArticles() {
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
					date: item.querySelector("pubDate").textContent,
					link: item.querySelector("link").textContent, // (click to open on phone?)
				});
			});
		});

	console.log(articles);
	return articles;
}

function loadPages(articles) {
	let pagesDiv = document.getElementById("pages");

	articles.forEach((item, idx) => {
		let page;
		if (idx != 0) {
			page = document.createElement("div");
			page.setAttribute("id", "page" + String(idx + 1));
			page.className = "ui-page";
		} else {
			page = document.getElementById("page1");
			document.getElementById("loading-icon").remove();
		}

		let contDiv = document.createElement("div");
		let content = document.createElement("h1");
		content.classList.add = "ui-content";
		content.classList.add = "title";
		content.innerHTML = item.title;
		contDiv.appendChild(content);
		page.appendChild(contDiv);

		if (idx != 0) {
			pagesDiv.appendChild(page);
		}
	});
}

function changePage(ev) {
	let page = document.getElementsByClassName("ui-page-active")[0];
	if (page.id.includes("page")) {
		let direction = ev.detail.direction;
		let page = document.getElementsByClassName("ui-page-active")[0];
		let numb = page.id.replace(/[^0-9]/g, "");

		if (direction == "CW") {
			if (page.id != "page20") {
				window.location.hash = "page" + String(Number(numb) + 1);
				console.log("Changed to page " + String(Number(numb) + 1));
			}
		} else if (direction == "CCW") {
			if (page.id != "page1") {
				window.location.hash = "page" + String(Number(numb) - 1);
				console.log("Changed to page " + String(Number(numb) - 1));
			}
		}
	}
}

function openArticle(articles) {
	let page = document.getElementsByClassName("ui-page-active")[0];
	let numb = page.id.replace(/[^0-9]/g, "");
	let item = articles[numb - 1];

	let article = document.createElement("div");
	article.id = "article" + numb;
	article.className = "ui-page";

	let title = document.createElement("h1");
	title.innerHTML = item.title;
	let date = document.createElement("time");
	let dateObj = new Date(item.date);
	let options = {
		dateStyle: "full",
		timeStyle: "short",
	};

	date.innerHTML =
		dateObj.toLocaleString("nl-NL", options).charAt(0).toUpperCase() +
		dateObj.toLocaleString("nl-NL", options).slice(1);

	article.appendChild(title);
	article.appendChild(date);
	article.innerHTML += item.text;

	document.body.appendChild(article);
	window.location.hash = "article" + numb;
}

function keydownHandler(ev) {
	console.log(ev.keyName);
	if (ev.keyName == "back") {
		let page = document.getElementsByClassName("ui-page-active")[0];
		if (page.id.includes("article")) {
			let numb = page.id.replace(/[^0-9]/g, "");
			window.location.hash = "page" + numb;
		} else {
			tizen.application.getCurrentApplication().exit();
		}
	}
}
