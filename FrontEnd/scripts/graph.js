Highcharts.chart('graph', {
    chart: {
        type: 'column',
        backgroundColor: '#9098BD'
    },
    title: {
        text: 'Country Wise Suicide Rates',
        style: {
            color: '#001E4D'
        }
    },
    subtitle: {
        text: 'Data as of 2018',
        style: {
            color: '#001E4D'
        }
    },
    xAxis: {
        labels: {
            style: {
                color: '#001e4d'
            }
        },
        categories: [
            'India',
            'USA',
            'China',
            'Russia',
            'France',
            'Germany'
            
        ],
        crosshair: true
    },
    yAxis: {
        
        labels: {
            style: {
                color: '#001e4d'
            }
        },
        min: 0,
        title: {
            text: 'Power (GW)',
            style: {
                color: '#001e4d'
            }
        }
    },
    colors: ["#2a63ac", "#f73c57", "8664ad"],
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Male',
        data: [18.5, 21.1, 7.9, 48.3, 17.9, 13.6]
        
    }, {
        name: 'Female',
        data: [14.5, 6.4, 8.3, 7.5, 6.5, 4.8]
        
    }, {
        name: 'Both Genders',
        data: [16.5, 13.7, 8, 26.5, 12.1, 9.1]

    }]
});