const Student = require('../models/Student');
const logger = require('../utils/logger');

const listStudent = (req, res) => {
  Student
    .find({})
    .select()
    .then(students => {
      res.json(students);
    })
    .catch(err => {
      logger.error(err);
      res.status(400).send(err.errors);
    });
}

const getStudent = (req, res) => {
  Student.findById(req.params.id)
		.then(student => {
			res.json(student);
		})
		.catch(err => {
			logger.error(err);
			res.status(400).send(err.errors);
		});
}

const createStudent = (req, res) => {

  const newStudent = new Student(req.body);

  newStudent.save(err => {  
    if (err) return res.status(500).send(err);
    return res.status(200).send(newStudent);
  });
}

const updateStudent = (req, res) => {

}

const deleteStudent = (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "User successfully deleted"
    };
    return res.status(200).send(response);
  })
}

module.exports = {
  listStudent,
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent
}
