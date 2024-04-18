const jwt = require('jsonwebtoken');

// Middleware function to verify JWT token
const verifyToken = (req, res, next) => {

    const token = (req.headers['authorization']).split(" ")[1]
     // Assuming token is passed in the Authorization header
    console.log("token", token);
    if (!token) {
        console.log("inside not");
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // If token is valid, save decoded user information to request object
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;
