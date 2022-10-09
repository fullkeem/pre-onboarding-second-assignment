import { usePagination, useTable, useGlobalFilter, useFilters } from 'react-table';
import styled from 'styled-components';

import { GlobalFilter } from './filtering/GlobalFilter';

export const Table = ({ columns, data }: any) => {
  const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, gotoPage, pageCount, setPageSize, prepareRow, state, setGlobalFilter }: any = useTable(
    {
      // @ts-ignore
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

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
          {page.map((row: any) => {
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
      <StyledPagination>
        <span className='gotoPage'>
          Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: '50px' }}
          ></input>
        </span>
        <button className='gotoFirstPage' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          Page{' '}
          <span className='pageIndex'>
            {pageIndex + 1} of {pageOptions.length}
          </span>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
        <select className='pageSize' value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </StyledPagination>
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

const StyledPagination = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 20px;
  .pageIndex {
    font-weight: bold;
  }

  .gotoFirstPage {
    margin-left: 15px;
  }

  .pageSize {
    margin-left: 15px;
  }
`;
