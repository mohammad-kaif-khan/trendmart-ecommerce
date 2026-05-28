



import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  if (items.length === 0) {
    return (
      <div className="p-5">
        <h1 className="text-3xl font-bold">
          Cart is Empty
        </h1>
      </div>
    );
  }

  const total = items.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-5">

      <h1 className="text-3xl mb-5 font-bold">
        Shopping Cart
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

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                dispatch(
                  decreaseQty(item.id)
                )
              }
              className="bg-gray-300 px-3 py-1 rounded"
            >
              -
            </button>

            <span>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(
                  increaseQty(item.id)
                )
              }
              className="bg-gray-300 px-3 py-1 rounded"
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch(
                  removeFromCart(item.id)
                )
              }
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>

          </div>

        </div>
      ))}

      <h2 className="text-2xl font-bold mt-5">
        Total : ₹
        {(total * 85).toFixed(0)}
      </h2>

    </div>
  );
}

export default Cart;