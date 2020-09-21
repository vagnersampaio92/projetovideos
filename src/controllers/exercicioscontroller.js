const {exercicios} = require('../app/models')

class UserController{

    async store (req, res){
      
        const user = await exercicios.create(req.body)
        res.json(user);
    }
    async  listagem (req, res){
      
        const user = await exercicios.findAll()
        res.json(user);
    }
    async  listagemusuario (req, res){
      
        const user = await exercicios.findAll({
            where:{
                usuario_id:req.params.id
            }
        })
        res.json(user);
    }
    async exclui(req, res){
        const avaliacao =await exercicios.destroy(
           {where:{
             id:req.params.id
           }}
         )
        res.json(avaliacao);
    }

}

module.exports = new UserController()

