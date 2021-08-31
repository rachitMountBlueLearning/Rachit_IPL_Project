fetch('./output/winPerTeamPerYear.json')
    .then(response => response.json())
    .then(JSONData => plot2(JSONData));
function plot2(JSON_DATA) {

    const YEARS_LIST = JSON_DATA
    .reduce((records, {year}) => {
        if(!(records.includes(year))) {
            records.push(year);
        }
        return records;
    }, [])
    .sort((yearA, yearB) => yearA - yearB);

    const SERIES = JSON_DATA
        .reduce((records, {team}) => {
            if(!(records.includes(team))) {
                records.push(team);
            }
            return records;
        }, [])
        .reduce((records, currentTeam) => {
            const TEAM_WINS = [];

            YEARS_LIST.forEach((currentYear) => {
                const RECORD_INDEX = JSON_DATA.findIndex(({year, team}) => team === currentTeam && year === currentYear);
                
                RECORD_INDEX === -1 ?
                    TEAM_WINS.push(0) :
                    TEAM_WINS.push(JSON_DATA[RECORD_INDEX]['wins']);
            })
            records.push({
                'name': currentTeam,
                'data': TEAM_WINS
            });

            return records;
        }, [])
        .sort(({name: nameA}, {name: nameB}) => nameA.localeCompare(nameB));

    Highcharts.chart('winPerTeamPerYear', {
        title: {
            text: '2. Wins by Teams throughout the IPL Seasons'
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        chart: {
            type: 'column',
            zoomType: 'x',
            borderRadius: 20
        },
        credits: {
            enabled: false
        },
        tooltip: {
            backgroundColor: "#333333",
            borderRadius: 20,
            style: {
                color: "#ffffff"
            }
        },
        xAxis: {
            title: {
                text: 'Years'
            },
            categories: YEARS_LIST
        },
        yAxis: {
            title: {
                text: 'Wins'
            }
        },
        series: SERIES
    });
}