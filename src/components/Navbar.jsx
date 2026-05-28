// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Navbar() {
//   const cart = useSelector(state => state.cart.items);

//   return (
//     <nav className="bg-black text-white p-4 flex justify-between">
//       <Link to="/">Shop</Link>

//       <div className="flex gap-4">
//         <Link to="/contact">Contact</Link>
//         <Link to="/cart">
//           Cart ({cart.length})
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.items
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

      <div className="flex items-center gap-6">

        <Link
          to="/"
          className="hover:text-gray-300"
        >
          Home
        </Link>

        <Link
          to="/contact"
          className="hover:text-gray-300"
        >
          Contact
        </Link>

        <Link
          to="/cart"
          className="hover:text-gray-300"
        >
          Cart ({totalItems})
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;