import userModel from "../models/userSchema.js";
import bcrypt from 'bcrypt'
class student{

    static homeController = (req, res) => {
        res.render("index");
    }

    static registrationDoc = (req, res) => {
        res.render("registration");
    }

 
    // read data in data base
    static getAllData = async (req, res) => {
        const dat = await userModel.find()
        console.log(dat)
        // res.render('student')
    }
    static createDoc = async (req, res) => {
        //create new document using model
        const hashpassword = await bcrypt.hash(req.body.password, 10)
        try {
            const doc = new userModel({
                name: req.body.name,
                email: req.body.email,
                password: hashpassword,
                age:req.body.age,
                gender:req.body.gender

            })
            await doc.save()
            res.redirect('/login')

        } catch (error) {
            console.log(error)
        }

    }
    static login =async (req, res) => {
        res.render("login");
    }
    static verifLogin = async (req, res) => {
        try {
            const { lemail, password } = req.body
            // console.log(email)
            const dataFinde = await userModel.findOne({ email: lemail })
            // console.log(dataFinde.email)
            if (dataFinde != null)
             {  
                const isMatch = bcrypt.compare(password, dataFinde.password)
                if (dataFinde.email == email  && isMatch) {
                    // res.send(`successfully ${dataFinde}`)
                    res.redirect('/student')
                }
                else {
                    res.send('Data does not match')
                }
            } else {
                res.send('Data not Registed ')

            }
        } catch (error) {
            console.log(error)
        }
    }



}



export default student