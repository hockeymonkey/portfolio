const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//------------------------------------
// Set up home directory for serving static content.
//------------------------------------
app.use(express.static(path.join(__dirname), {
  extensions: ['html']
}));

// --- Not sure what this does for new server. ---
//app.use(express.static(path.join(__dirname, './pics')));


//------------------------------------
// Route for homepage.
//------------------------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});


//------------------------------------
// Route for 'get-pics'.
//------------------------------------
app.get('/get-pics', (req, res) => {

	console.log("Received request from test-photos.js!");

	// Number of urls to pictures to return.
	const numberPics = 5;

	// Get array of all files in directory.
	let files = fs.readdirSync('./pics');

	let selectedFiles = [];

	// Create array of urls to random pictures in directory.
	for(i=0; i < numberPics; i++){

		// Create a random array index.
		let randomIndex =	Math.floor(Math.random() * (files.length));

		// Add path of random picture to array of picture paths.
		selectedFiles[i] = files[randomIndex];

	};

	// Console log array of picture paths.
	console.log('Sent file paths: ' + selectedFiles);

	// Respond with array as a string.
	res.json(selectedFiles);

});

app.listen(8888, () => {
	console.log('raphaelrashkin.com node.js server listening on port 8888.');
});