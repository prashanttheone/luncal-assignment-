import React, { useState } from "react";
import Sidebar from "../Sidebar";
import './nav.css';

const navItems = ["About Me", "Experiences", "Recommended"];

function Nav() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (

    <div className="flex flex-col items-center justify-center bg-[#363C43] text-white  w-full  ">
      <div className="max-w-[720px] bg-[#1f242b] p-6 rounded-[16px] relative shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0.4,0.6)]">
        {/* Navigation Tabs */}
        <nav className="w-[600px] bg-black rounded-[16px] p-3 mb-6 ml-[30px]">
          <ul className="flex justify-around space-x-6 ">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActiveTab(item)}
                className={`cursor-pointer w-[195px] h-[49px] flex items-center justify-center rounded-[16px] font-poppins text-[18px] font-medium leading-[16.12px] text-center transition-all duration-300 ${
                  activeTab === item ? "bg-customBlack2" : "text-white"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Tab Content */}
        <div className="flex-grow bg-customGray rounded-lg p-6 w-full ">
          {activeTab === "About Me" && (
            <div className="custom-scrollbar text-lg text-gray-400 px-5 sm:px-20 max-h-[175px] flex-wrap overflow-y-auto">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now. <br /> I was born and
              raised in Albany, NY& have been living in Santa Carla for the
              past 10 years with my wife Tiffany and my 4-year-old twin daughters,
              Emma and Ella. Both of them are just starting school, so my
              calendar is usually blocked between 9-10 AM. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Id alias iure tenetur
              placeat quam! Exercitationem aperiam vel iure magni molestiae
              sequi eaque nobis, similique sint temporibus voluptates harum
              vero rerum eligendi mollitia maxime quo, voluptatum quae impedit
              architecto officiis consequatur tenetur! Molestias, aut! Quisquam qui
              deleniti praesentium cum, maiores aspernatur?
            </div>
          )}

          {activeTab === "Experiences" && (
            <div className="custom-scrollbar text-lg text-gray-400 px-5 sm:px-20 max-h-[175px] flex-wrap overflow-y-auto">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now. <br /> I was born and
              raised in Albany, NY& have been living in Santa Carla for the
              past 10 years with my wife Tiffany and my 4-year-old twin daughters,
              Emma and Ella. Both of them are just starting school, so my
              calendar is usually blocked between 9-10 AM. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Id alias iure tenetur
              placeat quam! Exercitationem aperiam vel iure magni molestiae
              sequi eaque nobis, similique sint temporibus voluptates harum
              vero rerum eligendi mollitia maxime quo, voluptatum quae impedit
              architecto officiis consequatur tenetur! Molestias, aut! Quisquam qui
              deleniti praesentium cum, maiores aspernatur?
            </div>
          )}

          {activeTab === "Recommended" && (
            <div className="custom-scrollbar text-lg text-gray-400 px-5 sm:px-20 max-h-[175px] flex-wrap overflow-y-auto">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now. <br /> I was born and
              raised in Albany, NY& have been living in Santa Carla for the
              past 10 years with my wife Tiffany and my 4-year-old twin daughters,
              Emma and Ella. Both of them are just starting school, so my
              calendar is usually blocked between 9-10 AM. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Id alias iure tenetur
              placeat quam! Exercitationem aperiam vel iure magni molestiae
              sequi eaque nobis, similique sint temporibus voluptates harum
              vero rerum eligendi mollitia maxime quo, voluptatum quae impedit
              architecto officiis consequatur tenetur! Molestias, aut! Quisquam qui
              deleniti praesentium cum, maiores aspernatur?
            </div>
          )}
            <div className="absolute top-12 left-[10px] w-[24px] h-[159.69px] hidden md:block">
          <Sidebar />
        </div>
        </div>

        {/* Right Sidebar - Repositioned */}

      </div>

      {/* Horizontal Line */}
      <div className="mb-[20px] shadow-md backdrop-blur-md rounded-md bg-[linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05))] bg-[length:cover] bg-no-repeat mx-[54px] my-4 w-[612px] h-[6px]"></div>
    </div>

  );
}

export default Nav;
