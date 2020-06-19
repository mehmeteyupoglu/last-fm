const axios = require('axios');

export const data = axios.get('http://ws.audioscrobbler.com/2.0/?method=geo.getTopTracks&country=spain&api_key=97cee60fe2193b383cd8377301901a80&format=json')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  