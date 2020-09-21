const {usuarios} = require('../app/models')

class UserController{

    async store (req, res){
      
        const user = await usuarios.create(req.body)
        res.json(user);
    }
    async listagem (req, res){
      
        const user = await usuarios.findAll()
        res.json(user);
    }
    async exclui(req, res){
        const avaliacao =await usuarios.destroy(
           {where:{
             id:req.params.id
           }}
         )
        res.json(avaliacao);
    }

}

module.exports = new UserController()

