import React, { useState, useCallback } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  }, [onSearch]);

  return (
    <input
      className="form-control me-2"
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default Search;
