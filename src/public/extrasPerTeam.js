fetch('./output/extrasPerTeam.json')
    .then(response => response.json())
    .then(JSONData => plot3(JSONData));
function plot3(JSONData) {
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
            categories: JSONData.map(({team}) => team)
        },
        yAxis: {
            title: {
                text: 'Extra Runs'
            }
        },
        series: [
            {
                name: 'Extra Runs',
                data: JSONData.map(({extra_runs}) => extra_runs)
            }
        ]
    });
}