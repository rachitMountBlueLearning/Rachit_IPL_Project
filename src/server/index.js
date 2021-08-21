// Import modules and functions:

const fs = require('fs'); // File System module import
const Papa = require('papaparse'); // Papa-Parse module import
const importFunctions = require('./ipl').exportFunctions; // Data processing functions import


// Extract data:

const matchesFileData = fs.readFileSync(__dirname + '/../data/matches.csv', 'utf-8') // Read matches.csv into string
const deliveriesFileData = fs.readFileSync(__dirname + '/../data/deliveries.csv', 'utf-8') // Read deliveries.csv into string

const csvConfiguration = { // Configuration object for Papa-Parse
	header: true,
	dynamicTyping: true,
	skipEmptyLines: true
}


// Parse data from CSV:

const matchesData = Papa.parse(matchesFileData, csvConfiguration).data; // Parse matches.csv data
const deliveriesData = Papa.parse(deliveriesFileData, csvConfiguration).data; // Parse deliveries.csv data