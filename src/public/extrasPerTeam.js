fetch('./output/extrasPerTeam.json')
    .then(response => response.json())
    .then(JSONData => plot3(JSONData));

function plot3(JSON_DATA) {
    Highcharts.chart('extrasPerTeam', {
        title: {
            text: '3. Extra Runs Conceded by Teams in IPL 2016'
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
                text: 'Teams'
            },
            categories: JSON_DATA.map(({team}) => team)
        },
        yAxis: {
            title: {
                text: 'Extra Runs'
            }
        },
        series: [
            {
                name: 'Extra Runs',
                data: JSON_DATA.map(({extraRuns}) => extraRuns),
                borderRadius: 10,
                color: 'rgb(255, 85, 85)'
            }
        ]
    });
}