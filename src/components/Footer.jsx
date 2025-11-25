import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2c2420] text-[#e5e0d8] py-12 mt-12 border-t border-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div>
                <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-amber-500 mr-2" />
                    <span className="font-bold text-xl text-white">VintageReads</span>
                </div>
                <p className="text-sm text-gray-400">Preserving history, one page at a time. We specialize in rare, vintage, and second-hand classic literature.</p>
            </div>
            
            {/* Links Column */}
            <div>
                <h4 className="font-bold text-white mb-4">Shop</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-amber-500">New Arrivals</a></li>
                    <li><a href="#" className="hover:text-amber-500">Best Sellers</a></li>
                    <li><a href="#" className="hover:text-amber-500">First Editions</a></li>
                </ul>
            </div>
            
            {/* Support Column */}
            <div>
                <h4 className="font-bold text-white mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-amber-500">Shipping & Returns</a></li>
                    <li><a href="#" className="hover:text-amber-500">Book Grading Guide</a></li>
                    <li><a href="#" className="hover:text-amber-500">Contact Us</a></li>
                </ul>
            </div>
            
            {/* Newsletter Column */}
            <div>
                <h4 className="font-bold text-white mb-4">Newsletter</h4>
                <p className="text-sm text-gray-400 mb-4">Get updates on rare finds.</p>
                <div className="flex">
                    <input type="email" placeholder="Email" className="bg-[#3e3530] border-none rounded-l-md px-3 py-2 text-sm text-white focus:ring-1 focus:ring-amber-500 w-full" />
                    <button className="bg-amber-700 text-white px-3 py-2 rounded-r-md hover:bg-amber-600">Sub</button>
                </div>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#3e3530] text-center text-xs text-gray-500">
            &copy; 2024 Vintage Reads. All rights reserved.
        </div>
    </footer>
  );
}