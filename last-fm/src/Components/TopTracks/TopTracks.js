import React, { useEffect, useState } from 'react';
import Tracks from "./Tracks/Tracks"

const axios = require('axios');

const TopTracks = () => {
    const [response, setResponse] = useState([]);
    
useEffect(() => {

    axios.get('http://ws.audioscrobbler.com/2.0/?method=geo.getTopTracks&country=spain&limit=10&api_key=97cee60fe2193b383cd8377301901a80&format=json')
    .then(function (response) {
        console.log(response)
        setResponse(response.data.tracks.track)
    })
    .catch(function (error) {
        console.log(error);
    })
}, []);

const data = response.map(item => {
    return {    
        name: item.name,
        y: parseInt(item.listeners)        
    }
})

    return (
        <div style={myStyle}>
          <Tracks data={data}/>      
        </div>
    );
}

const myStyle = {
  margin: "60px 0", 
  borderRadius: "10"
}

export default TopTracks;



