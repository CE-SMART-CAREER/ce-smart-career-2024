import { NAV_LINKS } from './_constants';
import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="bg-black-200 flex items-center justify-between bg-linear-orange-gray p-4">
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
