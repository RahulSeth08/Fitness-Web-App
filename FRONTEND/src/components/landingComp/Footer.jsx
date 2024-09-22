import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
        {/* Company Description */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Fitguysweb</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Transform Your Body, Transform Your Life. Join us and achieve your health goals through our expertly curated workouts and programs.
          </p>
        </div>

        {/* Workouts Section */}
        <div className="flex flex-col">
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                BMI
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                Nutrition
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Programs Section */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Programs</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                Create Workout
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                Nutrition Plans
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                Customised Workout
              </a>
            </li>
          </ul>
        </div>

        {/* Healthy Living Section */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Healthy Living</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                Health
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                Fitness
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                Nutrition
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lavender transition-colors duration-300">
                Healthy Meals
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section with Icons */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+1234567890" className="hover:text-lavender transition-colors duration-300">
                +1 234 567 890
              </a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:info@fitguysweb.com" className="hover:text-lavender transition-colors duration-300">
                info@fitguysweb.com
              </a>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>
                123 Fitness St, Gym City, Pentagon, Washington DC, Pakistan
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="container mx-auto text-center text-sm text-gray-500">
          &copy; 2024 Fitguysweb. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
