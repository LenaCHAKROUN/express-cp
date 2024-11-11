// 1
const express = require("express");

// 5
const fs = require("fs");

// 7
const v = require("./verif");

// 2
const app = express();

// 3
const PORT = 6330;

// 6  les routes
app.get("/", v, (req, res) => {
	fs.readFile("./home.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});

app.get("/home.html", v, (req, res) => {
	fs.readFile("./home.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});

app.get("/service.html", v, (req, res) => {
	fs.readFile("./service.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});

app.get("/contact.html", v, (req, res) => {
	fs.readFile("./contact.html", "utf8", (err, data) => {
		err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
	});
});

// 4
app.listen(PORT, (req, res) => {
	console.log(`server running : port ${PORT}...`);
});