import React, { useEffect, useState } from 'react';
import Artists from "./Artists/Artists"

const axios = require('axios');

const TopArtists = () => {

const [response, setResponse] = useState([]);
    
useEffect(() => {
  
    axios.get('http://ws.audioscrobbler.com/2.0/?method=geo.getTopArtists&country=spain&limit=10&api_key=97cee60fe2193b383cd8377301901a80&format=json')
    .then(function (response) {
        setResponse(response.data.topartists.artist)
    })
    .catch(function (error) {
        console.log(error);
    })
},[]);

const data = response.map(item => {
    return {    
        name: item.name,
        y: parseInt(item.listeners)        
    }
})

    return (
        <div>
           <Artists data={data} />
        </div>
    );
}

export default TopArtists;
