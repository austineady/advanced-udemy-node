const request = require('request');

var getForecast = (coords, cb) => {
    request({
        url: `https://api.darksky.net/forecast/566cfa965a11788420118d217739e479/${ coords.latitude },${ coords.longitude }`,
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