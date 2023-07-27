
import studentModal from "../models/studentShema.js"


class studentAttendances {

    static StudentHome = (req, res) => {
        res.render('student')
    }
    // read data in data base
    static getAllData = async (req, res) => {
        const dat = await studentModal.find()
        // console.log(dat)
        res.render('student', { dat: dat })
    }
    //store data

    static inputdata = async (req, res) => {
        try {
            const { Father_name, phone, RollNumber, Student_name, dob } = req.body
            const saveData = new studentModal({
                Father_name: Father_name,
                phone: phone,
                RollNumber: RollNumber,
                Student_name: Student_name,
                dob: dob
            })
            const result = await saveData.save()
            // console.log(result)
            res.redirect('/student')

        } catch (error) {
            console.log(error)
        }
    }
    //Edit data 
    static editData = async (req, res) => {
        try {
            console.log(req.params.id)
            const findData = await studentModal.findById(req.params.id)
            res.render("edit", { dat: findData })
            // res.redirect('/student')
        } catch (error) {
            console.log(error)
        }

    }
    //update data
    static updateData = async (req, res) => {
        try {
            const findUpData = await studentModal.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/student')
        } catch (error) {
            console.log(error)
        }

    }
    //delete data
    static deleteData = async (req, res) => {
        try {
            const del = await studentModal.findByIdAndDelete(req.params.id)
            res.redirect('/student')
        } catch (error) {
            console.log(error)
        }

    }

}

export default studentAttendances