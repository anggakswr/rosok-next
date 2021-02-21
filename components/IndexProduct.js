const IndexProduct = ({ title }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-lg my-2 font-bold">{title}</h3>
        <a href="#" className="link-green">
          Lihat Semua
        </a>
      </div>

      <div className="flex justify-evenly">
        <div className="p-2">
          {/* product image */}
          <div
            className="w-32 h-32 md:w-48 md:h-48 bg-yellow-500 bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url("/img/1.jpg")` }}
          ></div>

          {/* product name */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-2">
          {/* product image */}
          <div
            className="w-32 h-32 md:w-48 md:h-48 bg-yellow-500 bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url("/img/2.jpg")` }}
          ></div>

          {/* product name */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-2">
          {/* product image */}
          <div
            className="w-32 h-32 md:w-48 md:h-48 bg-yellow-500 bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url("/img/3.jpg")` }}
          ></div>

          {/* product name */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-2">
          {/* product image */}
          <div
            className="w-32 h-32 md:w-48 md:h-48 bg-yellow-500 bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url("/img/4.jpg")` }}
          ></div>

          {/* product name */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-2">
          {/* product image */}
          <div
            className="w-32 h-32 md:w-48 md:h-48 bg-yellow-500 bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url("/img/5.jpg")` }}
          ></div>

          {/* product name */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
};

export default IndexProduct;
