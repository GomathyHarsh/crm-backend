const jwt = require('jsonwebtoken');

exports.isAuth = async (req, res, next) => {
    const { cookies } = req;

    if(cookies.accessToken){
        let data = await jwt.verify(cookies.accessToken, process.env.SECRET_KEY);
        req.id = data._id;
        if(!req.id){
            return res.status(401).send({message: 'Not authorized.'})
        }

        return next();
    }

    return res.status(401).send({message: 'Not authorized'})
}


  