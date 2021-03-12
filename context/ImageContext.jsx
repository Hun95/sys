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
  const fetchData = async () => {
    try {
      const res = await fetch(url);

      const resData = await res.json();
      setFirst(resData.filter((datas) => datas.id % 3 === 0));
      setSecond(resData.filter((datas) => datas.id % 3 === 1));
      setThird(resData.filter((datas) => datas.id % 3 === 2));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(first);
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
        setFirst,
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
