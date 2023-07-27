import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true,
        Validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        },
     },
    password: { type: String, required: true, trim: true },
    age:{type:Number,required:true, min:10,max:60},
    gender:{type:String,  required:true},
    join: { type: Date, default: Date.now }
})

const userModel= mongoose.model('Student',userSchema)

export default userModel