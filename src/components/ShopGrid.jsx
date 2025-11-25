import React from 'react';
import { BookOpen } from 'lucide-react';
import BookCard from './BookCard';


export default function ShopGrid({ onBookClick, onAddToCart, books }) {
  return (
    <div id="shop-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="flex justify-between items-end mb-6 border-b border-gray-200 pb-2">
        <h2 className="text-2xl font-serif font-bold text-gray-800">Featured Novels</h2>
        <span className="text-sm text-gray-500">{books.length} results</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {books.map((book) => (
          <BookCard 
            key={book._id} 
            book={book} 
            onClick={onBookClick} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}