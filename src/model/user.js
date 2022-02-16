const collection = require("../utilities/connection");
const jwt = require("jsonwebtoken");
//const { use } = require("../routes/routing");
let user = {};

//Verify the user credentials and modify the last logout
user.userLogin = async (uEmail, uPass) => {
  const userColl = await collection.getCollection();
  const data = await userColl.find({ "uCredentials.uEmail": uEmail });
  if (data.length === 1) {
    if (uPass == data[0]["uCredentials"]["uPass"]) {
      return userColl
        .updateOne(
          { "uCredentials.uEmail": uEmail },
          { $set: { "uProfile.uLastLogin": new Date().toISOString() } }
        )
        .then((res) => {
          if (res.nModified === 1) {
            return data[0];
          }
        });
    } else {
      const err = new Error("The password entered is incorrect!!");
      err.status = 401;
      throw err;
    }
  } else {
    const err = new Error("You are not registered.Please register to login");
    err.status = 404;
    throw err;
  }
};

//Adding Registered User data to databse
user.addNewUser = async (NewData) => {
  const userColl = await collection.getCollection();

  let insert_data = await userColl.create(NewData);
  // to add token to user
  const uData = await generateAuthToken(insert_data);
  return uData;
};

user.checkEmailId = async (emailId) => {
  const userColl = await collection.getCollection();
  let email = await userColl.findOne({ "uCredentials.uEmail": emailId });
  if (email) return true;
  return false;
};

generateAuthToken = async function (user) {
  // const user = await collection.getCollection();
  const token = jwt.sign({ _id: user._id.toString() }, "hoopla");

  const User = await collection.getCollection();
  let uData = await User.updateOne(
    { userId: user.userId },
    { $push: { tokens: { token: token } } }
  );

  return uData;
};

user.findCartItem = async (pid, userId) => {
  const User = await collection.getCollection();
  const data = await User.find({ _id: userId, "uCart._id": pid });
  return data;
};

user.insertInCart = async (product, userId) => {
  const User = await collection.getCollection();
  const insertedData = await User.updateOne(
    { _id: userId },
    { $addToSet: { uCart: { ...product } } }
  );
  if (insertedData.nModified == 1) {
    return true;
  }
  return false;
};

user.deleteFromCart = async (pid, userId) => {
  const User = await collection.getCollection();
  const deletedData = await User.updateOne(
    { _id: userId },
    { $pull: { uCart: { _id: pid } } }
  );
  if (deletedData.nModified == 1) {
    return true;
  }
  return false;
};

// update the quantity if item in user cart
user.updateCart = async (pid, qty, userId) => {
  const User = await collection.getCollection();
  const updatedData = await User.updateOne(
    { _id: userId, "uCart._id": pid },
    { $set: { "uCart.$.qty": qty } }
  );
  if (updatedData.nModified == 1) {
    return true;
  }
  return false;
};

// clearCart
user.clearCart = async (userId) => {
  const User = await collection.getCollection();
  const updatedData = await User.updateOne(
    { _id: userId },
    { $set: { uCart: [] } }
  );
  if (updatedData.nModified == 1) {
    return true;
  }
  return false;
};

module.exports = user;
