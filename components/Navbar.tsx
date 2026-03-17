"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open (pro detail 🔥)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="#home"
          className="text-3xl font-extrabold tracking-tight text-[#4B0082]"
        >
          AURA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-[#4B0082] font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <button className="bg-[#4B0082] text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#3a0066] transition-all hover:shadow-lg">
            <ShoppingBag size={18} />
            <span>Cart (0)</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#4B0082]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white px-6 py-6 shadow-xl border-t"
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 font-medium text-lg"
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-[#4B0082] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2">
              <ShoppingBag size={18} />
              Cart (0)
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}