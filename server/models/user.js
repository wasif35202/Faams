import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isActive: { type: Boolean, required: true, default: false },
    firstLogin: { type: Boolean, required: true, default: true },
    googleId: { type: String, default: undefined },
    googleImage: { type: String, default: undefined },
},
    { timestamps: true }
);

userSchema.method.comparePasswords = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)



}
)


const User = mongoose.model("users", userSchema);
export default User;