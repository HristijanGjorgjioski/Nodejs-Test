const Course = require("../models/course");
const Academy = require("../models/academy");
const response = require("../lib/response_handler");

const getCourses = async (req, res) => {
  const course = await Course.find();

  response(res, 200, "List of all courses", { course });
};

const create = async (req, res) => {
  const course = await Course.create(req.body);
  await Academy.findByIdAndUpdate(req.body.academyId, {
    $push: { courses: req.params.id },
  });

  response(res, 201, "New course created", { course });
};

const update = async (req, res) => {
  await Course.findByIdAndUpdate(req.params.id, req.body);

  const course = await Course.findById(req.params.id);

  response(res, 200, "course updated", { course });
};

const destroy = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.status(200).send("course deleted!");
};

module.exports = {
  getCourses,
  create,
  update,
  destroy,
};
