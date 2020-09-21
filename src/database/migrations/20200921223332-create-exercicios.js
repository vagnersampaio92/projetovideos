'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('exercicios',{
      id:{
        allownull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dificuldade:{
        allownull:false,
        type: Sequelize.STRING
      },
      descricão:{
        allownull:false,
        type: Sequelize.STRING
      },
      titulo:{
        allownull:false,
        type: Sequelize.STRING
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      
      created_at:{
        allowNull:false,
        type:Sequelize.DATE
      },
      updated_at:{
        allowNull:false,
        type:Sequelize.DATE
      }

      })
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('exercicios');
    
  }
};
