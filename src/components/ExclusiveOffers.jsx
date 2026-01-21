import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: 18,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ExclusiveOffers = () => {
  return (
    <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Title
            align="left"
            title="Exclusive Offers"
            subTitle="Take advantages of our limited-time offers and special packages to enhance your stay and create unforgettale memories."
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12"
        >
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icons"
            className="group-hover:translate-x-1 transition-all"
          />
        </motion.button>
      </div>

      {/* Offers Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 perspective-container"
      >
        {exclusiveOffers.map((item) => (
          <motion.div
            key={item._id}
            variants={cardVariants}
            whileHover={{
              rotateX: -6,
              rotateY: 6,
              scale: 1.04,
            }}
            className="exclusive-card group relative overflow-hidden flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-center bg-size-[100%] hover:bg-size-[112%] transition-[background-size] duration-700 ease-out"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Discount badge */}
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
              {item._id}% OFF
            </p>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-2xl font-medium font-playfair">
                {item.title}
              </p>
              <p>{item.description}</p>
              <p className="text-xs text-white/70 mt-3">
                Expires {item.expiryDate}
              </p>
            </div>

            {/* CTA */}
            <button className="relative z-10 flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
              View Offers
              <img
                className="invert group-hover:translate-x-1 transition-all"
                src={assets.arrowIcon}
                alt=""
              />
            </button>

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/35 to-black/15 group-hover:from-black/45 group-hover:via-black/25 group-hover:to-black/10 transition-colors duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExclusiveOffers;
