import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieDetails } from '@/components/MovieDetails';

const MovieFetch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_APP_TMDB_API_KEY}`);

      setMovieData(response.data);
    };

    if (movieId) {
      fetchMovieData();
    }
  }, [movieId]);

  return <div>{movieData && <MovieDetails movie={movieData} />}</div>;
};

export default MovieFetch;
