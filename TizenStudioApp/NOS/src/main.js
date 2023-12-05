window.addEventListener("tizenhwkey", keydownHandler);
window.addEventListener("keydown", keydownHandler);
window.addEventListener("rotarydetent", changePage);
window.addEventListener("swipe", changePage);

window.onload = async () => {
	let articles = await loadArticles();
	loadPages(articles);
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
			page.id = "page" + String(idx + 1);
			page.classList.add("page", "ui-page");
		} else {
			page = document.getElementById("page1");
			document.getElementById("loading-icon").remove();
		}

		let content = document.createElement("h1");
		content.classList.add("ui-content");
		content.classList.add("title");
		content.innerHTML = item.title;
		page.appendChild(content);
		
		let image = document.createElement("img");
		image.classList.add("ui-content");
		image.classList.add("img");
		image.src = item.img;
		page.appendChild(image);

		

		if (idx != 0) {
			pagesDiv.appendChild(page);
		}
	});
}

function changePage(ev) {
	console.log(ev.detail.direction);
	let page = document.getElementsByClassName("ui-page-active")[0];
	if (page.id.includes("page")) {
		[].slice.call(document.body.children).forEach((item, idx) => {
			if (item.id.includes("article")) {
				document.body.removeChild(item);
			}
		});

		let direction = ev.detail.direction;
		let page = document.getElementsByClassName("ui-page-active")[0];
		let numb = page.id.replace(/[^0-9]/g, "");
		let newPage;

		if (direction == "CW" && page.id != "page20") {
			newPage = document.getElementById("page" + String(Number(numb) + 1));
			tau.changePage("#" + newPage.id);
		} else if (direction == "CCW" && page.id != "page1") {
			newPage = document.getElementById("page" + String(Number(numb) - 1));
			tau.changePage("#" + newPage.id);
		}

		console.log("Changed to page " + newPage.id);
	}
}

function openArticle(articles) {
	let page = document.getElementsByClassName("ui-page-active")[0];
	if (!page.id.includes("article")) {
		let numb = page.id.replace(/[^0-9]/g, "");
		let item = articles[numb - 1];

		
		let article = document.createElement("div");
		article.id = "article" + numb;
		article.classList.add("article", "ui-page", "ui-scroller", "ui-overflow");

		let content = document.createElement("div");
		content.classList.add("ui-content", "ui-scrollview", "ui-scrollbar", "ui-overflow");

		let title = document.createElement("h1");
		title.innerHTML = item.title;
		content.appendChild(title);

		let date = document.createElement("p");
		date.classList.add("date");
		let dateObj = new Date(item.date);
		let options = {
			dateStyle: "full",
			timeStyle: "short",
		};

		date.innerHTML =
			dateObj.toLocaleString("nl-NL", options).charAt(0).toUpperCase() +
			dateObj.toLocaleString("nl-NL", options).slice(1);

		content.appendChild(date);

		console.log(item.text);
		const parser = new DOMParser();
		let elements = Array.from(
			parser.parseFromString(item.text, "text/html").querySelectorAll("h2, p")
		);

		elements.forEach((element) => { 
			content.appendChild(element);
		});

		article.appendChild(content);
		document.body.appendChild(article);
		tau.changePage("#article" + numb);
	}
}

function keydownHandler(ev) {
	console.log(ev.keyName);
	if (ev.keyName == "back" || ev.keyCode == 27) {
		let page = document.getElementsByClassName("ui-page-active")[0];
		if (page.id.includes("article")) {
			[].slice.call(document.body.children).forEach((item, idx) => {
				if (item.id.includes("article")) {
					document.body.removeChild(item);
				}
			});
			tau.changePage("#page" + page.id.replace(/[^0-9]/g, ""));
		} else {
			window.tizen.application.getCurrentApplication().exit();
		}
	}
}
