const geoCode = (address,callback) =>{
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }      
        callback(data)
    },2000)
}

geoCode('Goa',(data)=>{
    console.log(data)
});


console.log('After geoCode')


const add = (a,b,callback) =>{
    setTimeout(() => {
        callback(a+b)
    },2000)
}

add(10,35,(sum)=>{
    console.log(sum)
})