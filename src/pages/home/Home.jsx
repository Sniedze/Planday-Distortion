import React, { useEffect, useState } from "react";
import { paginate } from "../../functions";
import { v4 as uuidv4 } from "uuid";
import { dataBase } from "../../db";
import CardComponent from "../../components/CardComponent";
import PaginationComponent from "../../components/Pagination";
import { Input } from "reactstrap";
import clearIcon from "../../images/clear.png";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4;

  useEffect(() => {
    setLoading(true);
    setData(dataBase);
    setLoading(false);
  }, []);

  useEffect(() => {
    const results = data.filter(
      (result) =>
        result.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        result.description.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
  }, [data, searchInput]);

  const handleClearSearch = () => {
    setSearchInput("");
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageData = () => {
    const paginationData = paginate(searchResults, currentPage, pageSize);
    return { totalCount: searchResults.length, pageData: paginationData };
  };

  const { totalCount, pageData } = getPageData();

  if (!data || data.length < 1) return <h1>No data available </h1>;
  if (loading) return <h1>Loading... </h1>;

  return (
    <main>
      <h1>The Collection of Luminous Signs</h1>
      <div className="search-container">
        <label htmlFor="searchTerm">Search:</label>
        <Input
          name="searchTerm"
          id="searchTerm"
          value={searchInput}
          onChange={(ev) => setSearchInput(ev.target.value)}
        ></Input>
        <img
          src={clearIcon}
          alt="clear icon"
          className="clear-search-icon"
          onClick={handleClearSearch}
        />
      </div>
      <div className="card-container">
        {pageData.length > 0 ? (
          pageData.map((item) => <CardComponent key={uuidv4()} {...item} />)
        ) : (
          <h1>No results for "{searchInput}" found</h1>
        )}
      </div>
      <PaginationComponent
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <h6>
        page {currentPage} of {Math.ceil(totalCount / pageSize)}
      </h6>
    </main>
  );
};

export default Home;
