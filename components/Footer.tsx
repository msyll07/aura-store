"use client";

import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-10 rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight mb-6 text-white">
              AURA
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A modern fashion experience crafted for elegance, confidence, and timeless style.
            </p>

            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7F50] transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Shop</h4>
            <ul className="space-y-3 text-gray-400">
              {["New Arrivals", "Bestsellers", "Women", "Men"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#FF7F50] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              {["FAQ", "Shipping & Returns", "Track Order", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#FF7F50] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Get updates, new arrivals, and exclusive offers.
            </p>

            <div className="flex bg-white/10 rounded-full p-1 overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-none outline-none px-4 w-full text-sm text-white placeholder-gray-400"
              />
              <button className="bg-[#4B0082] p-3 rounded-full hover:bg-[#FF7F50] transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          
          <p>
            © {new Date().getFullYear()} Aura Store. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}