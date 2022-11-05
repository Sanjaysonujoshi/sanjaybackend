const mid1 = function (req,res,next) {
    let valid=req.headers["isFreeappuser"]
    if(valid==true){
        next()
    }
     
    else{
        return res.send({message: "mandotry is not present"}) 


    }
}
module.exports.mid1=mid1
