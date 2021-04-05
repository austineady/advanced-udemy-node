const request = require('request');
const config = require('config.json');

var getForecast = (coords, cb) => {
    request({
        url: `https://api.darksky.net/forecast/${ config.FORECAST_KEY }/${ coords.latitude },${ coords.longitude }`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            cb(undefined, body);
        } else {
            cb('Unable to fetch weather');
        }
    });
};

module.exports = {
    getForecast
};