import React, { useContext } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { DashboardContext } from '../globalState';

export const Dashboard = () => {
  const { dashboardOptions } = useContext(DashboardContext);

  const boxStyle = color => {
    return `border rounded border-${color}-500 w-1/5 mx-4 my-4 py-6 text-2xl text-center h-1/2 bg-${color}-500 text-${color}-100 hover:bg-${color}-100 hover:text-${color}-500 cursor-pointer flex flex-col`;
  };

  return (
    <div className="mt-4 mx-8 h-full">
      <div className="text-sm italic">Dashboard</div>
      <div className="mt-1 border rounded h-full flex flex-wrap justify-center">
        {dashboardOptions.map(dashBoardOption => (
          <Link
            key={dashBoardOption.name}
            className={boxStyle(dashBoardOption.color)}
            exact
            to={dashBoardOption.path}
          >
            <div>{dashBoardOption.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
