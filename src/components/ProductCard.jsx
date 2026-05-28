

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="font-semibold mt-3 line-clamp-2">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold mt-2">
        ₹{(product.price * 85).toFixed(0)}
      </p>

      <div className="flex flex-col gap-2 mt-3">

        <button
          onClick={() =>
            dispatch(addToCart(product))
          }
          className="bg-black text-white px-3 py-2 rounded"
        >
          Add Cart
        </button>

        <button
          onClick={() =>
            dispatch(
              addToWishlist(product)
            )
          }
          className="bg-pink-500 text-white px-3 py-2 rounded"
        >
          ❤️ Wishlist
        </button>

        <Link
          to={`/product/${product.id}`}
          className="bg-blue-500 text-white px-3 py-2 rounded text-center"
        >
          Details
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;
