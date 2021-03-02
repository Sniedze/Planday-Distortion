import _ from "lodash";

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
  //slices all data starting from the first element of the page and returns
  //new array containing number of elements we define as page size.
};
