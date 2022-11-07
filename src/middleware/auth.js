const jwt = require("jsonwebtoken");
const authenticate = function (req,res,next){
    let token = req.headers["X-Auth-token"]
    if(!token) token = req.headers["x-auth-token"]

    if(!token ) return res.send({status :false, msg:"token must be present"});{
        console.log(token);


        let decodedToken = jwt.verify(token,"functionup-thorium");
        if(!decodedToken){
            return res.send({status: false, msg:"token is invalid"})
        }
        req.loggedInuser = decodedToken.userId
        next()
    }
    const authorise = function (req,res,next){
        let requestedUserId = req.params.userId
        if(requestedUserId !== req.loggedInuser)
        return res.send({status :false, msg:"you dont have authorisation"});
        next()
    }
    module.exports.authenticate=authenticate
    module.exports.authorise=authorise
}
