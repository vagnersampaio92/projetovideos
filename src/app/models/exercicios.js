module.exports = (sequelize, DataTypes) => {
    const exerc = sequelize.define('exercicios', {
        dificuldade: DataTypes.STRING,
        descricão: DataTypes.STRING,
        titulo: DataTypes.STRING,
        usuario_id: DataTypes.INTEGER,
 
    }, {})
    exerc.associate = models => {
        exerc.belongsTo(models.usuarios, { foreignKey: 'usuario_id' })

    }

    return exerc
}