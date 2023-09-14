const { DataTypes } = require('sequelize');
const {sequelize } = require('./database.js')

const publi = sequelize.define('publi', {
autor:{
    type: DataTypes.STRING,
    
  },
   publicacion:{
    type: DataTypes.STRING,
   
  },

fecha:{
  type: DataTypes.STRING,
},

 
  
}, {
   timestamps:false,
    tableName:'foro',
});
module.exports =publi;