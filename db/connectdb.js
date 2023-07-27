import mongoose from "mongoose"

const connectdb = async (DATABASE_URL) => {

    try {
        const option = {
            dbName: 'Register'
        }
        await mongoose.connect(DATABASE_URL, option)
    } catch (error) {
        console.log(error)
    }
}

export default connectdb