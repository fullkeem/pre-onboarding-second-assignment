import { usePagination, useTable } from 'react-table';
import styled from 'styled-components';

export const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <StyledTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
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
