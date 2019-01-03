const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./helpers/helper-hbs');

app.use( express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');


//Express hbs engine
app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'SergIO ZERECERO',
        anio: new Date().getFullYear()
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        anio: new Date().getFullYear()
    })
})


app.listen(port,()=>{
    console.log(`running by ${port}`)
});