"use client";
import hero from "../../assets/hero.jpg";
import ShimmerButton from "../magicui/shimmer-button";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center pt-16 backdrop-blur-lg"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Fitness background"
          loading="lazy"
          className="w-full h-full object-cover opacity-40" // Slightly reduced opacity for better contrast
        />
      </div>

      {/* Hero Text and Button */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4 leading-tight tracking-wide drop-shadow-md">
          Transform Your Body, Transform Your Life
        </h1>
        <p className="text-xl mb-8 leading-relaxed tracking-wide drop-shadow-md">
          Join us and achieve your health goals
        </p>

        {/* Enhanced Button */}
        <div className="flex justify-center">
          <ShimmerButton
            shimmerColor="#ffffff"
            shimmerSize="0.05em"
            shimmerDuration="3s"
            borderRadius="100px"
            background="linear-gradient(to right, #f39c12, #e67e22)" // Added gradient for a modern look
            className="text-white hover:scale-105 transition-transform ease-in-out duration-300"
          >
            Start Your Journey
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};