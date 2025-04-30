import bcrypt from "bcrypt"

export const register = async (req, res) => {
    const { username, email, password } = req.body
    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    // CREATE NEW USER
    const newUser = await pris


}



export const login = (req, res) => {

}


export const logout = (req, res) => {

}

















