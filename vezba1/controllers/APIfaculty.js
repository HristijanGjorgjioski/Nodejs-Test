const Faculty = require("../models/faculty");

module.exports = {
  getAll: async (req, res) => {
    const faculty = await Faculty.find().populate("faculty");

    res.send({
      error: false,
      message: "All univeristy from the database",
      faculty,
    });
  },
  getOne: async (req, res) => {
    const faculty = await Faculty.findById(req.params.id).populate(
      "univeristy"
    );

    res.send({
      error: false,
      faculty,
    });
  },
  create: async (req, res) => {
    const faculty = await Faculty.create(req.body);

    res.send({
      error: false,
      message: "New faculty has been created",
      faculty,
    });
  },
  update: async (req, res) => {
    await Faculty.findByIdAndUpdate(req.params.id, req.body);
    const faculty = await Faculty.findById(req.params.id);

    res.send({
      error: false,
      faculty,
    });
  },
  delete: async (req, res) => {
    await Faculty.findByIdAndDelete(req.params.id);

    res.send({
      error: false,
      message: `faculty with id #${req.params.id} has been deleted`,
    });
  },
};
