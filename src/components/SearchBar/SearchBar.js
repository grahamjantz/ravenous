import React, {useState} from 'react';
import './SearchBar.css';


const SearchBar = () => {

  const [search, setSearch] = useState({
    term: '',
    location: '',
    sortBy: 'best_match'
  })

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  }

  const renderBySortOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li 
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>);
    })
  }

  const getSortByClass = (sortByOption) => {
    if (search.sortBy === sortByOption ) {
      return 'active'
    } else {
      return ''
    }
  }

  const handleSortByChange =(sortByOption) => {
    setSearch(sortByOption)
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderBySortOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a href=''>Let's Go</a>
      </div>
  </div>
  )
}

export default SearchBar