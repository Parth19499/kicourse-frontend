import React, { useState } from "react";
import Input from "./Input";
import Joi from "joi-browser";
import courseService from "../services/courseService";
import { toast } from "react-toastify";
import "./css/NewCourse.css";

const NewCourse = ({ history }) => {
  const [courseName, setCourseName] = useState("");

  const handleNameChange = ({ currentTarget }) =>
    setCourseName(currentTarget.value);

  const schema = {
    name: Joi.string().required(),
  };

  const validate = () => {
    const errors = {};
    const { error } = Joi.validate({ name: courseName }, schema, {
      abortEarly: false,
    });
    if (error) error.details.map((d) => (errors[d.path[0]] = d.message));
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors) {
      console.error(errors);
      throw new Error("Errors Found!");
    }
    const course = {
      name: courseName,
    };
    try {
      courseService.insertCourse(course);
      setCourseName("");
      history.push("/courses");
    } catch (ex) {
      console.error(ex);
      toast.error("Opps, Something went wrong!");
    }
  };

  return (
    <div className="newcourse">
      <form className="form-inline d-flex justify-content-center">
        <Input
          name="courseName"
          value={courseName}
          placeholder="Enter Course Name"
          onChange={handleNameChange}
          autoFocus={true}
        />
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={validate()}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default NewCourse;
