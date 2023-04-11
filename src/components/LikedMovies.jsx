import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ImageWithFallback from './ImageWithFallback';
import { useState, useEffect } from 'react';
import { UserAuth } from '@/context/AuthContext';
import { db } from '@/firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';

export const LikedMovies = () => {
  const { user } = UserAuth();

  const [movies, setMovies] = useState([]);

  const slideLeft = () => {
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // Sets up a real-time listener to fetch data from the Firestore database in response to changes
  // in the users collection document for the current user's email.
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.likedMovies);
    });
    return unsubscribe;
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`);

  const deleteMovie = async (movieID) => {
    try {
      const result = movies.filter((movie) => movie.id !== movieID);
      await updateDoc(movieRef, {
        likedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="md:text-xl p-4 font-bold text-white">My likes</h2>
      <div className="group max-h-40 relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="hover:opacity-100 group-hover:block absolute left-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer"
          size={40}
        />
        {/* nowrap so the x-scroll goes full width */}
        <div id={'slider'} className="whitespace-nowrap scroll-smooth scrollbar-hide relative w-full h-full overflow-x-scroll">
          {movies?.map((movie, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 overflow-hidden" key={id}>
              <ImageWithFallback
                src={`https://image.tmdb.org/t/p/w500${movie.img}`}
                alt={movie.title}
                key={movie.id}
                width={1000}
                height={1000}
                className="block object-cover w-full h-auto"
              />
              <div className="hover:opacity-100 hover:bg-black/80 absolute top-0 left-0 w-full h-full text-white opacity-0">
                <p className="md:text-sm flex items-center justify-center h-full text-xs font-bold text-center whitespace-normal">{movie?.title}</p>
                <p className="top-4 right-4 hover:text-red-400 absolute text-gray-300" onClick={() => deleteMovie(movie.id)}>
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="hover:opacity-100 group-hover:block absolute right-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer"
          size={40}
        />
      </div>
    </>
  );
};
