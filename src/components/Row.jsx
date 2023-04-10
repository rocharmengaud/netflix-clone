import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  // Whenever the URL changes, the useEffect will run again
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slider = typeof document !== 'undefined' && document.getElementById('slider' + rowID);

  const slideLeft = () => {
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="md:text-xl p-4 font-bold text-white">{title}</h2>
      <div className="group max-h-40 relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="hover:opacity-100 group-hover:block absolute left-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer"
          size={40}
        />
        {/* nowrap so the x-scroll goes full width */}
        <div id={'slider' + rowID} className="whitespace-nowrap scroll-smooth scrollbar-hide relative w-full h-full overflow-x-scroll">
          {movies?.map((movie, id) => (
            <Movie movie={movie} key={id} />
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
