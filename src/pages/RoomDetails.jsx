import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Booking flow: handles availability check and booking with backend when available
// Falls back to a dev mock when VITE_MOCK_BOOKING or VITE_MOCK_AUTH is set to true

import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";
import AnimatedPage from "../components/AnimatedPage";
import Reveal from "../components/Reveal";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const navigate = useNavigate();

  // booking / availability state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestsCount, setGuestsCount] = useState(1);
  const [availabilityStatus, setAvailabilityStatus] = useState(null); // null | 'loading' | 'available' | 'unavailable'
  const [availabilityError, setAvailabilityError] = useState("");
  const [nights, setNights] = useState(0);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);

  // Helpers
  const diffDays = (start, end) => {
    const d1 = new Date(start);
    const d2 = new Date(end);
    if (isNaN(d1) || isNaN(d2)) return 0;
    const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
  };

  const mockEnabled =
    import.meta.env.VITE_MOCK_BOOKING === "true" ||
    import.meta.env.VITE_MOCK_AUTH === "true";

  // Check availability handler
  async function handleCheckAvailability(e) {
    e && e.preventDefault && e.preventDefault();
    setAvailabilityError("");
    setBookingError("");

    if (!checkIn || !checkOut) {
      setAvailabilityError("Please select both check-in and check-out dates.");
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      setAvailabilityError("Check-out must be after check-in.");
      return;
    }

    if (!guestsCount || guestsCount < 1) {
      setAvailabilityError("Please provide number of guests.");
      return;
    }

    const nightsCount = diffDays(checkIn, checkOut);
    setNights(nightsCount);
    setAvailabilityStatus("loading");

    try {
      const url = `http://localhost:5000/api/rooms/${id}/availability?checkIn=${encodeURIComponent(
        checkIn
      )}&checkOut=${encodeURIComponent(checkOut)}&guests=${encodeURIComponent(
        guestsCount
      )}`;

      const res = await fetch(url);
      let resJson = {};
      try {
        resJson = await res.json();
      } catch (e) {
        /* ignore */
      }

      if (!res.ok) {
        const msg = resJson?.message || `${res.status} ${res.statusText}`;
        setAvailabilityError(msg);
        setAvailabilityStatus("unavailable");
        return;
      }

      // Expecting server to return { available: boolean }
      if (typeof resJson.available === "boolean") {
        if (resJson.available) {
          setAvailabilityStatus("available");
        } else {
          setAvailabilityStatus("unavailable");
        }
      } else {
        // If no explicit flag, assume available on 200
        setAvailabilityStatus("available");
      }
    } catch (err) {
      console.error("Availability check error:", err);
      if (mockEnabled) {
        // Simulate available for demo purposes
        setAvailabilityStatus("available");
      } else {
        setAvailabilityError(
          "Network error: cannot reach availability service. Make sure backend is running."
        );
        setAvailabilityStatus(null);
      }
    }
  }

  // Booking handler
  async function handleBookHotel() {
    setBookingError("");
    setBookingSuccess(null);

    // Basic checks
    if (!checkIn || !checkOut || nights <= 0) {
      setBookingError("Please check availability first with valid dates.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      // redirect to login
      navigate("/login");
      return;
    }

    const totalPrice = nights * (room?.pricePerNight || 0);

    setBookingLoading(true);
    try {
      const url = "http://localhost:5000/api/bookings";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          roomId: id,
          checkIn,
          checkOut,
          guests: guestsCount,
          nights,
          totalPrice,
        }),
      });
      let resJson = {};
      try {
        resJson = await res.json();
      } catch (e) {
        /* ignore */
      }

      if (!res.ok) {
        const msg = resJson?.message || `${res.status} ${res.statusText}`;
        throw new Error(msg);
      }

      setBookingSuccess(resJson);
      // Optionally navigate to bookings page
      navigate("/my-bookings");
    } catch (err) {
      console.error("Booking error:", err);
      if (mockEnabled) {
        const fake = {
          bookingId: `MOCK-${Date.now()}`,
          roomId: id,
          checkIn,
          checkOut,
          guests: guestsCount,
          totalPrice: nights * room.pricePerNight,
        };
        // store a mock booking in localStorage for demo
        const prev = JSON.parse(localStorage.getItem("mockBookings") || "[]");
        prev.push(fake);
        localStorage.setItem("mockBookings", JSON.stringify(prev));
        setBookingSuccess(fake);
        navigate("/my-bookings");
      } else {
        setBookingError(err.message || "Failed to create booking");
      }
    } finally {
      setBookingLoading(false);
    }
  }
  return (
    room && (
      <AnimatedPage className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room Details  */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-playfair">
              {room.hotel.name}{" "}
              <span className="font-inter text-sm">({room.roomType})</span>
            </h1>
            <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
              20% OFF
            </p>
          </div>

          {/* Room Raiting  */}
          <div className="flex items-center gap-2 mt-2">
            <StarRating />
            <p className="ml-2">200+ reviews</p>
          </div>

          {/* Room Address  */}
          <div className="flex items-center gap-1 text-gray-500 mt-2">
            <img src={assets.locationIcon} alt="" />
            <span>{room.hotel.address}</span>
          </div>

          {/* Room Images  */}
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="lg:w-1/2 w-full">
              <img
                src={mainImage}
                alt=""
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
              {room?.images.length > 1 &&
                room.images.map((image, index) => (
                  <img
                    onClick={() => setMainImage(image)}
                    src={image}
                    key={index}
                    alt=""
                    className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                      mainImage === image && "outline-3 outline-orange-500"
                    }`}
                  />
                ))}
            </div>
          </div>

          {/* Room Highlights  */}
          <div className="flex flex-col md:flex-row md:justify-between mt-10">
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-playfair">
                Experience Luxury Like Never Before
              </h1>
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                  >
                    <img src={facilityIcons[item]} alt="" className="w-5 h-5" />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-2xl font-medium">
              ₹{room.pricePerNight.toLocaleString("en-IN")}/night
            </p>
          </div>

          {/* CheckIn & CheckOut Form  */}
          <form
            onSubmit={handleCheckAvailability}
            className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl"
          >
            <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
              <div className="flex flex-col">
                <label htmlFor="checkInDate" className="font-medium">
                  Check-In
                </label>
                <input
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  type="date"
                  id="checkInDate"
                  placeholder="Check-In"
                  className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                  required
                />
              </div>
              <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
              <div className="flex flex-col">
                <label htmlFor="checkOutDate" className="font-medium">
                  Check-Out
                </label>
                <input
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  type="date"
                  id="checkOutDate"
                  placeholder="Check-Out"
                  className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                  required
                />
              </div>
              <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
              <div className="flex flex-col">
                <label htmlFor="guests" className="font-medium">
                  Guests
                </label>
                <input
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  min={1}
                  type="number"
                  id="guests"
                  placeholder="0"
                  className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
            >
              {availabilityStatus === "loading"
                ? "Checking..."
                : "Check Availability"}
            </button>
          </form>

          {/* Availability Result & Booking Panel */}
          {availabilityError && (
            <div className="mt-6 max-w-6xl mx-auto text-center text-rose-500">
              {availabilityError}
            </div>
          )}

          {availabilityStatus === "available" && (
            <div className="mt-6 max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Rooms Available</h3>
              <p className="text-gray-600 mb-4">
                We found availability for your selected dates.
              </p>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">Nights</p>
                  <p className="text-lg font-medium">{nights}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price / night</p>
                  <p className="text-lg font-medium">
                    ₹{room.pricePerNight.toLocaleString("en-IN")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="text-lg font-medium">
                    ₹{(nights * room.pricePerNight).toLocaleString("en-IN")}
                  </p>
                </div>
                <div>
                  <button
                    onClick={handleBookHotel}
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dull transition-all"
                  >
                    {bookingLoading ? "Booking..." : "Book Hotel"}
                  </button>
                </div>
              </div>

              {bookingError && (
                <p className="text-rose-500 mt-4">{bookingError}</p>
              )}
              {bookingSuccess && (
                <div className="mt-4 text-green-600">
                  Booking confirmed! Reference:{" "}
                  {bookingSuccess.bookingId || bookingSuccess.id}
                </div>
              )}
            </div>
          )}

          {availabilityStatus === "unavailable" && (
            <div className="mt-6 max-w-6xl mx-auto bg-yellow-50 p-6 rounded-xl shadow-md text-gray-700">
              No rooms available for the selected dates. Try different dates.
            </div>
          )}

          {/* Common Specifications  */}
          <div className="mt-25 space-y-4">
            {roomCommonData.map((spec, index) => (
              <div className="flex items-start gap-2">
                <img src={spec.icon} alt="" className="w-6.5" />
                <div>
                  <p className="text-base">{spec.title}</p>
                  <p className="text-gray-500">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl border-y border-gray-300 mt-15 py-10 text-gray-500">
            <p>
              Guests will be charged a prepayment of 100% of the total price at
              any time. you can cancel free of charge until 7 days before
              arrival. You will be charged the total price if you cancel in the
              7 days before arrival. If you don’t show up, you will be charged
              the total price. the guest can modify the reservation free of
              charge until 7 days before arrival. The guest can modify the
              reservation for a fee of 50% of the total price in the 7 days
              before arrival. The guest can modify the reservation for a fee of
              50% of the total price if they don’t show up. The guest can modify
              the reservation for a fee of 50% of the total price if they don’t
              show up.
            </p>
          </div>

          {/* Hosted by */}
          <div className="flex flex-col text-start gap-4 mt-15">
            <div className="flex gap-4">
              <img
                src={room.hotel.owner.image}
                alt=""
                className="h-14 w-14 object-cover rounded-full"
              />
              <div>
                <p className="text-lg md:text-xl">
                  Hosted by {room.hotel.name}
                </p>
                <div className="flex items-center mt-1">
                  <StarRating />
                  <p className="ml-2">200+ reviews</p>
                </div>
              </div>
            </div>
            <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
              Contact Now
            </button>
          </div>
        </Reveal>
      </AnimatedPage>
    )
  );
};

export default RoomDetails;
