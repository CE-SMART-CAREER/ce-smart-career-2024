import React from 'react';
import type { NavListItemType } from './_constants/nav-tabs';

type Props = {
  items: NavListItemType[];
};

export default function NavBar({ items }: Props) {
  return (
    <nav className="flex items-center justify-between bg-gray-200 p-4">
      <h1>CE Smart Career 2024</h1>
      <ul className="flex space-x-6 font-bold">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
