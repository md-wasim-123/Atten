import { render } from "ejs";
import userModel from "../models/userSchema.js";
import bcrypt from 'bcrypt'
class student {

    static homeController = (req, res) => {
        if (req.session.email) return res.render('index', { msg: req.flash("msg") })
        res.render("registration", { msg: req.flash("msg") });

    }

    static registrationDoc = (req, res) => {
        res.render("registration", { msg: req.flash("msg") });
    }


    // read data in data base
    static getAllData = async (req, res) => {
        const dat = await userModel.find()
        // res.render('student')
    }

    static createDoc = async (req, res) => {
        //create new document using model
        const hashpassword = await bcrypt.hash(req.body.password, 10)
        try {
            if (req.body.name == "" || req.body.email == "" || req.body.hashpassword == "" || req.body.age == "" || req.body.age == "") {
                req.flash("msg", "fill the information.....")
                res.redirect("/registration")
            }
            else {
                const user = await userModel.findOne({ email: req.body.email })
                if (user) {
                    req.flash("msg", "User already exit.")
                    res.redirect("/registration")
                } else {
                    const doc = new userModel({
                        name: req.body.name,
                        email: req.body.email,
                        password: hashpassword,
                        age: req.body.age,
                        gender: req.body.gender
                    })
                    const result = await doc.save()// save the data in data base
                    req.session.email = req.body.email
                    req.flash("msg", "Register the successfully.....")
                    res.redirect('/')// redirect login page
                }

            }
        } catch (error) {
            console.log(error)
        }
    }

    static login = async (req, res) => {
        res.render("login", { msg: req.flash("msg") })
    }

    static verifLogin = async (req, res) => {
        try {
            if (req.body.email == "" || req.body.password == "") {
                req.flash("msg", "All feild Require...")
                res.redirect("/login")
            }
            else {
                const { email, password } = req.body
                const dataFinde = await userModel.findOne({ email: email })
                if (dataFinde != null) {
                    const isMatch = await bcrypt.compare(req.body.password, dataFinde.password)
                    console.log(isMatch)
                    if (dataFinde.email == email && isMatch) {
                        res.redirect('/student')
                    }
                    else {
                        req.flash("msg", "Email And Password Not match..")
                        res.redirect("/login")

                    }
                }
                else {
                    req.flash("msg", "Email and Password not match..")
                    res.redirect("/login")

                }
            }
        } catch (error) {
            console.log(error)
        }
    }



}



export default student