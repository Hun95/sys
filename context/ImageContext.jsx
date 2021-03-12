import React, { useState, useContext, createContext, useEffect } from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const url = '/data/image.json';
  const fetchData = async () => {
    try {
      const res = await fetch(url);

      const resData = await res.json();
      setData(resData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  const [loading, setLoading] = useState(false);
  const [nodata, setNodata] = useState(false);
  const [data, setData] = useState([]);

  return (
    <ImageContext.Provider value={{ loading, nodata, data }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  return useContext(ImageContext);
};

export { ImageContext, ImageProvider };
