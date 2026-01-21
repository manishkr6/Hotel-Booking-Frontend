import React, { useEffect, useState } from "react";
import { roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

import AnimatedPage from "../components/AnimatedPage";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");
      try {
        if (token) {
          const res = await fetch("http://localhost:5000/api/bookings", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok) {
            throw new Error("Failed to fetch bookings");
          }
          const data = await res.json();
          setBookings(data || []);
        } else {
          // fallback to mock bookings stored locally
          const mock = JSON.parse(localStorage.getItem("mockBookings") || "[]");
          setBookings(mock);
        }
      } catch (err) {
        console.error(err);
        const mock = JSON.parse(localStorage.getItem("mockBookings") || "[]");
        if (mock.length) {
          setBookings(mock);
        } else {
          setError(
            "Could not retrieve bookings. If you are in dev, enable mock bookings or start backend."
          );
        }
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [navigate]);

  return (
    <AnimatedPage className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
      <h1 className="text-3xl font-playfair mb-6">My Bookings</h1>

      {loading && <p>Loading your bookings...</p>}
      {error && <p className="text-rose-500">{error}</p>}

      {!loading && bookings.length === 0 && <p>No bookings found.</p>}

      <div className="space-y-4">
        {bookings.map((b) => {
          const room = roomsDummyData.find((r) => r._id === b.roomId) || {};
          return (
            <div
              key={b.bookingId || b.id || `${b.roomId}-${b.checkIn}`}
              className="bg-white rounded-xl p-4 shadow-md"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">
                    {room.hotel?.name || "Hotel"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {b.checkIn} → {b.checkOut} ({b.nights} nights)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="font-medium">
                    ₹{(b.totalPrice || 0).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedPage>
  );
};

export default MyBookings;
