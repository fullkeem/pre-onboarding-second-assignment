import { usePagination, useTable, useGlobalFilter, useFilters } from 'react-table';
import styled from 'styled-components';

import { GlobalFilter } from './filtering/GlobalFilter';

export const Table = ({ columns, data }: any) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter }: any = useTable(
    {
      // @ts-ignore
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <StyledTable>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div> {column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledTable>
  );
};

const StyledTable = styled.section`
  width: 100%;

  table {
    border-collapse: collapse;
    width: 100%;

    td,
    th {
      padding: 10px;
      border: 1px solid #ccc;
      text-align: center;
    }

    tr:hover {
      background-color: #ddd;
    }
  }
`;
