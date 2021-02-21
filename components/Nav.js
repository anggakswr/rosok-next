const Nav = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-green-500">
      <a href="#" className="text-3xl link-white hidden md:block">
        Rosok.com
      </a>

      <a href="#" className="text-3xl link-white block md:hidden">
        R
      </a>

      <input
        type="text"
        className="border w-screen py-1 px-3 mx-8 md:mx-16"
        placeholder="Cari barang rosok"
      />

      <a href="#" className="mx-3 link-white hidden md:block">
        Login
      </a>

      <a href="#" className="mx-3 link-white hidden md:block">
        Daftar
      </a>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-10 link-white block md:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};

export default Nav;
