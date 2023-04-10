import Link from 'next/link';

export const Navbar = () => {
  return (
    // Z-index for the navbar to stay on top. Absolute needs w-full to work.
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link href="/">
        <h1 className="text-4xl font-bold text-red-600 cursor-pointer">NETFLOUIX</h1>
      </Link>
      <div className="text-white">
        <Link href="/Login">
          <button className="pr-4 text-white">Sign In</button>
        </Link>
        <Link href="/SignUp">
          <button className="px-6 py-2 text-white bg-red-600 rounded cursor-pointer">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};
