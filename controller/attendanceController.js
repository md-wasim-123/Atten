import attendanceModel from "../models/attentdance.js";
import studentModal from "../models/studentShema.js";

class Attendance {
    static attent = async (req, res) => {
        const attentRead = await studentModal.find()
        res.render('attendance', { dat: attentRead })
    }
    static AllPB = async (req, res) => {

    }
    static Radioinput = async (req, res) => {
        try {
            const { date, Attent } = req.body
            const saveAtten = new attendanceModel({
                date: date,
                Attent: Attent
            })
            const saveResult = await saveAtten.save()
            console.log(saveResult)
            res.redirect('/student/attendance')

        } catch (error) {
            console.log(error)
        }

    }

}

export default Attendance





