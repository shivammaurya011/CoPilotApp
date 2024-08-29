import React from 'react';
import { InfoIcon } from '../../assets';

function InfoButton({ isActive, setIsActive }) {
  return (
    <button
      className={`p-2 flex items-center justify-center rounded-xl h-10 w-10 text-center ${isActive ? 'bg-[#AAEDD1]' : 'bg-[#EBFFF680]'}`}
      onClick={() => setIsActive(prev => !prev)}
    >
      <InfoIcon height={25} width={25}/>
    </button>
  );
}

export default InfoButton;
