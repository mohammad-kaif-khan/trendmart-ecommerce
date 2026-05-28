import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.wishlist.items
  );

  if (items.length === 0) {
    return (
      <div className="p-5">
        <h1 className="text-3xl font-bold">
          Wishlist is Empty
        </h1>
      </div>
    );
  }

  return (
    <div className="p-5">

      <h1 className="text-3xl font-bold mb-5">
        Wishlist
      </h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-3 flex justify-between items-center"
        >
          <div>
            <h2 className="font-semibold">
              {item.title}
            </h2>

            <p>
              ₹
              {(item.price * 85).toFixed(0)}
            </p>
          </div>

          <button
            onClick={() =>
              dispatch(
                removeFromWishlist(item.id)
              )
            }
            className="bg-red-500 text-white px-3 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;