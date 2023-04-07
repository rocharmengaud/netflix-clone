import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from './Movie';

export const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  // Whenever the URL changes, the useEffect will run again
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="md:text-xl p-4 font-bold text-white">{title}</h2>
      <div className="relative flex items-center">
        <div id={'slider'}>
          {movies?.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};
