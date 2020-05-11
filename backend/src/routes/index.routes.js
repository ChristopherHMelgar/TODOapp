const {Router} = require('express');
const router = Router();

const userController = require('../controllers/user.controller');
const taskController = require('../controllers/task.controller');

const validateToken = require('../libs/jwt');

router.route('/signup')
   .post(userController.signUp);

router.route('/login')
   .post(userController.login);

router.route('/tasks')
   .all(validateToken)
   .get(taskController.getTasks)
   .post(taskController.createTask);
   
router.route('/tasks/:id')
   .all(validateToken)
   .put(taskController.updateTask)
   .delete(taskController.deleteTask);

module.exports = router;