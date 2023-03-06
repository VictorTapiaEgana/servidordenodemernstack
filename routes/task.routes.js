const express = require("express");
const router = express.Router();
const Task = require("../models/task");

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
