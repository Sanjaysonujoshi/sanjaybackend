

const authenticate = function(req, res, next) {
  let info = req.header["x-auth-token"]
   let token = jwt.verify(info,'functionup-thorium')
  if(!token ){ return res.send({msg:"token is not valid"})
}else{
    next()
}
}

    //check the token in request header
    //validate this token

    




const authorise = function(req, res, next) {

    let user = req.param.userId
    let logginuser = decodedToken.userId

    if(user != logginuser){
        return res.send({msg:"is not correct user"})
    }else{
        next()
    }
    // comapre the logged in user's id and the id in request
    
}

