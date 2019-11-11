import React, { useContext } from 'react';

import { ALERT_TYPE } from '../../lib/constants';
import { AlertContext } from '../../globalState';
import Icon from './icons/Icon';
import { faIcons } from './icons/IconsConstant';

const Alert = () => {
  const { showAlert, title, text, type, reset } = useContext(AlertContext);

  setTimeout(() => {
    reset();
  }, 5000);

  const alertStyle = () => {
    switch (type) {
      case ALERT_TYPE.SUCCESS:
        return 'absolute bottom-0 right-0 min-w-full bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md';
      case ALERT_TYPE.WARNING:
        return 'absolute bottom-0 right-0 min-w-full bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-3 shadow-md';
      case ALERT_TYPE.ERROR:
        return 'absolute bottom-0 right-0 min-w-full bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md';
      default:
        break;
    }
    return '';
  };

  const iconStyle = () => {
    switch (type) {
      case ALERT_TYPE.SUCCESS:
        return 'py-1 fill-current h-6 w-6 text-teal-500 mr-4';
      case ALERT_TYPE.WARNING:
        return 'py-1 fill-current h-6 w-6 text-yellow-500 mr-4';
      case ALERT_TYPE.ERROR:
        return 'py-1 fill-current h-6 w-6 text-red-500 mr-4';
      default:
        break;
    }
    return '';
  };

  return (
    <>
      {showAlert && (
        <div className={alertStyle()}>
          <div className="flex">
            <div className={iconStyle()}>
              {type === ALERT_TYPE.SUCCESS ? (
                <Icon icon={faIcons._faCheckCircle} />
              ) : type === ALERT_TYPE.WARNING ? (
                <Icon icon={faIcons._faExclamationCircle} />
              ) : (
                <Icon icon={faIcons._faTimes} />
              )}
            </div>
            <div>
              <p className="font-bold">{title}</p>
              <p className="text-sm">{text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
