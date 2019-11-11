import React, { useState, useContext } from 'react';
import { NavLink as Link } from 'react-router-dom';

// import Icon from './common/icons/Icon';
// import { faIcons } from './common/icons/IconsConstant';
import { DashboardContext } from '../globalState';

export const DashboardOption = ({ match }) => {
  const { getDashboardOption } = useContext(DashboardContext);
  const option = match.params.option;

  const [dashboardOption] = useState(() => {
    return getDashboardOption(option);
  });

  const breadcrumbStyle = color => {
    return `text-${color}-500 ml-2`;
  };

  const boxStyle = color => {
    return `mt-1 border rounded border-${color}-500 h-full flex flex-col`;
  };
  const titleStyle = color => {
    return `text-xl text-${color}-500 bg-${color}-100 px-4 py-2 uppercase border-b border-${color}-300 border-transparent rounded`;
  };

  return (
    <div className="mt-4 mx-8 h-full">
      <div className="text-sm italic flex">
        <Link className="mr-2" exact to="/dashboard">
          Dashboard
        </Link>
        {' / '}
        <div className={breadcrumbStyle(dashboardOption.color)}>
          {dashboardOption.name}
        </div>
      </div>
      <div className={boxStyle(dashboardOption.color)}>
        <div className={titleStyle(dashboardOption.color)}>
          {dashboardOption.title}
        </div>
        {dashboardOption.component}
      </div>
    </div>
  );
};
