const Nav = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <div className="text-3xl">Rosok.com</div>
      <input
        type="text"
        className="border-2 w-screen py-1 px-2 mx-10"
        placeholder="Cari barang rosok"
      />
      <a href="#" className="mx-3">
        Login
      </a>
      <a href="#" className="mx-3">
        Daftar
      </a>
    </div>
  );
};

export default Nav;
