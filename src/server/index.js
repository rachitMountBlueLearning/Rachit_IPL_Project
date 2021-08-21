// Import modules and functions:

const fs = require('fs'); // File System module import
const Papa = require('papaparse'); // Papa-Parse module import


// Extract data:

const matchesFileData = fs.readFileSync(__dirname + '/../data/matches.csv', 'utf-8') // Read matches.csv into string
const deliveriesFileData = fs.readFileSync(__dirname + '/../data/deliveries.csv', 'utf-8') // Read deliveries.csv into string

const csvConfiguration = { // Configuration object for Papa-Parse
	header: true,
	dynamicTyping: true
}