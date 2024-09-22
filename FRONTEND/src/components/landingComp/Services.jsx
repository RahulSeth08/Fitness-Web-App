import Marquee from "../magicui/marquee";
import MagicCard from "../magicui/magic-card";
import yoga from "../../assets/yoga.png";
import nutrition from "../../assets/nutrition.png";
import dumbell from "../../assets/dumbell2.png";
import fitness from "../../assets/fitness.png";

export function Services() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8 text-center">SERVICES</h1>
      <Marquee pauseOnHover repeat={2}>
        <div className="flex space-x-6">
          {/* MagicCard 1 - Personalized Workout Plan */}
          <MagicCard className="bg-gray-900 bg-opacity-90 p-6 shadow-lg border border-gray-800 w-80 h-72 flex flex-col items-center text-center">
            <img src={dumbell} alt="Personalized Workout" className="h-16 w-16 mb-4 mx-auto" />
            <p className="font-semibold text-white text-xl mb-2">Personalized Workout Plan</p>
            <p className="text-gray-200 text-base font-light">
              Custom-tailored workout plans designed to meet your unique fitness goals, helping you achieve optimal results at your own pace.
            </p>
          </MagicCard>

          {/* MagicCard 2 - Healthy Meals */}
          <MagicCard className="bg-gray-900 bg-opacity-90 p-6 shadow-lg border border-gray-800 w-80 h-72 flex flex-col items-center text-center">
            <img src={nutrition} alt="Healthy Meals" className="h-16 w-16 mb-4 mx-auto" />
            <p className="font-semibold text-white text-xl mb-2">Healthy Meals</p>
            <p className="text-gray-200 text-base font-light">
              Nourish your body with delicious, healthy meals designed to complement your fitness journey and promote overall well-being.
            </p>
          </MagicCard>

          {/* MagicCard 3 - Fitness */}
          <MagicCard className="bg-gray-900 bg-opacity-90 p-6 shadow-lg border border-gray-800 w-80 h-72 flex flex-col items-center text-center">
            <img src={fitness} alt="Fitness" className="h-16 w-16 mb-4 mx-auto" />
            <p className="font-semibold text-white text-xl mb-2">Fitness</p>
            <p className="text-gray-200 text-base font-light">
              Engage in a full-body fitness program that challenges your muscles and increases your endurance. Become the best version of yourself.
            </p>
          </MagicCard>

          {/* MagicCard 4 - Yoga & Meditation */}
          <MagicCard className="bg-gray-900 bg-opacity-90 p-6 shadow-lg border border-gray-800 w-80 h-72 flex flex-col items-center text-center">
            <img src={yoga} alt="Yoga & Meditation" className="h-16 w-16 mb-4 mx-auto" />
            <p className="font-semibold text-white text-xl mb-2">Yoga & Meditation</p>
            <p className="text-gray-200 text-base font-light">
              Unwind with yoga and meditation practices designed to improve flexibility, reduce stress, and enhance mental clarity.
            </p>
          </MagicCard>
        </div>
      </Marquee>
    </div>
  );
}
