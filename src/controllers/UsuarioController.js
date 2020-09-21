const {usuarios} = require('../app/models')

class UserController{

    async store (req, res){
      
        const admin = await usuarios.create(req.body)
        res.json(admin);
    }

}

module.exports = new UserController()

