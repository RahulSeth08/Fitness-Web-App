import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import logo from "../../assets/logo.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  const toLogIn = () => {
    navigate("/auth/signin");
  };

  const toBlog = () => {
    navigate("/blog"); // Navigate to the Blog page
  };

  const toPodcasts = () => {
    navigate("/podcasts"); // Navigate to the Podcasts page
  };

  return (
    <nav className="fixed w-full z-10 bg-gray-900 bg-opacity-90 shadow-lg backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 pt-5">
              <img
                src={logo}
                alt="Fitness Logo"
                width={90}
                height={80}
                className="rounded-full cursor-pointer"
                onClick={() => {
                  scrollToSection("hero".toLowerCase());
                }}
              />
            </div>
          </div>
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {["About", "Services", "BMI", "Nutrition", "Contact"].map(
                  (item) => (
                    <NavigationMenuItem key={item}>
                      <NavigationMenuLink
                        onClick={() => {
                          scrollToSection(item.toLowerCase());
                          setIsMenuOpen(false);
                        }}
                        className="text-large font-medium text-gray-300 hover:bg-white hover:text-gray-900 px-5 py-2 rounded-md transition duration-300 cursor-pointer"
                      >
                        {item}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    onClick={toBlog} // Link to Blog
                    className="text-large font-medium text-gray-300 hover:bg-white hover:text-gray-900 px-5 py-2 rounded-md transition duration-300 cursor-pointer"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    onClick={toPodcasts} // Link to Podcasts
                    className="text-large font-medium text-gray-300 hover:bg-white hover:text-gray-900 px-5 py-2 rounded-md transition duration-300 cursor-pointer"
                  >
                    Podcasts
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden md:block">
            <Button
              className="bg-gray-900 bg-opacity-90 hover:bg-white text-gray-300 hover:text-gray-900 border border-gray-600 hover:border-gray-800 transition duration-300"
              onClick={toLogIn}
            >
              Join Now
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 bg-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["About", "Services", "BMI", "Nutrition", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-300 hover:bg-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                >
                  {item}
                </a>
              )
            )}
            <a
              onClick={toBlog} // Link to Blog
              className="text-gray-300 hover:bg-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Blog
            </a>
            <a
              onClick={toPodcasts} // Link to Podcasts
              className="text-gray-300 hover:bg-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Podcasts
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Button
              className="w-full bg-gray-900 bg-opacity-90 hover:bg-white text-gray-300 hover:text-gray-900 border border-gray-600 hover:border-gray-800 transition duration-300"
              onClick={toLogIn}
            >
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
