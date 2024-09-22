import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu"; // Assuming these are custom components
import logo from "../../assets/logo.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-10 bg-gray-900 bg-opacity-90 shadow-lg backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <span className="text-xl font-bold mr-2">Fitguysweb</span> */}
            <div className="flex-shrink-0 pt-5">
              <img
                src={logo}
                alt="Fitness Logo"
                width={90}
                height={80}
                className="rounded-full"
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
                        href={`#${item.toLowerCase()}`}
                        className="text-large font-medium text-gray-300 hover:bg-white hover:text-gray-900 px-8 py-2 rounded-md transition duration-300"
                      >
                        {item}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden md:block">
            <Button className="bg-gray-900 bg-opacity-90 hover:bg-white text-gray-300 hover:text-gray-900 border border-gray-600 hover:border-gray-800 transition duration-300">
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
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
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
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:bg-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Button className="w-full bg-gray-900 bg-opacity-90 hover:bg-white text-gray-300 hover:text-gray-900 border border-gray-600 hover:border-gray-800 transition duration-300">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
