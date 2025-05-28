'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#DCE6EA] to-[#9BD6E8] text-center py-8 px-4">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">QUICKLINKS</h2>

      {/* HR Line */}
      <hr className="border-t border-[#BFBFBF] w-full  mx-auto mb-6" />

      {/* Links */}
      <div className="text-gray-700 text-sm space-y-4">
        {/* Mobile View: 2 Rows */}
        <div className="flex flex-col items-center space-y-4 md:hidden">
          <div className="flex flex-row justify-center gap-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">Clients</a>
          </div>
          <div className="flex flex-row justify-center gap-6">
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>

        {/* Desktop View: Full Width Flex */}
        <div className="hidden md:flex flex-wrap justify-center gap-x-12 gap-y-4 max-w-5xl mx-auto">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Projects</a>
          <a href="#" className="hover:underline">Clients</a>
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>

      {/* Second HR Line */}
      <hr className="border-t border-[#BFBFBF] w-full  mx-auto mt-6 mb-4" />

      {/* Bottom Footer */}
   <p className="text-gray-600 text-sm flex flex-wrap justify-center gap-1 whitespace-nowrap md:text-sm">
  © 2025 Hextasphere. All rights reserved. 
  <a href="mailto:info@hextasphere.com" className="hover:underline ml-1">info@hextasphere.com</a>
</p>

    </footer>
  );
};

export default Footer;
