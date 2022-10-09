import React from 'react';

export const ColumnFilter = ({ column }: any) => {
  const { filterValue, setFilter } = column;

  return (
    <span style={{ color: 'gray' }}>
      search: <input value={filterValue || ''} onChange={e => setFilter(e.target.value)} style={{ width: '100px' }}></input>
    </span>
  );
};
