// Data processing functions:

const { stat } = require("fs");

const exportFunctions = {
    
    // 1. Calculate the number of matches played per year for all the years in IPL.

    calculateMatchPerYear(matches) {
        const matchesPerYear = matches.reduce((accumulatedMatches, {season}) => {
            accumulatedMatches[season] = season in accumulatedMatches ? accumulatedMatches[season] + 1 : 1;
            return accumulatedMatches;
        }, {});
        return matchesPerYear;
    },

    // 2. Calculate the number of matches won per team per year in IPL.

    calculateWinPerTeamPerYear(matches) {
        const winPerTeamPerYear = matches.reduce((accumulatedMatches, {season, winner}) => {
            if(winner !== null) {
                if(!(season in accumulatedMatches)) {
                    accumulatedMatches[season] = {};
                }
                accumulatedMatches[season][winner] = winner in accumulatedMatches[season] ? accumulatedMatches[season][winner] + 1 : 1;
            }
            return accumulatedMatches;
        }, {});

        return winPerTeamPerYear;
    },

    // 3. Calculate the extra runs conceded per team in the year 2016.

    calculateExtrasPerTeam(deliveries, matches, targetYear = 2016) {
        const extrasPerTeam = deliveries.reduce((accumulatedDeliveries, {match_id, bowling_team, extra_runs}) => {
            if(matches.some(({id, season}) => id === match_id && season === targetYear)) {
                accumulatedDeliveries[bowling_team] = bowling_team in accumulatedDeliveries ? accumulatedDeliveries[bowling_team] + extra_runs : extra_runs;
            }
            return accumulatedDeliveries;
        }, {});

        return extrasPerTeam;
    },

    // 4. Calculate the top 10 economical bowlers in the year 2015.

    calculateTopEconomicalBolwers(deliveries, matches, targetYear = 2015, topN = 10) {
        let bowlerStats = deliveries.reduce((accumulatedDeliveries, {match_id, bowler, total_runs}) => {
            if(matches.some(({id, season}) => id === match_id && season === targetYear)) {
                if(!(bowler in accumulatedDeliveries)) {
                    accumulatedDeliveries[bowler] = {runs: 0, balls: 0};
                }
                accumulatedDeliveries[bowler]['runs'] = bowler in accumulatedDeliveries ? accumulatedDeliveries[bowler]['runs'] + total_runs : total_runs;
                accumulatedDeliveries[bowler]['balls'] = bowler in accumulatedDeliveries ? accumulatedDeliveries[bowler]['balls'] + 1 : 1;
            }
            return accumulatedDeliveries;
        }, []);

        Object.entries(bowlerStats).forEach(([bowler, {runs, balls}]) => {
            bowlerStats[bowler] = parseFloat((6 * runs / balls).toFixed(3));
        });
        
        bowlerStats =  Object.entries(bowlerStats).sort((bowlerA, bowlerB) => bowlerA[1] - bowlerB[1]); // Sort the bowlers according to economy. Formula Used: 6 * runs / balls
        
        return bowlerStats.slice(0, topN); // Return only top N economy bowlers
    }
};


// Export functions:

module.exports = {exportFunctions};