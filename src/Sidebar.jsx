import React from 'react';
import Svg from './assets/vector.svg'

function Sidebar() {
  return (
    <div className=" h-[160px] flex flex-col items-center justify-between   ">
      {/* Top Icon */}
      <div className='w-[24px] text-[24px]'>
         <img className="m-[0_0_105px_0] text-[24px] w-[24px] h-[24px]" src={Svg} alt="SVG Description"/>
  </div>
 
      {/* Grid-like Icons Section */}
      <div className="grid grid-cols-2 gap-[2px] w-[24px] pl-[4px] ">
        <div className="w-[10px] h-[10px] bg-[#4A4E54] rounded-sm"></div>
        <div className="w-[10px] h-[10px] bg-[#4A4E54] rounded-sm"></div>
        <div className="w-[10px] h-[10px] bg-[#4A4E54] rounded-sm"></div>
        <div className="w-[10px] h-[10px] bg-[#4A4E54] rounded-sm"></div>
        <div className="w-[10px] h-[10px] bg-[#4A4E54] rounded-sm"></div>
        <div className="w-[10px] h-[10px] bg-[#4A4E54] rounded-sm"></div>
      </div>
    </div>
  );
}

export default Sidebar;
