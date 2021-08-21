// Data processing functions:

const exportFunctions = {
    
    // 1. Calculate the number of matches played per year for all the years in IPL.

    calculateMatchPerYear (matchData) {
        const matchesPerYear = {};
        for(match in matchesData) {
            if(match['season'] in matchesPerYear) {
                matchesPerYear[match['season']] += 1;
            } else {
                matchesPerYear[match['season']] = 1;
            }
        }
        return matchesPerYear;
    }
};


// Export functions:

module.exports(exportFunctions);