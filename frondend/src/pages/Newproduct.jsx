import React, { useState } from "react";
import "../App.css";
import { PiUploadSimpleFill } from "react-icons/pi";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import toast from "react-hot-toast";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const UploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, image, category, price } = data;

    if (name?.trim() && image?.trim() && category?.trim() && price) {
      try {
        const response = await fetch(
          `$import.meta.env.https://food-website-backend-cecq.onrender.com}/uploadProduct`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json(); // Ensure response is correctly parsed
        console.log(result);

        // Display success message
        toast(result.message || "Product uploaded successfully");

        setData(() => {
          return {
            name: "",
            category: "",
            image: "",
            price: "",
            description: "",
          };
        });
      } catch (error) {
        console.error("Error submitting form:", error.message);
        toast("Failed to upload product. Please try again.");
      }
    } else {
      toast("Enter required fields");
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    try {
      const base64 = await ImagetoBase64(file);
      setData({ ...data, image: base64 });
      console.log("Image converted to Base64 successfully");
    } catch (error) {
      console.error(error);
      alert(error); // Show error if file is too large
    }
  };

  return (
    <div className=" product p-4  ">
      <form
        className="m-auto w-full max-w-md   shadow-md flex flex-col p-3  bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          accept="image/*"
          name="name"
          className="bg-slate-200 p-1  my-1"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>

        <select
          className="bg-slate-200 p-1  my-1"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>Select Category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetables"}>Vegetables</option>
          <option value={"icream"}>Icream</option>
          <option value={"dosa"}>Dosa</option>

          <option value={"rice"}>Rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"paneer"}>Panner</option>
        </select>

        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200 m-1  rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img
                src={data.image}
                alt=""
                className="h-full flex items-center"
                onChange={handleFileUpload}
              />
            ) : (
              <span className="text-5xl">
                <PiUploadSimpleFill />
              </span>
            )}

            <input
              type={"file"}
              id="image"
              onChange={UploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price">Price</label>
        <input
          type={"text"}
          className="bg-slate-200 p-1  my-1"
          name="price"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={2}
          className="bg-slate-200 p-1  my-1 resize-none"
          name="description"
          onChange={handleOnChange}
          value={data.description}
        ></textarea>

        <button className="bg-red-400 hover:bg-green-500 text-lg text-white font-medium drop-shadow-sm mt-2 py-1 ">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
