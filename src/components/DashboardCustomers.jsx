import React, { useState, useContext }  from 'react';

import { DashboardContext } from '../globalState';

export const DashboardCustomers = () => {
  const { getDashboardOption } = useContext(DashboardContext);
  const option = 'customers';
  const [dashboardOption] = useState(() => {
    return getDashboardOption(option);
  });
  return <div>{dashboardOption.name}</div>;
};
