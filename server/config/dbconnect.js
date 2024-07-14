import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_CLOUD).then(con => console.log(`server Mongo ${con.connection.host}`)).catch(err => console.log(err.message))

}

export default connectDatabase;