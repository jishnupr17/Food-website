import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Animation from "../assets/Animation - 1739103260340.gif";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }

    setSubmitted(true);
    toast.success("Message sent successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      {/* Left Side - Image */}
      <div className="w-1/2 flex justify-center">
        <img className="w-[400px]" src="https://vunetsystems.com/wp-content/uploads/2022/06/Contact-Us-animation.gif" alt="Animation" />
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full max-w-2xl p-6 bg-slate-300 shadow-md rounded-md mr-5">
        
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        {submitted ? (
          <p className="text-green-600 text-center">Thank you for reaching out! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-green-500 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;

