const collection = require("../utilities/connection");
const userData = [
  {
    _id: "60067903427ede2f5c6f0365",

    uProfile: {
      uIsSeller: false,
      uDateJoined: "2021-01-19T06:15:30.101Z",

      uLastLogin: "2021-01-19T06:15:30.101Z",

      uName: "rohit khatri",
      uDOB: "2019-06-08T00:00:00.000Z",

      uPhone: 8444865676,
    },
    userId: "nileshkk9",
    uCredentials: {
      uEmail: "nileshkk9@gmail.com",
      uPass: "Nu@1234567890",
    },
    tokens: [
      {
        _id: "60067903427ede2f5c6f0366",

        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA2NzkwMzQyN2VkZTJmNWM2ZjAzNjUiLCJpYXQiOjE2MTEwMzY5MzF9.3qAZXARuZi0ZboucAHnMQio_yz_LY5_OZP_rhROHU-c",
      },
    ],
    uCart: [
      {
        pSeller: {
          s_Id: "Adidas@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150,
        },
        qty: 1,
        dateFirstAvailable: "2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        _id: "1007",
        pName: "Adidas Running Women Lite",
        pDescription: "a pair of light weight running shoes by adidas",
        pRating: 4,
        pCategory: "Shoes",
        price: 2599,
        color: "Pink",
        image: "Shoes.jpg",
        specification: "",
      },
    ],
    createdAt: "2021-01-19T06:15:31.116Z",

    updatedAt: "2021-01-19T06:15:31.143Z",
  },
  {
    _id: "6007c0376269252b24c20d41",

    uProfile: {
      uIsSeller: false,
      uDateJoined: "2021-01-20T05:16:24.326Z",

      uLastLogin: "2021-01-20T05:16:24.326Z",

      uName: "Keerthana",
      uDOB: "2021-01-01T00:00:00.000Z",

      uPhone: 7979797979,
    },
    userId: "Keerthana",
    uCredentials: {
      uEmail: "Keerthana@gmail.com",
      uPass: "Keerthana@123",
    },
    tokens: [
      {
        _id: "6007c0376269252b24c20d42",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA3YzAzNzYyNjkyNTJiMjRjMjBkNDEiLCJpYXQiOjE2MTExMjA2OTV9.CQZUP8Dh5abgvnyErw64V-dW5mHVAR8F8KyOWCIwYk0",
      },
    ],
    uCart: [
      {
        pSeller: {
          s_Id: "Xiaomi@Seller",
          pDiscount: 0.2,
          pQuantity: 665,
          pShippingCharges: 150,
        },

        dateFirstAvailable: "2012-09-17T00:00:00.000Z",

        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        qty: 700,
        _id: "1002",
        pName: "Redmi Note 6 Pro",
        pDescription: "an economical phone by Xiaomi",
        pRating: 4,
        pCategory: "Electronics",
        price: 13999,
        color: "Black",
        image: "Redmi note 6 Pro.jpg",
        specification: "",
      },
    ],
    createdAt: "2021-01-20T05:31:35.825Z",

    updatedAt: "2021-01-20T05:31:35.828Z",

    __v: 0,
  },
  {
    _id: "6007cb616d0a6d26541c63f9",
    uProfile: {
      uIsSeller: false,
      uDateJoined: "2021-01-20T06:02:31.977Z",
      uLastLogin: "2021-01-20T06:02:31.977Z",
      uName: "John",
      uDOB: "2021-01-02T00:00:00.000Z",
      uPhone: 8999999999,
    },
    userId: "John",
    uCredentials: {
      uEmail: "John@gmail.com",
      uPass: "John@123",
    },
    tokens: [
      {
        _id: "6007cb616d0a6d26541c63fa",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA3Y2I2MTZkMGE2ZDI2NTQxYzYzZjkiLCJpYXQiOjE2MTExMjM1NTN9.T8rYBNiFM-umm5DSnRHxbcRWljzJp_8m_ZdUrxohc1E",
      },
    ],
    uCart: [
      {
        pSeller: {
          s_Id: "Xiaomi@Seller",
          pDiscount: 0.2,
          pQuantity: 667,
          pShippingCharges: 150,
        },

        dateFirstAvailable: "2012-09-17T00:00:00.000Z",

        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        qty: 71,
        _id: "1009",
        pName: "Mac Book Pro",
        pDescription: "an economical Laptop by Apple",
        pRating: 4,
        pCategory: "Electronics",
        price: 13999,
        color: "Black",
        image: "Mac book 6 Pro.jpg",
        specification: "",
      },
    ],
    createdAt: "2021-01-20T06:19:13.423Z",

    updatedAt: "2021-01-20T06:19:13.430Z",
    __v: 0,
  },
  {
    _id: "6007cba66d0a6d26541c63fb",
    uProfile: {
      uIsSeller: false,
      uDateJoined: "2021-01-20T06:02:31.977Z",
      uLastLogin: "2021-01-20T06:02:31.977Z",
      uName: "Mark",
      uDOB: "2021-01-02T00:00:00.000Z",
      uPhone: 8999994444,
    },
    userId: "mark",
    uCredentials: {
      uEmail: "mark@gmail.com",
      uPass: "Mark@123",
    },
    tokens: [
      {
        _id: "6007cba66d0a6d26541c63fc",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA3Y2JhNjZkMGE2ZDI2NTQxYzYzZmIiLCJpYXQiOjE2MTExMjM2MjJ9.vED6OlS2xeVXh9gGVuJ4OmkAm74PHbpJ804rCfh4LIc",
      },
    ],
    uCart: [
      {
        pSeller: {
          s_Id: "Xiaomi@Seller",
          pDiscount: 0.2,
          pQuantity: 200,
          pShippingCharges: 150,
        },

        dateFirstAvailable: "2012-09-17T00:00:00.000Z",

        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        qty: 300,
        _id: "1009",
        pName: "Mac Book Pro8",
        pDescription: "an economical Laptop by Apple",
        pRating: 4,
        pCategory: "Electronics",
        price: 13999,
        color: "Black",
        image: "Mac book 8 Pro.jpg",
        specification: "",
      },
    ],
    createdAt: "2021-01-20T06:19:13.423Z",

    updatedAt: "2021-01-20T06:19:13.430Z",
    __v: 0,
  },
];

let create = {};

create.setupDB = async (data) => {
  const userColl = await collection.getCollection();
  const remove = await userColl.deleteMany();
  const result = await userColl.insertMany(userData);
  if (result && result.length > 0) return result.length;
  else return null;
};

module.exports = create;
