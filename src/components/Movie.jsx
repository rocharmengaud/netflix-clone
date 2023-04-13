import { useState } from 'react';
import ImageWithFallback from './ImageWithFallback';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '@/context/AuthContext';
import { db } from '@/firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import Link from 'next/link';

export const Movie = ({ movie }) => {
  const { user } = UserAuth();

  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  // Getting the specific user email that is logged in
  const movieID = doc(db, 'users', `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        likedMovies: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert('Please, log in to save a movie');
    }
  };

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
        <Link href={`/${movie.id}`}>
          <p className="md:text-sm flex items-center justify-center h-full text-xs font-bold text-center whitespace-normal">{movie?.title}</p>
        </Link>
        <p className="top-5 right-5 absolute text-gray-300">
          {like ? (
            <FaHeart className="hover:text-red-400" onClick={() => saveMovie()} fill="currentColor" />
          ) : (
            <FaRegHeart className="hover:text-green-400" onClick={() => saveMovie()} fill="currentColor" />
          )}
        </p>
      </div>
    </div>
  );
};
