import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";

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
export const login = (req, res) => {

}


export const logout = (req, res) => {

}

















