
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>

//         <Route
//           path="/"
//           element={<Home />}
//         />

//         <Route
//           path="/product/:id"
//           element={<ProductDetails />}
//         />

//         <Route
//           path="/cart"
//           element={<Cart />}
//         />

//         <Route
//           path="/contact"
//           element={<Contact />}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;




import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;


