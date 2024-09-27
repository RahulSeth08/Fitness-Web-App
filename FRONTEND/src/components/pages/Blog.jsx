import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import articles from '../../assets/articles.json'; // Adjust the path based on where your articles.json file is located

export function Blog() {
  const categories = ['Recipes', 'Nutrition', 'Weight Loss', 'Fitness', 'Inspiration', 'Essentials', 'Video'];

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <header className="bg-indigo-700 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Fit Guys Blog</h1>
        </div>
      </header>

      <nav className="bg-white py-2 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <ul className="flex space-x-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <li key={category}>
                <a href={`#${category.toLowerCase()}`} className="text-sm hover:text-orange-500 whitespace-nowrap">
                  {category}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="bg-indigo-800 rounded-lg p-8 mb-12 flex flex-col md:flex-row items-center justify-between text-white">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Fitness starts with what you know.</h2>
            <p className="text-purple-100 mb-4">Sign up for our personalized newsletter and stay informed.</p>
          </div>
          <div className="md:w-1/3 flex">
            <Input type="email" placeholder="Your Email" className="mr-2 bg-white text-gray-800 border-none" />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Sign Up
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-purple-900">Trending Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <img src={article.image} alt={article.name} className="w-full" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-gray-800">{article.name}</h3>
                  <p className="text-gray-600 mb-2">{article.description}</p> {/* Add description here if needed */}
                  <a href={article.link} className="text-orange-500 hover:text-orange-600 flex items-center text-sm">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
