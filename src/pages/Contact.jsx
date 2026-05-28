import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const submitHandler = e => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="p-5"
    >
      <input
        type="text"
        placeholder="Name"
        className="border p-2 block mb-3"
        onChange={(e)=>
          setForm({
            ...form,
            name:e.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 block mb-3"
        onChange={(e)=>
          setForm({
            ...form,
            email:e.target.value
          })
        }
      />

      <button className="bg-black text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}

export default Contact;