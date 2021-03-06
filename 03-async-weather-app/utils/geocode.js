const request = require('request')

const get = (address,callback) => {
    
    const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGV2dml2ZWtyYW8iLCJhIjoiY2wyMXdpYm93MDlmeTNpbzEwbHBvNjRoaCJ9.s_XKdwJBjgp56NHlkxdDVw'
    // console.log(URL)
    request( { url:URL, json:true }, (error, { body }) =>{
        if(error){
            callback('Unable to connect to geo location service!',undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location. Try another search.',undefined)
        }else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = {get}