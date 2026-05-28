import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return <h1 className="p-5">Loading...</h1>;
  }

  return (
    <div className="p-5">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.thumbnail}
          className="w-full"
        />

        <div>

          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="mt-4">
            {product.description}
          </p>

          <p className="text-green-600 text-2xl font-bold mt-4">
            ₹{product.price * 85}
          </p>

          <p className="mt-2">
            Rating: ⭐ {product.rating}
          </p>

          <p>
            Stock: {product.stock}
          </p>

          <p>
            Brand: {product.brand}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;