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
    },

    // 2. Calculate the number of matches won per team per year in IPL.

    calculateWinPerTeamPerYear (matches) {
        const winPerTeamPerYear = {};
        for(let index = 0; index < matches.length; index += 1) {

            let season = matches[index].season;
            let winner = matches[index].winner;

            if(winner != null) {
                if(season in winPerTeamPerYear) {
                    if(winner in winPerTeamPerYear[season]) {
                        winPerTeamPerYear[season][winner] += 1;
                    } else {
                        winPerTeamPerYear[season][winner] = 1;
                    }
                } else {
                    winPerTeamPerYear[season] = {};
                }
            }
        }
        return winPerTeamPerYear;
    }
};


// Export functions:

module.exports = {exportFunctions};