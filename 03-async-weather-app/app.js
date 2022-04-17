const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const searchLocation = process.argv[2]

if(!searchLocation){
    console.log('Please provide a location!')
}else{
    geocode.get(searchLocation,(error, {location,latitude,longitude}={})=>{
    
        if(error){
            return console.log('Error: ',error)
        }
        
        console.log('Query: ',searchLocation)
        console.log('Place: ',location)

        forecast.get(latitude,longitude,(error, foreCastData)=>{
    
            if(error){
                return console.log('Error: ',error)
            }
            
            console.log('Weather: ',foreCastData)
            
        })
        
    
    
    })

}




// const URL = 'http://api.weatherstack.com/current?access_key=6d3c26f9e64845a825fbd2a22faef66b&query=New%20York&units=f'


