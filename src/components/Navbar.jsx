import React, { useState } from "react";
import { ShoppingCart, Search, User, BookOpen, Menu, X } from "lucide-react";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../features/authSlice.js";

export default function Navbar({ cartCount, onNavClick, onOpenLogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
  dispatch(logout());
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

  return (
    <nav className="sticky top-0 z-50 bg-[#fdfbf7] border-b border-[#e5e0d8] shadow-sm font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* 1. Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => onNavClick("home")}
          >
            <BookOpen className="h-8 w-8 text-amber-800 mr-2" />
            <span className="font-bold text-2xl text-gray-900 tracking-tight">
              Vintage<span className="text-amber-700">Reads</span>
            </span>
          </div>

          {/* 2. Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <input
              type="text"
              placeholder="Search title, author, or year..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-[#f4f1ea] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>

          {/* 3. Action Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <div>
              <span>Hello, {user.fullName}</span> 
              <button onClick={handleLogout} className="mx-2">Logout</button>
              </div>
            ) : (
              <button onClick={onOpenLogin}>Login</button>
            )}

            <button
              onClick={() => onNavClick("cart")}
              className="relative text-gray-600 hover:text-amber-800 transition"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fdfbf7] border-t border-gray-200 p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-4 py-2 mb-4 border border-gray-300 rounded-lg bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => {
                onNavClick("home");
                setIsMenuOpen(false);
              }}
              className="font-medium text-gray-800 text-left"
            >
              Browse Books
            </button>
            <button
              onClick={() => {
                onNavClick("cart");
                setIsMenuOpen(false);
              }}
              className="font-medium text-gray-800 flex justify-between"
            >
              Cart
              <span className="bg-amber-100 text-amber-800 px-2 rounded-full text-xs py-1">
                {cartCount} items
              </span>
            </button>
            <button
              onClick={() => {
                onOpenLogin();
                setIsMenuOpen(false);
              }}
              className="font-medium text-amber-700 text-left"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
