import Image from 'next/image';
import { Navbar } from './Navbar';

export const MovieDetails = ({ movie }) => {
  return (
    <>
      <Navbar />
      <div className="top-[20%] absolute sm:top-[10%] md:top-[10%] lg:top-[10%]">
        <div className="w-full h-[500px] flex flex-col items-center px-10 max-w-[1000px] gap-10 sm:flex-row md:flex-row lg:flex-row">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            height={1000}
            width={1000}
            className="object-contain w-full h-full"
            quality={100}
          />
          <div className="max-h-fit flex flex-col gap-5 pr-12">
            <h1 className="md:text-5xl text-3xl font-bold text-white">{movie.title}</h1>
            <p className="w-full text-gray-200">{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};
