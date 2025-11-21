const express = require('express')
const app = express()

app.set('view engine','ejs')
app.set('views','views')

app.use(express.urlencoded())
app.use(express.static('public'))

const gameRoute = require('./routers/games') 
const { name } = require('ejs')
const games = require('./model/games')

app.use('/games',gameRoute)

app.get('/',(req,res)=>{
    return res.render('homepage',{games})
})

app.use((req,res,next)=>{
    return res.redirect('/')
})

app.listen(3000,()=>{
    console.log('app started!!')
})