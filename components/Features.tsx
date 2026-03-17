"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, CreditCard } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Global Delivery",
    desc: "Enjoy complimentary express shipping on all orders over $150.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Crafted with the finest materials for longevity and pure comfort.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    desc: "Shop with confidence using our 100% secure checkout process.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group flex flex-col items-center p-10 rounded-3xl bg-[#F0F8FF] hover:bg-[#4B0082] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl"
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-[#4B0082] group-hover:scale-110 transition-transform">
                <feat.icon size={28} />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-3">
                {feat.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 group-hover:text-gray-200">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}