const getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Pedro'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (userObject) => {
    console.log(userObject);
});

//https://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard street philadelphia


const KEY = VCgwinoGdXf0kuSNf9FjK5Ydor5zQE0E ;
const SECRET = M9WQSuk6sMRPOlcB ;
const URL = `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=1301%20lombard%20street%20philadelphia` ;

const latitude = body.results[0].locations[0].latLng.lat;
const longitude = body.results[0].locations[0].latLng.lng ;

