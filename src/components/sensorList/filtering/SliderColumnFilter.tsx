import { useMemo } from 'react';

export const SliderColumnFilter = ({ column }: any) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;

  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row: any) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <>
      <input
        type='range'
        min={min}
        max={max}
        value={filterValue || min}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10));
        }}
        style={{ width: '100%' }}
      />
      <button onClick={() => setFilter(undefined)} style={{ width: '100%' }}>
        Off
      </button>
    </>
  );
};
