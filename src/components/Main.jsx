import { useEffect, useState } from 'react';
import requests from '@/Requests';
import axios from 'axios';

export const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data);
    });
  }, []);

  console.log(movies);

  return <div className="main">Main</div>;
};
