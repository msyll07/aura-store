"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12"
    >
      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#FF7F50] font-semibold tracking-wider uppercase mb-4 text-sm"
        >
          New Fall Collection 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
        >
          Elevate Your Style with{" "}
          <span className="text-[#4B0082]">Aura</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 mb-8 max-w-md"
        >
          Discover premium fashion crafted for the modern individual. Unleash
          your confidence with our exclusive, hand-picked garments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          {/* Button 1 */}
          <a href="#products">
            <button className="bg-[#4B0082] text-white px-8 py-4 rounded-full font-medium hover:bg-[#3a0066] transition-all hover:shadow-[0_8px_30px_rgb(75,0,130,0.3)] flex items-center gap-2">
              Shop Now <ArrowRight size={18} />
            </button>
          </a>

          {/* Button 2 */}
          <a href="#products">
            <button className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-medium hover:border-[#4B0082] hover:text-[#4B0082] transition-all">
              View Collection
            </button>
          </a>
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 relative h-[500px] md:h-[650px]"
      >
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop"
          alt="Aura Fashion Model"
          fill
          className="object-cover rounded-[3rem] shadow-2xl transition-transform duration-700 hover:scale-105"
          priority
        />

        {/* Decorative blur */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FF7F50] rounded-full blur-3xl opacity-30 -z-10"></div>
      </motion.div>
    </section>
  );
}