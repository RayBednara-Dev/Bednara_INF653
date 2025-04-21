const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentbyID,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

router.get('/', getAllStudents);
router.get('/:id', getStudentbyID);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;