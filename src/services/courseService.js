import Joi from "joi-browser";
import _ from "lodash";

const courses = [];

const generateId = () => new Date().getTime().toString();

const getCourses = () => courses;

const insertCourse = (course) => {
  const schema = {
    name: Joi.string().required(),
  };
  // mocking server side validation
  const { error } = Joi.validate(course, schema);
  if (error) throw new Error("400-Bad Request");
  if (_.find(courses, { name: course.name }))
    throw new Error("400-Course already present!");
  course.id = generateId();
  courses.push(course);
};

export default {
  getCourses,
  insertCourse,
};
