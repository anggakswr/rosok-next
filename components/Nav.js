const Nav = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-green-500">
      <a href="#" className="text-3xl link-white">
        Rosok.com
      </a>

      <input
        type="text"
        className="border w-screen py-1 px-3 mx-16"
        placeholder="Cari barang rosok"
      />

      <a href="#" className="mx-3 link-white">
        Login
      </a>

      <a href="#" className="mx-3 link-white">
        Daftar
      </a>
    </div>
  );
};

export default Nav;
