import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import SikkimDistrict from "../components/SikkimDistrict";

import AnimatedPage from "../components/AnimatedPage";
import Reveal from "../components/Reveal";

const Home = () => {
  return (
    <AnimatedPage>
      <Hero />
      <Reveal className="mt-12">
        <SikkimDistrict />
      </Reveal>
      <Reveal className="mt-12">
        <FeaturedDestination />
      </Reveal>
      <Reveal className="mt-12">
        <ExclusiveOffers />
      </Reveal>
      <Reveal className="mt-12">
        <Testimonial />
      </Reveal>
      <Reveal className="mt-12">
        <NewsLetter />
      </Reveal>
    </AnimatedPage>
  );
};

export default Home;
