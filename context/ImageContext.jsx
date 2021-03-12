import React, { useState, useContext, createContext, useEffect } from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [nodata, setNodata] = useState(false);
  const [data, setData] = useState([]);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);

  const url = '/data/photo.json';
  const putData = () => {
    data.map((datas) => {
      const { id } = datas;

      if (id % 3 === 0) {
        setFirst([...first, datas]);
      } else if (id % 3 === 1) {
        setSecond([...second, datas]);
      } else if (id % 3 === 2) {
        setThird([...third, datas]);
      }
    });
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);

      const resData = await res.json();
      setData(resData);
      putData();
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    console.log(loading);
  }, []);

  return (
    <ImageContext.Provider
      value={{
        loading,
        nodata,
        data,
        first,
        second,
        third,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  return useContext(ImageContext);
};

export { ImageContext, ImageProvider };
