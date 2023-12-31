//constantes y librerias requeridas
const helmet = require('helmet');
require("dotenv").config();
const express = require("express");
const { DBTest } = require("./database.js");
const foroModel = require('./foroModel.js');
let app = express();
const PUERTO = process.env.PUERTO;
app.set("view engine", "ejs");
//express static es necesario para poder usar un archivo css
app.use(express.static(__dirname + '/public'));
//las politicas de helmet no dejan ver imagenes
//entonces le doy permisos con este codigo
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", '*'],
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//function asyncrona de incio
app.get("/", async function (req, res) {
const publi = await foroModel.findAll();
  res.render("inicio",{ publi});
});
//funncion asincronsa de agregar una nueva publicacion
//y que redireccione al inicio
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
//funcion asyncrona de eliminar 
//elimina toda una fila por id y redirecciona al inicio
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
app.get("/editar", function (req, res) {
  res.render("editar");
});
// function asyncrona de editar por id
//renderisa editar .get va a mostrar los valor nuevos por url
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
//funcion asincrona 
//funcion de editar que .post para que envia los datos y no se vean 
//redirecciona al inicio
app.post('/editar/:id', async function (req, res) {
  const { id } = req.params;
  const { nombrePublicacion, redactarPublicacion, agregarImg } = req.body;

  try {
    // Encuentra la publicación existente por su ID
    const edit = await foroModel.findOne({
      where: {
        id: id
      }
    });

    if (edit) {
      // Actualiza los campos de la publicación con los valores del formulario
      edit.autor = nombrePublicacion;
      edit.publicacion = redactarPublicacion;
      edit.img = agregarImg; // Aquí estableces la URL de la imagen ingresada por el usuario
      await edit.save(); // Guarda los cambios en la base de datos
      res.redirect('/');
    } else {
      res.send('No se encontró la publicación');
    }
  } catch (err) {
    res.send('Se produjo un error al editar la publicación: ' + err);
  }
});


//se acciona la funcion para conectarse a la base de datos
DBTest();
//puerto en el que esta corriendo nuestro intermediario (servidor)
app.listen(3000, () => {
  console.log(`el servidor esta corriendo en el puerto ${PUERTO}`);
});
