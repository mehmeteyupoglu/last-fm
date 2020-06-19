import React, { useEffect, useState } from 'react';
import { data1 } from '../../data.js'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const axios = require('axios');

const MainBody = () => {

const [response, setResponse] = useState([]);
    
useEffect(() => {

    axios.get('http://ws.audioscrobbler.com/2.0/?method=geo.getTopArtists&country=spain&limit=10&api_key=97cee60fe2193b383cd8377301901a80&format=json')
    .then(function (response) {
        setResponse(response.data.topartists.artist)
    })
    .catch(function (error) {
        console.log(error);
    })
});

const data = response.map(item => {
    return {    
        name: item.name,
        y: parseInt(item.listeners)        
    }
})

const options =  {
    chart: {
      type: 'column'
    },
    title: {
      text: 'The Top Artists. January, 2020'
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
          format: '{point.y:.1f}%'
        }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
      {
        data: data
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

export default MainBody;
