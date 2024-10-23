import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-200 p-4">
      <h1>CE Smart Career 2024</h1>
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
