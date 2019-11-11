import React, { useState, useContext } from 'react';

import { DashboardContext } from '../globalState';

export const DashboardInvoices = () => {
  const { getDashboardOption } = useContext(DashboardContext);
  const option = 'invoices';
  const [dashboardOption] = useState(() => {
    return getDashboardOption(option);
  });
  return <div>{dashboardOption.name}</div>;
};
