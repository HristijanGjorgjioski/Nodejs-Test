const Univeristy = require("../models/univeristy");

module.exports = {
  getAll: async (req, res) => {
    const univeristy = await Univeristy.find().populate("faculty");

    res.send({
      error: false,
      message: "All univeristy from the database",
      univeristy,
    });
  },
  getOne: async (req, res) => {
    const univeristy = await Univeristy.findById(req.params.id).populate(
      "faculty"
    );

    res.send({
      error: false,
      univeristy,
    });
  },
  create: async (req, res) => {
    const univeristy = await Univeristy.create(req.body);

    res.send({
      error: false,
      message: "New univeristy has been created",
      univeristy,
    });
  },
  update: async (req, res) => {
    await Univeristy.findByIdAndUpdate(req.params.id, req.body);
    const univeristy = await Univeristy.findById(req.params.id);

    res.send({
      error: false,
      univeristy,
    });
  },
  delete: async (req, res) => {
    await Univeristy.findByIdAndDelete(req.params.id);

    res.send({
      error: false,
      message: `Univeristy with id #${req.params.id} has been deleted`,
    });
  },
};
