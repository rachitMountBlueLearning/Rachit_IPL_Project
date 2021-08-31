fetch('./output/matchesPerYear.json')
    .then(response => response.json())
    .then(JSONData => plot1(JSONData));

function plot1(JSON_DATA) {
    Highcharts.chart('matchesPerYear', {
        title: {
            text: '1. Number of Matches in IPL Seasons'
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
            categories: JSON_DATA.map(({year}) => year)
        },
        yAxis: {
            title: {
                text: 'Matches'
            }
        },
        series: [
            {
                name: 'Matches',
                data: JSON_DATA.map(({matches}) => matches),
                borderRadius: 10,
                color: 'rgb(255, 85, 85)'
            }
        ]
    });
}