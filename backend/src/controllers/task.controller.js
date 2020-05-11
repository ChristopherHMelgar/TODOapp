const Task = require('../models/task');

async function _getTasks(req, res) {
   const tasks = await Task.find();
   res.json(tasks);
};

async function _createTask(req, res) {
   const {name, description, status} = req.body;
   const newTask = new Task({
      name,
      description,
      status
   });
   await newTask.save();
   res.status(200).json({
      message: 'Task created',
      newTask
   });
};

async function _updateTask(req, res) {
   const {id} = req.params;
   const { name, description, status } = req.body;
   const updatedTask = await Task.findByIdAndUpdate(id, {name, description, status});
   res.status(200).json({
      message: 'Successfully updated',
      updatedTask
   });
};

async function _deleteTask(req, res) {
   const {id} = req.params;
   const task = await Task.findByIdAndRemove(id)
   res.status(200).json({
      message: 'Task deleted'
   });
}

module.exports = {
   getTasks: _getTasks,
   createTask: _createTask,
   updateTask: _updateTask,
   deleteTask: _deleteTask,
}