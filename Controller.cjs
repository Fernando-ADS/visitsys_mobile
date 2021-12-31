const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require("./models/index.cjs");

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;
let recepcionista=models.Recepcionista;

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=> {
  console.log('Servidor rodando');
});


app.post('/login',async (req,res)=>{
  let response=await recepcionista.findOne({
    where:{email:req.body.email, cpf:req.body.cpf}
  });
  console.log(response);
});
