const dbLayer = require("../model/user");
const db = require("../model/dbSetup");

let user = {};

//Verfying the credentials of user
user.loginUser = async (uEmail, pass) => {
  const data = await dbLayer.userLogin(uEmail, pass);
  // sending only essential details
  let userDetails = {};
  userDetails.userId = data.userId;
  userDetails.name = data.uProfile.uName;
  userDetails.token = data.tokens[0]["token"];
  return userDetails;
};
user.addNewUser = async (UserObj) => {
  let addedUserData = await dbLayer.addNewUser(UserObj);
  if (addedUserData.nModified === 1) {
    return true;
  } else {
    throw new Error("User could not be added");
  }
};

user.checkEmailId = async (emailid) => {
  let hasEmail = await dbLayer.checkEmailId(emailid);
  if (hasEmail) {
    const err = new Error("Email not available");
    err.status = 404;
    throw err;
  }
  return true;
};

user.insertInCart = async (product, userId) => {
  const data = await dbLayer.insertInCart(product, userId);
  if (data) {
    return data;
  } else {
    const error = new Error("Product not inserted");
    error.status = 500;
    throw error;
  }
};

user.deleteProduct = async (pid, userId) => {
  const cart = await dbLayer.findCartItem(pid, userId);
  if (cart.length > 0) {
    const data = await dbLayer.deleteFromCart(pid, userId);
    if (data) {
      return data;
    } else {
      const error = new Error("Product cannot be deleted from cart");
      error.status = 500;
      throw error;
    }
  } else {
    const error = new Error(`Product with id ${pid} not found in cart`);
    error.status = 404;
    throw error;
  }
};

user.updateCart = async (pid, qty, userId) => {
  const cart = await dbLayer.findCartItem(pid, userId);
  if (cart.length > 0) {
    const data = await dbLayer.updateCart(pid, qty, userId);
    if (data) {
      return data;
    } else {
      const error = new Error("Product cannot be updated in cart");
      error.status = 500;
      throw error;
    }
  } else {
    const error = new Error(`Product with id ${pid} not found in cart`);
    error.status = 404;
    throw error;
  }
};

user.clearCart = async (userId) => {
  const data = await dbLayer.clearCart(userId);
  if (data) {
    return data;
  } else {
    const error = new Error("Cart cannot be cleared");
    error.status = 500;
    throw error;
  }
};
module.exports = user;
