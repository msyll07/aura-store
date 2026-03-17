"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Client 01",
    role: "Fashion Enthusiast",
    text: "Amazing quality and attention to detail. This project showcases a very strong design and user experience.",
  },
  {
    name: "Client 02",
    role: "Creative Professional",
    text: "A clean and modern interface with smooth interactions. The overall experience feels premium and well-crafted.",
  },
  {
    name: "Client 03",
    role: "Business Owner",
    text: "Impressive layout and responsiveness. This project clearly demonstrates strong frontend development skills.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#F0F8FF]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Project Feedback
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Sample testimonials for demonstration purposes.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* STARS */}
              <div className="flex text-[#FF7F50] mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={20}
                    fill="currentColor"
                    className="mr-1"
                  />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-gray-700 italic mb-8 leading-relaxed">
                “{review.text}”
              </p>

              {/* USER */}
              <div className="flex items-center gap-4">
                {/* Avatar (Letter) */}
                <div className="w-[50px] h-[50px] rounded-full bg-[#4B0082] text-white flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    {review.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {review.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}