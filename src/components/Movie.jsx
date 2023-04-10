import { useState } from 'react';
import ImageWithFallback from './ImageWithFallback';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 overflow-hidden">
      <ImageWithFallback
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        width={1000}
        height={1000}
        className="block object-cover w-full h-auto"
      />
      <div className="hover:opacity-100 hover:bg-black/80 absolute top-0 left-0 w-full h-full text-white opacity-0">
        <p className="md:text-sm flex items-center justify-center h-full text-xs font-bold text-center whitespace-normal">{movie?.title}</p>
        <p>{like ? <FaHeart className="top-4 left-4 absolute text-gray-300" /> : <FaRegHeart className="top-4 left-4 absolute text-gray-300" />}</p>
      </div>
    </div>
  );
};
