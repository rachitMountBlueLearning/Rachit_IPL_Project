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
        const extrasPerTeam = {};
        
        for(delivery of deliveries) {
            for(match of matches) {
                if(delivery.match_id === match.id && match.season === targetYear) {
                    if(delivery.bowling_team in extrasPerTeam) {
                        extrasPerTeam[delivery.bowling_team] += delivery.extra_runs;
                    } else {
                        extrasPerTeam[delivery.bowling_team] = delivery.extra_runs;
                    }
                }
            }
        }

        return extrasPerTeam;
    },

    // 4. Calculate the top 10 economical bowlers in the year 2015.

    calculateTopEconomicalBolwers(deliveries, matches, targetYear = 2015, topN = 10) {
        let bowlerStats = {};

        for(delivery of deliveries) {
            for(match of matches) {
                if(delivery.match_id === match.id && match.season === targetYear) {
                    if(delivery.bowler in bowlerStats) {
                        bowlerStats[delivery.bowler]['runs'] += delivery.total_runs;
                        bowlerStats[delivery.bowler]['balls'] += 1;
                    } else {
                        bowlerStats[delivery.bowler] = {};
                        bowlerStats[delivery.bowler]['runs'] = delivery.total_runs;
                        bowlerStats[delivery.bowler]['balls'] = 1;
                    }
                }
            }
        }

        for([bowler, stat] of Object.entries(bowlerStats)) {
            bowlerStats[bowler] = 6 * bowlerStats[bowler]['runs'] / bowlerStats[bowler]['balls'];
        }

        bowlerStats =  Object.entries(bowlerStats).sort((bowlerA, bowlerB) => bowlerA[1] - bowlerB[1]); // Sort the bowlers according to economy. Formula Used: 6 * runs / balls
        
        return bowlerStats.slice(0, topN); // Return only top N economy bowlers
    }
};


// Export functions:

module.exports = {exportFunctions};