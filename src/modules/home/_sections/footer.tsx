import { Icon } from '@iconify/react';
import { contacts } from '../_constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-linear-black-orange-hori p-8 py-24 text-center lg:py-32">
      <h2 className="mb-12 w-full text-2xl font-bold text-orange-300 sm:text-3xl md:text-4xl">
        ติดตามข่าวสาร
      </h2>
      <div className="flex justify-center space-x-12">
        {contacts.map((contact, index) => (
          <Link
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={contact.icon} className="text-[64px] text-white" />
          </Link>
        ))}
      </div>
    </footer>
  );
}
