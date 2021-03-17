import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useRef,
} from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const url = '/data/photo.json';
  const [loading, setLoading] = useState(false);
  const [nodata, setNodata] = useState(false);
  const [data, setData] = useState([]);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const viewport = useRef(null);
  const target = useRef(null);

  const fetchData = async () => {
    try {
      const res = await fetch(url);

      const resData = await res.json();
      console.log(resData);
      setFirst(resData);

      console.log(first);
      // setFirst(resData.filter((datas) => datas.id % 3 === 0));
      // setSecond(resData.filter((datas) => datas.id % 3 === 1));
      // setThird(resData.filter((datas) => datas.id % 3 === 2));
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   fetchData();
  //   console.log(first);
  // }, []);

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
        viewport,
        target,
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
