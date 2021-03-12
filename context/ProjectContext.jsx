import React, { useState, useContext, createContext, useEffect } from 'react';

const ProjectContext = createContext();
import { category } from '../data/category';
const ProjectProvider = ({ children }) => {
  // const url = '/data/category.js';
  const [menu, setMenu] = useState(category);

  const [newMenu, setNewMenu] = useState(category);
  const [open, setOpen] = useState(false);
  const [cate, setCate] = useState('all');
  console.log(cate);
  const handleChange = (event) => {
    const value = menu.find((cate) => cate.category === event.target.value);

    if (value) {
      setNewMenu([value]);
      setCate(value.category);
    }
    if (event.target.value === 'all') {
      setNewMenu(menu);
      setCate('all');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <ProjectContext.Provider
      value={{
        menu,
        handleClose,
        handleOpen,
        handleChange,
        open,
        newMenu,
        setNewMenu,
        cate,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};

export { ProjectContext, ProjectProvider };
