const jwt = require("jsonwebtoken");
const collection = require("../utilities/connection");
const auth = async (req, res, next) => {
  try {
    const User = await collection.getCollection();
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "hoopla");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      
      const error = new Error("please autheniticate");
      error.status = 401;
      throw error;
    }
    
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
module.exports = auth;
