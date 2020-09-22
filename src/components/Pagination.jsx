import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ totalItems, pageSize, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  if (totalPages === 1) return null;

  const pages = _.range(1, totalPages + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "clickable page-item active"
                : "clickable page-item"
            }
          >
            <a
              href="# "
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
      <div>number of items: {totalItems}</div>
    </nav>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
