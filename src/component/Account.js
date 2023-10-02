import React, { useState } from "react";
import "./Account.css";

const Account = () => {
  // State to keep track of the selected number of entries
  const [selectedEntries, setSelectedEntries] = useState(10);

  // Function to handle changes in the dropdown selection
  const handleDropdownChange = (e) => {
    setSelectedEntries(e.target.value);
  };

  return (
    <div className="container">
      <h2 className="account">Account Statement</h2>
      <div className="row">
        <div className="entry-control">
          <label htmlFor="entriesDropdown">Show </label>
          <select
            id="entriesDropdown"
            className="custom-dropdown"
            value={selectedEntries}
            onChange={handleDropdownChange}
          >
            {/* Options for the dropdown */}
          </select>
          <span className="entries-label">Entries</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          {/* Add your search icon here */}
          <i className="fa fa-search search-icon" aria-hidden="true"></i>
        </div>
      </div>
      {/* Render the selected number of entries here */}
      <div className="button-row">
        {/* Six buttons */}
        <button className="page-button">
          Date <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down"></i>
        </button>
        <button className="page-button">
          Type <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down"></i>
        </button>
        <button className="page-button">
          Description <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down"></i>
        </button>
        <button className="page-button">
          Dr <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down"></i>
        </button>
        <button className="page-button">
          Cr <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down"></i>
        </button>
        <button className="page-button">
          Balance <i className="fas fa-sort-up"></i>
          <i className="fas fa-sort-down"></i>
        </button>
      </div>
      <div className="horizontal-line"></div>
      <div className="no-data">No data available in the table</div>
      <div className="horizontal-line"></div>
      <div className="pagination">
        <div className="entries-info">0 to 0 of 0 entries</div>
        <div className="page-navigation">
          <button className="prev-button">Previous</button>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
