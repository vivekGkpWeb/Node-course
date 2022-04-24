const path = require('path');
const express = require('express')
const hbs = require('hbs')


const app = express()
// const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
const partialsPath = path.join(__dirname, '../views/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// app.use(express.static(publicDir))



app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Nishant',
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Weather App Help',
        body: 'How can we help you?',
    })
})






// app.get('/', (req, res) => {
//   res.send('<h1>Weather app</h1>')
// })

app.get('/help', (req, res) => {
  res.send({
      name: 'John',
      age: '30'
  })
})








app.listen(3000,()=>{
    console.log('Example app listening on port 3000!')
})