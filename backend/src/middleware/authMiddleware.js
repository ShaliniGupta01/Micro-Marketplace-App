// const jwt = require("jsonwebtoken");
// const User = require("../models/User");



// const protect = async (req, res, next) => {
//   try {
//     let token;

//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1];

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       const user = await User.findById(decoded.id).select("-password");

//       if (!user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       req.user = user;
//       return next();
//     }
//     console.log("Authorization Header:", req.headers.authorization);


//     return res.status(401).json({ message: "No token provided" });

//   } catch (error) {
//     return res.status(401).json({ message: "Not authorized" });
//   }
// };

// module.exports = { protect };

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
   const authHeader = req.headers.authorization;
   console.log("HEADERS:", req.headers);


if (!authHeader || !authHeader.startsWith("Bearer")) {
  return res.status(401).json({ message: "No token, authorization denied" });
}

const token = authHeader.replace("Bearer", "").trim();


    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();

  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = { protect };
