import React from 'react';
import posterImg from '../assets/poster.jpg';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import Sidebar from '../Sidebar';

// Array of image items
const imgItems = [
  { id: 1, imgUrl: posterImg },
  { id: 2, imgUrl: posterImg },
  { id: 3, imgUrl: posterImg }
];

function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#363C43] text-white  w-full  ">
       <div className="w-[720px] bg-[#1f242b] p-12 rounded-[16px] relative shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0.4,0.6)]">
      <div className='flex flex-row justify-around p-3 w-full max-w-[652px]'>
      {/* Gallery Title */}
      <span className="w-[150px] h-[62px] flex items-center justify-center bg-black text-white rounded-[20px] rounded-br-[20px] font-semibold shadow-lg">
        Gallery
      </span>
         <div className='flex flex-row gap-3'>
      {/* Add Image Button */}
      <button
  className="flex items-center text-gray-400 justify-center gap-2 w-[130px] h-[48px] bg-gradient-to-r from-[#303439] to-[#161718] rounded-full shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out"
  style={{boxShadow: '0 3.26px 3.26px #ffffff26 inset, 0 0 48.91px #ffffff0d inset, 9px 10px 7.1px #0006, -.5px -.5px 6.9px #ffffff40'}}>
  + Add Image
</button>
      {/* Navigation Arrows */}
      <div className="flex gap-3">
      <button
      className="flex text-gray-400 items-center justify-center w-[40px] text-xl h-[40px] bg-black rounded-full shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out"
      style={{
        background: 'linear-gradient(139deg, #303439, #161718)',
        boxShadow: '4px 5px 20px 5px #101213, -5px -3px 20px -10px #96bee7'
      }}
    >
      <FaArrowLeft />
    </button>
    <button
      className="flex text-gray-400 items-center justify-center w-[40px] h-[40px] bg-black rounded-full shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out"
      style={{
        background: 'linear-gradient(139deg, #303439, #161718)',
        boxShadow: '4px 5px 10px 5px #101213, -5px -3px 10px -10px #96bee7'
      }}
    >
      <FaArrowRight />
    </button>
        </div>
      </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-2 mt-7">
        {imgItems.map((item) => (
         <img
         key={item.id}
         src={item.imgUrl}
         alt={`Image ${item.id}`}
         className="w-[190px] h-[180px] rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:filter-none filter grayscale"
       />
        ))}
      </div>
      <div className="absolute top-12 left-[10px] w-[24px] h-[159.69px]">
        <Sidebar />
      </div>
      
      </div>
       {/* Horizontal Line */}
       <div className="mb-[20px] shadow-md backdrop-blur-md rounded-md bg-[linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05))] bg-[length:cover] bg-no-repeat mx-[54px] my-4 w-[612px] h-[6px]"></div>
   
    </div>
  );
}
{/* <div className="w-full bg-[#363C43]"> */}
export default Gallery;
