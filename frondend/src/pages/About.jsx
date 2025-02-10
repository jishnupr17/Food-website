import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
 
    const navigate = useNavigate();
  
    const handleContact = () => {
      navigate("/contact"); // Navigates to the Contact page
    };
  



 
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        About Us
      </h1>
      
      {/* Hero Section */}
      <div className="max-w-4xl text-center mb-12">
        <p className="text-lg text-gray-600">
          We are a passionate team dedicated to delivering high-quality solutions that make a difference.
          Our mission is to create innovative products that enhance user experiences.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex gap-2  md:flex-row items-center  w-full max-w-5xl bg-teal-100 p-8 shadow-md rounded-lg">
        {/* Left Side - Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img 
          src="https://media.istockphoto.com/id/2186623024/photo/digital-commerce-has-revolutionized-market-with-businesses-now-offering-seamless-online.jpg?s=612x612&w=0&k=20&c=l5_r_TZn7rItHYs2OWOIuWzCMEu64s2wjiamA-bVR5s="
             
          
            alt="Team"
            className="rounded-lg w-[300px] "
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600">
            Founded in 2020, we started as a small group of enthusiasts determined to bring innovation into digital experiences.
            Over the years, we've grown into a dedicated team, delivering impactful solutions to clients worldwide.
          </p>
        </div>
      </div>

      {/* Team Section (Optional) */}
      <div className="mt-12 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Example Team Members */}
          {[
            { name: "John Doe", role: "CEO", img: "https://th.bing.com/th/id/OIP.bpI3PvWulR33V6cjBXAO2gHaH3?w=1467&h=1558&rs=1&pid=ImgDetMain" },
            { name: "Jane Smith", role: "CTO", img: "https://i1.rgstatic.net/ii/profile.image/11431281136783440-1680578329024_Q512/Patrick_Bowers2.jpg" },
            { name: "Alex Johnson", role: "Designer", img: "https://th.bing.com/th/id/OIP.Nc0-wkBuRWnzQXs5aspSHAHaHa?w=1440&h=1440&rs=1&pid=ImgDetMain" },
          ].map((member, index) => (
            <div key={index} className="bg-teal-100 p-2 w-full max-w-[250px] h-[300px] shadow-md rounded-lg text-center flex flex-col gap-10">
              <img className="rounded-full w-24 h-30 mx-auto mt-5" src={member.img} alt={member.name} />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-900">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <button onClick={handleContact} className=" bg-slate-400 text-white hover:bg-slate-700 w-[200px] rounded-full p-1 ">
         
          Contact us
          
          

        </button>
        
        
      </div>
    </div>
  );
};

export default About;

