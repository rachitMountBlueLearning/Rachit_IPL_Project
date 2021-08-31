// Data processing functions:

const exportFunctions = {
    
    // 1. Calculate the number of matches played per year for all the years in IPL.

    calculateMatchPerYear(matches) {
        return matches
            .reduce((records, {season}) => {
                const RECORD_INDEX = records.findIndex(({year}) => year === season);

                RECORD_INDEX === -1 ?
                    records.push({'year': season, 'matches': 1}) :
                    records[RECORD_INDEX]['matches'] += 1;

                return records;
            }, [])
            .sort((recordA, recordB) => recordA['year'] - recordB['year']);
    },

    // 2. Calculate the number of matches won per team per year in IPL.

    calculateWinPerTeamPerYear(matches) {
        return matches
            .reduce((records, {season, winner}) => {
                if(winner !== null) {
                    const RECORD_INDEX = records.findIndex(({year, team}) => year === season && team === winner);

                    RECORD_INDEX === -1 ?
                        records.push({'year': season, 'team': winner, 'wins': 1}) :
                        records[RECORD_INDEX]['wins'] += 1;
                }

                return records;
            }, [])
            .sort((recordA, recordB) => {
                return recordA['year'] - recordB['year'] !== 0 ?
                    (recordA['year'] - recordB['year']) :
                    (
                        recordB['wins'] - recordA['wins'] !== 0 ?
                            recordB['wins'] - recordA['wins'] :
                            recordA['team'].localeCompare(recordB['team'])
                    );
            });
    },

    // 3. Calculate the extra runs conceded per team in the year 2016.

    calculateExtrasPerTeam(deliveries, matches, TAGET_YEAR = 2016) {
        const TARGET_IDS_LIST = matches
            .filter(({season}) => season === TAGET_YEAR)
            .map(({id}) => id);

        return deliveries
            .filter(({match_id}) => TARGET_IDS_LIST.includes(match_id))
            .reduce((records, {bowling_team, extra_runs}) => {
                const RECORD_INDEX = records.findIndex(({team}) => team === bowling_team);

                    RECORD_INDEX === -1 ?
                        records.push({'team': bowling_team, 'extraRuns': extra_runs}) :
                        records[RECORD_INDEX]['extraRuns'] += extra_runs;

                return records;
            }, [])
            .sort((recordA, recordB) => {
                return recordA['extraRuns'] - recordB['extraRuns'] !== 0 ?
                    recordA['extraRuns'] - recordB['extraRuns'] :
                    recordA['team'].localeCompare(recordB['team']);
            });
    },

    // 4. Calculate the top 10 economical bowlers in the year 2015.

    calculateTopEconomicalBolwers(deliveries, matches, TAGET_YEAR = 2015, TOP_N = 10) {
        const TARGET_IDS_LIST = matches
            .filter(({season}) => season === TAGET_YEAR)
            .map(({id}) => id);

        return deliveries
            .filter(({match_id}) => TARGET_IDS_LIST.includes(match_id))
            .reduce((records, {bowler, total_runs}) => {
                const RECORD_INDEX = records.findIndex((record) => record['bowler'] === bowler);

                if(RECORD_INDEX === -1) {
                    records.push({'bowler': bowler, 'runs': total_runs, 'balls': 1});
                } else {
                    records[RECORD_INDEX]['runs'] += total_runs;
                    records[RECORD_INDEX]['balls'] += 1;
                }

                return records;
            }, [])
            .sort(({runs: runsA, balls: ballsA}, {runs: runsB, balls: ballsB}) => runsA/ballsA - runsB/ballsB)
            .slice(0, TOP_N)
            .map(({bowler, runs, balls}) => {
                return {
                    'bowler': bowler,
                    'economyRate': parseFloat((6 * runs / balls).toFixed(3))
                }
            });
    }
};


// Export functions:

module.exports = {exportFunctions};