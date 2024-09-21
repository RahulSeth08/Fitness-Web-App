import Marquee from "../magicui/marquee";
import MagicCard from "../magicui/magic-card";
import { User } from "lucide-react";
import logo from "../../assets/logo.png";

export function Services() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Infinite Scrolling Testimonials
      </h1>
      <Marquee pauseOnHover repeat={2}>
        <div className="flex space-x-4">
          <MagicCard
            className="bg-gray-900 bg-opacity-90 p-4 shadow-lg border border-gray-800"
            size="h-48"
          >
            <img
              src={logo}
              alt="Profile"
              className="h-10 w-10 rounded-full mr-2"
            />
            <div className="flex-grow">
              <p className="font-semibold text-white flex items-center">
                <User className="h-4 w-4 mr-1" /> Jack{" "}
                <span className="text-gray-300">@jack</span>
              </p>
              <p className="text-gray-200">
                I've never seen anything like this before. It's amazing.
              </p>
            </div>
          </MagicCard>
          <MagicCard
            className="bg-gray-900 bg-opacity-90 p-4 shadow-lg border border-gray-800"
            size="h-48"
          >
            <img
              src={logo}
              alt="Profile"
              className="h-10 w-10 rounded-full mr-2"
            />
            <div className="flex-grow">
              <p className="font-semibold text-white flex items-center">
                <User className="h-4 w-4 mr-1" /> Jill{" "}
                <span className="text-gray-300">@jill</span>
              </p>
              <p className="text-gray-200">
                I don't know what to say. I'm speechless. This is amazing.
              </p>
            </div>
          </MagicCard>
          <MagicCard
            className="bg-gray-900 bg-opacity-90 p-4 shadow-lg border border-gray-800"
            size="h-48"
          >
            <img
              src={logo}
              alt="Profile"
              className="h-10 w-10 rounded-full mr-2"
            />
            <div className="flex-grow">
              <p className="font-semibold text-white flex items-center">
                <User className="h-4 w-4 mr-1" /> John{" "}
                <span className="text-gray-300">@john</span>
              </p>
              <p className="text-gray-200">
                I'm at a loss for words. This is amazing. I love it.
              </p>
            </div>
          </MagicCard>
        </div>
      </Marquee>
    </div>
  );
}
