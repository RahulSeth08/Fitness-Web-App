

import rockfitness from "../../assets/rockfitness.jpg"; 
import { MapPin } from "lucide-react";

export function About() {
  return (
    <section className="bg-[#0f1729] text-white">
      <div className="relative h-64 md:h-96">
        <img
          src={rockfitness}
          alt="Fitness Inspiration"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            ABOUT US
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 relative">
            <h3 className="text-4xl font-bold mb-4 relative z-10 text-white">
              About Us - Fit Guys Fitness
              <span className="block h-1 bg-orange-500 mt-2 w-[calc(100%-1rem)]"></span>
            </h3>
            <div className="absolute inset-0 bg-[#1a2332] opacity-75 rounded-lg shadow-lg z-0"></div>
            <p className="mb-4 relative z-10">
              Welcome to Fit Guys, your go-to destination for all things fitness. 
              Whether you're just starting your fitness journey or looking to elevate your current routine, 
              our platform provides you with all the tools, guidance, and community support you need.
            </p>
            <p className="mb-4 relative z-10">
              Our mission is simple: to empower individuals to lead healthier lives through a comprehensive 
              digital experience tailored to meet their unique fitness goals.
            </p>
            
            <h4 className="text-xl font-semibold mb-2 relative z-10">
              What We Offer:
            </h4>
            <ul className="list-disc list-inside mb-4 relative z-10">
              <li>Extensive Exercise Library: Explore a diverse range of workouts tailored to different fitness levels, from strength training to yoga and everything in between.</li>
              <li>Nutrition Guidance: Access personalized meal plans and nutritional tips to complement your fitness routine and promote overall well-being.</li>
              <li>Expert Articles & Tips: Stay informed with articles written by fitness professionals covering workout strategies, wellness advice, and lifestyle tips.</li>
              <li>Community Support: Join our vibrant online community, connect with like-minded individuals, share your progress, and find motivation.</li>
            </ul>

            <h4 className="text-xl font-semibold mb-2 relative z-10">
              Availability:
            </h4>
            <ul className="list-disc list-inside mb-4 relative z-10">
              <li>24/7 Online Access: Fit Guys is available to you anytime, anywhere.</li>
            </ul>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1a2332] p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Join Us Today</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 bg-[#0f1729] rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 bg-[#0f1729] rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 bg-[#0f1729] rounded"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors"
                >
                  Get Started
                </button>
              </form>
            </div>

            <div className="bg-[#1a2332] p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="mr-2" /> Find Us
              </h4>
              <img
                src="/placeholder.svg"
                alt="Map"
                className="w-full rounded-lg mb-4"
              />
              <p>Online Fitness Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
