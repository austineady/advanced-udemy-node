const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        forecast.getForecast(results, (error, response) => {
            console.log(JSON.stringify(response.currently, undefined, 2));
        });
    }
});