var express = require("express");
var router = express.Router();
const controller = require("../controllers/users");
const jwt = require("express-jwt");
const response = require("../lib/response_handler");

require("dotenv").config();

router.use(
  jwt({
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ["HS256"],
  }).unless({
    path: [
      {
        url: "/users/login",
        methods: ["POST"],
      },
      {
        url: "/users",
        methods: ["POST"],
      },
    ],
  })
);

router.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "UnauthorizedError") {
    response(res, 401, "Unauthorized access");
  }
});

router.post("/", controller.register).post("/login", controller.login);

module.exports = router;
