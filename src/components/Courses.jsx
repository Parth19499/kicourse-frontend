import React, { useEffect, useState } from "react";
import Input from "./Input";
import courseService from "../services/courseService";
import { Link } from "react-router-dom";
import _ from "lodash";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [renderCourse, setRenderCourses] = useState([]);

  useEffect(() => {
    const courses = courseService.getCourses();
    setCourses(courses);
    setRenderCourses(courses);
  }, []);

  const filterCourse = () =>
    searchQuery
      ? courses.filter((course) =>
          course.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
      : courses;

  const handleSearchQueryChange = ({ currentTarget }) =>
    setSearchQuery(currentTarget.value);

  const handleSearch = () => {
    console.log(`Search Clicked ${new Date().getTime()}`);
    setRenderCourses(filterCourse());
  };

  return (
    <div className="courses">
      <Link to="/new-course" className="btn btn-primary mb-2">
        Add New Course
      </Link>
      <Input
        name="searchQuery"
        value={searchQuery}
        placeholder="Search Course with Name"
        onChange={handleSearchQueryChange}
        autoFocus={true}
      />
      <button
        className="btn btn-primary"
        onClick={_.throttle(handleSearch, 2000, { trailing: false })}
      >
        Search
      </button>
      {renderCourse.map((course) => (
        <h4 key={course.id}>{course.name}</h4>
      ))}
    </div>
  );
};

export default Courses;
