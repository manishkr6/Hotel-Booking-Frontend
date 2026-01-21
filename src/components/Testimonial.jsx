import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonial = () => {
  // 🧠 AI-like smart ordering
  const smartTestimonials = [...testimonials].sort(
    (a, b) => b.review.length - a.review.length
  );

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-32">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose LuxLodge for their exclusive and luxurious accommodations around the world."
      />

      {/* ✅ NORMAL FLOW LAYOUT (IMPORTANT) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {smartTestimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            animate={{
              y: [0, -10, 0],
            }}
            className="bg-white p-6 rounded-xl shadow-xl
            hover:shadow-2xl hover:shadow-red-200/40
            transform-gpu"
          >
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-playfair text-xl">
                  {testimonial.name}
                </p>
                <p className="text-gray-500">
                  {testimonial.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              <StarRating />
            </div>

            <p className="text-gray-500 mt-4">
              "{testimonial.review}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
