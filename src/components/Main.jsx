import { useEffect, useState } from 'react';
import requests from '@/Requests';
import axios from 'axios';
import Image from 'next/image';

export const Main = () => {
  const [movies, setMovies] = useState([]);

  // Method to pick a random movie
  const movie = movies[Math.floor(Math.random() * movies.length)];

  // UseEffect array is empty here so each refresh sets a new movie
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // Function to shorten the movie.overview long text and add ... at the end
  const truncateString = (string, number) => {
    if (string?.length > number) {
      return string.slice(0, number) + '...';
    } else {
      return string;
    }
  };

  return (
    <>
      <div className="relative w-full h-[550px] text-white">
        <div className="absolute bg-gradient-to-r from-gray-950 w-full h-[550px] z-10"></div>
        <div className="absolute w-full h-[550px]">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.title ? movie?.title : 'Movie title undefined'}
            fill={true}
            className=" object-cover w-full h-full"
            priority={true}
          />
        </div>
      </div>
      <div className="absolute w-full top-[20%] p-4 md:p-8 z-[100]">
        <h1 className="md:text-5xl text-3xl font-bold text-white">{movie?.title}</h1>
        <div className="my-4">
          <button className="hover:opacity-80 px-5 py-2 text-black bg-gray-300 border border-gray-300">Play</button>
          <button className="hover:opacity-80 px-5 py-2 ml-4 text-white border border-gray-300">Watch later</button>
        </div>
        <p className="text-sm text-gray-400">Released: {movie?.release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(movie?.overview, 150)}</p>
      </div>
    </>
  );
};
