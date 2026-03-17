"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Minimalist Beige Coat",
    price: "$189.00",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Silk Evening Blouse",
    price: "$95.00",
    image:
      "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Tailored Linen Trousers",
    price: "$120.00",
    image:
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Classic Leather Tote",
    price: "$245.00",
    image:
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Oversized Knit Sweater",
    price: "$85.00",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
  },
  {
  id: 6,
  title: "Signature Pearl Necklace",
  price: "$150.00",
  image:
    "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop",
}
];

export default function Products() {
  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Trending Now
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              Explore our most popular pieces of the season.
            </p>
          </div>

          <button className="hidden md:block text-[#4B0082] font-semibold hover:text-[#FF7F50] transition-colors">
            View All Products →
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group cursor-pointer"
            >
              {/* IMAGE CARD */}
              <div className="relative h-96 w-full mb-6 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Button */}
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#4B0082] px-6 py-3 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-6 group-hover:translate-y-0 shadow-xl">
                  Quick Add
                </button>
              </div>

              {/* INFO */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#4B0082] transition-colors">
                  {product.title}
                </h3>
                <span className="text-lg font-bold text-[#FF7F50]">
                  {product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}