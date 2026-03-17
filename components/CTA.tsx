"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#4B0082] rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#FF7F50] rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white rounded-full blur-3xl opacity-10" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Discover Your Signature Style
            </h2>

            <p className="text-gray-200 text-lg mb-10 max-w-2xl leading-relaxed">
              Explore timeless pieces designed for confidence, elegance, and everyday comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#FF7F50] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#ff6b36] transition-all hover:shadow-[0_8px_30px_rgb(255,127,80,0.4)]">
                Shop Now
              </button>

              <button className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                View Collection
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}