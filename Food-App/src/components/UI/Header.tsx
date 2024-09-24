import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSearchTerm, setSortBy, setSortOrder, setCurrentPage } from '../../redux/feature/recipesSlice';
import Search from './Search';
import Sort from './Sort';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { sortBy, sortOrder } = useSelector((state: RootState) => state.recipes);

  const handleSearch = (query: string) => {
    dispatch(setSearchTerm(query));
    dispatch(setCurrentPage(1)); // Reset page to 1 on new search
  };

  const handleSortChange = (sortBy: string, sortOrder: 'asc' | 'desc') => {
    dispatch(setSortBy(sortBy));
    dispatch(setSortOrder(sortOrder));
    dispatch(setCurrentPage(1)); // Reset page to 1 on sort change
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">FastFood</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
              </li>
            </ul>
            <form className="d-flex me-3">
              <Search onSearch={handleSearch} />
            </form>
            <div className="d-flex align-items-center">
              <Sort sortBy={sortBy} sortOrder={sortOrder} onSortChange={handleSortChange} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
