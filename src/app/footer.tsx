import React from 'react';
// import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; // Icons from react-icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 p-8 text-center">
      <h2 className="mb-4 text-lg font-bold">ติดตามข่าวสาร</h2>
      <div className="flex justify-center space-x-8">
        {/* <FaInstagram size={40} /> */}
        {/* <FaFacebook size={40} /> */}
        {/* <FaTiktok size={40} /> */}
      </div>
    </footer>
  );
};

export default Footer;
