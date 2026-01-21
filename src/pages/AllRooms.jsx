import React, { useState, useMemo, useEffect } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate, useSearchParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import AnimatedPage from "../components/AnimatedPage";
import Reveal from "../components/Reveal";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [openFilters, setOpenFilters] = useState(false);

  // ✅ FILTER STATES
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Get search query & district from URL params
  useEffect(() => {
    const search = searchParams.get("search");
    const district = searchParams.get("district");

    if (search) {
      setSearchQuery(decodeURIComponent(search));
    }

    if (district) {
      setSelectedDistrict(decodeURIComponent(district));
    } else {
      setSelectedDistrict("");
    }
  }, [searchParams]);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  // Price ranges in INR (thousands, max 10,000)
  const priceRanges = [
    "0 to 2000",
    "2000 to 4000",
    "4000 to 6000",
    "6000 to 10000",
  ];
  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  // ✅ HANDLE CHECKBOX
  const handleRoomType = (checked, value) => {
    setSelectedRoomTypes((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const handlePrice = (checked, value) => {
    setSelectedPrices((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  // ✅ FILTER + SORT LOGIC
  const filteredRooms = useMemo(() => {
    let rooms = [...roomsDummyData];

    // District filter - by hotel city (East/West/North/South Sikkim)
    if (selectedDistrict) {
      const districtLower = selectedDistrict.toLowerCase();
      rooms = rooms.filter(
        (room) => room.hotel.city?.toLowerCase() === districtLower
      );
    }

    // Search filter - filter by hotel name, city, or address
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      rooms = rooms.filter((room) => {
        const hotelName = room.hotel.name?.toLowerCase() || "";
        const city = room.hotel.city?.toLowerCase() || "";
        const address = room.hotel.address?.toLowerCase() || "";
        return (
          hotelName.includes(query) ||
          city.includes(query) ||
          address.includes(query)
        );
      });
    }

    if (selectedRoomTypes.length > 0) {
      rooms = rooms.filter((room) => selectedRoomTypes.includes(room.roomType));
    }

    if (selectedPrices.length > 0) {
      rooms = rooms.filter((room) => {
        const priceInINR = room.pricePerNight; // stored in INR
        return selectedPrices.some((range) => {
          const [min, max] = range.split(" to ").map(Number);
          return priceInINR >= min && priceInINR <= max;
        });
      });
    }

    if (sortBy === "Price Low to High") {
      rooms.sort((a, b) => a.pricePerNight - b.pricePerNight);
    }

    if (sortBy === "Price High to Low") {
      rooms.sort((a, b) => b.pricePerNight - a.pricePerNight);
    }

    if (sortBy === "Newest First") {
      rooms.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return rooms;
  }, [
    selectedRoomTypes,
    selectedPrices,
    sortBy,
    searchQuery,
    selectedDistrict,
  ]);

  return (
    <AnimatedPage className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div>
        <Reveal>
          <div className="flex flex-col items-start text-left">
            <h1 className="font-playfair text-4xl md:text-[40px]">
              Hotel Rooms
            </h1>
            <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
              Take advantage of our limited-time offers and special packages to
              enhance your stay and create unforgettable memories.
            </p>
            <div className="mt-4 flex items-center gap-2 w-full max-w-md">
              <div className="relative flex-1">
                <img
                  src={assets.searchIcon}
                  alt="search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 invert opacity-50"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value.trim()) {
                      navigate(
                        `/rooms?search=${encodeURIComponent(
                          e.target.value.trim()
                        )}`,
                        { replace: true }
                      );
                    } else {
                      navigate("/rooms", { replace: true });
                    }
                  }}
                  placeholder="Search hotels, cities..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md outline-none focus:border-gray-500 text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      navigate("/rooms", { replace: true });
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {filteredRooms.map((room) => (
          <Reveal key={room._id}>
            <div className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0">
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                src={room.images[0]}
                alt=""
                className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
              />

              <div className="md:w-1/2 flex flex-col gap-2">
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  onClick={() => navigate(`/rooms/${room._id}`)}
                  className="text-gray-800 text-3xl font-playfair cursor-pointer"
                >
                  {room.hotel.name}
                </p>

                <div className="flex items-center">
                  <StarRating />
                  <p className="ml-2">200+ reviews</p>
                </div>

                <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                  <img src={assets.locationIcon} alt="" />
                  <span>{room.hotel.address}</span>
                </div>

                <div className="flex flex-wrap items-center mt-4 mb-6 gap-4">
                  {room.amenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
                    >
                      <img src={facilityIcons[item]} className="w-5 h-5" />
                      <p className="text-xs">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xl font-medium text-gray-700">
                  ₹{room.pricePerNight.toLocaleString("en-IN")} /night
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* FILTERS */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div className="flex items-center justify-between px-5 py-2.5 border-b">
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <span
            onClick={() => setOpenFilters(!openFilters)}
            className="lg:hidden cursor-pointer text-xs"
          >
            {openFilters ? "HIDE" : "SHOW"}
          </span>
        </div>

        <div className={`${openFilters ? "block" : "hidden lg:block"} pb-5`}>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
            {roomTypes.map((room) => (
              <CheckBox
                key={room}
                label={room}
                selected={selectedRoomTypes.includes(room)}
                onChange={handleRoomType}
              />
            ))}
          </div>

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range) => (
              <CheckBox
                key={range}
                label={`₹ ${Number(range.split(" to ")[0]).toLocaleString(
                  "en-IN"
                )} to ₹ ${Number(range.split(" to ")[1]).toLocaleString(
                  "en-IN"
                )}`}
                selected={selectedPrices.includes(range)}
                onChange={(checked) => handlePrice(checked, range)}
              />
            ))}
          </div>

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOptions.map((option) => (
              <RadioButton
                key={option}
                label={option}
                selected={sortBy === option}
                onChange={setSortBy}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default AllRooms;
