import React, { useEffect, useState } from "react";
import Input from "./Input";
import courseService from "../services/courseService";
import "./css/Courses.css";
// import _ from "lodash";
import Table from "./Table";
import Pagination from "./Pagination";
import { paginate } from "./../utils/paginate";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [renderCourse, setRenderCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 5;

  // const filterCourse = () => {
  //   const filteredCourses = searchQuery
  //     ? courses.filter((course) =>
  //         course.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  //       )
  //     : courses;
  //   const paginatedCourses = paginate(filteredCourses, currentPage, pageSize);
  //   console.log(paginatedCourses);
  //   return { paginatedCourses, totalCount: filteredCourses.length };
  // };

  useEffect(() => {
    const courses = courseService.getCourses();
    setCourses(courses);
  }, []);

  useEffect(() => {
    const filteredCourses = searchQuery
      ? courses.filter((course) =>
          course.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
      : courses;
    const paginatedCourses = paginate(filteredCourses, currentPage, pageSize);
    // console.log(paginatedCourses);
    setRenderCourses(paginatedCourses);
    setTotalCount(filteredCourses.length);
  }, [courses, currentPage, searchQuery]);

  const handleSearchQueryChange = ({ currentTarget }) => {
    setSearchQuery(currentTarget.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="courses">
      <div className="d-flex justify-content-center">
        <Input
          name="searchQuery"
          value={searchQuery}
          placeholder="Search Course"
          onChange={handleSearchQueryChange}
          autoFocus={true}
        />
      </div>
      <Table data={renderCourse} />
      <Pagination
        totalItems={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Courses;
