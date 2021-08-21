// Data processing functions:

const exportFunctions = {
    
    // 1. Calculate the number of matches played per year for all the years in IPL.

    calculateMatchPerYear (matches) {
        const matchesPerYear = {};
        for(let index = 0; index < matches.length; index += 1) {
            if(matches[index].season in matchesPerYear) {
                matchesPerYear[matches[index].season] += 1;
            } else {
                matchesPerYear[matches[index].season] = 1;
            }
        }
        return matchesPerYear;
    }
};


// Export functions:

module.exports = {exportFunctions};