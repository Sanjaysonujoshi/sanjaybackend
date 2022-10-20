const express = require('express');
const router = express.Router();
let players =
[
   {
    "name":"manish",
     "dob": "1/1/1995",
    "gender": "male",
    "city":"jalandhar",
    "sports":[
        "swimimg"
    ]
   }, 
   {
    "name":"gopal",
    "dob":"1/09/1995",
    "gender":"male",
    "city":"delhi",
    "sports":[
        "soccer"
    ]
 },
   {
    "name":"lokesh",
    "dob":"1/1/1990",
    "gender":"male",
    "city":"mumbai",
    "sports":[
        "soccer"
    ]
   }
]
router.post('/test5',function (req,res){
let body =req.body
 const player= players.find(x=>x.name === body.name)
    if(player){
        res.send({message:"playeralreadyexist"})
    } else {
        players.push(body)
        res.send(players)
    }
})
let person=[
    {
        name: "pk",  
        age:10,
        votingstatus: false
    },
    {
        name:"srk",
        age:20,
        votingstatus:false
    },{
        name:"AA",
        age:70,
        votingstatus: false
    },
    {
        name:"sc",
        age:5,
       votingstatus: false
    },
    {
        name:"ho",
        age: 40,
        votingstatus:false
    }
]

router.post('/test6',function (req,res){
    let input =req.query.input
  const arr=[]
         person.forEach((person)=>{
        if(person.age > input){
            person.votingstatus=true
           arr.push(person)
        }
      })  

 return res.send({ arr})
    })

module.exports = router;