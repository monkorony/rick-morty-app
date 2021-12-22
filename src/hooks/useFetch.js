import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, number) => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setdata] = useState(null);
  const [pageNum, setPageNum] = useState("");
  const [results, setResults] = useState(null);

  //Get episode from api and update state
  const fetchData = async () => {
    try {
      setPageNum(number);
      const { data }  = await axios.get(`${url}/${pageNum}`);
      if (!data) return;        
      setdata(data);
      setLoading(false);
      let listInfo;

      for (let key in data) {
        if (key === 'residents') { //residents for location page
          listInfo = await Promise.all(
            data.residents.map((x) => {
              return fetch(x).then((res) => res.json());
            })
          );
        } else if (key === 'characters') { // characters for episodes page
          listInfo = await Promise.all(
            data.characters.map((x) => {
              return fetch(x).then((res) => res.json());
            })
          );
        }
      }
      setResults(listInfo);
    } catch (e) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [pageNum])

  return {
    isError, isLoading, data, results, setPageNum, pageNum
  }

}

export default useFetch;