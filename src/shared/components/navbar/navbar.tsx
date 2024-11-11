'use client';

import { useState, useEffect } from 'react';
import { Root, Trigger, Content, Arrow } from '@radix-ui/react-popover';
import { NAV_LINKS } from './_constants';
import Link from 'next/link';

export function NavBar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((navLink) =>
      document.querySelector(navLink.href),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.8,
      },
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-linear-orange-gray p-4">
      <h1 className="font-bold">CE Smart Career 2024</h1>

      <Root onOpenChange={(open) => setIsMenuOpen(open)}>
        <Trigger className="md:hidden" aria-label="Open Menu">
          <svg
            className={`h-6 w-6 ${isMenuOpen ? 'text-white' : 'hover:drop-shadow'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </Trigger>

        <Content
          align="start"
          sideOffset={5}
          className="w-full rounded-lg bg-black p-4 text-white shadow-md md:hidden"
        >
          <ul className="flex flex-col space-y-4">
            {NAV_LINKS.map((navLink, index) => (
              <li key={index}>
                <Link
                  href={navLink.href}
                  className={`block ${
                    activeSection === navLink.href.slice(1)
                      ? 'text-orange-200 underline underline-offset-4 transition-colors'
                      : 'hover:text-shadow-orange text-white transition-colors'
                  }`}
                >
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
          <Arrow className="fill-current text-white" />
        </Content>
      </Root>

      <ul className="mx-2 hidden space-x-6 font-bold md:flex">
        {NAV_LINKS.map((navLink, index) => (
          <li key={index}>
            <Link
              href={navLink.href}
              className={`${
                activeSection === navLink.href.slice(1)
                  ? 'text-orange-200 underline underline-offset-4 transition-colors'
                  : 'text-white transition-colors hover:text-orange-300'
              }`}
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
