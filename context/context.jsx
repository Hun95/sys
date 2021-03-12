import React, { useState, useContext, createContext, useRef } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [yOffset, setYoffset] = useState();
  const firstSecRef = useRef();
  const secondSecRef = useRef();
  const thirdSecRef = useRef();
  const [stop, setStop] = useState(false);
  return (
    <AppContext.Provider
      value={{
        setYoffset,
        yOffset,
        firstSecRef,
        secondSecRef,
        thirdSecRef,
        stop,
        setStop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
