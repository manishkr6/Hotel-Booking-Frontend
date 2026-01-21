import React from "react";

import AnimatedPage from "../components/AnimatedPage";
import Reveal from "../components/Reveal";
import Gallery from "../components/Gallery";

const About = () => {
  const highlights = [
    {
      title: "95% happy guests",
      desc: "Consistently rated high for comfort & service.",
    },
    {
      title: "4 districts in Sikkim",
      desc: "Curated stays across East, West, North & South Sikkim.",
    },
    {
      title: "Instant booking",
      desc: "Real-time availability with secure checkout.",
    },
  ];

  const pillars = [
    {
      title: "Who We Are",
      desc: "A travel-first team obsessed with making every stay feel effortless, from browsing to check-out.",
    },
    {
      title: "Our Mission",
      desc: "Remove the friction from booking so you focus on the journey, not the logistics.",
    },
    {
      title: "What We Offer",
      list: [
        "Luxury, boutique, and budget stays",
        "Verified partners and clear policies",
        "Flexible dates & transparent pricing",
        "In-app support when you need it",
      ],
    },
    {
      title: "Built With ❤️",
      desc: "Crafted with React + Tailwind for speed, clarity, and a delightfully smooth experience.",
    },
  ];

  const timeline = [
    {
      label: "Discover",
      detail: "Filter by district, price, and style to see curated stays.",
    },
    {
      label: "Decide",
      detail: "Deep room details, photos, amenities, and local context.",
    },
    { label: "Book", detail: "Secure, instant confirmation—no hidden steps." },
    {
      label: "Enjoy",
      detail: "Check-in guidance, local tips, and responsive support.",
    },
  ];

  return (
    <AnimatedPage className="pt-28 pb-20 bg-linear-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <div className="relative bg-linear-to-r from-indigo-400 via-blue-400 to-sky-400 rounded-3xl text-white p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_40%)]" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                About Us
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
                Crafted for travelers who want clarity, comfort, and zero
                friction.
              </h1>
              <p className="mt-4 text-white/90 max-w-2xl">
                We connect you to handpicked stays with honest details,
                transparent pricing, and fast, secure booking—so every trip
                starts with confidence.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Curated stays", "Seamless booking", "Local insights"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-white/15 text-sm backdrop-blur border border-white/10 hover:bg-white/25 transition"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur rounded-2xl px-4 py-3 border border-white/10 shadow-sm hover:bg-white/20 transition"
                >
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-white/85 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <Reveal>
          <Gallery className="mt-10" />
        </Reveal>

        {/* PILLARS */}
        <Reveal>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {pillars.map((item, idx) => {
              const borderGlow = [
                "from-sky-200/40 via-white to-sky-200/40",
                "from-indigo-200/40 via-white to-indigo-200/40",
                "from-violet-200/40 via-white to-violet-200/40",
                "from-blue-200/40 via-white to-blue-200/40",
              ];

              const softBg = [
                "bg-sky-50/70",
                "bg-indigo-50/70",
                "bg-violet-50/70",
                "bg-blue-50/70",
              ];

              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-px bg-linear-to-br ${borderGlow[idx]} hover:-translate-y-1 transition-all`}
                >
                  <div
                    className={`rounded-2xl p-6 h-full shadow-md hover:shadow-xl transition ${softBg[idx]}`}
                  >
                    <h2 className="text-xl font-semibold mb-3 text-gray-900">
                      {item.title}
                    </h2>

                    {item.list ? (
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {item.list.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* TIMELINE */}
        <Reveal>
          <div className="mt-16 bg-linear-to-r from-sky-50 via-indigo-50 to-blue-50 rounded-3xl p-px shadow-lg">
            <div className="bg-white rounded-[22px] p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                How we make it easy
              </h3>

              <div className="grid md:grid-cols-4 gap-6">
                {timeline.map((step, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl bg-white p-5 border border-slate-100 hover:border-indigo-300 hover:-translate-y-1 hover:shadow-xl transition"
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold mb-3 group-hover:scale-110 transition">
                      {idx + 1}
                    </div>
                    <p className="font-semibold text-gray-900">{step.label}</p>
                    <p className="text-gray-600 text-sm mt-1">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* FOOTER NOTE */}
        <div className="mt-14 text-center">
          <p className="text-gray-500">
            Thank you for choosing us for your travel journey ✨
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
