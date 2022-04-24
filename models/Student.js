const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  age: {
    type: Number,
    require: [true, "Age is required "],
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must bigger than 0!");
      }
    },
  },
  className: {
    type: String,
    require: true,
  },
  schoolName: {
    type: String,
    require: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
