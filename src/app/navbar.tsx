import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-200 p-4">
      <div className="h-8 w-24 bg-gray-600"></div>
      <ul className="flex space-x-6 font-bold">
        <li>เกี่ยวกับ</li>
        <li>สัมมนา</li>
        <li>บริษัท</li>
        <li>สถานที่</li>
        <li>ช่องทางติดต่อ</li>
      </ul>
    </nav>
  );
};

export default NavBar;
