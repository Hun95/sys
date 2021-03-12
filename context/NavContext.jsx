import React, { useState, useContext, createContext, useEffect } from 'react';

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  const [open, setOpen] = useState(false);
  const handleSticky = () => {
    if (window.pageYOffset > 1) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleSticky);

    return () => window.removeEventListener('scroll', handleSticky);
  }, []);

  return (
    <NavContext.Provider value={{ setIsSticky, isSticky, open, setOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(NavContext);
};

export { NavContext, NavProvider };
