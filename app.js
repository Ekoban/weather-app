const request = require('request');
const KEY = 'VCgwinoGdXf0kuSNf9FjK5Ydor5zQE0E' ;
const SECRET = 'M9WQSuk6sMRPOlcB' ;
const URL = `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=1301%20lombard%20street%20philadelphia` ;


request({
    url: URL,
    json: true
}, (error, response, body) => { //callback
    console.log(JSON.stringify(body, undefined, 2));
})