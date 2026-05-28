// import axios from "axios";
// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";

// function Home() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products?limit=100")
//       .then((res) => setProducts(res.data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   const filteredProducts = products.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-5">

//       <input
//         type="text"
//         placeholder="Search Products..."
//         className="border p-3 w-full mb-5 rounded"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="grid md:grid-cols-4 gap-5">

//         {filteredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//           />
//         ))}

//       </div>
//     </div>
//   );
// }

// export default Home;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";

// function Home() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");

//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] =
//     useState("all");

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products?limit=100")
//       .then((res) =>
//         setProducts(res.data.products)
//       )
//       .catch((err) => console.log(err));

//     axios
//       .get(
//         "https://dummyjson.com/products/categories"
//       )
//       .then((res) => setCategories(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const filteredProducts = products.filter(
//     (item) => {
//       const searchMatch = item.title
//         .toLowerCase()
//         .includes(search.toLowerCase());

//       const categoryMatch =
//         selectedCategory === "all"
//           ? true
//           : item.category === selectedCategory;

//       return searchMatch && categoryMatch;
//     }
//   );

//   return (
//     <div className="p-5">

//       <input
//         type="text"
//         placeholder="Search Products..."
//         className="border p-3 w-full mb-4 rounded"
//         value={search}
//         onChange={(e) =>
//           setSearch(e.target.value)
//         }
//       />

//       <select
//         className="border p-3 w-full mb-5 rounded"
//         value={selectedCategory}
//         onChange={(e) =>
//           setSelectedCategory(e.target.value)
//         }
//       >
//         <option value="all">
//           All Categories
//         </option>

//         {categories.map((cat) => (
//           <option
//             key={cat.slug}
//             value={cat.slug}
//           >
//             {cat.name}
//           </option>
//         ))}
//       </select>

//       <div className="grid md:grid-cols-4 gap-5">

//         {filteredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//           />
//         ))}

//       </div>

//     </div>
//   );
// }

// export default Home;
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [categories, setCategories] =
    useState([]);

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("all");

  useEffect(() => {
    axios
      .get(
        "https://dummyjson.com/products?limit=100"
      )
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    axios
      .get(
        "https://dummyjson.com/products/categories"
      )
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) =>
        console.log(err)
      );
  }, []);

  const filteredProducts =
    products.filter((item) => {
      const searchMatch =
        item.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const categoryMatch =
        selectedCategory === "all"
          ? true
          : item.category ===
            selectedCategory;

      return (
        searchMatch &&
        categoryMatch
      );
    });

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Loading Products...
      </h1>
    );
  }

  return (
    <div className="p-5">

      <input
        type="text"
        placeholder="Search Products..."
        className="border p-3 w-full rounded mb-4"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        className="border p-3 w-full rounded mb-5"
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(
            e.target.value
          )
        }
      >
        <option value="all">
          All Categories
        </option>

        {categories.map((cat) => (
          <option
            key={cat.slug}
            value={cat.slug}
          >
            {cat.name}
          </option>
        ))}
      </select>

      <p className="mb-4 text-gray-600">
        Total Products:{" "}
        {filteredProducts.length}
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {filteredProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}

      </div>

    </div>
  );
}

export default Home;



