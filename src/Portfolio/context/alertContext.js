import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ type: '', message: '', isOpen: false });

  const onOpen = (type, message) => {
    setAlert({ type, message, isOpen: true });
  };

  const onClose = () => {
    setAlert({ type: '', message: '', isOpen: false });
  };

  return (
    <AlertContext.Provider value={{ ...alert, onOpen, onClose }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;




 