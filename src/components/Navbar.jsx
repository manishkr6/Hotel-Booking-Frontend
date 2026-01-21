import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ SIMPLE AUTH CHECK (NO CLERK)
  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    } else {
      setIsScrolled(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle search and navigate to rooms page
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/rooms?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-9 ${!isScrolled && "invert opacity-80"}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <div className="relative">
          <img
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            src={assets.searchIcon}
            alt="search"
            className={`${
              isScrolled && `invert`
            } h-7 transition-all duration-500 cursor-pointer`}
          />
          {isSearchOpen && (
            <form
              onSubmit={handleSearch}
              className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 min-w-80 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 border-b border-gray-200 pb-2 mb-2">
                <img
                  src={assets.searchIcon}
                  alt="search"
                  className="h-5 invert"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search hotels, cities..."
                  className="flex-1 outline-none text-gray-700"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Search
              </button>
            </form>
          )}
        </div>

        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/my-bookings")}
              className="flex items-center gap-1"
            >
              <BookIcon />
              <span>My Bookings</span>
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/");
              }}
              className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <div className="relative">
          <img
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            src={assets.searchIcon}
            alt="search"
            className={`${isScrolled && `invert`} h-5 cursor-pointer`}
          />
          {isSearchOpen && (
            <form
              onSubmit={handleSearch}
              className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 min-w-64 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 border-b border-gray-200 pb-2 mb-2">
                <img
                  src={assets.searchIcon}
                  alt="search"
                  className="h-5 invert"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search hotels..."
                  className="flex-1 outline-none text-gray-700 text-sm"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors text-sm"
              >
                Search
              </button>
            </form>
          )}
        </div>
        {isLoggedIn && (
          <button onClick={() => navigate("/my-bookings")}>
            <BookIcon />
          </button>
        )}
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt="menuIcon"
          className={`${isScrolled && `invert`} h-4`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close menu" className="h-6" />
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        {!isLoggedIn && (
          <button
            onClick={() => navigate("/login")}
            className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
          >
            Login
          </button>
        )}

        {isLoggedIn && (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            className="border px-6 py-1 rounded-full"
          >
            Logout
          </button>
        )}
      </div>

      {/* Click outside to close search */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsSearchOpen(false);
            setSearchQuery("");
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
