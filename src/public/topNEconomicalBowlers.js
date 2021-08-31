fetch('./output/topNEconomicalBowlers.json')
    .then(response => response.json())
    .then(JSONData => plot4(JSONData));

function plot4(JSON_DATA) {
    Highcharts.chart('topNEconomicalBowlers', {
        title: {
            text: '4. Top 10 Economical Bowlers in IPL 2015'
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
                text: 'Bowlers'
            },
            categories: JSON_DATA.map(({bowler}) => bowler)
        },
        yAxis: {
            title: {
                text: 'Economy'
            }
        },
        series: [
            {
                name: 'Economy',
                data: JSON_DATA.map(({economyRate}) => economyRate),
                borderRadius: 10,
                color: 'rgb(255, 85, 85)'
            }
        ]
    });
}