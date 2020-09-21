const bcrypt = require('bcryptjs')
const  jwt=require ('jsonwebtoken')



module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('usuarios',{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.VIRTUAL,
        password_reset_token:DataTypes.STRING,
        password_reset_expires:DataTypes.STRING,
        password_hash: DataTypes.STRING

    },{
        hooks:{
            beforeSave: async user =>{
                if(user.password){
                    user.password_hash= await bcrypt.hash(user.password,8)
                }
            }
            
        }
    })

    // User.associate = models => {
    //     User.hasMany(models.planos)
    
    // }

    User.prototype.checkPassword = function (password){
        return bcrypt.compare(password,this.password_hash)
    }
    User.prototype.generation = function (email){

      return jwt.sign({email},process.env.SECRET,{
          expiresIn: 86400
      })
    }
    return User
}