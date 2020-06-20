import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Tracks = (props) => {
    const options =  {
        chart: {
          type: 'column'
        },
        title: {
          text: 'The Top Tracks. June, 2020'
        },
        subtitle: {
          text: 'Fazla Gida Case '
        },
        accessibility: {
          announceNewData: {
            enabled: true
          }
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
            title: "counts"
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: '{point.y:.1f}'
            }
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
        },
      
        series: [
          {
            type: 'column',
            colorByPoint: true,
            data: props.data
          }
        ],      
    }
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default Tracks;



