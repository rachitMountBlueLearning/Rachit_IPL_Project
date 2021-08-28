fetch('./output/winPerTeamPerYear.json')
    .then(response => response.json())
    .then(JSONData => plot2(JSONData));
function plot2(JSONData) {

    const teams = JSONData.reduce((accumulatedTeams, {team}) => {
        if(!(accumulatedTeams.includes(team))) {
            accumulatedTeams.push(team);
        }
        return accumulatedTeams;
    }, []).sort((teamA, teamB) => teamA.localeCompare(teamB));

    const years = JSONData.reduce((accumulatedYears, {year}) => {
        if(!(accumulatedYears.includes(year))) {
            accumulatedYears.push(year);
        }
        return accumulatedYears;
    }, []);

    const seriesIn = [];
    teams.forEach(currTeam => {
        let pushSeries = {
            name: currTeam,
            data: []
        };
        let pushWins = 0;
        years.forEach(currYear => {
            JSONData.forEach(({year, team, wins}) => {
                if(team === currTeam && year === currYear) {
                    pushWins = wins;
                }
            })
            pushSeries['data'].push(pushWins);
        })
        seriesIn.push(pushSeries);
    })

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
            categories: years
        },
        yAxis: {
            title: {
                text: 'Wins'
            }
        },
        series: seriesIn
    });
}