import mongoose from "mongoose";

const attendanceStudent=new mongoose.Schema({
    Attent:{type:String,  required:true},
    data:{type: Date, default: Date.now }

})
const attendanceModel= mongoose.model('Attendance',attendanceStudent)


export default attendanceModel