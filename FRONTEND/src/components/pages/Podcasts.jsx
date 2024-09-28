import { ArrowRight } from "lucide-react"; 
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import podcasts from "../../assets/podcasts.json";

export function Podcasts() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
  <header className="bg-gradient-to-r from-lime-500 via-teal-400 to-navy-600 text-white py-6 shadow-lg">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center tracking-wide drop-shadow-lg">
        <span className="bg-gradient-to-r from-orange-500 to-lime-400 text-transparent bg-clip-text">
          Fit Guys Podcasts
        </span>
      </h1>
    </div>
  </header>


      <nav className="bg-white py-3 shadow sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <ul className="flex space-x-6 overflow-x-auto pb-2">
            {/* Add categories if needed */}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Podcasts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold mb-2 text-gray-900 text-lg">
                    {podcast.title}
                  </h3>
                  <p
                    className="text-gray-500 mb-4 flex-grow overflow-hidden"
                    style={{ maxHeight: "80px" }}
                  >
                    {podcast.description}
                  </p>
                  <div className="mt-auto">
                    <a
                      href={podcast.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-600 flex items-center text-sm"
                    >
                      Listen Now <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
