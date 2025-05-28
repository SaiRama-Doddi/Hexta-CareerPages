'use client';
import React from 'react';
import vectorImage from '../../public/vectorImg/Vector-image.png';
import Image from 'next/image';

const page = () => {
  return (
    <div className="w-full px-4 py-6 md:py-10 flex flex-col items-center">
      <div className="w-full max-w-[300px] md:max-w-md lg:max-w-xl">
        <Image
          src={vectorImage}
          alt="Vector Image"
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default page;
