import React, { useMemo, useState } from "react";
import { assets, testimonials as guestReviews } from "../assets/assets";
import { useNavigate } from "react-router-dom";

import AnimatedPage from "../components/AnimatedPage";
import Reveal from "../components/Reveal";

const Experience = () => {
  const navigate = useNavigate();

  const categories = [
    { key: "All", label: "All Experiences" },
    { key: "nature", label: "🌄 Nature & Sightseeing" },
    { key: "adventure", label: "🏔 Adventure" },
    { key: "wellness", label: "🧘 Wellness" },
    { key: "food", label: "🍽 Food & Culture" },
    { key: "inhouse", label: "🏡 In-house Experiences" },
  ];

  const data = [
    {
      id: 1,
      title: "Guided Nature Walk",
      desc: "Explore hidden trails with a local naturalist.",
      duration: "2-3 hrs",
      price: "Included with stay",
      category: "nature",
      image: assets.guidHiking,
      featured: false,
    },
    {
      id: 2,
      title: "Sunrise Mountain Hike",
      desc: "A sunrise trek to breathtaking viewpoints.",
      duration: "4 hrs",
      price: "₹1200",
      category: "adventure",
      image: assets.sunriseHiking,
      featured: true,
    },
    {
      id: 3,
      title: "Wellness Yoga Session",
      desc: "Morning yoga with valley views and guided breathing.",
      duration: "1 hr",
      price: "Included with stay",
      category: "wellness",
      image: assets.yogaSession,
      featured: false,
    },
    {
      id: 4,
      title: "Sikkimese Cooking Class",
      desc: "Learn regional recipes and dine with hosts.",
      duration: "2 hrs",
      price: "₹800",
      category: "food",
      image: assets.cookingClass,
      featured: false,
    },
    {
      id: 5,
      title: "In-house Birdwatching",
      desc: "Guided birdwatching right in the hotel garden.",
      duration: "1.5 hrs",
      price: "Included with stay",
      category: "inhouse",
      image: assets.birdWatching,
      featured: false,
    },
    {
      id: 6,
      title: "Photography Walk",
      desc: "Capture the best local vistas with a pro photographer.",
      duration: "3 hrs",
      price: "₹1000",
      category: "nature",
      image: assets.photoWalk,
      featured: false,
    },
  ];

  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return data;
    return data.filter((d) => d.category === active);
  }, [active]);

  const featured = data.find((d) => d.featured) || data[0];

  return (
    <AnimatedPage className="pt-28 pb-24 bg-linear-to-br from-slate-50 via-white to-slate-100">
      {/* HERO (full-width) */}
      <div className="w-full mb-12 px-4">
        <div className="relative rounded-3xl overflow-hidden h-64 md:h-96 mx-auto">
          <img
            src="https://i.pinimg.com/1200x/47/da/2d/47da2d09a9bb2394dd764adc789ab193.jpg"
            alt="hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-3xl md:text-5xl font-playfair font-semibold max-w-7xl mx-auto">
              Experiences That Make Your Stay Unforgettable
            </h1>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              From serene nature walks to thrilling adventures — pick
              experiences designed to make your trip memorable.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Categories */}
        <Reveal className="mb-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`px-4 py-2 rounded-full transition shadow-sm focus:outline-none ${
                  active === c.key
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-700 hover:shadow-md"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((exp) => (
            <Reveal key={exp.id}>
              <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="relative h-44">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 text-xs px-2 py-1 rounded-full font-semibold">
                    {exp.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {exp.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-800">
                      {exp.price}
                    </div>
                    <button
                      onClick={() => navigate("/rooms")}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm transition"
                    >
                      {exp.price === "Included with stay" ? "Reserve" : "Book"}
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured Experience */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-playfair font-semibold">
              {featured.title}
            </h2>
            <p className="text-gray-600 mt-4">{featured.desc}</p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Experienced local guide</li>
              <li>All equipment and refreshments included</li>
              <li>Flexible timing and private groups available</li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={() => navigate("/rooms")}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-full"
              >
                Book this experience
              </button>
              <div className="text-sm text-gray-500">
                From <span className="font-semibold">{featured.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Moments */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold">Guest Moments</h3>
          <p className="text-gray-600 mt-2">
            Real reviews from guests who tried our experiences.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {(guestReviews || []).slice(0, 3).map((g) => (
              <div key={g.id} className="bg-white rounded-2xl p-4 shadow-md">
                <div className="flex items-center gap-3">
                  <img
                    src={g.image}
                    alt={g.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{g.name}</div>
                    <div className="text-sm text-gray-500">{g.address}</div>
                    <div className="text-yellow-500 mt-1">
                      {"★".repeat(g.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-3 text-sm">{g.review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-zinc-800 text-white p-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">
              Ready to Experience More Than Just a Stay?
            </h3>
            <p className="mt-2 text-indigo-100">
              Find and book unique experiences to elevate your trip.
            </p>
          </div>
          <div>
            <button
              onClick={() => navigate("/rooms")}
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Book Your Experience
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Experience;
