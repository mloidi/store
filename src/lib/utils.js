export const cookieName =
  process.env.REACT_APP_NAME + process.env.REACT_APP_TOKEN;

export const getToken = () => {
  const authToken = localStorage.getItem(cookieName);
  if (typeof authToken === 'string' && authToken === 'null') return null;
  return authToken;
};

export const twoDecimals = number => {
  return parseFloat(Math.round(number * 100) / 100).toFixed(2);
};
