import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ConditionBadge from './ConditionBadge';

export default function BookCard({ book, onClick, onAddToCart }) {
  return (
    <div 
      className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer flex flex-col"
      onClick={() => onClick(book)}
    >
      {/* Book Cover Area */}
      <div className="aspect-[2/3] bg-[#f0eee9] relative overflow-hidden flex items-center justify-center p-4">
        <img 
          src={book.image} 
          alt={book.title} 
          className="h-full object-contain shadow-md transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
              e.target.src = 'https://placehold.co/400x600?text=Vintage+Book';
          }}
        />
        {book.badges && book.badges.includes("First Edition") && (
           <span className="absolute top-2 left-2 bg-amber-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded">
             First Edition
           </span>
        )}
      </div>

      {/* Book Info */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-2">
            <ConditionBadge condition={book.condition} />
            <span className="text-xs text-gray-500 ml-2">{book.year}</span>
        </div>
        <h3 className="font-serif font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-amber-700 transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{book.author}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${book.price.toFixed(2)}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent opening the details page when clicking 'Add to Cart'
              onAddToCart(book);
            }}
            className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 text-gray-600 hover:text-amber-800 transition"
            title="Add to Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}