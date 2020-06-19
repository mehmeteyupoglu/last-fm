const axios = require('axios');

export const data1 = () => {axios.get('http://ws.audioscrobbler.com/2.0/?method=geo.getTopTracks&country=spain&limit=10&api_key=97cee60fe2193b383cd8377301901a80&format=json')
  .then(function (response) {
    // handle success
    console.log(`Data 1: `, response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });}

export const data2 = axios.get('http://ws.audioscrobbler.com/2.0/?method=geo.getTopArtists&country=spain&limit=10&api_key=97cee60fe2193b383cd8377301901a80&format=json')
.then(function (response) {
  // handle success
  console.log(`Data 2: `, response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});