import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export const register = async (req, res) => {
    const { username, email, password } = req.body
    try {
        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);
        // CREATE NEW USER
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        })

        console.log(newUser)
        res.status(201).json({ message: 'User Created Successfully' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Failed to Create User' })
    }

}
// LOGIN
export const login = async (req, res) => {
    const { username, password } = req.body;
    // ✅ Clear any previous error
    //   setError('');
    try {
        // CHECK IF USER EXIST
        const user = await prisma.user.findUnique({
            where: { username }
        })
        if (!user) return res.status(401).json({ message: "Invalid Credentials" })
        // CHECK IF PASSWORD IS CORRECT
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials" })

        // GENERATE COOKIE TOKEN AND SEND TO THE USER
        const age = 1000 * 60 * 60 * 7 // Session expiry
        const token = jwt.sign(
            {
                id: user.id,
                isAdmin: true
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: age });

        // USER INFO ON LOGIN
        const { password: userPassword, ...userInfo } = user
        // console.log(user)


        res.
            cookie("token", token, {
                httpOnly: true,
                maxAge: age,
                // secure:true (While in production)
            })
            .status(200)
            .json({ userInfo })
        console.log(userInfo)



    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Failed to Login' })
    }

}


export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout Successful" })
}

















