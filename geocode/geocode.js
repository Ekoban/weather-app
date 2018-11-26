const request = require('request');

const geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
    let URL = `http://www.mapquestapi.com/geocoding/v1/address?key=VCgwinoGdXf0kuSNf9FjK5Ydor5zQE0E&location=${encodedAddress}`;
    
    request(
    {
        url: URL,
        json: true
    }, 
    
    (error, response, body) => { //callback
        let statusCode = response.body.info.statuscode;
        let statusText = response.body.info.messages[0];
        let latitude = body.results[0].locations[0].latLng.lat;
        let longitude = body.results[0].locations[0].latLng.lng;
        let street = body.results[0].locations[0].street;
        let city = body.results[0].locations[0].adminArea5;
        let country = body.results[0].locations[0].adminArea1 ;
        
        
        console.log('-----------------------------------');
        console.log(`Status Code: ${statusCode}, Status Text: ${statusText}`);
        console.log('-----------------------------------');
        
        /*---------------------------------------------------------*/

        if(error) {
            callback('Unable to connect to MapQuest servers.')
        } else if (statusCode === 400) {
            callback('Unable to find this address.')
        } else if (statusCode === 0) {
            callback(undefined /*car pas d'erreur*/, {
            //  results
                address: `${street}, ${city}, ${country}`,
                latitude,
                longitude,
            })
            
            // console.log('====================================');
            // console.log(`Address found: ${street}, ${city}, ${country}.`);
            // console.log('-----------------------------------');
            // console.log(JSON.stringify(
            //     `Latitude: ${latitude} / Longitude: ${longitude}`,
            //     undefined,
            //     2));
            // console.log('====================================');
        }
    });
}

request({
  url: 'https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/39.9396284,-75.18663959999999',
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Forecast.io server.');
  } else if (response.statusCode === 400) {
    console.log('Unable to fetch weather.');
  } else if (response.statusCode === 200) {
    console.log(body.currently.temperature);
  }
});

module.exports = {
    geocodeAddress,
}