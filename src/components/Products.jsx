import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  const limitedProducts = product.slice(0, 4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProduct(response.data.products);
        console.log(response.data.products);
      } catch (err) {
        console.error("error", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="grid grid-cols-4 gap-3 mt-14 px-12">
      {limitedProducts.map((p, idx) => (
        <article
          key={idx}
          className="border rounded-lg overflow-hidden bg-white shadow-sm flex flex-col"
        >
          <img
            src={p.images[0]}
            alt="img"
            className="h-40 w-full object-cover"
            loading="lazy"
          />
          <div className="p-3 flex-1 flex flex-col">
            <h3 className="font-semibold line-clamp-2">{p.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{p.brand}</p>

            <div className="mt-auto">
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold">${p.price}</span>
                <span className="text-sm">⭐{p.rating}</span>
              </div>
              <button className="mt-3 bg-blue-600 text-white w-full border rounded py-2 hover:bg-blue-300">
                Add to cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Products;
//1. FETCH
//2. AXIOS
//3. ASYNCHRONOUS FUNCTION + AXIOS (BEST PRACTICE)
