import mongoose, { Mongoose } from "mongoose";

const attendanceStudent = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    attendence: []

})
const attendanceModel = mongoose.model('Attendance', attendanceStudent)


export default attendanceModel