import React, { useState, useContext }  from 'react';

import { DashboardContext } from '../globalState';

export const DashboardOrders = () => {
  const { getDashboardOption } = useContext(DashboardContext);
  const option = 'orders';
  const [dashboardOption] = useState(() => {
    return getDashboardOption(option);
  });
  return <div>{dashboardOption.name}</div>;
};
