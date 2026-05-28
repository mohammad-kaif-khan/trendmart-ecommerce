


import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">

      <Link
        to="/"
        className="text-2xl font-bold"
      >
        TrendMart
      </Link>

      <div className="flex gap-5">

        <Link to="/">
          Home
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/wishlist">
          Wishlist (
          {wishlistItems.length})
        </Link>

        <Link to="/cart">
          Cart ({totalItems})
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;