const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if(!location){
    console.log('Please provide a location!')
}else{
    geocode.get(location,(error, geoCodeData)=>{
    
        if(error){
            return console.log('Error: ',error)
        }
        console.log('Query: ',location)
        console.log('Place: ',geoCodeData.location)
        forecast.get(geoCodeData.latitude,geoCodeData.longitude,(error, foreCastData)=>{
    
            if(error){
                return console.log('Error: ',error)
            }
            
            console.log('Weather: ',foreCastData)
            
        })
        
    
    
    })

}




// const URL = 'http://api.weatherstack.com/current?access_key=6d3c26f9e64845a825fbd2a22faef66b&query=New%20York&units=f'


