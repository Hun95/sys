import React, { useState, useContext, createContext, useEffect } from 'react';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWebSite, setIsWebSite] = useState(false);
  const [anmOpen, setAnmOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(!isMobile);
    }
  }, []);
  return (
    <MenuContext.Provider
      value={{
        isWebSite,
        setIsWebSite,
        setIsOpen,
        isOpen,
        anmOpen,
        setAnmOpen,
        isMobile,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};

export { MenuContext, MenuProvider };
