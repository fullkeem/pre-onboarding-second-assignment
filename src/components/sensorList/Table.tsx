import { usePagination, useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Button from '../buttons/Button';
import styled from 'styled-components';

export const Table = ({ columns, data }: any) => {
  const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, gotoPage, pageCount, setPageSize, prepareRow, state, setGlobalFilter }: any = useTable(
    {
      // @ts-ignore
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const navigate = useNavigate();

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <StyledTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <div>{column.isSorted ? column.isSortedDesc ? <BsFillCaretUpFill /> : <BsFillCaretDownFill /> : ''}</div>
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
      <StyledFlex>
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
            {'<'}
          </button>
          <span>
            Page{' '}
            <span className='pageIndex'>
              {pageIndex + 1} of {pageOptions.length}
            </span>{' '}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
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
        <Button background='#36A2EB' text='Graph' onClick={() => navigate('/graph')} />
      </StyledFlex>
    </StyledTable>
  );
};

const StyledFlex = styled.section`
  display: flex;
`;

const StyledTable = styled.section`
  width: 90%;

  table {
    width: 100%;
    border-collapse: collapse;

    thead,
    tbody {
      width: 100%;
    }

    td,
    th {
      padding: 10px;
      border: 1px solid #2b78a2;
      text-align: center;
    }

    th {
      background-color: #6ea8c9;
      color: white;
    }

    tr {
      &:hover {
        background-color: #b6dee7;
        color: white;
      }
    }
  }
`;

const StyledPagination = styled.div`
  width: 30%;
  margin: auto;
  margin-top: 20px;
  .pageIndex {
    font-weight: bold;
  }

  .gotoFirstPage {
    margin-left: 15px;
  }
  button {
    background-color: white;
    border: none;
    font-size: 20px;
    font-weight: bold;
    color: #6ea8c9;
  }
  .pageSize {
    margin-left: 15px;
  }
`;
