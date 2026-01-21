import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setError("");
    setLoading(true);

    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await res.json();
      if (!res.ok) throw new Error(resJson.message || "Something went wrong");

      localStorage.setItem("token", resJson.token);
      localStorage.setItem("user", JSON.stringify(resJson.user));

      reset();
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen flex bg-[#0b0b14] text-white">
        {/* LEFT SIDE (IMAGE + BRANDING) */}
        <div
          className="hidden md:flex w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
          }}
        >
          <div className="absolute inset-0 bg-black/65"></div>

          <div className="relative z-10 p-10 flex flex-col justify-between">
            <h1 className="text-3xl font-bold tracking-widest">LODGE<span className="text-purple-400">LUX</span></h1>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Where Comfort Meets Luxury
              </h2>
              <p className="text-white/80 max-w-sm leading-relaxed">
                Discover premium stays, elegant rooms, and unforgettable
                hospitality designed just for you.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (3D FORM) */}
        <div className="w-full md:w-1/2 flex items-center justify-center perspective-1000">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="float-card w-full max-w-md p-8 rounded-2xl
            bg-white/5 border border-white/10 backdrop-blur-xl
            transform-gpu transition-all duration-500
            hover:rotate-x-6 hover:-rotate-y-6 hover:scale-[1.03]
            shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
          >
            <h2 className="text-2xl font-bold mb-1">
              {isLogin ? "Welcome Back" : "Create an Account"}
            </h2>
            <p className="text-sm text-white/60 mb-6">
              {isLogin
                ? "Login to manage your bookings"
                : "Join LodgeLux & book your luxury stay"}
            </p>

            {error && (
              <p className="text-red-400 text-sm mb-4">{error}</p>
            )}

            {!isLogin && (
              <div className="mb-4">
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Full Name"
                  className="input-glass w-full"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
            )}

            <div className="mb-4">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email",
                  },
                })}
                type="email"
                placeholder="Email Address"
                className="input-glass w-full"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6 relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-glass w-full pr-10"
              />

              <span
                className="absolute right-3 top-3 cursor-pointer text-white/70"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>

              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-purple-600
              hover:bg-purple-700 transition font-semibold
              transform hover:-translate-y-1 hover:shadow-2xl active:translate-y-0"
            >
              {loading
                ? "Please wait..."
                : isLogin
                ? "Login"
                : "Create Account"}
            </button>

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full mt-4 text-sm text-purple-400 hover:underline"
            >
              {isLogin
                ? "Don’t have an account? Sign up"
                : "Already have an account? Login"}
            </button>
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Login;
