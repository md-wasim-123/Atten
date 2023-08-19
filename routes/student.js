import express from 'express'
const studDetails = express.Router();
import studentAttendances from '../controller/studentController.js';
import Attendance from '../controller/attendanceController.js';

studDetails.get('/student', studentAttendances.getAllData)
studDetails.post('/student', studentAttendances.inputdata)
studDetails.get('/student/edit/:id', studentAttendances.editData)
studDetails.post('/student/update/:id', studentAttendances.updateData)
studDetails.get('/student/delete/:id', studentAttendances.deleteData)
studDetails.get('/student/attendance', Attendance.attent)
studDetails.post('/student/attendance', Attendance.Radioinput)

export default studDetails