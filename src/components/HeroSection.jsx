import React from 'react';
import { BookOpen } from 'lucide-react';

export default function HeroSection({ onBrowseClick }) {
  return (
    <div className="bg-[#f4f1ea] border-b border-[#e5e0d8] py-16 px-4 sm:px-6 lg:px-8 mb-8 relative overflow-hidden">
      {/* Decorative background element: A faint large book icon */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 pointer-events-none">
        <BookOpen className="h-96 w-96 text-amber-900" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
          Stories That Have <br /> <span className="text-amber-700">Stood the Test of Time</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 font-light">
          Discover a curated collection of first editions, vintage paperbacks, and well-loved classics waiting for a new shelf.
        </p>
        <button
          onClick={onBrowseClick}
          className="bg-amber-800 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-900 transition shadow-lg"
        >
          Browse Collection
        </button>
      </div>
    </div>
  );
}