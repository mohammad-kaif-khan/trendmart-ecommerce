



import { useState } from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const items = useSelector(
    (state) => state.cart.items
  );

  const [location, setLocation] =
    useState("");

  const [formData, setFormData] =
    useState({
      fullName: "",
      mobile: "",
      email: "",
      flatNo: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert(
        "Geolocation is not supported by your browser"
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(
          `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
        );
      },
      () => {
        alert(
          "Unable to retrieve your location"
        );
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Order Placed Successfully!"
    );

    console.log(formData);
  };

  const total = items.reduce(
    (acc, item) =>
      acc +
      item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-5">

      <h1 className="text-3xl font-bold mb-5">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 w-full rounded"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              fullName:
                e.target.value,
            })
          }
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="border p-3 w-full rounded"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              mobile:
                e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 w-full rounded"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              email:
                e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Flat / House Number"
          className="border p-3 w-full rounded"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              flatNo:
                e.target.value,
            })
          }
        />

        <textarea
          placeholder="Full Address"
          className="border p-3 w-full rounded"
          rows="4"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              address:
                e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="City"
          className="border p-3 w-full rounded"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              city:
                e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="State"
          className="border p-3 w-full rounded"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              state:
                e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Pincode"
          className="border p-3 w-full rounded"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              pincode:
                e.target.value,
            })
          }
        />

        <button
          type="button"
          onClick={getLocation}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Get Current Location
        </button>

        {location && (
          <p className="font-medium">
            {location}
          </p>
        )}

        <div className="border p-4 rounded">

          <h2 className="text-2xl font-bold mb-3">
            Order Summary
          </h2>

          <p>
            Total Products:
            {items.length}
          </p>

          <p>
            Total Amount: ₹
            {(total * 85).toFixed(0)}
          </p>

        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-3 rounded"
        >
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;


