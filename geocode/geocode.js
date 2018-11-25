const request = require('request');

const geocodeAddress = (address) => {
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
        console.log('-----------------------------------');
        console.log(`Status Code: ${statusCode}, Status Text: ${statusText}`);
        console.log('-----------------------------------');
        
        if(error) {
            console.log(`
            ====================================
            Unable to connect to MapQuest servers.
            ====================================
            `);
        } else if (statusCode === 400) {
            console.log(`
            ====================================
            Unable to find this address.
            ====================================
            `);
        } else if (statusCode === 0) {
            let latitude = body.results[0].locations[0].latLng.lat;
            let longitude = body.results[0].locations[0].latLng.lng;
            let street = body.results[0].locations[0].street;
            let city = body.results[0].locations[0].adminArea5;
            let country = body.results[0].locations[0].adminArea1 ;

            console.log('====================================');
            console.log(`Address found: ${street}, ${city}, ${country}.`);
            console.log('-----------------------------------');
            console.log(JSON.stringify(
                `Latitude: ${latitude} / Longitude: ${longitude}`,
                undefined,
                2));
            console.log('====================================');
        }
    });
}

module.exports = {
    geocodeAddress,
}