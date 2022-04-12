const t=require('./mongodb-schema');


const find=(req,res)=>{
        t.find({$and:[{User_Name:req.body.User_Name},{Password:req.body.Password}]})
        .then(response=>{
            res.send(response);
        })
        .catch(err=>{
                res.send(err);
        })
        
}

const store=(req,res)=>{
        let st={
                User_Name:req.body.User_Name,
                Password:req.body.Password,
                First_Name:req.body.First_Name,
                Last_Name:req.body.Last_Name,
                Phone_Number:req.body.Phone_Number,
                Select_State:req.body.Select_State,
                email:req.body.email,
                Occupation:req.body.Occupation
        };

        t.insertMany(st)
        .then(()=>{
                var s = '"1"';
                res.send(s);
        })
        .catch(()=>{
                var ss = '"0"';
                res.send(ss);
        })
}
   





































/*const Wamer=(req,res)=>{
        if total more 4 is wamercase or cooler case
        t.find()
        .then(response=>{
            let respons = JSON.parse(response);
            let html="<h1>wamer Case</h1><table border='2'><th>Energy_use</th><th>Electricity</th><th>Natural_Gas</th><th>oil</th><th>LPG</th><th>Total</th>";
            let html2="<h1>Cooler Case</h1><table border='2'><th>Energy_use</th><th>Electricity</th><th>Natural_Gas</th><th>oil</th><th>LPG</th><th>Total</th>";
            for(let i=0;respons.lenght>i;i++){
            let Energy_use = respons[i].Energy_use;
            let Electricity = respons[i].Electricity;
            let Natural_Gas = respons[i].Natural_Gas;
            let oil = respons[i].oil;
            let LPG = respons[i].LPG;
            let tot=Electricity+Natural_Gas+oil+LPG+0;
            if(tot>=4){
            html+="<tr><td>"+Energy_use+"</td><td>"+Electricity+"</td><td>"+Natural_Gas+"</td><td>"+oil+"</td><td>"+LPG+"</td><td>"+tot+"</td></tr>";
            html+="</table>"
            res.send(html);
            }
            else{
                html2+="<tr><td>"+Energy_use+"</td><td>"+Electricity+"</td><td>"+Natural_Gas+"</td><td>"+oil+"</td><td>"+LPG+"</td><td>"+tot+"</td></tr>";
                html2+="</table>"
                res.send(html);    
            }
        }
})
        .catch(err=>{
                res.send("error");
        })
}
const update=(req,res)=>{
        t.update({Energy_use:req.query.a},{$set:up1})
        .then(()=>{
                res.send("19MIS0072 Your document is Updated");
        })
        .catch(()=>{
                res.send("19MIS0072 Your document is Not updated");
        })
}*/
module.exports={
        store,find
}






















