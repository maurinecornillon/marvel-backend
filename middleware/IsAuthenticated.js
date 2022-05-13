const Hote = require("../models/User");

//------------------------------------------//
// FONCTION MIDDLEWARE

const isAuthenticated = async (req, res, next) => {
  if (req.headers.authorization) {
    console.log(req.headers.authorization);
    const checkUser = await Hote.findOne({
      token: req.headers.authorization.replace("Bearer ", ""),
    });
    console.log({ checkUser });

    if (!checkUser) {
      return res.status(401).json({ error: "Unauthorized" });
    } else {
      req.user = checkUser;
    }
    return next();
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = isAuthenticated;
