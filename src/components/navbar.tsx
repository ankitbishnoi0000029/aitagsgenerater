'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { navbar } from '../store/data';

export default function Navbar() {

    return (
        <nav className="w-full bg-black text-white border-b border-gray-900">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" width={100} height={40} alt="Logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="flex items-center gap-2">
                    {navbar.map((item, index) => (
                        <Link
                            key={index}
                            href={item.route}
                            className="flex items-center justify-center md:justify-start gap-2 px-3 md:px-4 py-2 text-sm text-gray-300 hover:bg-white hover:text-black rounded-xl transition"
                        >
                            <Image src={item.icon} alt={item.title} width={18} height={18} />

                            {/* Show ONLY on desktop */}
                            <span className="hidden lg:inline">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}