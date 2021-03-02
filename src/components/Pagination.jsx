import React from "react";
import _ from "lodash";

const PagePagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1); //Creates an array of numbers from 1 to pageCount

  return (
    <div className="pagination">
      {pages.map((page) => (
        <div
          href={null}
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : "page-item"}
        >
          {page}
        </div>
      ))}
    </div>
  );
};
export default PagePagination;
