import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen">
        <Image
          src={`https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/c7946386-ac97-4628-86ee-45fc7287ea59/FR-fr-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg`}
          alt="Netflix bg image"
          fill
          className="sm:block absolute hidden object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="pt-36 fixed z-50 w-full">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form className="flex flex-col w-full py-4">
                <input className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" />
                <input className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete="current-password" />
                <button className="py-3 my-6 font-bold bg-red-600 rounded">Sign In</button>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <p>
                    <input type="checkbox" className="mr-2" /> Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-500">Want to register? </span>
                  <Link href="/SignUp">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
