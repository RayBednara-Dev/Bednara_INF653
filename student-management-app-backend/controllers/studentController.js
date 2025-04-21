const Student = require('../models/students.js')

const getAllStudents = async (req, res) => {
    console.log("got students maybe...")
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch(err) {
        res.status(500).json({message: 'Error fetching students', error: err})
    }
};

const getStudentbyID = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if(!student) return res.status(404).json({message: "Student with selected ID not found"});
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json({message: "Error fetching student", error: err})
    }
};

const createStudent = async (req, res) => {
    try {
      const { firstName, lastName, email, course } = req.body;
      const newStudent = new Student({ firstName, lastName, email, course });
      await newStudent.save();
      res.status(201).json(newStudent);
    } catch (err) {
      res.status(500).json({ message: 'Error creating student', error: err });
    }
  };

  const updateStudent = async (req, res) => {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json(updatedStudent);
    } catch (err) {
      res.status(500).json({ message: 'Error updating student', error: err });
    }
  };

  const deleteStudent = async (req, res) => {
    try {
      const deletedStudent = await Student.findByIdAndDelete(req.params.id);
      if (!deletedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting student', error: err });
    }
  };
  
  module.exports = { getAllStudents, getStudentbyID, createStudent, updateStudent, deleteStudent };