const Student = require("../models/Student");
const logger = require("../utils/logger");

const listStudent = (req, res) => {
  Student.find({})
    .select()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      logger.error(err);
      res.status(400).send(err.errors);
    });
};

const getStudent = (req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      logger.error(err);
      res.status(400).send(err.errors);
    });
};

const createStudent = (req, res) => {
  const newStudent = new Student(req.body);

  newStudent.save((err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newStudent);
  });
};

const updateStudent = async (req, res) => {
  try {
    const temp = await Student.findById(req.params.id);
    await temp.update({ $set: req.body });
    res.status(200).send(temp);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteStudent = (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Student successfully deleted",
    };
    return res.status(200).send(response);
  });
};

module.exports = {
  listStudent,
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent,
};
