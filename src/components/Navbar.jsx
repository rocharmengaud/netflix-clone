export const Navbar = () => {
  return (
    // Z-index for the navbar to stay on top. Absolute needs w-full to work.
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLOUIX</h1>
      <div className="text-white">
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">Sign Up</button>
      </div>
    </div>
  );
};
