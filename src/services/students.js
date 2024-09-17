import { studentsModel } from '../db/models/student.js';

const getAllStudents = async () => {
  const students = await studentsModel.find();
  return students;
};

const getStudentsById = async (studentId) => {
  const student = await studentsModel.findById(studentId);
  return student;
};

export default {
  getAllStudents,
  getStudentsById,
};
