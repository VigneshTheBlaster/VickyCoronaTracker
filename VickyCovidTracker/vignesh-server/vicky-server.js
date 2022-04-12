const express  =  require('express');  
const server = express();
const body=require('body-parser');
const con=require('./mongodb-connection');
const cors=require('cors');
const CRUD = require('./CRUD');
//const fs=require('fs');
//const querystring=require('querystring');
//server.use(body.urlencoded({ extended:true }));

server.use(body.json());

server.use(cors());
server.listen(3000,function (err) {
        if(err){
           console.log(err);
        }else {
        console.log("Server Started At Port 3000");  
}});


server.get('/',(req,res)=>{
       res.send("<h1>This Server Belongs to V.VIGNESH 19MIS0072</h1>");
});

server.post('/store',CRUD.store);
server.post('/find',CRUD.find);






















/*const con=require('./mongodb-connection');
const body=require('body-parser')

const rot=require('./CRUD');
const querystring=require('querystring');
server.use(body.urlencoded({ extended:true }))
*/


/*server.get('/v.vignesh',(req,res)=>{
        fs.readFile('APP-19MIS0072.html',(err,data)=>{
                res.write(data);
                res.end();
        })

});

server.post('/form', function(req, res) {
        var st=req.body.Energyuse;
        var na=req.body.Electricity;
        var d=req.body.Natural;
        var e=req.body.Oil;
        var y=req.body.LPG;
        var cd="/update"+"?"; //u can change to store or update  
        const query = querystring.stringify({
        "a": st,
        "b": na,
        "c": d,
        "d": e,
        "e": y
        });
        res.redirect(cd + query);
})
   
server.get('/update',CRUD.update);
server.get('/Wamercase',CRUD.Wamer);*/