//constantes para utilizar sequelize
const { DataTypes } = require('sequelize');
const {sequelize } = require('./database.js')
//constante para definir el tipo de dato va a tomar
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
img: {
  type: DataTypes.STRING, 
},
 
  //conecte la base de datos
}, {
   timestamps:false,
    tableName:'foro',
});
//exportacion del mudulo publi y poder usarlo en otro archivo
module.exports =publi;