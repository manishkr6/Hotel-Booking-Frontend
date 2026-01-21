import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
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
    scale: 0.94,
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

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20 overflow-hidden">
      {/* Title animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Title
          title="Featured Destination"
          subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
        />
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-wrap items-center justify-center gap-6 mt-20 perspective-container"
      >
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <motion.div
            key={room._id}
            variants={cardVariants}
            whileHover={{
              rotateX: -6,
              rotateY: 6,
              scale: 1.04,
            }}
            className="featured-card"
          >
            <HotelCard room={room} index={index} />
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="my-16 px-5 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All Destinations
      </motion.button>
    </section>
  );
};

export default FeaturedDestination;
