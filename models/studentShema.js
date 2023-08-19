import mongoose from "mongoose";
const Schema = mongoose.Schema;


// Create a schema for the Student model 
 
const studentSchema= new Schema({
    RollNumber: { type: Number, required:true,unique:true },
    Student_name: { type: String, required:true},
    Father_name: { type: String,required:true},
    phone: { type: Number,required:true},
    dob: { type: String},
})

const studentModal=mongoose.model('detail',studentSchema)

export default studentModal