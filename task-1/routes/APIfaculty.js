var express = require("express");
var router = express.Router();
const controller = require("../../controllers/api/faculty");

router
  .get("/", controller.getAllCompanies)
  .post("/", controller.getCompanyCreate)
  .patch("/:id", controller.getCompanyUpdate)
  .delete("/:id", controller.getCompaniesDeleted);

module.exports = router;
