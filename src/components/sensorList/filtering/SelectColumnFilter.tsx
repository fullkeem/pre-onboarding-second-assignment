import { useMemo } from 'react';

export const SelectColumnFilter = ({ column }: any) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;

  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
      style={{ width: '100%' }}
    >
      <option value=''>All</option>
      {options.map((option: any, i) => (
        <option key={i} value={option} style={{ width: '100%' }}>
          {option}
        </option>
      ))}
    </select>
  );
};
