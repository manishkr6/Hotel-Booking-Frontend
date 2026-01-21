import React, { useState } from "react";
import { assets } from "../assets/assets";
import Reveal from "./Reveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      console.log("Contact submitted:", form);
      setForm({ name: "", email: "", message: "" });
      setSending(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }, 900);
  };

  return (
    <div>
      {/* Hero banner */}
      <div className="relative h-56 md:h-72 lg:h-96 overflow-hidden">
        <img
          src={assets.contactImg}
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-playfair font-semibold">
            Contact Us
          </h1>
          <nav className="text-sm text-white/80 mt-2">
            <a href="/" className="underline">
              Home
            </a>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>
        </div>
      </div>

      {/* Main contact block */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left: info */}
              <div className=" bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-md transition-all duration-500 ease-out hover:shadow-2xl hover:border-red-300 hover:shadow-red-200/50 animate-fade-slide">
                <p className="text-sm text-red-500 uppercase tracking-wide">
                  Contact Us
                </p>

                <h2 className="text-2xl md:text-4xl font-playfair text-gray-900 mt-2">
                  Get In Touch
                </h2>

                <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                  Have a question or need help with your booking? Reach us by
                  phone, email or send a message using the form.
                </p>

                <div className="mt-6 md:mt-8 space-y-4 md:space-y-5 text-gray-700">
                  {/* Address */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-red-500 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 11h8v2H8z" />
                    </svg>
                    <div>
                      <div className="text-xs md:text-sm text-gray-500">
                        Address
                      </div>
                      <div className="text-sm font-medium">
                        Gangtok, Sikkim 737101
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-red-500 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 8V7l-3 2-2-1-3 2v6l3-2 2 1 3-2V8z" />
                    </svg>
                    <div>
                      <div className="text-xs md:text-sm text-gray-500">
                        Phone
                      </div>
                      <div className="text-sm font-medium">
                        <a
                          href={`tel:${
                            assets?.hotelDummyData?.contact || "+0123456789"
                          }`}
                          className="text-red-600 hover:underline"
                        >
                          {assets?.hotelDummyData?.contact || "+0123456789"}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-red-500 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2 6h20v2H2z" />
                    </svg>
                    <div>
                      <div className="text-xs md:text-sm text-gray-500">
                        Email
                      </div>
                      <div className="text-sm font-medium">
                        <a
                          href="mailto:support@example.com"
                          className="text-red-600 hover:underline"
                        >
                          support@example.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="pt-4 flex items-center gap-3 md:gap-4">
                    <a
                      href="#"
                      className=" w-8 h-8 md:w-9 md:h-9 rounded-full  bg-red-50 flex items-center justify-center shadow-sm hover:bg-red-100 hover:shadow-md transition"
                    >
                      <img
                        src={assets.instagramIcon}
                        alt="insta"
                        className="w-4"
                      />
                    </a>

                    <a
                      href="#"
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-red-50 flex items-center justify-center shadow-sm hover:bg-red-100 hover:shadow-md transition"
                    >
                      <img src={assets.facebookIcon} alt="fb" className="w-4" />
                    </a>

                    <a
                      href="#"
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-red-50 flex items-center justify-center shadow-sm hover:bg-red-100 hover:shadow-md transition"
                    >
                      <img src={assets.twitterIcon} alt="tw" className="w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: form card */}
              <div className="animate-fade-slide">
                <div
                  className="
      bg-white
      rounded-2xl
      border border-gray-200
      shadow-md
      p-5 md:p-8
      transition-all duration-500
      hover:shadow-2xl
      hover:border-red-300
      hover:shadow-red-200/50
    "
                >
                  <h3 className="font-playfair text-lg md:text-xl text-gray-900">
                    Write Us A Message
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-4 grid grid-cols-1 gap-3 md:gap-4"
                  >
                    {/* Name */}
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="
          w-full
          rounded-full
          border border-gray-200
          px-4 py-2.5
          text-sm md:text-base
          outline-none
          transition
          focus:ring-2 focus:ring-red-200
          focus:border-red-300
        "
                    />

                    {/* Email */}
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      type="email"
                      className="
          w-full
          rounded-full
          border border-gray-200
          px-4 py-2.5
          text-sm md:text-base
          outline-none
          transition
          focus:ring-2 focus:ring-red-200
          focus:border-red-300
        "
                    />

                    {/* Message */}
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Message"
                      required
                      className="
          w-full
          rounded-xl
          border border-gray-200
          px-4 py-3
          text-sm md:text-base
          outline-none
          resize-none
          transition
          focus:ring-2 focus:ring-red-200
          focus:border-red-300
        "
                    />

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
                      <div className="text-xs md:text-sm text-gray-500">
                        We'll get back within 24 hours
                      </div>

                      <button
                        type="submit"
                        disabled={sending}
                        className="
            bg-red-500
            hover:bg-red-600
            active:scale-95
            text-white
            px-5 py-2.5
            rounded-full
            text-sm md:text-base
            shadow-md
            hover:shadow-lg
            transition-all
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
                      >
                        {sending ? "Sending..." : "Send Message"}
                      </button>
                    </div>

                    {/* Success Message */}
                    {success && (
                      <div className="mt-3 text-sm text-green-600 animate-fade-in">
                        Thanks! Your message has been sent.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-12 animate-fade-slide">
  <div
    className="
      bg-white
      rounded-2xl
      p-6 md:p-8
      border border-gray-200
      shadow-md
      hover:shadow-2xl
      hover:border-red-300
      hover:shadow-red-200/50
      transition-all duration-500
    "
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
      
      {/* Happy Clients */}
      <div className="py-4 rounded-xl hover:bg-red-50 transition">
        <div className="text-2xl md:text-3xl font-semibold text-red-600">
          20k
        </div>
        <div className="mt-1 text-xs md:text-sm text-gray-600">
          Happy Clients
        </div>
      </div>

      {/* Awards */}
      <div className="py-4 rounded-xl hover:bg-red-50 transition">
        <div className="text-2xl md:text-3xl font-semibold text-red-600">
          250+
        </div>
        <div className="mt-1 text-xs md:text-sm text-gray-600">
          Awards
        </div>
      </div>

      {/* Active Members */}
      <div className="py-4 rounded-xl hover:bg-red-50 transition">
        <div className="text-2xl md:text-3xl font-semibold text-red-600">
          15k
        </div>
        <div className="mt-1 text-xs md:text-sm text-gray-600">
          Active Members
        </div>
      </div>

      {/* Tour Destinations */}
      <div className="py-4 rounded-xl hover:bg-red-50 transition">
        <div className="text-2xl md:text-3xl font-semibold text-red-600">
          10+
        </div>
        <div className="mt-1 text-xs md:text-sm text-gray-600">
          Tour Destinations
        </div>
      </div>

    </div>
  </div>
</div>


            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-lg">
              <iframe
                title="Gangtok map"
                src="https://www.google.com/maps?q=Gangtok+Sikkim&output=embed"
                className="w-full h-64 md:h-80 border-0 filter saturate-150 contrast-105 shadow-lg rounded-lg"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
