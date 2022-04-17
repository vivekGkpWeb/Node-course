const request = require('request');



const get = (latitude, longitude, callback) => {
    
    const URL = 'http://api.weatherstack.com/current?access_key=6d3c26f9e64845a825fbd2a22faef66b&query='+latitude+','+longitude+'&units=f'
    // console.log(URL)
    request({ url:URL, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            // callback(undefined, {
            //     temperature: body.current.temperature,
            //     feelslike: body.current.feelslike,
            //     summary: body.current.weather_descriptions[0]
            // });
            callback(undefined,'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The weather is ' + body.current.weather_descriptions[0] + '.');
        }
    });
}


module.exports = {get}