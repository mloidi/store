import React from 'react';

import { STYLE } from '../../../lib/constants';
import { sort } from '../../../lib/utils';

import Icon from '../icons/Icon';
import { faIcons } from '../icons/IconsConstant';

const Table = ({ columnData, rowData, setRowData }) => {
  return (
    <table className={STYLE.table}>
      <thead>
        <tr>
          {columnData.map(column => (
            <th className={STYLE.th} key={column.id}>
              <label className="m-1">{column.name}</label>
              {column.canSort && (
                <>
                  <button
                    className="m-1"
                    onClick={() => {
                      const rowDataToSort = [...rowData];
                      const sortedRowData = sort(rowDataToSort, column.type);
                      setRowData(sortedRowData);
                    }}
                  >
                    <Icon icon={faIcons._faSortAlphaUp} />
                  </button>
                  <button
                    className="m-1"
                    onClick={() => {
                      const rowDataToSort = [...rowData];
                      const sortedRowData = sort(rowDataToSort, column.type);
                      const reversedRowData = sortedRowData.reverse();
                      setRowData(reversedRowData);
                    }}
                  >
                    <Icon icon={faIcons._faSortAlphaDown} />
                  </button>
                </>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData.map(row => (
          <tr className={STYLE.tr} key={row.id}>
            <td className={STYLE.td}>{row.id}</td>
            <td className={STYLE.td}>{row.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
