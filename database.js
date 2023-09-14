const {Sequelize}= require('sequelize');

const dbName = process.env.DB_NAME
const dbUserName = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD


const sequelize = new Sequelize(dbName,dbUserName,dbPassword,{
    host: 'localhost',
    dialect:'mysql'
});
const DBTest = async () => {
try {
    await sequelize.authenticate();
    console.log(' Conectado');
  } catch (error) {
    console.error(' No se conecto', error);
  }
}

  module.exports = { sequelize , DBTest }