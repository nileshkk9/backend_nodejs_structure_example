const express = require("express");
const routing = express.Router();
const service = require("../service/user");
const auth = require("../utilities/auth");

//To verify the credentials of user
routing.post("/login", async (req, res, next) => {
  let uEmail = req.body.email;
  let uPass = req.body.password;
  try {
    const user = await service.loginUser(uEmail, uPass);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

routing.post("/addNewUser", async (req, res, next) => {
  try {
    const user = req.body;
    userData = {
      userId: user.uEmail.split("@")[0],
      uCredentials: {
        uEmail: user.uEmail,
        uPass: user.uPass,
      },
      uProfile: {
        uName: user.uName,
        uDOB: user.uDOB,
        uPhone: user.uPhone,
      },
    };

    let NewUserData = await service.addNewUser(userData);
    if (NewUserData) {
      res.json({ message: "Registered Successfull" });
    }
  } catch (err) {
    next(err);
  }
});

routing.get("/validate/:email", async (req, res, next) => {
  try {
    let email = req.params.email;
    let data = await service.checkEmailId(email);
    if (data) {
      res.json({ message: "Email Id is available" });
    }
  } catch (err) {
    next(err);
  }
});

routing.post("/pushToCart", auth, async (req, res, next) => {
  const product = req.body;
  try {
    const data = await service.insertInCart(product, req.user._id);
    if (data) {
      res.send({
        message: `product with ${product._id} inserted successfully`,
      });
    }
  } catch (error) {
    next(error);
  }
});

routing.get("/getUserCart", auth, async (req, res, next) => {
  try {
    res.json({ cart: req.user.uCart });
  } catch (error) {
    next(error);
  }
});

routing.get("/deleteItemFromCart/:pid", auth, async (req, res, next) => {
  try {
    const pid = req.params.pid;
    const data = await service.deleteProduct(pid, req.user._id);
    if (data) {
      res.json({ message: `product with ${pid} deleted successfully` });
    }
  } catch (error) {
    // console.log(error);
    next(error);
  }
});

routing.post("/updateQtyInCart", auth, async (req, res, next) => {
  try {
    const data = await service.updateCart(
      req.body.pid,
      req.body.qty,
      req.user._id
    );
    if (data) {
      res.json({ message: `product qty updated successfully` });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

routing.get("/clearCart", auth, async (req, res, next) => {
  try {
    const data = await service.clearCart(req.user._id);
    if (data) {
      res.json({ message: `cart cleared` });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// if any route requires user to be logged in
routing.get("/auth", auth, async (req, res, next) => {
  try {
    res.json({ user: req.user });
  } catch (err) {
    next(err);
  }
});

module.exports = routing;
