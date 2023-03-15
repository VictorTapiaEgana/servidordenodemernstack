const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const User = require("../models/users");

/****************************************/
/*            USUARIOS LOLFLIX          */
/****************************************/  

//Buscar Usuario
router.get("/users", async (req, res) => {  
   const {name , password } = req.body;
   
   if (name !== undefined){
      if (name.trim() === ""){    
         res.json({status:"Usuario en Blanco"})
      }else{    
        const usuario = await User.findOne({name});
           if (usuario !== null){              
              if (password === usuario.password){
                  res.status(200).json("Usuario Valido");
              }else{
                  res.status(401).json("Error de contraseña")
              }                
            }else{
                res.status(404).json({status:"Usuario No Encontrado"}) 
            }    
      }     
   }else{
    res.json(`no se ha definido la Variable de usuario`);
   }
});
 
//Guardar Usuario
router.post("/registro", async (req, res) => {
  const { name, password } = req.body;
  const newUser = new User({ name, password });
  await newUser.save();

  res.status(200).json({ status: "Usuario Creado" });
});

/****************FIN LOLFLIX******************/










































//Tareas Encontradas
router.get("/", async (req, res) => {  
  const tasks = await Task.find();
  res.json(tasks);
});

//Listar solo 1
router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

//Guardar Datos
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  await newTask.save();

  res.json({ status: "Tarea Guardada" });
});

//modificar
router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  const newTask = { title, description };
  await Task.findByIdAndUpdate(req.params.id, newTask);

  res.json({ status: "Tarea Actualizada" });
});

//elimimnar
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ status: "Tarea Eliminada" });
});

module.exports = router;
