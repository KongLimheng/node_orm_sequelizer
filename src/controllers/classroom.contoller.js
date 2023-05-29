const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { ClassRoom } = require('../models');

const createClassroom = catchAsync(async (req, res) => {
  const classRoom = await ClassRoom.create(req.body);

  res.status(httpStatus.CREATED).send(classRoom);
});
const queryClr = async (filter, options, conditions) => {
  console.log("options", options)

  const clrs = await ClassRoom.findAll({ ...filter, ...options, where: conditions });
  return clrs;
};

const getClassrooms = catchAsync(async (req, res) => {
  const filter = {};
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const classrooms = await queryClr(filter, options);

  res.send({ data: classrooms });
});

module.exports = {
  getClassrooms,
  createClassroom,
};
