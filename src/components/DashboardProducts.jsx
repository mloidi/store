import React, { useState, useContext } from 'react';

import { DashboardContext } from '../globalState';
import { FIELD_TYPE } from '../lib/constants';

export const DashboardProducts = () => {
  const { getDashboardOption } = useContext(DashboardContext);
  const option = 'products';
  const [dashboardOption] = useState(() => {
    return getDashboardOption(option);
  });
  const getField = field => {
    const style =
      'outline-none ml-4 p-1 bg-gray-100 focus:bg-gray-200 border border-transparent focus:border-gray-500';
    switch (field.type) {
      case FIELD_TYPE._TEXT:
        return <input type={field.type} className={style}></input>;
      case FIELD_TYPE._NUMBER:
        return <input type={field.type} className={style}></input>;
      case FIELD_TYPE._SELECT:
        return (
          <select className={style}>
            {field.values.map(value => (
              <option value={value}>{value}</option>
            ))}
          </select>
        );
      case FIELD_TYPE._CHECK:
        return <input type={field.type} className={style}></input>;
      default:
        return <div></div>;
    }
  };
  return (
    <div>
      {dashboardOption.fields.map(field => (
        <div key={field.label} className="my-1 flex">
          <label className="capitalize w-16 py-1">{field.label}</label>
          {getField(field)}
        </div>
      ))}
    </div>
  );
};
