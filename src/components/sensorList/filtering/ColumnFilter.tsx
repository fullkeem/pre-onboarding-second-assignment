import React from 'react';

export const ColumnFilter = ({ column }: any) => {
  const { filterValue, setFilter } = column;

  return (
    <span style={{ color: 'lightgray' }}>
      search: <input value={filterValue || ''} onChange={e => setFilter(e.target.value)} style={{ width: '100%' }}></input>
    </span>
  );
};
