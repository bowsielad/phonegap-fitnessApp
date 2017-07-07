// JavaScript Document

// Graph data from fitbit api

$(function () {
        $('#GraphContainer').highcharts({
			
			chart: {
            polar: true,
            type: 'line',
            backgroundColor:'none',
			zoomType: 'xy'
        },
            title: {
                text: '',
                x: 0
            },
            subtitle: {
                text: '',
                x: 0
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            xAxis: {
                categories: ['2', '4', '6', '8', '10', '12',
                    '14', '16', '18', '20', '22', '24'],
					
				gridLineColor: '#fff',
				lineColor: '#fff',
				minorGridLineColor: '#fff',
				tickColor: '#fff',
					
				labels: {
         			style: {
            		color: '#42216c'
         					}
      					},
								
			},
			
            yAxis: {
                title: {
					color: '#42216c',
                    text: ''
                },
                gridLineColor: '#fff',
				lineColor: '#fff',
				minorGridLineColor: '#fff',
				tickColor: '#fff',
				
				plotLines: [{
				value: 0,
                width: 1,
    			color: '#fff'
				}],
				
				labels: {
         			style: {
            		color: '#42216c'
         					}
      					},
						
            },
            tooltip: {
                borderColor: '#FFDD90',
                borderRadius: '3',
                borderWidth: '1',
                backgroundColor: '#FFFAD3',
                formatter: function() {
                    return '<strong>' + this.y + '</strong>';
                }
            },
            legend: {
            	enabled: false
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: '#FAE197',
                    lineWidth: 2,
					lineColor: '#42216c',
                    marker: {
                        enabled: true,
                        fillColor: '#FFF',
                        lineColor: '#42216c',
                        lineWidth: 2
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                name: '',
                type: 'area',
                color: '#42216c',
                data: [ 60,58,60,65,105,110,60,65,75,80,65,55 ]
            }]
        });
});