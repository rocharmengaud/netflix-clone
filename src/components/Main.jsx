import { useEffect, useState } from 'react';
import requests from '@/Requests';
import axios from 'axios';
import Image from 'next/image';

export const Main = () => {
  const [movies, setMovies] = useState([]);

  // Method to pick a random movie
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movie);

  return (
    <div className="relative w-full h-[550px] text-white">
      <div className="absolute bg-gradient-to-r from-gray-950 w-full h-[550px] z-10"></div>
      <div className="absolute w-full h-[550px]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          fill={true}
          className=" object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
