import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, style }) => {
  return <FontAwesomeIcon icon={icon} className={style} />;
};
export default Icon;
