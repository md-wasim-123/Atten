import AttendanceModel from "../models/attentdance.js";
import studentModal from "../models/studentShema.js";

class Attendance {
    static attent = async (req, res) => {
        const attentRead = await studentModal.find()
        res.render('attendance', { dat: attentRead })
    }

    static Radioinput = async (req, res) => {
        try {
            const { input, name } = req.body
            let attendence = [];

            for (let index = 0; index < input.length; index++) {
                const student = {
                    name: name[index],
                    status: input[index]
                }   
                attendence.push(student)
            }

            console.log(attendence);

            const saveAtten = new AttendanceModel({
                date: Date.now(),
                attendence: attendence
            })

            const saveResult = await saveAtten.save()
            // console.log(saveResult);
            res.redirect('/student/attendance/')

        } catch (error) {
            console.log(error)
        }

    }

}

export default Attendance





