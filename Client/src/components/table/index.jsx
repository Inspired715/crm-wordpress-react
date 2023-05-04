import React from "react";
import { useTable, usePagination } from "react-table";
import style from "./table.module.css"

const Table = (props) => {
  const data = React.useMemo(() => props.data, [props.data]);
  const columns = React.useMemo(() => props.columns, [props.columns]);
  // eslint-disable-next-line
  const initialState = React.useMemo(() => props.initialState);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState
    },
    usePagination
  );
  
  return (
    <div className="table-container overflow-auto">
      <table className={style.tableWrapper} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map((column) => {
                  if(column.hideHeader === true)
                    return '';
                  else
                    return (
                      <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    )
                })
              }
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination text-center mt-[15px] font-hel">
        <button className="text-white rounded-[50%] bg-black w-[33px] p-[5px]" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"|<"}
        </button>{" "}
        <button className="text-white rounded-[50%] bg-black w-[27px] p-[2px] mx-[10px]" onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          className="bg-black text-white rounded-[5px] h-[25px] w-[53px] mx-[10px]"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <button  className="text-white rounded-[50%] bg-black w-[27px] p-[2px] mx-[10px]" onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button  className="text-white rounded-[50%] bg-black w-[33px] p-[5px]" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">|"}
        </button>{" "}
      </div>
    </div>
  );
};

export default Table;