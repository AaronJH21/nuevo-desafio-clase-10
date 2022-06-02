const express = require ('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views','./views')
//app.set('view engine','pug')
app.set('view engine','ejs')


app.get('',(req,res)=> {
    const data ={
        comision:30965
    }
    return res.render('index',data)
})


app.get('/message',(req,res)=>{
    const data ={
        message:{
            name:'Aprendiendo EJS'
        }
    }
    return res.render('message',data)
})

app.get('/alumnos',(req,res)=>{
    const alumnos =[
        {nombre:'aaron', apellido:'jallaza'},
        {nombre:'andres', apellido:'reynaldo'},
        {nombre:'juan', apellido:'bautista'},
    ]
    const data = {
        alumnos,
        comision:30965
    }

    return res.render('alumnos', data)
})
const utiles=[]
app.get('/form',(req, res)=> {
    const data ={
        utiles
    }
    return res.render('form',data)
})
app.post('/utiles',(req,res)=>{
    const persona = {
        nombre:req.body.nombre,
        genero:req.body.genero,
        año:req.body.año,
    }
    console.log({utile,body:req.body})

    utiles.push(utile)
    return res.redirect('/form')

})

const PORT=8080
const server= app.listen(PORT,()=>{
    console.log(`Servidpr HTTP corriendo en el puesto ${PORT}`)
})

server.on ('error', error =>console.log(`Error en servidor: ${error}`)) 