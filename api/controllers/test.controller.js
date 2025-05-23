import jwt from 'jsonwebtoken';

export const shouldBeLoggeIn = async (req, res) => {
    console.log({'Message':req.userId})
    
    res.status(200).json({ message: "You are authenticated" })
}




export const shouldBeAdmin = async (req, res) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Not authenticated" })
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) return res.status(403).json({ message: "Token not valid" })
        if (!payload.isAdmin) return res.status(403).json({ message: "Not Authorized" })
    });
    res.status(200).json({ message: "You are authenticated" })
}






























