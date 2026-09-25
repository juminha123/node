const express = require('express');
const app = express()
const port = 3000
const produtos = require("./produto.json")
let usuario =[
 {
    id:1,
    nome:"joão"
}, 
{
    id:2,
    nome:"Julia"
}
] 

app.get('/', (req, res) => {
  res.send("<h1>bem vindo</h1>")
})
app.get('/produtos', (req, res) => {
  res.send(produtos)
})
app.get('/contato', (req, res) => {
  res.send("<h1>pagina de contato</h1>")
})
app.get('/usuario', (req, res) => {
  res.send(usuario)
})

app.get('/usuario/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuario = usuario.find((item)=>{
        return item.id === id;
    })
    if(usuario.length === 0){
        return res.status(404).json(mensagem: "n encontrado")
    }
    res.status(200).json(usuario);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})