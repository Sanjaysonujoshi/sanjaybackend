const mid1 = function async (req,res,next){
    let valid= req.headers["isFreeappuser"]
    if(valid=="true"){
        next()
    }
    else{
        res.send("this request is missing a mandatory header")
    }
}
module.exports.mid1=mid1
