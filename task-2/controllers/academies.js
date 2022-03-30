const Academy = require("../models/academy");
const response = require("../lib/response_handler");

const getAcademies = async (req, res) => {
  const academy = await Academy.find();

  response(res, 200, "List of all academy", { academy });
};

const create = async (req, res) => {
  const academy = await Academy.create(req.body);

  response(res, 201, "New academy created", { academy });
};

const update = async (req, res) => {
  await Academy.findByIdAndUpdate(req.params.id, req.body);

  const academy = await Academy.findById(req.params.id);

  response(res, 200, "academy updated", { academy });
};

const destroy = async (req, res) => {
  await Academy.findByIdAndDelete(req.params.id);
  res.status(200).send("academy deleted!");
};

module.exports = {
  getAcademies,
  create,
  update,
  destroy,
};
