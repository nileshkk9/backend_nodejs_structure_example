const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const validator = require("validator");
mongoose.Promise = global.Promise;

mongoose.set("useCreateIndex", true);

const url = "mongodb://localhost:27017/UsersDB";

const usersSchema = Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: [true, "userId is required"],
    },
    uCredentials: {
      uEmail: {
        type: String,
        unique: true,
        required: [true, "uMail is required"],
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Invalid Email address");
          }
        },
      },
      uPass: {
        type: String,
        required: [true, "uPass is required"],
      },
    },
    uProfile: {
      uName: { type: String, required: [true, "uName is required"] },
      uDOB: {
        type: Date,
        required: [true, "uDOB is required"],
        validate(value) {
          if (new Date(value) >= new Date()) {
            throw Error("DOB should be a past date");
          }
        },
      },
      uPhone: {
        type: Number,
        unique: true,
        required: [true, "uPhone is required"],
        validate(value) {
          if (!(value >= 6666666666 && value <= 9999999999)) {
            throw new Error("Invalid phone number");
          }
        },
      },
      uIsSeller: { type: Boolean, default: false },
      uDateJoined: { type: Date, default: new Date().toISOString() },
      uLastLogin: { type: Date, default: new Date().toISOString() },
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    uCart: [
      {
        _id: {
          type: String,
          required: [true, "Product id is required"],
        },
        pName: {
          type: String,
          required: [true, "Product name is required"],
        },
        pDescription: {
          type: String,
          required: [true, "Product description is required"],
        },
        pRating: {
          type: Number,
        },
        qty: {
          type: Number,
          default: 1,
        },
        pCategory: {
          type: String,
          required: [true, "Product category is required"],
        },
        price: { type: Number },
        color: { type: String },
        image: { type: String },
        specification: { type: String },
        dateFirstAvailable: { type: Date, default: new Date().toISOString() },
        dateLastAvailable: { type: Date, default: new Date().toISOString() },
        pSeller: {
          s_Id: { type: String, required: true },
          pDiscount: {
            type: Number,
          },
          pQuantity: {
            type: Number,
          },
          pShippingCharges: { type: Number },
        },
      },
    ],
  },
  { collection: "Users", timestamps: true }
);

let connection = {};

//Returns model object of "Users" collection
connection.getCollection = () => {
  //Establish connection and return model as promise
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((database) => {
      return database.model("Users", usersSchema);
    })
    .catch((err) => {
      // let err = new Error("Could not connect to the database");
      err.status = 500;
      throw err;
    });
};

module.exports = connection;
