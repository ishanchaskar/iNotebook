var jwt = require('jsonwebtoken')

const fetchuser = (req , res , next) => {
    const token = req.header('auth-token')
    const SECTRET_KEY = 'helloiam'
    if(!token){
        res.status(401).send({error : "please send with correct details"})
    }
    try {
       const data = jwt.verify(token , SECTRET_KEY)
       req.user = data.user
       next()
    } catch (error) {
        res.status(401).send({error : "please send with correct details"})
    }
  
}

module.exports = fetchuser;