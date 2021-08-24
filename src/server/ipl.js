// Data processing functions:

const exportFunctions = {
    
    // 1. Calculate the number of matches played per year for all the years in IPL.

    calculateMatchPerYear (matches) {
        const matchesPerYear = {};

        for(match of matches) {
            if(match.season in matchesPerYear) {
                matchesPerYear[match.season] += 1;
            } else {
                matchesPerYear[match.season] = 1;
            }
        }
        return matchesPerYear;
    },

    // 2. Calculate the number of matches won per team per year in IPL.

    calculateWinPerTeamPerYear (matches) {
        const winPerTeamPerYear = {};

        for(match of matches) {
            if(match.winner != null) {
                if(match.season in winPerTeamPerYear) {
                    if(match.winner in winPerTeamPerYear[match.season]) {
                        winPerTeamPerYear[match.season][match.winner] += 1;
                    } else {
                        winPerTeamPerYear[match.season][match.winner] = 1;
                    }
                } else {
                    winPerTeamPerYear[match.season] = {};
                }
            }
        }

        return winPerTeamPerYear;
    },

    // 3. Calculate the extra runs conceded per team in the year 2016.

    calculateExtrasPerTeam (deliveries, matches, targetYear = 2016) {
        const targetYearIds = [];

        for(match of matches) { // Collect the match ID for targetYear
            if(match.season === targetYear && !(match.season in targetYearIds)) {
                targetYearIds.push(match.id)
            }
        }

        const extrasPerTeam = {};

        for(delivery of deliveries) {
            if(delivery.match_id in targetYearIds) {
                if(delivery.bowling_team in extrasPerTeam) {
                    extrasPerTeam[delivery.bowling_team] += delivery.extra_runs;
                } else {
                    extrasPerTeam[delivery.bowling_team] = delivery.extra_runs;
                }
            }
        }

        // const extrasPerTeam = {};
        
        // for(delivery of deliveries) {
        //     for(match of matches) {
        //         if(delivery.match_id === match.id && match.season === targetYear) {
        //             if(delivery.bowling_team in extrasPerTeam) {
        //                 extrasPerTeam[delivery.bowling_team] += delivery.extra_runs;
        //             } else {
        //                 extrasPerTeam[delivery.bowling_team] = delivery.extra_runs;
        //             }
        //         }
        //     }
        // }

        return extrasPerTeam;
    }
};


// Export functions:

module.exports = {exportFunctions};