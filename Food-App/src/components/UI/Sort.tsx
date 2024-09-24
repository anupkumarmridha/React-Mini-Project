import React from 'react';

interface SortProps {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSortChange: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
}

const Sort: React.FC<SortProps> = ({ sortBy, sortOrder, onSortChange }) => {
  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value, sortOrder);
  };

  const handleSortOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(sortBy, event.target.value as 'asc' | 'desc');
  };

  return (
    <div className="d-flex">
      <select
        className="form-select me-2"
        value={sortBy}
        onChange={handleSortByChange}
      >
        <option value="name">Name</option>
        <option value="rating">Rating</option>
      </select>
      <select
        className="form-select"
        value={sortOrder}
        onChange={handleSortOrderChange}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Sort;
