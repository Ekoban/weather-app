const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
            a: {
                demand: true,
                alias: 'address',
                describe: 'Address to fetch weather for',
                string: true,
            }
        })
        .help() //returns useful info when program is run
        .alias('help', 'h')
        .argv;
const command = argv._[0];

const encodedAddress = encodeURIComponent(argv.a);
const URL = `http://www.mapquestapi.com/geocoding/v1/address?key=VCgwinoGdXf0kuSNf9FjK5Ydor5zQE0E&location=${encodedAddress}`;

request({
    url: URL,
    json: true
}, (error, response, body) => { //callback
    console.log(JSON.stringify(response, undefined, 2));
    
    if(error) {
        console.log('====================================');
        console.log('Unable to connect to Google servers.');
        console.log('====================================');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address.');
    } else if (body.status === 'OK') {
        let latitude = body.results[0].locations[0].latLng.lat;
        let longitude = body.results[0].locations[0].latLng.lng;
        let street = body.results[0].locations[0].street;
        let city = body.results[0].locations[0].adminArea5;
        let country = body.results[0].locations[0].adminArea1 ;

        console.log('====================================');
        console.log(`Address found: ${street}, ${city}, ${country}.`);
        console.log('====================================');
        console.log(JSON.stringify(
            `Latitude: ${latitude} / Longitude: ${longitude}`,
            undefined,
            2));
        console.log('====================================');
    }
});
