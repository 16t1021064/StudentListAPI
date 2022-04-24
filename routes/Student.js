const studentController = require('../controllers/student');

module.exports = (app) => {
  app.route('/student').get(studentController.listStudent),
  app.route('/student/:id').get(studentController.getStudent),
  app.route('/student').post(studentController.createStudent),
  app.route('/student/:id').put(studentController.updateStudent),
  app.route('/student/:id').delete(studentController.deleteStudent)
}
