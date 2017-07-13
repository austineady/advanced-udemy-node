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

// https://api.darksky.net/forecast/566cfa965a11788420118d217739e479/37.8267,-122.4233