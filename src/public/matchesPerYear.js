fetch('./output/matchesPerYear.json')
    .then(response => response.json())
    .then(JSONData => plot1(JSONData));
function plot1(JSONData) {
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
            categories: JSONData.map(({year}) => year)
        },
        yAxis: {
            title: {
                text: 'Matches'
            }
        },
        series: [
            {
                name: 'Matches',
                data: JSONData.map(({matches}) => matches)
            }
        ]
    });
}