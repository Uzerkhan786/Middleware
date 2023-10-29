const express=require('express');
const app=express();
const bodyParser=require('body-parser');

/*middle ware ka use hum kisi 3rd cheeze kocdetect krtne ke liye krte he hi .

for example, jese humne ek food website baanyi usme userbfood order krne aya tu jab vo api get request maargea to usme us call me 
me middle ware se check krenge ki user sign in he ya nhi mtlb iska alg function likhenge phir kabhi sign hua to next me bhej <denge></denge>



/*app.use is help se hum har method me apne aap middle ware waala function lg jaata he
app.use(signin);
app.use(signout);*/


function signin(req,res,next){

    console.log("it is done");
    next();
}

function signout(req,res,next){
    console.log("another account");
    next();
}
app.get('/',signin,signout,(req,res)=>{
    return res.status(201).json({
        name:'uzer',
        age:24
    })
})
app.listen('3000',()=>{
    console.log("port running on 3000 succesfully");
});