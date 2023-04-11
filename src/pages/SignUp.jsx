import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { UserAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignUp() {
  const router = useRouter();

  const { user, signUp } = UserAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      router.push('/Homepage');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen">
        <Image
          src={`https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/c7946386-ac97-4628-86ee-45fc7287ea59/FR-fr-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg`}
          alt="Netflix bg image"
          priority={true}
          fill
          className="sm:block absolute hidden object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="pt-36 fixed z-50 w-full">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign up</h1>
              <form className="flex flex-col w-full py-4" onSubmit={(event) => handleSubmit(event)}>
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button className="py-3 my-6 font-bold bg-red-600 rounded">Sign Up</button>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <p>
                    <input type="checkbox" className="mr-2" /> Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-500">Already subscribed? </span>
                  <Link href="/Login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
