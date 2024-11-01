import { NAV_LINKS } from './_constants';
import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-gray-200 p-4">
      <h1>CE Smart Career 2024</h1>
      <ul className="flex space-x-6 font-bold">
        {NAV_LINKS.map((navLink, index) => (
          <li key={index}>
            <Link href={navLink.href}>{navLink.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
