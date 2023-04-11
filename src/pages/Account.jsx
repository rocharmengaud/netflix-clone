import { LikedMovies } from '@/components/LikedMovies';
import { Navbar } from '@/components/Navbar';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import Image from 'next/image';

export default function Account() {
  return (
    <ProtectedRoute>
      <Navbar />
      <div className="w-full h-[400px] text-white relative">
        <Image
          src={`https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/c7946386-ac97-4628-86ee-45fc7287ea59/FR-fr-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg`}
          alt="Netflix bg image"
          fill
          className="absolute object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="md:text-5xl text-3xl font-bold">My saved movies</h1>
        </div>
      </div>
      <LikedMovies />
    </ProtectedRoute>
  );
}
