require("dotenv").config();

const options = {
  hostname: process.env.HOST_NAME,
  path: process.env.PATH,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": postData.length,
  },
};

module.exports = options;
