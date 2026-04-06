import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-950 via-gray-900 to-black text-white px-4 relative overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-pink-600 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 text-center max-w-xl shadow-2xl animate-fadeIn">

        {/* Icon (bounce animation) */}
        <div className="flex justify-center mb-4 text-pink-500 text-5xl animate-bounce">
          <FaExclamationTriangle />
        </div>

        {/* Error Code */}
        <h1 className="text-8xl font-extrabold bg-linear-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Lost in Space 🚀
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400 leading-relaxed">
          The page you're looking for doesn’t exist or has been moved.
          Maybe it vanished into the void 😅
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition hover:scale-110"
          >
            ⬅ Go Back
          </button>

          <a
            href="/"
            className="px-6 py-2 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 hover:opacity-90 transition hover:scale-110 shadow-lg"
          >
            🏠 Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;