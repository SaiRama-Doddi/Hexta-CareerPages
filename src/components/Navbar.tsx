'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/navbar/hextasphere-logo.png';

interface NavItem {
    name: string;
    href: string;
}

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navItems: NavItem[] = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Clients', href: '/clients' },
        { name: 'Careers', href: '/careers' },
          { name: 'Contact us', href: '/contact' },
    ];

    return (
      <nav className="bg-white shadow-md px-2 py-2 fixed top-0 w-full z-50">

            <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src={logo}
                        alt="Hextasphere Logo"
                        width={200}         // increased from 160
                        height={80}         // increased from 60
                        className="h-auto w-auto max-h-16" // increased max height
                        priority
                    />
                </Link>


                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-3xl">
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Links */}
            {menuOpen && (
                <div className="md:hidden flex flex-col space-y-3 mt-3 px-4 pb-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 text-base font-medium hover:text-blue-600"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
