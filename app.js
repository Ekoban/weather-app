const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});