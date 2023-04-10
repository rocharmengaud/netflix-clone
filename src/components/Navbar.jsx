import Link from 'next/link';
import { UserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();

  const { user, logOut } = UserAuth();
  // console.log(user);

  const handleLogout = () => {
    try {
      logOut();
      router.push('/Homepage');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Z-index for the navbar to stay on top. Absolute needs w-full to work.
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link href="/">
        <h1 className="text-4xl font-bold text-red-600 cursor-pointer">NETFLOUIX</h1>
      </Link>
      {user?.email ? (
        <div className="text-white">
          <Link href="/Account">
            <button className="pr-4 text-white">Account</button>
          </Link>
          <button className="px-6 py-2 text-white bg-red-600 rounded cursor-pointer" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      ) : (
        <div className="text-white">
          <Link href="/Login">
            <button className="pr-4 text-white">Sign In</button>
          </Link>
          <Link href="/SignUp">
            <button className="px-6 py-2 text-white bg-red-600 rounded cursor-pointer">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};
