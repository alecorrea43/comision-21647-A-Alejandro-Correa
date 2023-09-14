require("dotenv").config();
const express = require("express");
const { DBTest } = require("./database.js");
const foroModel = require('./foroModel.js');
const helmet = require('helmet');



let app = express();

const PUERTO = process.env.PUERTO;


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async function (req, res) {
const publi = await foroModel.findAll();
  res.render("inicio",{ publi});
});

app.get("/agregar", function (req, res) {
  res.render("agregar");
});
app.post("/agregar", async function (req, res) {
  console.log(req.body);
  const { nombrePublicacion, redactarPublicacion, agregarImg } = req.body;
  try{
    const nuevaPublicacion2 = await foroModel.create({
      autor: nombrePublicacion,
      publicacion: redactarPublicacion,
      img: agregarImg,
    });
    if (nuevaPublicacion2){
      res.redirect('/')

    }else{
  res.send('Se produjo un error al subir la publicacion')
  }  
  } catch (err) {
    res.send("se produjo un error al cargar la publicacion" + err)
  }
});
app.get("/eliminar/:id", async function (req, res) {
  const { id } = req.params;
  try{
  const borrarPublicacion = await foroModel.destroy({
    where:{
      id: id
    }
  })
if(borrarPublicacion){
  res.redirect('/');
}else{
  res.send('no se borro la publicacion')
}
  }catch(err){
    res.send('se produjo un eeror a borrar la publicacion' + err)
  }

});
app.get('/editar/:id', async function (req, res) {
  const {id} = req.params;
  try{
    const edit = await foroModel.findOne({
      where:{
        id:id
      }
    })
    if(edit){ 
      res.render('editar',{edit:edit});
    }else{
      res.send('no se encontro la tarea')
    }
  }catch(err){
    res.send('se produjo un error al subir la tarea' +err)
  }
  
});
app.post('/editar/:id', async function (req, res) {
  const {id} = req.params;
  const { nombrePublicacion, redactarPublicacion, agregarImg } = req.body;

  try{
    const editActualizado = await foroModel.update(
      {
       autor: nombrePublicacion,
       publicacion:redactarPublicacion,
       img:agregarImg,
      },{
      where:{
        id:id
      }
    })
    if(editActualizado){ 
      res.redirect('/');
    }else{
      res.send('no se encontro la tarea')
    }
  }catch(err){
    res.send('se produjo un error al subir la tarea' +err)
  }
  
});



DBTest();

app.listen(3000, () => {
  console.log(`el servidor esta corriendo en el puerto ${PUERTO}`);
});
