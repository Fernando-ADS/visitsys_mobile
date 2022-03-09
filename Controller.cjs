const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const model=require("./models/index.cjs");

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=model.User;
let recepcionista=model.Recepcionista;

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
