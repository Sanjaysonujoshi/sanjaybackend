const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

// router.get('/movies', function(req,res){
//     console.log(req.params)
//  let movies =["Rang de basanti","The shining","Lord of the rings","Batman begins"]
//  res.send(movies)
// })


// router.get('/movies/:indexNumber',function(req,res){
//     let movies =["Rang de basanti","The shining","Lord of the rings","Batman begins"]
//     res.send(movieName.indexnumber<movies.length?"The movie Name is:"+ movies[movieName.indexNumber]:"error:Please use a valid index")
// })

router.get('/films',function(req,res){
    let arrayofobj1 =[
        {
            "id" : 1,
            "name":"the shining"
        },{
            "id" :2,
            "name":"incendies"
        },{
            "id" :3,
            "name":"Rang de basanti"
        },{
            "id":4,
            "name":"finding Nemo"
        }]
        res.send(arrayofobj1)
})

router.get('/films/:filmid',function(req,res){
    let arrayofobj2 =[
        {
            "id" : 1,
            "name":"the shining"
        },{
            "id" :2,
            "name":"incendies"
        },{
            "id" :3,
            "name":"Rang de basanti"
        },{
            "id":4,
            "name":"finding Nemo"
        }]
        for(let i=0;i<arrayofobj2.length;i++){
            if(arrayofobj[i].id==req.params.filmid){
                res.send(arrayofobj2[i])
                break;
            }
        }
        res.send("error : No movie exist with this id")
})




module.exports = router;