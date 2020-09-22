import Joi from "joi-browser";
import _ from "lodash";

const courses = [
  { id: "1", name: "a" },
  { id: "2", name: "b" },
  { id: "3", name: "c" },
  { id: "4", name: "d" },
  { id: "5", name: "e" },
  { id: "6", name: "f" },
  { id: "7", name: "g" },
  { id: "8", name: "h" },
  { id: "9", name: "i" },
  { id: "10", name: "j" },
  { id: "11", name: "k" },
  { id: "12", name: "l" },
  { id: "13", name: "m" },
  { id: "14", name: "n" },
  { id: "15", name: "o" },
  { id: "16", name: "p" },
  { id: "17", name: "q" },
];

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
