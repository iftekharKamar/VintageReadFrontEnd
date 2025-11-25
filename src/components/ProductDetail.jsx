import React from 'react';
import { ArrowLeft, ShoppingCart, Heart, Info } from 'lucide-react';
import ConditionBadge from './ConditionBadge';

export default function ProductDetail({ book, onBack, onAddToCart }) {
  if (!book) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-amber-800 mb-6 transition"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Browse
      </button>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="bg-[#f8f5f1] p-8 flex items-center justify-center border-r border-gray-100">
             <img 
                src={book.image} 
                alt={book.title} 
                className="max-h-[500px] shadow-2xl transform hover:rotate-1 transition-transform duration-500"
                onError={(e) => {
                    e.target.src = 'https://placehold.co/400x600?text=Vintage+Book';
                }}
              />
          </div>

          {/* Details Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
                {book.badges && book.badges.map(badge => (
                    <span key={badge} className="bg-amber-100 text-amber-800 text-xs px-2 py-1 font-bold uppercase tracking-wider rounded">
                        {badge}
                    </span>
                ))}
                <ConditionBadge condition={book.condition} />
            </div>

            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-6">by {book.author}</p>

            <div className="flex items-center space-x-4 mb-8">
                <div className="text-3xl font-bold text-amber-800">${book.price.toFixed(2)}</div>
                <div className="text-sm text-gray-500 flex items-center">
                    <Info className="h-4 w-4 mr-1" />
                    + $3.99 Shipping
                </div>
            </div>

            <div className="prose text-gray-600 mb-8">
                <p>{book.description}</p>
                <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center"><span className="font-semibold w-24">Published:</span> {book.year}</li>
                    <li className="flex items-center"><span className="font-semibold w-24">Genre:</span> {book.genre}</li>
                    <li className="flex items-center"><span className="font-semibold w-24">Stock:</span> {book.stock}</li>
                </ul>
            </div>

            <div className="flex space-x-4">
                <button 
                    onClick={() => onAddToCart(book)}
                    className="flex-1 bg-amber-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-900 transition flex items-center justify-center shadow-md"
                >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                </button>
                <button className="p-4 rounded-lg border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 transition">
                    <Heart className="h-6 w-6" />
                </button>
            </div>
            <p className="mt-4 text-xs text-center text-gray-400">
                100% Satisfaction Guarantee. Returns accepted within 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}