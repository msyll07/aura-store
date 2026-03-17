"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Showcase() {
  return (
    <section className="py-28 bg-[#F0F8FF]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 relative h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
            alt="Featured Product"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-block bg-[#FF7F50]/10 text-[#FF7F50] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Designer Spotlight
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">
            The Autumn Elegance <br /> Collection
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Immerse yourself in our finest curation of ethically sourced materials and timeless designs. The Autumn Elegance line brings warmth, comfort, and undeniable sophistication to your everyday wardrobe.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "100% Organic Cashmere",
              "Hand-stitched detailing",
              "Sustainable manufacturing",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-[#4B0082] mr-3"></div>
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-[#4B0082] text-white px-8 py-4 rounded-full font-medium hover:bg-[#3a0066] transition-all hover:shadow-xl">
            Explore the Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}